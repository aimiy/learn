// 一些细分的任务
var task = {
    manureTask: function () {
        utils.message("查找【施肥】循环任务");
        utils.textConditionClickText("果树升级啦", "好的")
        utils.textConditionClickText("立即领奖", "立即领奖", "立即领取")
        utils.textConditionClickText("开心收下")
        if (textStartsWith("选择任一礼物").findOnce()) {
            sleep(3000)
            utils.message("点击【选择礼物】区域：" + click(700, 1450))
            sleep(4000)
        }
        utils.textConditionClickText("我知道了", "我知道了")
        utils.textConditionClickText("立即领取", "立即领取")
        utils.textConditionClickText("关闭")
        utils.textConditionClickText("继续努力")

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

        if (text("小鸡肥料厂").exists()) {
            if (text("+雇小鸡产肥").exists()) {
                utils.textClick("+雇小鸡产肥", "nowait")
                sleep(2000)
                if (text("确认雇佣").exists()) {
                    utils.textClick("确认雇佣", "nowait")
                } else {
                    if (text("可雇").exists()) {
                        utils.textClick("可雇", "nowait")
                        sleep(2000)
                        utils.locationClick(580, 2200, "雇佣")
                        sleep(2000)
                        if (text("确认雇佣").exists()) {
                            utils.textClick("确认雇佣", "nowait")
                        }
                    }
                }
            } else {
                utils.locationClick(950, 750, "关闭肥料厂")
            }
        }

        // utils.locationClick(500, 1650, "可能有弹窗，关闭一下")

        utils.message("点击【喂饲料】区域：" + click(950, 2180));
        sleep(2000)
        if (text("找小鸡").exists()) {
            utils.textClick("找小鸡")
            sleep(5000)
            utils.message("点击【两边小鸡】区域：" + click(382, 1500) + click(870, 1500))
            sleep(5000)
            utils.textConditionClickText("确认")// 工作需要确认
            utils.message("点击【喂饲料】区域：" + click(950, 2180));
            sleep(5000)
        }

        utils.message("点击【领饲料】区域：" + click(250, 2180));
        sleep(3000);

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
        utils.clickTextRightBtn("逛一逛蚂蚁森林")
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
    wishGift: function () {
        utils.textConditionClickText("今日领取有效", "领取")
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
    readTask: function (t, maxTimes) {
        if (maxTimes > 0) {
            utils.message("查找【" + t + "】循环任务" + maxTimes);
        } else {
            return;
        }
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
            task.readTask(t, (maxTimes - 1));
        } else {
            return;
        }
    },
    taobaoManureTask: function () {
        let noTask = 0;
        var main = function () {
            utils.locationClick(500, 1500, "点击【是否施肥】区域：")
            if (text("开心收下").exists()) {
                noTask = 0;
                utils.textConditionClickText("开心收下")
                manureTimes()
                main()
            } else if (text("礼包内含无门槛红包和超多肥料").exists()) {
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
                // 施肥的时候会弹出一些窗口
                utils.textConditionClickText("立即领取", "关闭")
                utils.textConditionClickText("下单提取", "关闭")
            }
        }
        main()
    },
    answerQuestion: function () {
        utils.message("查找答题")
        sleep(1000)
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

module.exports = task;