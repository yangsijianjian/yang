(function() {
    'use strict';

    function removeLiveTab() {
        let liveTab = document.evaluate(
            "//div[contains(text(), '直播')]", 
            document, 
            null, 
            XPathResult.FIRST_ORDERED_NODE_TYPE, 
            null
        ).singleNodeValue;

        if (liveTab) {
            liveTab.style.display = 'none'; // 也可以改成 liveTab.remove();
            console.log('小红书「直播」标签已移除');
        }
    }

    // 监听 DOM 变化，防止动态加载的内容重新出现
    let observer = new MutationObserver(removeLiveTab);
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始执行
    removeLiveTab();
})();