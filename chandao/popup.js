function test(tabId) {
    // 动态执行JS文件
    chrome.tabs.executeScript(tabId, { file: 'some-script.js' });
}
// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}
getCurrentTabId(test)
