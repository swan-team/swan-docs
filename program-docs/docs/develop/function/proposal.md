---
title: web 化开发建议
header: develop
nav: function
sidebar: proposal
---
### 页面基础信息

[页面基础信息](https://smartprogram.baidu.com/docs/introduction/rank/#%E8%AE%BE%E7%BD%AE%E9%A1%B5%E9%9D%A2%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/) 通过 `swan.setPageInfo() `设置。在 Web 化环境下，页面基础信息会通过 meta 标签插入页面 head 中。
恰当的页面基础信息可以帮助爬虫更精准的理解页面内容。

**页面基础信息的设置应与页面本身的内容相关**。比如：贴吧的一篇贴子详情页，应该以贴子的标题作为页面标题而不是使用“百度贴吧”这样的标题。

> 这里的页面标题与小程序页面 json 配置中设置的`navigationBarTitleText`不同，`navigationBarTitleText`仅用于页面顶部展示；页面基础信息中的 title 不会在页面中展示，而是在 Web 化的 title 标签中。


### 页面跳转
小程序提供了两种页面跳转的方式
- [navigator 组件](/develop/component/nav/)
- [导航 API ](https://smartprogram.baidu.com/docs/develop/api/show/tab_swan-switchTab/)，包括 navigateTo、redirectTo、switchTab、navigateBack、reLaunch
如果两种方式都能满足使用场景，**建议使用 [navigator 组件](/develop/component/nav/) 实现相应的导航功能，以便更好的被搜索引擎理解**。


### 保证任何小程序页面都能独立访问
通常开发者会有个误解，认为小程序只有首页才有访问入口，但其实**小程序的任何一个页面都可能被作为入口访问**，比如搜索结果页可能会分发二级页面，用户也可能通过收藏、分享等操作直接访问二级页面，等。
因此开发者应该保证任何页面都可以不依赖之前的页面数据，独立被访问。

举例说明：
某个小程序有两种页面：文章页和作者介绍页。
用户可从文章页跳转至作者页阅读作者详情。

**错误**的实现方式如下：
**代码示例**
```js
// article.js 在文章页的实现片段：
function goToAuthorPage() {
    // 从server请求作者信息
    const authorInfo = requestAuthorInfo(authorID);
    // 存入全局变量
    getApp().globalData.authorInfo = authorInfo;
    // 跳转到作者页
    swan.navigateTo('/page/author/author');
}

// author.js 在作者页的实现片段：
Page({
    onLoad() {
        // 从全局读取存入的作者信息
        const {authorInfo}  = getApp().globalData;
        // 用作者信息数据渲染页面
        this.setData({authorInfo});
    }
}) 
```
上述示例代码存在的问题是，当用户直接访问作者页 ‘page/author/author’ 时，全局数据中没有存入 authorInfo 数据，导致页面渲染异常。

**推荐**的实现方式是：
**代码示例**
```js
// article.js 在文章页的实现片段：
function goToAuthorPage() {
    // 跳转到作者页
    swan.navigateTo(`/page/author/author?id=${authorID}`);
}

// author.js 在作者页的实现片段：
Page({
    onLoad(query) {
        // 从页面路由参数中获取作者 id
        const authorID = query.id;
        // 根据作者 id 获取作者信息
        const authorInfo = requestAuthorInfo(authorID);
        // 用作者信息数据渲染页面
        this.setData({authorInfo});
    }
}) 
```



### 如何在运行时识别 Web 化环境
在代码中，可以通过 API [getSystemInfo](https://smartprogram.baidu.com/docs/develop/api/device_sys/swan-getSystemInfo/) 判断是否为 Web 化 环境。Web 化环境下，调用 `swan.getSystemInfo() `得到的系统信息中，`platform` 值为`"web"`。

> 通常情况下，为保证抓取内容相关性和用户体验一致性，**不建议开发者区分 Web 化环境做差异化实现**。
> Web 化环境标识主要服务于诸如区分环境统计等需求场景。

**代码示例**
```js
getSystemInfo(e) {
    swan.getSystemInfo({
        success: res => {
            console.log('res', res.platform); // web
        },
        fail: err => {
        
        }
    });
}
```
