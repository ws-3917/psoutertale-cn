from tools import *
#bashcmd("export all_proxy=127.0.0.1:7897")  # 保证代理顺畅#
#convert_s2t("assets/values-zh_CN.ts", "assets/values-zh_TW.ts")
task_update()
task_release(53.9, "GOGOGO")
#task_showdiff(52.1, 53, lang='zh_CN', output="losttext.txt")
#task_dttvl_copyfiles()
#task_dttvl_update(update_lang='zh_CN')
#bashcmd(f"cd {SRC_PATH}/app/dist && scp -qr assets {WEB_PATH}")