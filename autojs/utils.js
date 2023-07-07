// 全局函数
var utils = {
    init: function () {
        auto("fast");
        setScreenMetrics(1081, 2400);
        utils.message('开始执行');
    },
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
        let y = btn.bounds().bottom
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

module.exports = utils;