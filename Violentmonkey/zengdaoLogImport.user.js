// ==UserScript==
// @name        禅道日志导出 - yuntongxun.com
// @namespace   Violentmonkey Scripts
// @match       https://zendao.yuntongxun.com/pro/effort-calendar.html
// @grant       none
// @version     1.0
// @author      fuym
// @description 2021/9/24 下午6:12:18
// @require https://unpkg.com/dayjs@1.8.21/dayjs.min.js
// @require https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js
// ==/UserScript==

var utils = {
    createButton: () => {
        let button = document.createElement("button");
        button.style = 'background: #f1f1f1;border: 1px solid #ccc;padding: 5px 10px;border-radius: 4px;margin-right: 10px;';
        return button;
    },
    createCopyToClipboardBtn: (parentDom, btnDom, txt, innerText) => {
        let button = utils.createButton();
        button.id = btnDom.substring(1);
        button.innerText = innerText;
        $(parentDom).append(button)
        new ClipboardJS(btnDom, {
            text: (trigger) => {
                console.log(txt)
                return txt;
            }
        });
    },
    getHtml: (url) => {
        $.ajax({
            method: "get",
            url: url,
            success: (res) => {
                return res
            }
        })
    }
}

let ImportLog = () => {
    let today = dayjs().format('YYYY-MM-DD')
    let weekstart = dayjs().add(-1, 'day').startOf('week').add(1, 'day').format('YYYY-MM-DD');
    let weekend = dayjs().add(-1, 'day').endOf('week').add(1, 'day').format('YYYY-MM-DD')

    let getYearLogs = () => {
        return new Promise((resolve) => {
            $.ajax({
                method: "get",
                url: "https://zendao.yuntongxun.com/pro/effort-ajaxGetEfforts-fuym-2021.html",
                success: (res) => {
                    resolve(JSON.parse(res))
                }
            })
        })
    }
    let initBtn = async () => {
        let yearLogs = await getYearLogs();
        let weekLogTxt = "";
        let todayLogTxt = "";
        for (let l = yearLogs.length - 1; l > 0; l--) {
            let log = yearLogs[l]
            if (dayjs(log.end) < dayjs(weekstart)) {
                break;
            } else {
                weekLogTxt += log.title.substring(3) + "\t" + "付亦敏" + "\t" + "已完成" + "\t" + "王松林" + "\t" + "暂无" + "\t" + "暂无" + "\t" + log.end + "\r\n";

                if (log.end == today) {
                    todayLogTxt += log.title.substring(3) + "\t" + "低" + "\t" + "" + "\t" + "王松林" + "\t" + log.start + "\t" + log.start + "\t" + log.start + "\t" + log.start + "\t" + log.consumed + "\r\n";
                }
            }
        }

        if (ClipboardJS.isSupported()) {
            if (todayLogTxt != "") {
                utils.createCopyToClipboardBtn("#mainMenu", "#copyTodayButton", todayLogTxt, "复制本日日志")
            }
            if (weekLogTxt != "") {
                utils.createCopyToClipboardBtn("#mainMenu", "#copyWeekButton", weekLogTxt, "复制一周日志")
            }
        }
    }
    return {
        initBtn
    }
}

ImportLog().initBtn()

// function getLogDetail(url) {
//     $.ajax({
//         method: "get",
//         url: url,
//         success: (res) => {
//             var aHrefRegExp = /(?<=a href=').*?(?=')/gi;
//             let arr = res.toLowerCase().match(aHrefRegExp)
//             console.log(arr)
//             let url = arr[0]
//             $.ajax({
//                 method: "get",
//                 url: url,
//                 success: (res) => {
//                     let taskInfo = $(res).find('.detail-content table tr')
//                     console.log(taskInfo)
//                 }
//             })
//         }
//     })
// }
