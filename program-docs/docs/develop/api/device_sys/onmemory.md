---
title:  swan.onMemoryWarning
header: develop
nav: api
sidebar:  onmemory
# webUrl: https://qft12m.smartapps.cn/swan-api/onMemoryWarning/onMemoryWarning
---



> 工具和真机中的实现有区别，详见[API 实现差异](https://smartapp.baidu.com/docs/develop/devtools/diff/)

**解释**：监听内存不足的告警事件，Android 下有告警等级划分，只有 LOW 和 CRITICAL 会回调开发者；iOS 无等级划分。
**Web 态说明**： Web 态环境不支持监听内存情形，该事件不会触发。


## 方法参数

Function callback

### `callback`参数说明

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|level |Number |是| |仅 Android 有该字段，对应系统内存告警等级宏定义。|

Android下告警等级对应系统宏：

```
TRIM_MEMORY_RUNNING_LOW = 10
TRIM_MEMORY_RUNNING_CRITICAL = 15
```

## 示例

<a href="swanide://fragment/1295c87444ec27f3acbc84e5616687441581940355771" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_onMemoryWarning.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

### 图片示例
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/onMemoryWarning.jpg">
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
        <view class="display-area">
            <view class="tip-week">当前设备内存信息监听中</view>
            <view class="result-area-default">{{data}}</view>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        data: '内存充足',
        hasMemory: true
    },
    onShow() {
        let that = this;
        swan.onMemoryWarning(function (res) {
            console.log('onMemoryWarningReceive', res);
            if(res.level === 10){
                that.setData('data', '内存不足')
            }
            else{
                that.setData('data', '内存充足')
            }
        });
    }
});
```


##  错误码
###  Android

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
|1001|执行失败|

###  iOS

|错误码|说明|
|:--|:--|
|202|解析失败，请检查参数是否正确      |
