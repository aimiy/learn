auto("fast"); zhifubaoManure
setScreenMetrics(1080, 1920);
message('开始执行');

// launchApp("支付宝");
// textClick("芭芭农场", "wait", "area")
// sleep(5000)
// zhifubaoManure()
// taobaoManure()
// feedChickens()
message("脚本执行结束！")

function zhifubaoManure() {
    // 施肥
    manureTask()
    sleep(3000)
    message("点击领取肥料区域：" + click(800, 1400))
    sleep(3000)
    if (text("去领更多肥料").exists()) {
        text("去领更多肥料").click()
    } else {
        textClick("任务列表", "wait")
    }
    sleep(1000)

    if (text("去喂鸡").exists()) {
        text("去喂鸡").click()
        sleep(5000)
        feedChickens()
        goBack()
    }
    clickTextRightBtn("去森林收自己能量/给好友浇水")
    sleep(5000)
    if (text("蚂蚁森林").exists()) {
        treePower()
        sleep(2000)
        treePower()
        goBack()
    }
    sleep(2000)
    textClick("领取")

    // readTask()
    swipe(510, 1900, 500, 1000, 1000)
    sleep(1000)
    swipe(510, 1900, 500, 1000, 1000)
    clickTextRightBtn("逛淘宝芭芭农场领900肥料")
    sleep(10000)
    if (text("继续赚肥料").exists()) {
        textClick("继续赚肥料")
        sleep(1000)
        click(1000, 600)
        taobaoManure()
        sleep(5000)
    } else {
        textClick("前往手机淘宝-芭芭农场", "wait")
        sleep(6000)
        taobaoManure()
    }
}
function taobaoManure() {
    textClick("继续努力")
    message("点击领取兔子肥料区域：" + click(194, 1500))
    textClick("点击领取")
    sleep(2000)
    if (text("逛逛支付宝芭芭农场，立得肥料").exists()) {
        message("点击去支付宝区域：" + click(500, 1680))
        sleep(3000)
        launchApp("淘宝");
        sleep(5000)
    }
    sleep(1000)
    message("点击【点击领取】肥料区域：" + click(887, 1450))
    sleep(1000)
    if (text("明日7点可领").exists()) {
        text("关闭").click()
        sleep(1000)
    }

    message("点击集肥料区域：" + click(800, 2000))

    textClick("去签到")
    textClick("去领取");
    readTask("浏览15秒得1500肥料");
    // readTask("逛逛得600肥料");
    answerQuestion()
}

// 任务
function treePower() {
    message("点击【收能量】区域：")
    click(240, 700)
    sleep(2000)
    click(370, 645)
    sleep(2000)
    click(500, 637)
    sleep(2000)
    click(630, 640)
    sleep(2000)
    click(760, 680)
    sleep(2000)
    click(890, 720)
}

function feedChickens() {
    message("点击【找小鸡】区域：" + click(500, 1400))
    sleep(3000)
    message("点击【两边小鸡】区域：" + click(450, 1500) + click(800, 1500))
    sleep(2000)
    if (text("确认").exists()) {
        text("确认").click()
        sleep(1000)
    }
    message("点击【喂饲料】区域：" + click(950, 2180));
    sleep(5000)
    message("点击【领饲料】区域：" + click(250, 2180));
    sleep(3000);
    textClick("领取");
    swipe(510, 1900, 500, 1000, 1000)
    sleep(1000)
    swipe(510, 1900, 500, 1000, 1000)
    sleep(1000)
    textClick("领取", "nowait", "area");
    sleep(3000)
    goBack();
    sleep(3000)
}
function readTask(t) {
    message("查找【" + t + "】循环任务");
    let res = clickTextRightBtn(t);
    if (res) {
        message("滑动并等待15s")
        swipe(510, 1000, 500, 500, 2000)
        sleep(16000)
        goBack();
        sleep(1000);
        readTask(t);
    } else {
        return;
    }
}
function manureTask() {
    message("查找【施肥】循环任务");
    if (text("果树升级啦").exists()) {
        text("好的").click()
        sleep(5000)
    }
    if (text("立即领奖").exists()) {
        text("立即领奖").click()
        sleep(5000)
        textClick("立即领取")
        sleep(5000)
    }
    let btn = textStartsWith("还差").findOnce()
    if (!btn) {
        message("没有【施肥】任务了！")
        return;
    }
    message("点击【施肥】区域：" + click(500, 2000))
    sleep(1000)
    manureTask();
}
function answerQuestion() {
    message("查找答题")
    if (text("去答题").exists()) {
        textClick("去答题", "wait")
        sleep(2000)
        message("点击题目答案：" + click(500, 2000))
        sleep(2000)
        message("领取答题奖励：" + click(500, 2190))
    } else {
        message("已经答过题")
    }
}

// 全局函数
function textClick(t, type, isArea) {
    if (!text(t).exists()) {
        if (type == "wait") {
            message("等待【" + t + "】")
            text(t).waitFor()
        }
        sleep(2000)
    }
    if (!text(t).exists()) {
        message("没有【" + t + "】按钮")
        return;
    }
    if (isArea == "area") {
        let btn = text(t).find();
        if (btn.empty()) {
            message("没找到╭(╯^╰)╮" + t);
        } else {
            message("找到" + btn + "集合");
            btn.forEach(function (item) {
                let x = item.bounds().centerX()
                let y = item.bounds().centerY()
                sleep(1000)
                message("点击【" + t + "】区域：" + click(x, y) + x + y)
            });
        }
    } else {
        message("点击【" + t + "】：" + text(t).click())
    }
}

function clickTextRightBtn(t) {
    let btn = textStartsWith(t).findOnce()
    if (!btn) {
        message(`没有【${t}】了！`)
        return false
    }
    let y = btn.bounds().top
    let x = 950;
    message("点击【" + t + "】右侧按钮：" + click(x, y));
    sleep(1000);
    return true
}
function message(t) {
    console.log(t)
    toast(t)
}
function goBack() {
    back()
    // swipe(10, 1300, 250, 1300, 500)
    message("返回")
}


