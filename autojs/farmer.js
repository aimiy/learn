// 全局函数
var utils = {
    textClick: function (t, type, isArea) {
        if (!text(t).exists()) {
            if (type == "wait") {
                utils.message("等待【" + t + "】")
                text(t).waitFor()
            }
            sleep(3000)
        }
        if (!text(t).exists()) {
            utils.message("没有【" + t + "】按钮")
            return;
        }
        if (isArea == "area") {
            let btn = text(t).find();
            if (btn.empty()) {
                utils.message("没找到╭(╯^╰)╮" + t);
            } else {
                utils.message("找到" + btn + "集合");
                btn.forEach(function (item) {
                    let x = item.bounds().centerX()
                    let y = item.bounds().centerY()
                    sleep(1000)
                    utils.message("点击【" + t + "】区域：" + click(x, y) + x + y)
                });
                sleep(3000)
            }
        } else {
            utils.message("点击【" + t + "】：" + text(t).click())
            sleep(3000)
        }
    },
    locationClick: function (x, y, msg) {
        utils.message((msg ? msg : `x:${x},y:${y}`) + click(x, y))
        sleep(3000)
    },
    clickTextRightBtn: function (t) {
        let btn = textStartsWith(t).findOnce()
        if (!btn) {
            utils.message(`没有【${t}】了！`)
            return false
        }
        let y = btn.bounds().top
        let x = 950;
        utils.message("点击【" + t + "】右侧按钮：" + click(x, y));
        sleep(1000);
        return true
    },
    message: function (t) {
        console.log(t)
        toast(t)
    },
    outBack: function (appName) {
        if (text(appName).exists()) {
            utils.goBack()
            sleep(3000)
            utils.outBack(appName)
        } else {
            utils.message("离开" + appName)
        }
    },
    goBack: function () {
        back()
        // swipe(10, 1300, 250, 1300, 500)
        utils.message("返回")
    },
    // condition文字存在，就点击该文字，如果后续有多个传入，则只依次点击后续文字区域
    textConditionClickText: function (condition) {
        let btntextArr = [].slice.call(arguments, 1)
        if (text(condition).exists()) {
            if (btntextArr.length) {
                for (let btntext of btntextArr) {
                    utils.textClick(btntext, "nowait")
                }
            } else {
                utils.textClick(condition, "nowait")

            }
        }
    },
    textConditionClickLocation: function (condition, x, y, tip) {
        if (text(condition).exists()) {
            utils.locationClick(x, y, tip)
        }
    }
}
// 一些细分的任务
var task = {
    manureTask: function () {
        utils.message("查找【施肥】循环任务");
        utils.textConditionClickText("果树升级啦", "好的")
        utils.textConditionClickText("立即领奖", "立即领奖", "立即领取")
        utils.textConditionClickText("开心收下", "开心收下")
        if (textStartsWith("选择任一礼物").findOnce()) {
            sleep(3000)
            utils.message("点击【选择礼物】区域：" + click(700, 1450))
            sleep(4000)
        }
        utils.textConditionClickText("我知道了", "我知道了")
        utils.textConditionClickText("立即领取", "立即领取")
        utils.textConditionClickText("关闭")
        utils.textConditionClickText("继续努力")
        // utils.message("点击【关闭弹窗】区域：" + click(508, 1875))

        let btn = textStartsWith("还差").findOnce()
        if (!btn) {
            utils.message("没有【施肥】任务了！")
            return;
        }
        utils.message("点击【施肥】区域：" + click(500, 1877))
        sleep(2000)
        task.manureTask();
    },
    feedChickens: function () {
        if (text("去喂鸡").exists()) {
            utils.textClick("去喂鸡", "nowait")
            sleep(5000)
        } else {
            return;
        }
        // TODO：点击两边小鸡有问题，领取也有问题
        utils.message("点击【喂饲料】区域：" + click(950, 2180));
        sleep(2000)
        if (text("找小鸡").exists()) {
            utils.textClick("找小鸡")
            sleep(5000)
            utils.message("点击【两边小鸡】区域：" + click(450, 1500) + click(750, 1500))
            sleep(5000)
            utils.message("点击【喂饲料】区域：" + click(950, 2180));
            sleep(5000)
        }

        utils.message("点击【领饲料】区域：" + click(250, 2180));
        sleep(5000);
        utils.textClick("领取");
        sleep(2000)
        swipe(510, 1900, 500, 1000, 1000)
        sleep(2000)
        utils.textClick("领取");
        sleep(2000)
        swipe(510, 1900, 500, 1000, 1000)
        swipe(510, 1900, 500, 1000, 1000)
        sleep(5000)
        utils.textClick("领取");
        utils.textClick("领取");
        utils.outBack("蚂蚁庄园")
    },
    treePower: function () {
        utils.clickTextRightBtn("去森林收自己能量/给好友浇水")
        sleep(5000)
        if (text("蚂蚁森林").exists()) {
            utils.message("点击【收能量】区域：")
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
            sleep(2000)
            utils.message("点击【收能量】区域：")
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
            utils.outBack("蚂蚁森林")
        } else {
            return;
        }
    },
    rabbitTask: function () {
        utils.locationClick(194, 1580, "点击领取兔子肥料区域：")
        utils.textConditionClickText("关闭")
    },
    friendsTree: function () {
        utils.message("点击【好友林】区域：" + click(250, 1800))
        sleep(5000)
        if (!text("农场好友林").exists()) {
            utils.message("再次点击【好友林】区域：" + click(250, 2000))
            sleep(5000)
        }
        if (!text("农场好友林").exists()) {
            console.log("进不去好友林界面，请确认参数")
            return
        }
        let btn = textStartsWith("Ta昨天施肥了").find()
        if (!btn.empty()) {
            btn.forEach(function (item) {
                let y = item.bounds().top
                let x = 950;
                utils.message("点击【收肥料】按钮：" + click(x, y));
                sleep(2000);
                utils.message("点击【帮施肥】按钮：" + click(x, y));
                sleep(2000);
            });
        } else {
            utils.message("【收肥料】任务为空");
        }
        utils.goBack()
        sleep(3000)
    },
    readTask: function (t) {
        utils.message("查找【" + t + "】循环任务");
        let res = utils.clickTextRightBtn(t);
        if (res) {
            sleep(2000)
            if (text("搜索有福利").exists()) {
                utils.message("点击【关键词搜索】区域：" + click(400, 800));
                sleep(16000)
                utils.goBack();
                sleep(1000);
            } else {
                utils.message("滑动并等待15s")
                swipe(510, 1000, 500, 500, 2000)
                sleep(2000)
                swipe(510, 1000, 500, 500, 2000)
                sleep(2000)
                swipe(510, 1000, 500, 500, 2000)
                sleep(2000)
                swipe(510, 1000, 500, 500, 2000)
                sleep(2000)
                swipe(510, 1000, 500, 500, 2000)
                sleep(2000)
            }
            utils.goBack();
            sleep(1000);
            task.readTask(t);
        } else {
            return;
        }
    },
    taobaoManureTask: function () {
        let noTask = 0;
        var main = function () {
            utils.locationClick(500, 1500, "点击【是否施肥】区域：")
            if (text("礼包内含无门槛红包和超多肥料").exists()) {
                noTask = 0;
                utils.textConditionClickText("关闭")
                manureTimes()
                main()
            } else {
                // 有可能领到了礼包并且自动关闭了，两次再定性为没有施肥任务
                noTask += 1;
                utils.message(`第${noTask}次发现没有施肥弹窗`)
                if (noTask < 3) {
                    sleep(2500)
                    main()
                    return
                }
                utils.message("没有【施肥】任务了！")
                sleep(3000)
            }
        }
        var manureTimes = function () {
            for (let i = 0; i <= 5; i++) {
                utils.locationClick(500, 1800, "点击【施肥】区域：")
                utils.textConditionClickText("立即领取", "关闭")
                utils.textConditionClickText("下单提取", "关闭")
            }
        }
        main()
    },
    answerQuestion: function () {
        utils.message("查找答题")
        if (text("去答题").exists()) {
            utils.textClick("去答题", "wait")
            sleep(2000)
            utils.message("点击题目答案：" + click(500, 2000))
            sleep(2000)
            utils.message("领取答题奖励：" + click(500, 2190))
        } else {
            utils.message("已经答过题")
        }
    }
}

auto("fast");
setScreenMetrics(1081, 2400);
utils.message('开始执行');
launchApp("支付宝");
utils.textClick("芭芭农场", "wait", "area")
sleep(6000)
if (!textStartsWith("芭芭农场").findOnce()) {
    sleep(6000)
}
zhifubaoManure()
toTaobao()
taobaoManure()

// task.manureTask()
// task.taobaoManureTask()
// task.rabbitTask()
// task.feedChickens()
// task.taobaoManureTask()
utils.message("脚本执行结束！")

function zhifubaoManure() {
    utils.textConditionClickText("开心收下");
    // 施肥
    utils.locationClick(900, 1480, "点击领取肥料区域：")
    utils.textConditionClickLocation("去领更多肥料", 500, 1821, "点击【关闭弹窗】区域：")

    task.manureTask()
    utils.textClick("任务列表", "wait")
    task.feedChickens()
    swipe(510, 1900, 500, 1000, 1000)
    sleep(2000)
    task.treePower()

    utils.textClick("领取")
}
function toTaobao() {
    swipe(510, 1900, 500, 1000, 1000)
    sleep(1000)
    utils.clickTextRightBtn("逛淘宝芭芭农场领3000肥料")
    utils.clickTextRightBtn("逛淘宝芭芭农场领900肥料")
    sleep(10000)
    if (text("继续赚肥料").exists()) {
        utils.textClick("继续赚肥料")
        sleep(1000)
        click(1000, 600)
    } else {
        utils.textClick("前往手机淘宝-芭芭农场", "wait")
        sleep(6000)
    }
};
function taobaoManure() {
    utils.textConditionClickText("继续努力")
    utils.textConditionClickText("立即领取")
    utils.textConditionClickText("退出比赛")
    if (textStartsWith("合种亲密度").findOnce()) {
        utils.textClick("立即领取")
        sleep(2000)
        // utils.textClick("立即领取")
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
    // utils.textConditionClickText("翻土拿奖励")
    // utils.textConditionClickText("跟着小手去翻土")
    task.rabbitTask()
    task.friendsTree()
    utils.locationClick(887, 1450, "点击【点击领取】肥料区域：")

    utils.textConditionClickText("明日7点可领", "关闭")

    task.taobaoManureTask()

    utils.locationClick(800, 1900, "点击集肥料区域：")

    utils.textClick("去签到")
    utils.textClick("去领取");
    task.readTask("浏览15秒得");
    let btn = textStartsWith("逛逛支付宝芭芭农场").findOnce()
    if (btn) {
        utils.message("点击去支付宝：" + btn.click())
        sleep(3000)
        launchApp("淘宝");
        sleep(5000)
    }
    task.answerQuestion()
};

