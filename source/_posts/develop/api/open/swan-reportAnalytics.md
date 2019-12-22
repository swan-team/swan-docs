---
title: swan.reportAnalytics
header: develop
nav: api
sidebar: swan-reportAnalytics
---
 

**解释**：自定义分析数据上报接口。使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_reportAnalytics.png"  class="demo-qrcode-image" />

**方法参数**：String eventName, Object object

**`eventName`参数说明**：事件名

**`data`参数说明**：上报的自定义数据，key为配置中的字段名，value为上报的数据。

**图片示例**

![image](https://b.bdstatic.com/miniapp/images/paramManage.png)

![image](https://b.bdstatic.com/miniapp/images/reportAnalysise.png)

**代码示例**

<a href="swanide://fragment/18e398f43cf58a399f549916c7b9c9201558343090267" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="reportAnalytics">reportAnalytics</button>
</view>
```

* 在 js 文件中

```js
Page({
    reportAnalytics() {
        swan.reportAnalytics('purchase', {
            price: 120,
            color: 'red'
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
```