---
title: swan.onCompassChange
header: develop
nav: api
sidebar: swan-onCompassChange
---


 

> 工具和真机中的实现有区别，详见[API 实现差异](https://smartprogram.baidu.com/docs/develop/devtools/diff/)


**解释**：监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用swan.stopCompass停止监听。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/getCompass.png"  class="demo-qrcode-image" />

**方法参数**：Function callback

**`callback`参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|direction |Number |是| |面对的方向度数|

**示例**：
<a href="swanide://fragment/dd5f2caff98f590d42027517729532851569479416199" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```javascript
Page({
    onReady() {
        let that = this;
        swan.onCompassChange(function (res) {
            that.setData({
                direction: parseInt(res.direction, 10)
            });
            that.updateProgress(res.direction);
        });
    },
    updateProgress(direction) {
        let leftdeg;
        let rightdeg;
        let deg = +direction;
        if (deg > 180) {
            leftdeg = 180;
            rightdeg = 180 - deg;
        } else {
            leftdeg = -deg;
            rightdeg = 0;
        }
        this.setData({
            leftdeg: leftdeg,
            rightdeg: rightdeg
        });
    }
});

```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败    |

* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确      |
|1001|设备不支持  |

