---
title: ad 广告
header: develop
nav: component
sidebar: ad
---

 

**解释**：广告组件，按照<a href="https://smartprogram.baidu.com/docs/introduction/adopen/">流量主开通指引</a>中的操作获取广告组件代码。

##  属性说明 

|属性名 |类型  |默认值  |必填|说明|
|:---- | :---- | :---- |:---- |:---- |
|appid|String| |是|小程序应用 ID|
|apid|String| |是|小程序广告位 ID|
|type|String|feed|否|广告类型：banner/feed，需和百青藤平台上的代码位类型相匹配。参考下面的type 有效值|
|updatetime|String||否|更改该属性，可以触发广告刷新|
|binderror|EventHandle||否|广告组件加载失败时触发|
|bindload|EventHandle||否|广告组件加载完成触发|
|bindclose|EventHandle||否|关闭广告组件时触发|
|bindstatus|EventHandle||否|贴片类型广告播放期间触发|


###  type 有效值 

| 值 | 说明 |
|:--- |:----- |
| banner | 横幅类型 |
| feed | 信息流类型 |
| pre-roll | 前贴类型 |
| post-roll | 后贴类型 |

### binderror 事件触发
触发时机： 代码执行异常以及状态不符合广告要求

返回参数:

| 代码 | 状态    | 说明 |
|:---- | :---- | :----  |
| 1001-1 | 内部错误 | 初始化失败 |
| 1001-2 | 内部错误 | 广告返回执行异常 |
| 1001-3 | 内部错误 | 渲染广告异常 |
| 1001-4 | 内部错误 | 广告异常 |
| 1001-5 | 内部错误 | 广告缓存异常 |
| 1002-1 | 广告请求 | 广告返回异常 |
| 1003-2 | 无可用广告 | 数据层级不对 |
| 1003-3 | 无可用广告 | 广告内容不完整 |
| 1004-1 | 媒体接入异常 | web化广告不渲染 |
| 1004-2 | 媒体接入异常 | 视频贴片广告组件放置不在video内 |
| 1004-3 | 媒体接入异常 | 视频贴片当前是非同层渲染 |



### bindstatus 事件触发
触发时机:事件触发在视频贴片的情况下
返回参数如下
``` javascript
 statusFunc(e) {
    // e = {status:''}  具体如下
 }
```
|属性|说明|
|:---- | :---- | 
| videoend | 视频结束， 触发时机：1、如果有广告返回，广告播放结束。2、如果无广告返回|
| show | 广告视频播放中 |
| close | 广告播放结束  |
| noAd | 无广告返回|

## 示例

<a href="swanide://fragment/6eb7c8f7bac1a321d2e81a5e2637871f1581262711581" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/ad.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src=" https://b.bdstatic.com/searchbox/icms/searchbox/img/ad.jpg">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1 :横幅类型


```html
<div class="ad-container">
    <ad appid="a764cad8" apid="6511101" type="banner"></ad>
</div>
```


>* 从百青藤获取的代码，是`<ad></ad>`标签组件，把这段代码，嵌入到页面中你需要展现广告的位置处，然后给他一些样式就可以，样式控制只能到`<ad>`这一层，内部的展示效果对小程序的开发者来说没有权限。
>* banner样式的背景色默认透明，建议开发者自定义背景色。通过（`div style="background-color: #fff"`）自行定义。其中`#fff`代表白色，可以根据广告场景自行修改参数。

###  代码示例 2 ：信息流小图类型


```html
<div class="ad-container">
    <ad appid="b2f8234f" apid="6315886" type="feed"></ad>
</div>

```

###  代码示例 3 ：信息流三图类型


```html
<div class="ad-container">
        <ad appid="f9acb760" apid="6010857" type="feed"></ad>
</div>

```

###  代码示例 4 ：信息流左图类型


```html
<div class="ad-container">
    <ad appid="b2f8234f" apid="6315886" type="feed"></ad>
</div>

```

###  代码示例 5 ：信息流右图类型


```html
<div class="ad-container">
    <ad appid="b91addc9" apid="6011084" type="feed"></ad>
</div>

```

###  代码示例 6 ：信息流视频类型


```html
<div class="ad-container">
    <ad appid="a764cad8" apid="6537379" type="feed"></ad>
</div>

```


###  代码示例 7 ：前贴片类型


```html
<video src="">
    <ad appid="b2f8234f" apid="6315886" type="pre-roll"></ad>
</video>

```

###  代码示例 8 ：后贴片类型


```html
<video src="">
    <ad appid="b2f8234f" apid="6315886" type="post-roll"></ad>
</video>

```


##   Bug & Tip 

* Tip：从百青藤获取的代码，是ad组件，把这段代码，嵌入到页面中你需要展现广告的位置处，然后给他一些样式就可以，样式控制只能到ad这一层，内部的展示效果对小程序的开发者来说没有权限。
* Tip：banner 样式的背景色默认透明，建议开发者自定义背景色。通过（`div style="background-color: #fff"`）自行定义。其中`#fff`代表白色，可以根据广告场景自行修改参数。
* Tip：信息流广告可在百青藤平台配置四种样式：大图、多图、左图右文、右图左文。
* Tip：视频贴片类型基于同层渲染，需swan-core版本3.70.x版本以上。
* Tip：视频前贴 ios 11.17之前广告的视频播放是和媒体公用一个video，会出现video事件多次触发，安卓暂无影响
* Tip: 视频后贴 暂时和媒体公用一个video，会出现video事件多次触发
* Tip: 视频贴片广告播放期间切换video 的src变化，都会导致广告中止。
