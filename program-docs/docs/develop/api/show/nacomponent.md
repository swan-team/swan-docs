---
title:  swan.showFavoriteGuide
header: develop
nav: api
sidebar: nacomponent
webUrl: https://qft12m.smartapps.cn/swan-api/show-favorite-guide/show-favorite-guide
---

  

> 引导组件有统一的策略，若用户未执行过关注操作，则3天内不再出现引导组件；若用户执行过关注操作，则引导组件对该用户将不再出现。最低支持版本 3.20.4 。工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)。

**解释**：支持在小程序内调起关注小程序引导组件，引导用户关注小程序。引导组件设计文档详见：<a href="https://smartprogram.baidu.com/docs/design/component/guide_add/">关注小程序引导</a>。

 
## 方法参数

Object object

### `object`参数说明 ：

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|type |String | 否 | bar| 引导组件类型，有效值： bar,tip。 |
|content |String| 否 |bar: 关注小程序；<br> tip: 关注小程序，下次使用更便捷。| 引导组件文字，不支持开发者自定义。|
|success |Function  |  否 | | 接口调用成功的回调|
|fail   | Function |   否  | | 接口调用失败的回调函数|
|complete  |  Function |   否 | | 接口调用结束的回调函数（调用成功、失败都会执行）|


### 触发时机开发者可自定义 
 以下为建议触发场景 
1. 支付后场景
2. 购买会员、升级会员、知识付费等场景
3. 运营活动等场景
4. 景区导览、线下活动等线下扫码场景


## 示例

<a href="swanide://fragment/024ee96a91663454813764f9635b7b331578310871377" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_showFavoriteGuide.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 
目前关注小程序引导组件支持以下两种类型，开发者可根据自身业务进行选择：
### 浮层引导(type=bar)
    一直展现：用户点击关闭，浮层引导消失；点击关注按钮可直接关注小程序。
:::codeTab

```js
    swan.showFavoriteGuide({
        type: 'bar',
        content:'关注小程序'
    })
```
:::

 
### 气泡引导(type=tip)
    引导组件 5s 后自动消失，组件箭头指向小程序菜单。
 
:::codeTab

```js
swan.showFavoriteGuide({
    type: 'tip',
    content: '关注小程序，下次使用更便捷。'
})
```
:::
用户通过引导关注组件“关注小程序”后，可以在百度APP-我的“我的小程序”中看到它。

##   Bug & Tip 

  Bug：浮层引导(type=bar)时，用户点击左侧关闭也会触发此API的success回调。





