var utils = require("utils.js");
utils.init()

// utils.locationClick(400, 950, "打开分类")
// utils.locationClick(400, 500, "美食分类")
utils.textClick("200元以上套餐")
sleep(500)
var num = 0;
while (text("免费抽").exists()) {
    task()
    swipe(510, 2000, 500, 200, 800)
}
function task() {
    // 执行屏幕的前5个
    let btn = text("免费抽").find()
    if (!btn.empty()) {
        btn.forEach(function (item) {
            let y = item.bounds().top + 5
            let x = item.bounds().left + 9;

            utils.locationClick(x, y, "点击免费抽")
            sleep(1000)
            utils.locationClick(800, 2300, "我要报名")
            sleep(1500)
            if (text("知道啦，继续报名").exists()) {
                utils.locationClick(581, 2300, "知道啦，继续报名")
                sleep(1000)
            }
            if (!text("确认报名信息").exists()) {
                utils.locationClick(800, 2300, "我要报名")
                sleep(1500)
            }
            if (text("请选择门店").exists()) {
                utils.locationClick(997, 500, "选择门店")
                sleep(500)
                utils.locationClick(500, 1076, "选择最近门店")
                sleep(500)
            }
            utils.locationClick(1000, 623, "参加候选")
            utils.locationClick(581, 2224, "确认报名")
            num += 1;
            utils.message(`已经报名${num}个`)
            utils.goBack();
            sleep(1000)
        });
    }
}
