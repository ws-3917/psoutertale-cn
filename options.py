# 翻译脚本使用的常量和变量
# 注释标记，用于识别需要翻译的部分和忽略的部分
START_COMMENT = " START-TRANSLATE"  # 开始翻译的标记
END_COMMENT = " END-TRANSLATE"  # 结束翻译的标记
NOTRANS_COMMENT = " NO-TRANSLATE"  # 控制符，不进行翻译
IGNORE_COMMENT = "@ts-ignore"  # 忽略注释标记
LANG = [
    "cs_CZ",
    "es_ES",
    "ja_JP",
    "ru_RU",
    "tr_TR",
    "zh_CN",
    "zh_TW",
]  # 支持的语言列表，包含简体中文和繁体中文
TRANS_AUTHOR = "ws3917"  # 提交 commit 的作者名

# 路径配置
GMS_PATH = "/home/ws3917/Code/psoutertale-gms"  # 字体生成工具路径
TRANS_PATH = "/home/ws3917/Code/psoutertale-cn"  # 翻译文件路径
SRC_PATH = "/home/ws3917/Code/psoutertale-src"  # 源代码路径
DIST_PATH = "/home/ws3917/Code/psoutertale-dist"  # 发布文件路径
WEB_PATH = "ws-server:/www"  # 网页版游戏推送路径
MODS_PATH = "/home/ws3917/Code/psoutertale-mod"  # 模组路径
TEXT_PATH = "/home/ws3917/Code/psoutertale-text"  # 文本路径
DTTVL_PATH = "/home/ws3917/Code/dttvl/src/Assets/Scripts/Assembly-CSharp/"
DTTVL_PATHX = "/home/ws3917/Code/dttvl/src/Assets/"
DTTVL_DIRLIST = ["Scenes", "Resources/overworld", "Resources/ui"]
DTTVL_FILETYPE = [".unity", ".prefab", ".prefab"]
# 项目中不同区域的标识符列表
PLACELIST = [
    "aerialis",
    "citadel",
    "common",
    "foundry",
    "outlands",
    "starton",
    "systems",
    "values",
]
PLATFORMS = ["win", "and"]
DTTVL_PLACELIST = [
    "star",
    "nostar",
    "others",
    "otherunity",
    "ch1",
    "ch2",
    "ch3",
    "ow",
    "shop",
]
PLATNAME_DICT = {"win": "电脑版", "and": "安卓手机版"}
# 0713 - 人名翻译版起名替换字典
CN_NAME_DICT = dict(
    {
        # 高优先级
        "Toriel Dreemurr": "托丽尔·逐梦",
        "Asgore Dreemurr": "艾斯戈尔·逐梦",
        "Asriel Dreemurr": "艾斯利尔·逐梦",
        "Grillbys§shift=56": "烤尔比§shift=75",
        "Final Froggit": "终极蛙吉特",
        "Undyne the Undying": "不灭的安黛因",
        "dapper blook": "纳普斯文",
        # 主要角色
        "Chara": "查拉",
        "Frisk": "弗里斯克",
        "Twinkly": "闪闪",
        "Toriel": "托丽尔",
        "Napstablook": "纳普斯特",
        "Sans": "衫斯",
        "Papyrus": "帕派瑞斯",  # 趴派瑞斯、站起来就是帕派瑞斯，遇到狗的时候就是怕派瑞斯，摔在地上就是啪派瑞斯
        "Undyne": "安黛因",
        "Alphys": "艾菲斯",
        "Mettaton": "镁塔顿",
        "Asriel": "艾斯利尔",
        "Asgore": "艾斯戈尔",
        # Outlands
        "Froggit": "蛙吉特",
        "Flutterlyte": "飘游虫虫",
        "Gelatini": "小黏团",
        "Silente": "忍术蟑螂",
        "Oculoux": "干瞪眼",
        "Mushy": "蘑西",
        "Lurksalot": "匿罗",
        "Lurky": "小匿",
        "Blooky": "小幽",
        "Aaron": "亚伦",
        # Starton
        "Stardrake": "星铁龙",
        "Starry": "星儿",
        "Chilldrake": "小酷龙",
        "Astro Serf": "太空帽",
        "Radio Jack": "收音杰克",
        "Jerry": "杰瑞",
        "Whizkarat": "绅鼠猫",
        "Doggo": "遁狗",
        "Dogi": "狗夫妇",
        "Dogamy": "狗来米",
        "Dogaressa": "狗媳儿",
        "Canis Minor": "小犬座",
        "Canis Major": "大犬座",
        "Canis Maximus": "帝犬座",
        "Sepluv": "赛普洛夫",  # 月岩商人
        "Erogot": "艾罗戈",  # 前国王
        "Kabakk": "卡巴克",  # 星港小镇警察摊位
        "Zorren": "佐伦",  # 星港小镇警察摊位
        "Grillby's": "烤尔比",
        "Grillbys": "烤尔比",
        "Grillby": "烤尔比",
        "Vegetoid": "蔬菜兽",
        # Foundry
        "Radtile": "老顽鳄",
        "Raddy": "顽顽",
        "Skrubbington": "刷洁顿",
        "Skrubby": "刷刷",
        "Gelata": "大黏簇",
        "Doge": "督吉",
        "Muffet": "玛菲特",
        "Shyren": "害羞塞壬",
        "Bob": "鲍勃",
        "Gerson": "葛森",
        "Hapstablook": "纳普斯乐",
        "Temmie": "提米",
        "Temy": "提咪",
        "Tem": "提咪",  # 检查单词前后字符避免错误替换
        # Aerialis
        "Tsunderidex": "傲娇飞船",
        "Hotwire": "烈焰热线",
        "Perigee": "呦呦鸡",
        "Glyde": "老滑头",
        "Mew Mew": "喵喵",
        "Charles": "查尔斯",
        "Vulkin": "迷你火山",
        "Onionsan": "洋葱桑",
        "the Pyromaniacs": "热火朝天",
        "Pyromaniacs": "热火朝天",
        "Aidrian": "阿德里安",
        "Catty": "凯蒂",
        "Bratty": "布莱蒂",
        # CORE
        "Cozmo": "谜宇人",
        "Terrestria": "特雷莉亚",
        "Flutterknyte": "飘游䗁士",
        "Silencio": "默之蟑",
        "Eyewalker Prime": "眼行者",
        "Mushketeer": "蘑炮手",
        # Citadel & A6
        "Thomas Nue Roman": "托马斯·努·罗曼",
        "Roman": "罗曼",
        "546f7269656c": "e68998e4b8bde5b094",  # toriel
        "476572736f6e": "e8919be6a3ae",  # gerson
        "526f6d616ee69599e68e88": "e7bd97e69bbce69599e68e88",  # roman教授
        "4e6170737461626c6f6f6b": "e7bab3e699aee696afe789b9",  # napstablook
        "4173676f7265": "e889bee696afe68888e5b094",  # asgore
        # 口吃
        "F-Frisk": "弗-弗里斯克",
        "U-Undyne": "安-安黛因",
        "S-Sans": "衫-衫斯",
        "M-mettaton": "镁-镁塔顿",
        # 特殊
        "人名不译": "人名翻译",  # 用于菜单选择界面替换语言
        "人名不譯": "人名翻譯",  # 用于菜单选择界面替换语言
        "MTT": "镁塔",
        "Sansy": "衫衫",
        "Sansyyyy...": "衫/home/ws3917衫/home/ws3917",
        "Friiisk": "弗里斯克——",
        "MTT-": "镁塔",
        "Dreemurr": "逐梦",
        "大的P-": "大的帕-",  # 伟大的帕派瑞斯
        "ASRI-": "艾斯利-",
        "NAPSTABLOOK22": "纳普斯特22",
        "Azzy": "艾利",
        "Grillbz": "烤尔比",
        "Schmundyne": "安呆因",
        "zh_CN": "zh_CN-alt",  # 语言代号
        "zh_TW": "zh_TW-alt",
    }
)

# 0610 - 替换字典，处理 Weblate 的字符串合并
REPLACE_DICT = dict(
    {
        # 翻译合并
        r'(无视墙体["\'],\n\s+["\'])保存': r"\1快速存档",
        r'(回家["\'],\s+["\'])放弃': r"\1没啥事",
        r'(sidebar5:\s+["\'])图': r"\1体征",
        r"提咪(\s+in a Cowboy)": r"Tem\1",
        r'(a: )["\']动["\']': r"\1'存活？'",
        "ゐ": "",  # 繁体保护标记
        "ゑ": "",  # 校对标记
        # 文本条目删除
        r'["\']\[DEL\]["\'],': "",
        r'["\']\[DEL\]["\']': "",
        r"\[ADD\]": "',\n'",
        # 选项 - outlands
        r'(choicer.create\(["\']\* （离开外域吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"离开", "再等等"',
        r'(choicer.create\(["\']\* （嚼它吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"嚼", "不嚼"',
        r'(choicer.create\(["\']\* （跟上他吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"跟上他", "再等等"',
        r'(choicer.create\(["\']{#n1!}\* （要听吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"听", "不听"',
        r'(choicer.create\(["\']\* （猜谜吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"试试看", "算了吧"',
        r'(走到房间的尽头吗？["\'],\n\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"有信心", "我不敢"',
        r'(choicer.create\(["\']{#n1!}\* （买下这本漫画吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"买", "不买"',
        r'(你还愿意吃吗？["\'],\n\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"愿意吃", "不吃了"',
        r'(choicer.create\(["\']\* （让它们更乱点吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"弄乱", "算了"',
        r'(choicer.create\(["\']\* （整理一下吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"整理", "算了"',
        r'(choicer.create\(["\']\* （拿走钥匙吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"拿走", "不拿"',
        r'(choicer.create\(["\']\* （要买它吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"买", "不买"',
        r'(choicer.create\(["\']\* （要打烂它吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"打烂", "算了"',
        # 选项 - starton
        r'(choicer.create\(["\']\* （花8G来买洋梅吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"买", "不买"',
        r'(choicer.create\(["\']\* （订一间房吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"订", "不订"',
        r'(choicer.create\(["\']\* （再订一间房吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"订", "不订"',
        r'(挑战了吗，人类！？["\'],\n\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"准备好了", "没准备好"',
        r'(choicer.create\(["\']\* （看里边吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"看一眼", "算了"',
        r'(消遣吗？["\'],\n\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"开始吧", "再等等"',
        r'(准备开始了吗？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"开始吧", "再等等"',
        r'(choicer.create\(["\']\* （你知道这是什么吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"当然知道", "不知道"',
        r'(谜题的解法吗？？？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"告诉我", "再想想"',
        r'(解释了吗？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"听懂了", "没听懂"',
        r'(放你走呢？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"放我走吧", "咱们再战"',
        r'(放弃战斗吗？？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"放我走", "想战斗"',
        r'(choicer.create\(["\']\* （拿走一块芯片？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"拿走", "算了"',
        r'(choicer.create\(["\']\* （再拿走一块芯片？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"拿走", "算了"',
        r'(choicer.create\(["\']\* （要看看里面吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"看看", "算了"',
        r'(choicer.create\(["\']\* （登录Papyrus的账号吗？）["\'],\s+)["\']是["\'],\s+["\']否["\']': r'\1"登录", "算了"',
        r'(SAVE\.data\.b\.a_state_hapstablook\n\s+\?\s+\[\s*)["\']是["\'],\s+["\']否["\']': r'\1"我原谅你", "不会原谅"',
        # 铸厂 - Foundry
        r'(您今天过得怎样？["\'],\s+choicer.create\(["\']\* （你要怎么回答？）["\'],\s+)["\']好听["\'],\s+["\']不好听["\']': r'\1"愉快", "糟糕"',
        r"(督吉 - 攻擊14 防禦10\\n)\* 讀作「ㄉㄨ ·ㄐㄧ」。尾字輕聲。\\n\* 特戰隊成員。": r"\1* 读作[dəʊʒ]，尾音弱化。\\n* 特战队成员。",
        r"(DOGE - 攻击14 防御10\\n)\* 读作“dū ji”。轻声的“ji”。\\n\* 特战队成员。": r"\1* 读作[dəʊʒ]，尾音弱化。\\n* 特战队成员。",
        # 翻译组信息
        # cs_CZ
        r'(\],\n\s+)(\[\s*["\']Přináší vám)': r"""
        \1[
            '§fill=#ff0§< ČEŠTÍ PŘEKLADATELÉ >§fill=#fff§',
            'Chickenytboi',
            'petar3664',
        ],\n\2""",
        # es_ES
        r'(\],\n\s+)(\[\s*["\']Traído a)': r"""
        \1[
            '§fill=#ff0§< TRADUCTORES AL ESPAÑOL >§fill=#fff§',
            'Chistosito',
            'Stefano9000',
            'DR4GON_HE4RT',
            'Manuel',
        ],\n\2""",
        # zh_CN / zh_TW
        r'(\],\n\s+)(\[\s*["\']特别鸣谢)': r"""
        \1[
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【组长 & 程序】§fill=#fff§",
            "ws3917",
            "§fill=#ff7§【文翻】§fill=#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "R.o.C.t.D./π/3.1415⑨",
            "1个渣渣",
            "§fill=#ff7§【文校】§fill=#fff§",
            "ws3917",
            "R.o.C.t.D./π/3.1415⑨",
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【美术】§fill=#fff§",
            "屑moons月亮君",
            "御魂_",
            "mustad（边框Mod）",
            "§fill=#ff7§【精神支持&推广】§fill=#fff§",
            "幻-_-风",
            "AX暗星233",
            "屑moons月亮君"
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【汉化测试】§fill=#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "雪理奈",
            "（以及其他汉化组成员）",
            "感谢汉化组成员的努力付出！",
            "同时，也感谢您对这款游戏的喜爱！",
            "",
            "§fill=#808080§P.S. 汉化组正在为游戏制作各种Mod！\\n欢迎B站关注@ws3917\\n了解最新Mod开发进度！§fill=#fff§"
        ],\n\2""",
    }
)

# 简体繁体不同词汇使用习惯

S2T_DICT = {
    "簡體中文": "繁體中文",
    "時間線": "時間軸",
    "哦": "喔",
    "菜單": "選單",
    "文件": "檔案",
    "交互": "互動",
    "全屏": "全螢幕",
    "設置": "設定",
    "程序": "程式",
    "文件夾": "資料夾",
    "緩存": "快取",
    "窗口": "視窗",
    "本地化": "在地化",
    "導入": "匯入",
    "導出": "匯出",
    "社區": "社群",
    "支持": "支援",
    "性能": "效能",
    "發佈": "發行",
    "快捷方式": "捷徑",
    "音頻": "音訊",
    "視頻": "影片",
    "卸載": "解除安裝",
    "封號": "封鎖",
    "設備": "裝置",
    "郵箱": "信箱",
    "電子郵箱": "電子信箱",
    "應用程序": "應用程式",
    "智能手機": "智慧型手機",
    "客戶端": "用戶端",
    "個人資料": "個人檔案",
    "硬盤": "硬碟",
    "軟盤": "軟碟",
    "磁盤": "磁碟",
    "自定義": "自訂",
    "註釋": "註解",
    "鏈接": "連結",
    "軟件托盤": "系統列",
    "在線": "線上",
    "隱身": "隱藏",
    "應用": "套用",
    "默認": "預設",
    "信息": "資訊",
    "消息": "訊息",
    "協議": "協定",
    "界面": "介面",
    "用戶": "使用者",
    "項目": "專案",
    "調試": "除錯",
    "代碼": "程式碼",
    "服務器": "伺服器",
    "端口": "埠口",
    "類型": "類別",
    "偽本地化": "模擬翻譯",
    "剪切板": "剪貼簿",
    "市場": "市集",
    "搜索": "搜尋",
    "保存": "儲存",
    "打印": "列印",
    "運行": "執行",
    "內存": "記憶體",
    "顯卡": "顯示卡",
    "兼容": "相容",
    "操作系統": "作業系統",
    "線程": "執行緒",
    "32位": "32位元",
    "64位": "64位元",
    "比特": "位元",
    "軟件": "軟體",
    "硬件": "硬體",
    "換彈": "重新裝填",
    "鼠標": "滑鼠",
    "指針": "遊標",
    "局域網": "區域網",
    "地址": "位址",
    "超時": "逾時",
    "分辨率": "解析度",
    "空格": "空白鍵",
    "登錄": "登入",
    "退出登錄": "登出",
    "二進制": "二進位",
    "八進制": "八進位",
    "十進制": "十進位",
    "十六進制": "十六進位",
    "臺式電腦": "桌上型電腦",
    "筆記本電腦": "筆記型電腦",
    "互聯網": "網際網路",
    "網絡": "網路",
    "源代碼": "原始碼",
    "克里": "克伊",  # KIOS
    "克里烏斯": "克伊俄斯",
    "王後": "王后",
    "國王后": "國王後",  # 例外
    "皇後": "皇后",
    "回覆": "回復",
    "發明瞭": "發明了",
    "彆": "別",
    "衛視": "電視臺",
    "手柄": "控制器",
    "說了會話": "講了幾句",
    "這會兒": "這時候",
    "揹包": "背包",
    "秘笈": "祕笈",
    "哈嘍": "哈囉",
    "傢夥": "傢伙",
    "夥食": "伙食",
    "託麗爾": "托麗爾",
    "託麗": "托麗",
    "zh_CN": "zh_TW",
    "zh-CN": "zh-TW",
    "意大利麵": "義大利麵",
    "意麵": "義麵",
    "英尺": "呎",
    "標註": "標注",
    "發給": "傳送給",
    "賬號": "賬戶",
    "信號": "訊號",
    "雅莫萬能醬": "雅莫萬用醬",
    "萬能醬": "萬用醬",
    "回收站": "資源回收桶",
    "計劃": "計畫",
    "黴": "霉",
    "咯": "嚕",
    "噩夢": "惡夢",
    "軍火庫": "兵工廠",
    # 标点
    "“": "「",
    "”": "」",
    "‘": "『",
    "’": "』",
    # archive
    "e68998e4b8bde5b094": "e68998e9ba97e788be",  # toriel
    "e8919be6a3ae": "e6a0bce788bee6a3ae",  # gerson
    "e7bd97e69bbce69599e68e88": "e7be85e69bbce69599e68e88",  # prof. roman
    "e7bab3e699aee696afe789b9": "e7b48de699aee696afe789b9",  # napstablook
    "e889bee696afe68888e5b094": "e889bee696afe68888e788be",  # asgore
}

# 0717 - 术语表名字
TERMS = ["characters", "items", "other", "places"]
