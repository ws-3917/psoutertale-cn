import re, polib, os, sys, datetime, zhconv, string, random
from termcolor import colored
from options import *
from concurrent.futures import ProcessPoolExecutor, as_completed
import shutil
from concurrent.futures import ThreadPoolExecutor
sys.path.append(os.getcwd())
s2c_pattern = re.compile("|".join(map(re.escape, S2T_DICT.keys())))
name_pattern = re.compile(r'(?<![a-zA-Z/-])(?:{})(?![a-zA-Z/-])'.format(CN_NAME_DICT), re.IGNORECASE)
replace_dict_tw = dict()
quote_type = 1
# 控制台输出的格式化功能
def plain_text(text, _):
    return text

# 执行 Bash 命令的辅助函数
def bashcmd(cmd):
    os.system(f"bash -c \"{cmd}\"")

# 生成强密码
def generate_strong_password(length):
    # 定义字符集，排除容易混淆的字符和特殊shell字符
    lowercase = 'abcdefghjkmnpqrstuvwxyz'  # 排除 i, l, o
    uppercase = 'ABCDEFGHJKLMNPQRSTUVWXYZ'  # 排除 I, O
    digits = '23456789'  # 排除 0, 1
    symbols = '+@#$%^*='  # 仅使用一些安全的特殊字符
    
    # 合并所有字符集
    all_chars = lowercase + uppercase + digits + symbols
    
    # 确保密码包含至少一个小写字母、一个大写字母、一个数字和一个符号
    password = [
        random.choice(lowercase),
        random.choice(uppercase),
        random.choice(digits),
        random.choice(symbols)
    ]
    
    # 填充剩余的字符
    for _ in range(length - 4):
        password.append(random.choice(all_chars))
    
    # 打乱密码顺序
    random.shuffle(password)
    
    return ''.join(password)

# 通用的字符串解析函数，可处理字符串定界符与内容
def parse_strings(text, on_match, on_non_match=None):
    """
    解析文本中的字符串并应用指定的回调函数。

    参数:
    - text: 需要解析的完整文本
    - on_match: 用于处理找到的字符串的回调函数
    - on_non_match: 用于处理非字符串内容的可选回调函数
    """
    lines = text.split('\n')  # 将文本按行分割
    for line in lines:
        line += '\n'
        string_delimiter = None  # 当前正在解析的字符串定界符
        escape_next = False      # 是否需要转义下一个字符
        brace_depth = 0          # 反引号包裹的花括号深度
        current_string = list()      # 当前正在解析的字符串
        i = 0                    # 遍历文本的索引
        if NOTRANS_COMMENT in line:
            if on_non_match:
                on_non_match(line + '\n')  # 直接处理整行并跳过后续处理
            continue  # 跳过控制符号标记
        while i < len(line):
            char = line[i]       # 当前字符
            if escape_next:      # 如果上一个字符是转义符
                current_string.append(char)
                escape_next = False
            elif char == '\\':   # 如果当前字符是转义符
                escape_next = True
                current_string.append(char)
            elif char in "`'\"":  # 当前字符是字符串定界符
                if not string_delimiter:  # 尚未进入字符串状态
                    string_delimiter = char
                    current_string = list()
                    if on_non_match:
                        on_non_match(''.join(current_string))
                elif char == string_delimiter:  # 字符串结束
                    if char == '`' and brace_depth > 0:  # 特殊情况：反引号内的花括号尚未闭合
                        current_string.append(char)
                    else:  # 正常的字符串结束情况
                        final_string = ''.join(current_string).replace(r'\{}'.format(string_delimiter), string_delimiter)
                        global quote_type
                        if char == "'":
                            quote_type = 1
                        elif char == '"':
                            quote_type = 2
                        elif char == '`':
                            quote_type = 3
                        on_match(string_delimiter, final_string)
                        string_delimiter = None
                        current_string = list()
                else:
                    current_string.append(char)
            else:  # 处理定界符之外的字符
                if string_delimiter:
                    if string_delimiter == '`':
                        if char == '{':
                            brace_depth += 1
                        elif char == '}':
                            brace_depth -= 1
                    current_string.append(char)
                else:
                    if on_non_match:
                        on_non_match(char)

            i += 1

    if current_string and string_delimiter:  # 处理未闭合的字符串
        final_string = ''.join(current_string)
        on_match(string_delimiter, final_string)

# 从文本中提取唯一字符串
def extract_strings(text):
    """
    提取文本中的唯一字符串。

    参数:
    - text: 需要解析的文本

    返回:
    - 唯一字符串列表
    """
    unique_strings = list()  # 保存唯一字符串的列表
    seen = set()         # 用于避免重复的集合

    def handle_match(_, final_string):
        if final_string not in seen:
            unique_strings.append(final_string)
            seen.add(final_string)

    parse_strings(text, handle_match)
    return unique_strings

# 使用翻译字典替换文本中的字符串
def replace_strings(text, translation_dict):
    """
    使用翻译字典替换文本中的字符串，保留转义字符。

    参数:
    - text: 需要替换的文本
    - translation_dict: 翻译字典，键是原字符串，值是目标字符串

    返回:
    - 完成翻译替换的文本
    """
    result = list()               # 保存最终结果的列表
    non_quoted_chars = list()     # 非字符串内容字符

    def handle_match(delimiter, final_string):
        # 添加之前未处理的非字符串字符
        if non_quoted_chars:
            result.extend(non_quoted_chars)
            non_quoted_chars.clear()
        temp_string = final_string.replace("\\n", "\n")
        global quote_type
        if temp_string in translation_dict and translation_dict[temp_string]:
            translated_string = translation_dict[temp_string].replace("\n", "\\n")
            # 检查翻译字符串中是否包含 `${`
            if '${' in translated_string:
                result.append(f'`{translated_string}`')
            else:
                # 转义双引号以防止注入
                translated_string = translated_string.replace('"', r'\"')
                if quote_type == 1 or "[ADD]" in translated_string:
                    result.append(f"'{translated_string.replace("'", r"\'")}'")
                else:
                    result.append(f'"{translated_string}"')
        else:
            if '${' in final_string:
                result.append(f'`{final_string}`')
            else:
                # 转义双引号以防止注入，但保留其他转义字符
                final_string = final_string.replace('"', r'\"')
                if quote_type == 1 or "[ADD]" in final_string:
                    result.append(f"'{final_string.replace("'", r"\'")}'")
                else:
                    result.append(f'"{final_string}"')

    def handle_non_match(char):
        non_quoted_chars.append(char)

    parse_strings(text, handle_match, handle_non_match)

    # 追加未处理的非字符串字符
    if non_quoted_chars:
        result.extend(non_quoted_chars)

    return ''.join(result)

# 移除文本中的注释
def remove_comments(text):
    """
    移除文本中的注释。

    参数:
    - text: 含注释的文本

    返回:
    - 无注释的文本
    """
    # 移除多行注释
    multi_line_comment_pattern = r'/\*[\s\S]*?\*/'
    # 移除不符合特定标记的单行注释
    single_line_comment_pattern = rf'\/\/(?!{START_COMMENT}|{END_COMMENT}|{IGNORE_COMMENT}|{NOTRANS_COMMENT}).*'

    text = re.sub(multi_line_comment_pattern, '', text)
    text = re.sub(single_line_comment_pattern, '', text)

    return text

# 只返回 START-TRANSLATE 和 END-TRANSLATE 之间的内容
def split_text(text):
    """
    返回只包含 // START-TRANSLATE 和 // END-TRANSLATE 之间内容的文本。

    参数:
    - text: 包含所有文本的字符串

    返回:
    - START-TRANSLATE 和 END-TRANSLATE 之间的内容
    """
    content_pattern = rf"//{START_COMMENT}(.*?)//{END_COMMENT}"
    content_matches = re.findall(content_pattern, text, re.DOTALL)

    finaltext = ''.join(content_matches)
    return finaltext

# 删除 START-TRANSLATE 和 END-TRANSLATE 之间的内容，但保留标记。
def remove_translate_content(text):
    """
    删除 // START-TRANSLATE 和 // END-TRANSLATE 之间的内容，但保留标记。

    参数:
    - text: 包含所有文本的字符串

    返回:
    - 删除中间内容后的文本，保留标记
    """
    pattern = rf"(//{START_COMMENT})(.*?)(//{END_COMMENT})"
    modified_text = re.sub(pattern, rf"\1\n\3", text, flags=re.DOTALL)
    return modified_text

# 在 START-TRANSLATE 和 END-TRANSLATE 之间插入目标文本。
def insert_translate_content(text, insert_text):
    """
    在 // START-TRANSLATE 和 // END-TRANSLATE 之间插入目标文本。

    参数:
    - text: 包含所有文本的字符串
    - insert_text: 要插入到标记之间的文本

    返回:
    - 插入目标文本后的文本
    """
    insert_text = insert_text.replace('\\', '\\\\')
    pattern = rf"(//{START_COMMENT})(.*?)(//{END_COMMENT})"
    modified_text = re.sub(pattern, rf"\1\n{insert_text}\n\3", text, flags=re.DOTALL)
    return modified_text.replace('\\\\', '\\')


def replace_character_name(translation_dict, name_re_dict, s2t=False):
    """
    在 // START-TRANSLATE 和 // END-TRANSLATE 之间插入目标文本。

    参数:
    - translation_dict: 翻译字典
    - name_re_dict: 人名翻译替换字典
    - s2t: 是否需要转换繁体

    返回:
    - 翻译人名后的翻译字典
    """
    updated_dict = {}
    
    for key, value in translation_dict.items():
        if value:  # 如果翻译不为空
            updated_value = value
            for name, replacement in name_re_dict.items():
                # 创建正则模式/匹配不被字母包围的单词
                pattern = r'(?<![a-zA-Z/-]){}(?![a-zA-Z/-])'.format(re.escape(name))
                # 使用re.sub进行替换/忽略大小写
                updated_value = re.sub(pattern, replacement, updated_value, flags=re.IGNORECASE)
                if s2t:
                    updated_value = convert_s2t_text(updated_value)
            updated_dict[key] = updated_value
        else:
            updated_dict[key] = value  # 如果翻译为空/保持原样
    
    return updated_dict

# 将 TS 文件转换为 PO 文件
def ts2po(source_ts, dist, split=True, dttvl_pattern=False):
    """
    将 TS 文件转换为 PO 文件。

    参数:
    - source_ts: 输入的 TS 文件路径
    - dist: 输出的 PO 文件路径
    """
    # 读取 TS 文件内容
    with open(source_ts, "r", encoding="UTF-8") as ts_file:
        ts_content = ts_file.read()

    # 处理 TS 文件内容
    ts_content_no_comments = remove_comments(ts_content)
    if split:
        lines = split_text(ts_content_no_comments)
    else:
        lines = ts_content_no_comments
    strings = extract_strings(lines)

    # 创建 PO 文件对象
    po = polib.POFile()

    # 将提取的字符串添加到 PO 文件中
    for line in strings:
        line = line.replace('\\n', '\n')
        
        entry = polib.POEntry(
            msgid=line,
            msgstr=""
        )
        if not dttvl_pattern or (dttvl_pattern.search(entry.msgid) and entry.msgid):
            po.append(entry)

    # 保存 PO 文件
    po.save(dist)

def create_po(trans_dict : dict, dist: str):
    # 创建 PO 文件对象
    po = polib.POFile()

    # 将提取的字符串添加到 PO 文件中
    for line, value in trans_dict.items():
        line = line.replace('\\n', '\n')
        
        entry = polib.POEntry(
            msgid=line,
            msgstr=value
        )
        po.append(entry)
    po.save(dist)

# 简体转换繁体 - 仅字符
def convert_s2t_text(source_text : str):
    """
    将简体中文字符串转换为繁体中文。

    参数:
    - source_text: 输入的简体中文字符串

    返回:
    - 繁体中文字符串
    """
    # 0610 - 简体繁体词汇差异列表
    converted = zhconv.convert(source_text, 'zh-tw')
    return s2c_pattern.sub(lambda m: S2T_DICT[m.group(0)], converted)

# 生成繁体中文的替换对
for key, value in REPLACE_DICT.items():
    replace_dict_tw[convert_s2t_text(key)] = convert_s2t_text(value)

# 简体转换繁体 - 文件
def convert_s2t(source_path, target_path):
    """
    将简体文件转换为繁体文件。

    参数:
    - source_path: 输入的简体文件路径
    - target_path: 输出的繁体文件路径
    """
    with open(source_path, 'r', encoding='utf-8') as source_file:
        simplified_text = source_file.read()
    
    traditional_text = convert_s2t_text(simplified_text)
    
    with open(target_path, 'w', encoding='utf-8') as target_file:
        target_file.write(traditional_text)

# 翻译文件合并
def merge_po_files(new_template_path, old_translations_path, output_path):
    """
    将新的翻译模板和旧的翻译文件合并，并保存到指定的输出文件。

    参数:
    - new_template_path: 新的翻译模板文件路径
    - old_translations_path: 旧的翻译文件路径
    - output_path: 输出的合并后的 PO 文件路径
    """
    # 读取新的翻译模板文件
    new_template = polib.pofile(new_template_path)

    # 读取旧的翻译文件
    old_translations = polib.pofile(old_translations_path)

    # 创建一个新的 PO 文件来保存合并后的内容
    merged_po = polib.POFile()

    # 创建一个字典，用于快速查找旧的翻译
    old_translations_dict = {entry.msgid: entry.msgstr for entry in old_translations}

    # 遍历新的模板，将旧的翻译内容合并进去
    for entry in new_template:
        if entry.msgid in old_translations_dict:
            old_msgstr = old_translations_dict[entry.msgid]
            if (not old_msgstr or old_msgstr[-1] != "ゐ") and entry.msgstr:  # 如果旧翻译没有保护标记且新的模板有翻译
                merged_entry = polib.POEntry(
                    msgid=entry.msgid,
                    msgstr=convert_s2t_text(entry.msgstr)
                )
            elif old_msgstr and old_msgstr[-1] == "ゐ": # 如果旧翻译有保护标记，则只进行字形转换（避免缺字）
                merged_entry = polib.POEntry(
                    msgid=entry.msgid,
                    msgstr=convert_s2t_text(old_msgstr)
                )
            else:
                merged_entry = polib.POEntry(
                    msgid=entry.msgid,
                    msgstr=old_msgstr  # 保持旧翻译不变
                )
        else:
            merged_entry = polib.POEntry(
                msgid=entry.msgid,
                msgstr=''
            )
        merged_po.append(merged_entry)

    # 保存合并后的 PO 文件
    merged_po.save(output_path)

# 从 PO 文件加载翻译字典
def load_dict(source_po):
    """
    从 PO 文件加载翻译字典。

    参数:
    - source_po: 输入的 PO 文件路径
    - ignore_special_ids: 可选参数，默认为 False。如果设置为 True，则忽略含有下划线或只含有一个英文单词的 msgid。

    返回:
    - 翻译字典，键是 msgid，值是 msgstr
    """
    po_file = polib.pofile(source_po)
    translation_dict = dict()

    for entry in po_file:
        translation_dict[entry.msgid] = entry.msgstr

    return translation_dict

# 将翻译应用到 TS 文件
def po2ts(source_ts, translation_dict, dist, insert_content=True, lang="zh_CN"):
    """
    将 PO 文件中的翻译应用到 TS 文件。

    参数:
    - source_ts: 输入的 TS 文件路径
    - translation_dict: 翻译字典
    - dist: 输出的 TS 文件路径
    """
    with open(source_ts, "r", encoding="UTF-8") as file:
        ts_content = file.read()
    if insert_content:
        dist_content = replace_strings(
            split_text(remove_comments(ts_content)), 
            translation_dict
        )
        final_content = insert_translate_content(
            remove_translate_content(ts_content),
            dist_content
        )
    else:
        final_content = replace_strings(remove_comments(ts_content), translation_dict)
    # 替换2
    replace_dict = replace_dict_tw if lang == "zh_TW" else REPLACE_DICT
    for key, value in replace_dict.items():
        final_content = re.sub(key, value, final_content)
    
    with open(dist, "w", encoding="UTF-8") as file:
        file.write(final_content)

# 加载最新的资源文件

def task_loadassets():
    """
    执行更新资源的任务，包括复制必要文件等。
    """
    print(colored("--> 更新字体、贴图资源", "blue"))

    # 更新英文字体
    copy_fonts_and_assets()

    # 更新 build 和 package 配置文件
    shutil.copy(f"{TRANS_PATH}/assets/build.sh", f"{SRC_PATH}/build.sh")
    shutil.copy(f"{TRANS_PATH}/assets/package.json", f"{SRC_PATH}/package.json")

    # 并行处理每个语言的资源更新
    with ThreadPoolExecutor() as executor:
        executor.map(process_language_assets, LANG)

def copy_fonts_and_assets():
    """
    更新英文字体和资产文件。
    """
    # 更新英文字体到 TRANS_PATH/fonts
    fonts_src = f"{GMS_PATH}/dist/psot/"
    fonts_dest = f"{TRANS_PATH}/fonts/"
    copy_directory_contents(fonts_src, fonts_dest)

    # 更新英文字体到 SRC_PATH/languages/en_US/assets/fonts
    fonts_src_en = f"{GMS_PATH}/dist/psot/en_US/"
    fonts_dest_en = f"{SRC_PATH}/languages/en_US/assets/fonts"
    copy_directory_contents(fonts_src_en, fonts_dest_en)

def process_language_assets(lang):
    """
    处理单个语言的资源更新。
    """
    try:
        print(colored(f" -> 处理语言: {lang}", "yellow"))
        lang_assets_path = f"{SRC_PATH}/languages/{lang}/assets"
        # 删除旧的资产目录
        shutil.rmtree(lang_assets_path, ignore_errors=True)

        # 创建必要的目录
        os.makedirs(f"{SRC_PATH}/languages/{lang}/assets/fonts", exist_ok=True)
        os.makedirs(f"{TRANS_PATH}/fonts/{lang}", exist_ok=True)
        os.makedirs(f"{SRC_PATH}/languages/{lang}/assets/images", exist_ok=True)
        os.makedirs(f"{SRC_PATH}/languages/{lang}/text", exist_ok=True)

        # 复制字体文件
        fonts_src_lang = f"{GMS_PATH}/dist/psot/{lang}/"
        fonts_dest_lang = f"{SRC_PATH}/languages/{lang}/assets/fonts"
        copy_directory_contents(fonts_src_lang, fonts_dest_lang, files_only=True)

        # 复制图片资源
        images_src = f"{TRANS_PATH}/images/{lang}/"
        images_dest = f"{SRC_PATH}/languages/{lang}/assets/images"
        copy_directory_contents(images_src, images_dest)

        # 复制 sources 和 index 文件
        shutil.copy(f"{SRC_PATH}/languages/en_US/index.ts", f"{SRC_PATH}/languages/{lang}/index.ts")
        shutil.copy(f"{SRC_PATH}/languages/en_US/sources.ts", f"{SRC_PATH}/languages/{lang}/sources.ts")

        if 'zh_' in lang:
            # 创建额外的目录
            os.makedirs(f"{SRC_PATH}/languages/{lang}/assets-alt/images", exist_ok=True)
            os.makedirs(f"{SRC_PATH}/languages/{lang}/text-alt", exist_ok=True)

            # 复制额外的图片资源
            images_alt_src = f"{TRANS_PATH}/images/{lang}-alt/"
            images_alt_dest = f"{SRC_PATH}/languages/{lang}/assets-alt/images"
            copy_directory_contents(images_alt_src, images_alt_dest)

            # 复制额外的 sources 和 index 文件
            shutil.copy(f"{SRC_PATH}/languages/en_US/index-alt.ts", f"{SRC_PATH}/languages/{lang}/index-alt.ts")
            shutil.copy(f"{SRC_PATH}/languages/en_US/sources-alt.ts", f"{SRC_PATH}/languages/{lang}/sources-alt.ts")

    except Exception as e:
        print(colored(f"处理语言 {lang} 时出现错误: {e}", "red"))

def copy_directory_contents(src_dir, dest_dir, files_only=False):
    """
    复制目录内容，从 src_dir 到 dest_dir。

    参数:
    - src_dir: 源目录路径
    - dest_dir: 目标目录路径
    - files_only: 如果为 True，则只复制文件，不复制子目录
    """
    if not os.path.exists(src_dir):
        print(colored(f"源目录不存在: {src_dir}", "red"))
        return

    os.makedirs(dest_dir, exist_ok=True)

    for item in os.listdir(src_dir):
        s = os.path.join(src_dir, item)
        d = os.path.join(dest_dir, item)
        if os.path.isdir(s):
            if not files_only:
                shutil.copytree(s, d, dirs_exist_ok=True)
        else:
            shutil.copy2(s, d)

def process_place(place):
    print(colored(f" -> {place}", "yellow"))
    os.makedirs(f"{TRANS_PATH}/text/{place}", exist_ok=True)
    shutil.copy(f"{SRC_PATH}/languages/en_US/text/{place}.ts", f"{TRANS_PATH}/text/{place}/en.ts")
    ts2po(f"{TRANS_PATH}/text/{place}/en.ts", f"{TRANS_PATH}/text/{place}/en.pot")

    # 首先处理 zh_CN
    process_language(place, 'zh_CN')

    # 然后处理 zh_TW
    process_language(place, 'zh_TW')

    # 处理其他语言，使用进程池并行处理
    other_langs = [lang for lang in LANG if lang not in ('zh_CN', 'zh_TW')]
    with ProcessPoolExecutor() as executor:
        lang_futures = [executor.submit(process_language, place, lang) for lang in other_langs]
        for future in as_completed(lang_futures):
            try:
                future.result()
            except Exception as exc:
                print(colored(f"处理语言时出现异常: {exc}", "red"))

def process_language(place, lang):
    source_path = f"{TRANS_PATH}/text/{place}/en.pot"
    dist_path = f"{TRANS_PATH}/text/{place}/{lang}.po"
    if not os.path.exists(dist_path):
        open(dist_path, 'a').close()
    merge_po_files(source_path, dist_path, dist_path)
    # 繁中自动生成
    if lang == "zh_TW":
        merge_po_files(dist_path.replace(lang, "zh_CN"), dist_path, dist_path)
    transdict = load_dict(dist_path)
    if place == 'values':
        source_ts = f"{TRANS_PATH}/assets/values-{lang}.ts"
    else:
        source_ts = f"{TRANS_PATH}/text/{place}/en.ts"
    output_ts = f"{TRANS_PATH}/text/{place}/{lang}.ts"
    po2ts(source_ts, transdict, output_ts, lang=lang)
    dest_ts = f"{SRC_PATH}/languages/{lang}/text/{place}.ts"
    os.makedirs(os.path.dirname(dest_ts), exist_ok=True)
    shutil.copy(output_ts, dest_ts)

    # 0713 - 人名替换版翻译字典
    if 'zh_' in lang:
        transdict_alt = replace_character_name(transdict, CN_NAME_DICT, lang == 'zh_TW')
        if place == 'values':
            source_ts = f"{TRANS_PATH}/assets/values-{lang}.ts"
        else:
            source_ts = f"{TRANS_PATH}/text/{place}/en.ts"
        output_alt_ts = f"{TRANS_PATH}/text/{place}/{lang}-alt.ts"
        po2ts(source_ts, transdict_alt, output_alt_ts, lang=lang)
        dest_alt_ts = f"{SRC_PATH}/languages/{lang}/text-alt/{place}.ts"
        os.makedirs(os.path.dirname(dest_alt_ts), exist_ok=True)
        shutil.copy(output_alt_ts, dest_alt_ts)

def process_term(term):
    convert_s2t(f"{TRANS_PATH}/text/terms/{term}/zh_CN.tbx", f"{TRANS_PATH}/text/terms/{term}/zh_TW.tbx")


# 更新翻译任务
def task_update():
    """
    更新翻译任务，将翻译应用到项目文件。
    """
    print(colored("--> 拉取最新资源", "blue"))
    bashcmd(f"cd {TRANS_PATH} && git pull github master")
    task_loadassets()
    print(colored("--> 将翻译字典合并至代码", "blue"))
    
    # 使用进程池并行处理不同的 place
    with ProcessPoolExecutor() as executor:
        futures = [executor.submit(process_place, place) for place in PLACELIST]
        for future in as_completed(futures):
            # 捕获可能的异常
            try:
                future.result()
            except Exception as exc:
                print(colored(f"处理 place 时出现异常: {exc}", "red"))

    # 0717 更新繁中术语表
    print(colored("--> 更新术语表", "blue"))
    with ProcessPoolExecutor() as executor:
        executor.map(process_term, TERMS)

    # 推送更改
    print(colored("--> 推送更改到Git仓库", "blue"))
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    #bashcmd(f"cd {TRANS_PATH} && git add . && git commit -m '{current_time} Update translation. \\nAuthor: {TRANS_AUTHOR}'")
    #bashcmd(f"cd {TRANS_PATH} && git push origin master && git push -u github master")

    print(colored("--- 文本更新完成", "green"))

# 发布新的翻译版本
def task_release(version, comment):
    """
    发布翻译的特定版本并创建备份文件。

    参数:
    - version: 发布的版本号
    - comment: 版本的说明或备注
    """
    task_loadassets()
    print(colored("--> 复制当前游戏文本到备份目录", "blue"))
    bashcmd(f"mkdir -p {TEXT_PATH}/v{version}")
    bashcmd(f"cp -rf {TRANS_PATH}/text/* {TEXT_PATH}/v{version}")
    print(colored("--> 开始构建游戏", "blue"))
    bashcmd(f"cd {SRC_PATH} && ./build.sh")
    # 0801 - 压缩文件
    print(colored("--> 压缩生成的文件", "blue"))
    temp_pswd = generate_strong_password(24)
    bashcmd(f"cd {SRC_PATH}/app/dist && 7z a win.zip win-unpacked/")
    bashcmd(f"cd {SRC_PATH}/app/dist && 7z a and.zip and.apk")
    print(colored("--> 复制各平台游戏到目标文件夹", "blue"))
    for platname in PLATFORMS:
        print(colored(f" -> {PLATNAME_DICT[platname]} - V{version}", "yellow"))
        filename = f"PSOT-V{version}-{PLATNAME_DICT[platname]} ({comment})"
        
        if platname == 'and':
            bashcmd(f"cp '{SRC_PATH}/app/dist/and.apk' '{DIST_PATH}/{filename}.APK'")
        else:
            bashcmd(f"cp '{SRC_PATH}/app/dist/{platname}.zip' '{DIST_PATH}/{filename}.zip'")
    # 生成SHA256校验码
    bashcmd(f"cd {DIST_PATH} && sha256sum *V{version}* > PSOT-V{version}-sha256.txt")
    bashcmd(f"cd {DIST_PATH} && echo 'PWD: {temp_pswd}' >> PSOT-V{version}-sha256.txt")
    # 上传到web服务器
    print(colored("--> 更新web服务器资源", "blue"))
    bashcmd(f"cd {SRC_PATH}/app/dist && scp -qr assets {WEB_PATH}")
    print(colored("--> 推送更改到Git仓库", "blue"))
    for reponame in [SRC_PATH, GMS_PATH, MODS_PATH, TEXT_PATH]:
        print(colored(f" -> {reponame}", "yellow"))
        current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        bashcmd(f"cd {reponame} && git add . && git commit -m "
                f"'{current_time}: V{version} - {comment}.\\nAuthor: {TRANS_AUTHOR}\\nPS! Outertale {reponame.split('/')[-1]}.'")
        bashcmd(f"cd {reponame} && git push origin master && git push -u github master")
    print(colored(f" -> 文件密码：{temp_pswd}", "yellow"))
    print(colored(f"--- 已发布: V{version} - {comment}.", "green"))

# 比较两个 PO 文件翻译字典之间的差异
def compare_transdict(po_1, po_2, colortext=True, showall=False):
    """
    比较两个 PO 文件之间的翻译差异并返回信息。

    参数:
    - po_1: 主翻译 PO 文件路径
    - po_2: 对比的翻译 PO 文件路径
    - colortext: 是否使用颜色显示
    - showall: 是否显示所有条目

    返回:
    - 比较的差异信息字符串
    """
    if not (os.path.exists(po_1) and os.path.exists(po_2)):
        return ""
    dictA = load_dict(po_1)
    dictB = load_dict(po_2)
    color_fn = colored if colortext else plain_text
    missing_count = 1
    result_info = ""
    result_info += color_fn(f"{po_1} -> {po_2}\n", "red")

    for key in dictA:
        valueA = dictA[key]
        if (key not in dictB or not dictB[key]) and (valueA or showall):
            tempkey = key.replace("\n", "\\n")
            result_info += color_fn(f"消失文本 #{missing_count}\n", "yellow")
            result_info += color_fn(f"原文：{tempkey}\n", "green")
            result_info += color_fn(f"译文：{valueA}\n\n", "green")
            missing_count += 1
    
    result_info += color_fn(f"比较完毕. 共丢失 {missing_count - 1} 条文本.\n\n", "blue")

    return result_info

def task_showdiff(old_version, new_version, lang='zh_CN', output=None, showall=False):
    """
    显示两个版本之间的差异。

    参数:
    - old_version: 旧版本号
    - new_version: 新版本号
    - output: 输出文件路径（可选）
    - showall: 是否显示所有条目
    """
    result = ""
    for place in PLACELIST:
        result += compare_transdict(f"{TEXT_PATH}/v{old_version}/{place}/{lang}.po",
                                    f"{TEXT_PATH}/v{new_version}/{place}/{lang}.po", not bool(output), showall)
    print(result)
    if output:
        with open(output, "w", encoding="utf-8") as file:
            file.write(result)

def task_dttvl_copyfiles():
    """
    扫描 dttvl_path 下所有后缀名为 .cs 的文件，并复制到 trans_path/dttvl/[文件名]/en.po 下。

    参数:
    - dttvl_path: 要扫描的目录路径
    - trans_path: 目标目录路径
    """
    print(colored(f"--> 初始化DTTVL翻译", "blue"))
    bashcmd(f"rm -rf {TRANS_PATH}/dttvl/cs")
    transdict = dict()
    for place in DTTVL_PLACELIST:
        transdict[place] = dict()
    # 遍历 dttvl_path 下的所有文件
    print(colored(f" -> 复制DTTVL翻译: c#部分", "yellow"))
    bashcmd(f"rm -rf {TRANS_PATH}/dttvl/cs")
    for root, _, files in os.walk(DTTVL_PATH):
        for file in files:
            if file.endswith('.cs'):
                # 构造源文件路径
                src_file = os.path.join(root, file).replace('\\', '/')
                # 构造目标文件目录和路径
                target_file = f"{TRANS_PATH}/dttvl/{src_file.replace(DTTVL_PATH, "cs/")}"
                # 提取字典
                with open(src_file, "r", encoding="UTF-8") as csfile:
                    cs_content = csfile.read()
                cs_lines = extract_strings(remove_comments(cs_content))

                # 过滤
                cs_final_lines1 = {item : "" for item in cs_lines if re.search(r'\* ', item)}
                cs_final_lines2 = {item : "" for item in cs_lines if (not re.search(r'[_/]', item)) and (not re.search(r'\* ', item))}
                cs_final_lines3 = {item : "" for item in cs_lines if re.search(r'[_/]', item) and (not re.search(r'\* ', item))}

                # 复制文件
                if cs_final_lines1 or cs_final_lines2:
                    bashcmd(f"mkdir -p {os.path.split(target_file)[0]}")
                    bashcmd(f"cp {src_file} {os.path.split(target_file)[0]}")
                    transdict['star'].update(cs_final_lines1)
                    transdict['nostar'].update(cs_final_lines2)
                    transdict['others'].update(cs_final_lines3)
    
    print(colored(f" -> 复制DTTVL翻译：Unity部分", "yellow"))
    
    for i in range(3):
        bashcmd(f"rm -rf {TRANS_PATH}/dttvl/{DTTVL_DIRLIST[i]}")
        for root, _, files in os.walk(DTTVL_PATHX + DTTVL_DIRLIST[i]):
            for file in files:
                if file.endswith(DTTVL_FILETYPE[i]):
                    src_file = os.path.join(root, file).replace('\\', '/')
                    target_file = f"{TRANS_PATH}/dttvl/{src_file.replace(DTTVL_PATHX, "")}"
                    # 提取字典
                    with open(src_file, "r", encoding="UTF-8") as utfile:
                        ut_content = utfile.read().replace("''", "\\'")
                    ut_lines = extract_strings(remove_comments(ut_content))
                    ut_final_lines = {item : "" for item in ut_lines}
                    if ut_final_lines:
                        bashcmd(f"mkdir -p {os.path.split(target_file)[0]}")
                        with open(target_file, "w", encoding='utf-8') as utfile:
                            utfile.write(ut_content)
                        if i == 0:
                            if "Undertale" in src_file:
                                transdict["ch1"].update(ut_final_lines)
                            elif "Earthbound" in src_file:
                                transdict["ch2"].update(ut_final_lines)
                            elif "Underfell" in src_file:
                                transdict["ch3"].update(ut_final_lines)
                            else:
                                transdict["otherunity"].update(ut_final_lines)
                        else:
                            transdict[DTTVL_PLACELIST[i+6]].update(ut_final_lines)

    
    print(colored(f" -> 生成原文本字典", "yellow"))
    for place in DTTVL_PLACELIST:
        print(colored(f" -- {place}", "green"))
        bashcmd(f"mkdir -p {TRANS_PATH}/dttvl/{place}")
        create_po(transdict[place], f"{TRANS_PATH}/dttvl/{place}/en.pot")
    
    print(colored("--- 文本初始化完成", "green"))
    

def task_dttvl_update(update_lang = "zh_CN"):
    print(colored(f"--> 更新DTTVL翻译", "blue"))
    print(colored("--> 拉取最新资源", "blue"))
    bashcmd(f"cd {TRANS_PATH} && git pull github master")
    # 更新翻译字典
    print(colored(f" -> 更新翻译字典", "yellow"))
    for place in DTTVL_PLACELIST:
        print(colored(f" -- {place}", "green"))
        for lang in ["zh_CN", "zh_TW"]:
            source_path = f"{TRANS_PATH}/dttvl/{place}/en.pot"
            dist_path = f"{TRANS_PATH}/dttvl/{place}/{lang}.po"
            if not os.path.exists(dist_path):
                bashcmd(f"echo '' > {dist_path}")
            merge_po_files(source_path, dist_path, dist_path)
            # 繁中自动生成
            if lang == "zh_TW":
                merge_po_files(dist_path.replace(lang, "zh_CN"), dist_path, dist_path)
    
    # 开始更新文本
    print(colored(f" -> 更新文本", "yellow"))
    transdict = dict()
    for place in DTTVL_PLACELIST:
        transdict.update(load_dict(f"{TRANS_PATH}/dttvl/{place}/{update_lang}.po"))
    
    for root, _, files in os.walk(f"{TRANS_PATH}/dttvl/cs"):
        for file in files:
            full_path = os.path.join(root, file).replace('\\', '/')
            po2ts(full_path, transdict, f"{DTTVL_PATH}{full_path.replace(f"{TRANS_PATH}/dttvl/cs", "")}", insert_content=False, lang=update_lang)
            # 人名翻译版代码待定
    # for i in range(3):
    #     for root, _, files in os.walk(f"{TRANS_PATH}/dttvl/{DTTVL_DIRLIST[i]}"):
    #         for file in files:
    #             full_path = os.path.join(root, file).replace('\\', '/')
    #             po2ts(full_path, transdict, f"{TRANS_PATH}/dttvl/temp", insert_content=False, lang=update_lang)
    #             # 人名翻译版代码待定
    #             with open(f"{TRANS_PATH}/dttvl/temp", 'r', encoding='utf-8') as utfile:
    #                 content = utfile.read().replace("\\'", "''")
    #             with open(f"{DTTVL_PATHX}{full_path.replace(f"{TRANS_PATH}/dttvl/", "")}", 'w', encoding='utf-8') as utfile:
    #                 utfile.write(content)
        
    print(colored("--> 推送更改到Git仓库", "blue"))
    current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    # git remote add origin git@gitee.com:ws-3917/psoutertale-cn.git
    # git remote add github git@github.com:ws-3917/psoutertale-cn.git
    bashcmd(f"cd {TRANS_PATH} && git add . && git commit -m '{current_time} Update translation. \\nAuthor: {TRANS_AUTHOR}'")
    bashcmd(f"cd {TRANS_PATH} && git push origin master && git push -u github master")

    print(colored("--- 文本更新完成", "green"))
