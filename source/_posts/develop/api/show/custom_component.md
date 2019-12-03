---
title: swan.nextTick
header: develop
nav: api
sidebar: custom_component
---

 

> 基础库 3.15.104 开始支持，低版本需做兼容处理。

**解释**：延迟一部分操作到下一个时间片再执行。（类似于 setTimeout）


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_nextTick.png" class="demo-qrcode-image" />

**方法参数**：Function callback

**`callback`参数说明**：
自定义组件中的 setData 和 triggerEvent 等接口为同步操作，当这几个接口被连续调用时，都是在一个同步流程中执行完的，因此若逻辑不当可能会导致出错。

**举例**：当父组件的 setData 引发了子组件的 triggerEvent，进而使得父组件又进行了一次 setData，期间有通过 s-if 语句对子组件进行卸载，就有可能引发奇怪的错误，所以对于不需要在一个同步流程内完成的逻辑，可以使用此接口延迟到下一个时间片再执行。

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/image/nextTick.png">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/645949899f4d4951ea0eb15ddb6c66101574773397207" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
// 自定义组件逻辑 (custom.js)
Component({
    properties: {
        name: {
            type: String,
            value: 'swan'
        }
    },
    data: {
        age: 1,
        number: ''
    },
    methods: {
        nextTick() {
            this.setData({number: 1}) // 直接在当前同步流程中执行
            console.log(this.data.number);
            swan.nextTick(() => {
                this.setData({number: 3}) // 在当前同步流程结束后，下一个时间片执行         
                console.log(this.data.number);
            })
            this.setData({number: 2}) // 直接在当前同步流程中执行
            console.log(this.data.number);
        }
    }
});
```
