---
title: swan.getEnvInfoSync
header: develop
nav: api
sidebar: swan-getEnvInfoSync
---
 
> 基础库 2.0.28 版本开始支持。

**解释**：获取运行环境信息同步接口

 
## 方法参数 

无 


### 同步返回参数说明  

|参数  |类型|说明 |
|---- | ---- |---|---|
|appKey  |string| 智能小程序 App Key |
|appName |string|  智能小程序名称   |
|lastAppURL |string|  智能小程序最近一次打开的调起协议  |
|sdkVersion |string|  基础库版本   |
|scheme |string|  调起协议的协议头   |
|env |string|  智能小程序的版本（基础库 3.90.12 开始支持）。有效值：development，trial，production 。<br>development 代表开发版本；<br>trial 代表体验版本;<br>production 代表线上版本。  |

## 示例

<a href="swanide://fragment/6ff3d4ccb4b7868321c5afa04f24df321577107079176" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_getEnvInfoSync.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>




### 图片示例


<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/getEnvInfoSync.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 




* 在 swan 文件中

```html
<view class="container">
    <view class="card-area">
        <view class="list-area border-bottom" s-for="item in infoList">
        <view class="result-item">
            <text class="result-item-key-6">{{item.chinaName}}</text>
            <text class="result-item-value">{{item.value}}</text>
        </view>
        </view>
        <view class="button-group">
            <button bind:tap="getEnvInfoSync" type="primary" hover-stop-propagation="true">获取运行环境信息</button>
        </view>
    </view>
    <view class="page-title">
        <view class="page-title-line"></view>
        <view class="page-title-text">getEnvInfoSync</view>
    </view>
</view>
```

* 在 js 文件中

```js
let res = swan.getEnvInfoSync();
// 基础库 3.140.1 之前，无法判断接口是否调用失败
// 基础库 3.140.1 及以后，通过 instanceof 来判断接口是否调用失败
if (!(res instanceof Error)) {
    console.log('getEnvInfoSync success', res);
}
else {
    console.log('getEnvInfoSync fail', res.message);
}
```

 ##  Bug & Tip 
* 基础库 3.140.1 之前，无法判断接口是否调用失败。
* 基础库 3.140.1 及以后，接口调用失败时会返回一个标准的`Error`对象，可通过`instanceof`来判断接口是否调用失败。

