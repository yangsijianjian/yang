// ==UserScript==
// @name         Remove Xiaohongshu Live Tap Tags
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  移除小红书直播页面的 TAP 标签
// @author       yang
// @match        *://www.xiaohongshu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeTapTags() {
        let tapElements = document.querySelectorAll('[data-tap], .tap-class, .some-other-class'); // 根据实际情况调整选择器
        tapElements.forEach(element => element.remove());
        console.log('小红书直播 TAP 标签已移除');
    }

    // 监听 DOM 变化，防止动态加载的内容重新出现
    let observer = new MutationObserver(removeTapTags);
    observer.observe(document.body, { childList: true, subtree: true });

    // 初始执行
    removeTapTags();
})();