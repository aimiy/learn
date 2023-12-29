var utils = require("../utils.js");
var task = require("./task.js")

utils.init()
openzhifubao()
zhifubaoManure()
toTaobao()
taobaoManure()
qiandao()
utils.message("脚本执行结束！")

function openzhifubao() {
    launchApp("支付宝");
    utils.textClick("芭芭农场", "wait", "area")
    sleep(6000)
    if (!textStartsWith("芭芭农场").findOnce()) {
        sleep(6000)
    }
}
function zhifubaoManure() {
    utils.textConditionClickText("开心收下");
    utils.textConditionClickText("领取")
    utils.locationClick(960, 1650, "点击领取肥料区域：")
    utils.textConditionClickLocation("去领更多肥料", 500, 1821, "点击【关闭弹窗】区域：")

    // 施肥
    task.manureTask()
    task.wishGift()
    utils.textClick("任务列表", "wait")
    utils.textClick("领取")
    task.readTask("浏览15秒得", 3);
    task.readTask("逛15s得", 1);
    task.feedChickens()
    swipe(510, 1900, 500, 1000, 1000)
    swipe(510, 1900, 500, 1000, 1000)
    sleep(2000)
    task.readTask("浏览15秒助农", 1);
    task.readTask("逛逛即可获得", 1);
    task.readTask("浏览即可获得", 1);
    task.readTask("逛一逛即可得", 1);
    task.treePower()

    utils.textClick("领取")
}
function toTaobao() {
    utils.clickTextRightBtn("逛淘宝芭芭农场领3000肥料")
    utils.clickTextRightBtn("逛淘宝芭芭农场领900肥料")
    sleep(10000)
    if (text("继续赚肥料").exists()) {
        utils.textClick("继续赚肥料")
        sleep(1000)
        click(1000, 600)
    } else {
        swipe(510, 1900, 500, 1000, 1000)
        sleep(1000)
        utils.textClick("前往手机淘宝-芭芭农场", "wait")
        sleep(6000)
    }
};
function taobaoManure() {
    utils.textConditionClickText("继续努力")
    utils.textConditionClickText("立即领取")
    // utils.textConditionClickText("退出比赛")
    utils.textConditionClickText("投入肥料")
    utils.textConditionClickText("我知道了")
    if (textStartsWith("合种亲密度").findOnce()) {
        utils.textClick("立即领取")
        sleep(2000)
        utils.textClick("立即领取")
        utils.goBack()
        sleep(2000)
    }

    utils.textClick("点击领取")
    if (text("逛逛支付宝芭芭农场，立得肥料").exists()) {
        utils.message("点击去支付宝区域：" + click(500, 1680))
        sleep(3000)
        launchApp("淘宝");
        sleep(5000)
    }

    task.rabbitTask()
    utils.locationClick(887, 1450, "点击【点击领取】肥料区域：")

    utils.textConditionClickText("明日7点可领", "关闭")

    task.taobaoManureTask()

    utils.locationClick(800, 1900, "点击集肥料区域：")

    utils.textClick("去签到")
    utils.textClick("去领取");
    task.readTask("浏览15秒得", 13);
    task.readTask("浏览15秒", 1);
    let btn = textStartsWith("逛逛支付宝芭芭农场").findOnce()
    if (btn) {
        utils.message("点击去支付宝：" + btn.click())
        sleep(3000)
        launchApp("淘宝");
        sleep(5000)
    }
    task.answerQuestion()
};

function qiandao() {
    launchApp("夸克");
    sleep(2000)
    utils.locationClick(310, 1250, "GLaDOS")
    sleep(5000)
    utils.locationClick(100, 860, "签到")
}