---
title: SWAN路由
header: develop
nav: framework
sidebar: router
---

路由
-----

<notice>解释： </notice>使用 SWAN 开发 App，需要使用 SWAN 的路由机制，进行页面跳转、关闭等操作。


**对于更改路由的触发方式，解释如下：**

|路由方式|触发时机|
|--------|--------|
|打开新页面|调用 API swan.navigateTo 或使用组件<navigator open-type="navigateTo"/>|
|页面重定向|调用 API swan.redirectTo 或使用组件<navigator open-type="redirectTo"/>|
|页面返回|调用 API swan.navigateBack 或使用组件<navigator open-type="navigateBack"/>|
|Tab 切换|调用 API swan.switchTab 或使用组件<navigator open-type="switchTab"/>|
|SWAN 重启|调用 API swan.reLaunch 或使用组件<navigator open-type="reLaunch"/>|
