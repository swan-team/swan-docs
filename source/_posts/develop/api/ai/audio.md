---
title: swan.ai.textToAudio
header: develop
nav: api
sidebar:  audio
---

 

**解释**：将文本转换为可以播放的 mp3 文件。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/fragment_textToAudio.png"  class="demo-qrcode-image" />

**方法参数**：Object object

**`data` 参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|tex| String|是|- |合成的文本，使用UTF-8编码，小于512个中文字或者英文数字（文本在百度服务器内转换为GBK后，长度必须小于1024字节）。|
|ctp| String|否  | 1 |客户端类型选择，Web端填写固定值1。|
|lan| String|否  | zh |固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh。|
|spd| String|否  |5 |语速，取值0-9，默认为5中语速。|
|pit| String|否  | 5 |音调，取值0-9，默认为5中语调。|
|vol| String|否  | 5 |音量，取值0-9，默认为5中音量。|
|per| String|否  |0 |发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声。|
|success |Function    |否 | |      接口调用成功的回调函数|
|fail |   Function|    否  | |     接口调用失败的回调函数|
|complete  |  Function  |  否   | |    接口调用结束的回调函数（调用成功、失败都会执行）|

**success 返回参数说明**：

|参数 | 类型 | 说明  |
|---- | ---- | ---- |
|filePath | String | 合成的音频文件的路径，此路径为临时路径且在当次回调中有效|

**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/textToAudio.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

<a href="swanide://fragment/b2861370f6a561f81ebeef1dd5861dd51573995603718" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中 

```js
Page({
    data: {
        sourceIndex: 5,
        sourceArray: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        sizeIndex: 5,
        sizeArray: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        countIndex: 5,
        countArray: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        perIndex: 1,
        perArray: ['普通女声', '普通男声', '情感合成-度逍遥', '情感合成-度丫丫'],
        msg: 'hello，这是一段测试语音合成的文字'
    },
    sourceChange(e) {
        this.setData('sourceIndex', e.detail.value);
    },
    sizeChange(e) {
        this.setData('sizeIndex', e.detail.value);
    },
    countChange(e) {
        this.setData('countIndex', e.detail.value);
    },
    perChange(e) {
        this.setData('perIndex', e.detail.value);
    },
    textToAudio() {
        let tex = this.getData('msg');
        let sourceIndex = this.getData('sourceIndex');
        let sizeIndex = this.getData('sizeIndex');
        let countIndex = this.getData('countIndex');
        let perIndex = this.getData('perIndex');
        swan.ai.textToAudio({
            tex,
            ctp: '1',
            lan: 'zn',
            spd: JSON.stringify(this.data.sourceArray[sourceIndex]),
            pit: JSON.stringify(this.data.sizeArray[sizeIndex]),
            vol: JSON.stringify(this.data.countArray[countIndex]),
            per: JSON.stringify(this.data.perArray[perIndex]),
            success: res => {
                console.log('ai.textToAudio success', res);
                swan.showToast({
                    title: '合成成功',
                    icon: 'none'
                });
            },
            fail: err => {
                console.log('ai.textToAudio fail', err);
            }
        });
    }
});
```



### Bug & Tip

 重置 App Secret 会导致此功能无法使用。
