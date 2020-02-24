---
title: 页面状态模板
header: develop
nav: extended
sidebar:  template
webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-status-page/smt-status-page
---

**解释**: 页面状态模板，可通过配置theme主题选择不同的页面状态：loadingStatus加载中，noWifiStatus无网络，noContent暂无内容。
## 示例

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-status-page.png"  class="demo-qrcode-image" />

### 图片示例

<div class="m-doc-custom-examples"><div class="m-doc-custom-examples-correct"><img src="https://b.bdstatic.com/miniapp/images/smt-status-page.gif"></div></div>

### 使用方法

1. 在小程序根目录下执行如下命令行，引入页面模板。

``` 
npm i @smt-ui-template/page-status
```


2. 进入page-status文件夹，安装所有模板依赖

``` 
npm i 
```

### 代码示例
:::codeTab
```swan
<view class="card-panel">
    <smt-page-status
        s-if="{{theme == 'loadingStatus'}}"
        class="area-content"
        loading="{{loadingStatus.loading}}">
    </smt-page-status>
    <smt-page-status
        s-if="{{theme == 'noWifiStatus'}}"
        class="area-content"
        loading="{{noWifiStatus.loading}}"
        icon="{{noWifiStatus.icon}}"
        title="{{noWifiStatus.title}}"
        desc="{{noWifiStatus.desc}}"
        bind:smtreloading="reloading"
        data-theme="{{theme}}">
    </smt-page-status>
    <smt-page-status
        s-if="{{theme == 'noContent'}}"
        class="area-content"
        loading="{{noContent.loading}}"
        title="{{noContent.title}}"
        desc="{{noContent.desc}}"
        showBtn="{{noContent.showBtn}}">
    </smt-page-status>
</view>
```
:::
3. **可在js中配置不同的theme数据，展示不同的模板状态**：loadingStatus加载中，noWifiStatus无网络，noContent暂无内容。

## Bug & Tip

* Tip：模板中使用的是测试数据，你需要从接口中获取真实的数据。
* Tip：模板中内置了部分数据记录，你可以定义自己需要记录的数据。
* Tip: 页面模板功能从开发者工具 v2.25.1-rc 版本开始支持

