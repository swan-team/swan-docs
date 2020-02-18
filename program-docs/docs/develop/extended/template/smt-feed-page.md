---
title: 信息流模板
header: develop
nav: extended
sidebar:  template
webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-feed-page/smt-feed-page
---

**解释**：信息流模板：包含下拉刷新、加载、多种信息流子项（纯文本、左文右图、大图、多图及视频模式）。

## 示例

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-feed-page.png"  class="demo-qrcode-image" />

### 图片示例

<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/miniapp/images/smt-feed-page.gif"></div></div>

### 使用方法

1. 在小程序根目录下执行如下命令行，引入页面模板。

``` 
npm i @smt-ui-template/page-feed
```


2. 进入page-feed文件夹，安装所有模板依赖

``` 
npm i 
```

### 代码示例
``` html
<smt-feed
    s-if="!showPageStatus"
    class="smt-feed pull-down-refresh"
    pull-to-refresh
    bind:refresh="onRefresh"
    bind:scrolltolower="scrollToLower"
    bind:scroll="scrollHandler"
    text="{{text}}"
>
    <smt-feed-item 
        s-for="item in list"
        theme="{{item.theme}}"
        content="{{item.content}}" 
        video="{{item.video}}"
        status="{{item.status}}"
        bindfeeditemtap="feedItemTap"
    >
    </smt-feed-item>
    <smt-spin s-if="loaded" status="{{status}}" bind:tap="reload"></smt-spin>
</smt-feed>
 <smt-page-status
    s-if="showPageStatus"
    class="content-loading"
    icon="{{loadingIcon}}"
    loading="{{loading}}"
    showBtn="{{loadingBtn}}"
    title="{{loadingTitle}}"
    loadingTitle="正在加载..."
    bind:smtreloading="reloadPage">
</smt-page-status>

```

## Bug & Tip

* Tip：模板中使用的是测试数据，你需要从接口中获取真实的数据。
* Tip：模板中内置了部分数据记录，你可以定义自己需要记录的数据。
* Tip: 页面模板功能从开发者工具 v2.25.1-rc 版本开始支持

