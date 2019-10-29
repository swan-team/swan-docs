---
title: swan.ai.textToAudio
header: develop
nav: api
sidebar:  audio
---

 

**解释**：将文本转换为可以播放的 mp3 文件。

**方法参数**：Object object

**`data` 参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
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


**示例**：

<a href="swanide://fragment/506b61732036a40590ea79c33f1541311559033551164" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="textToAudio">textToAudio</button>
</view>
```

* 在 js 文件中 

```js

Page({
    textToAudio() {
        swan.ai.textToAudio({
            tex: '这是一段测试文字',
            success: res => {
                console.log('ai.textToAudio success', res);
            },
            fail: err => {
                console.log('ai.textToAudio fail', err);
            }
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

### Bug & Tip

 重置 App Secret 会导致此功能无法使用。
