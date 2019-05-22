### innerAudioContext.onTimeUpdate()

监听音频播放进度更新事件。

```js
innerAudioContext.onTimeUpdate(callback)
```

**参数值**：

|属性|类型|是否必填|描述|
|-|-|-|
|callback|function|是|监听事件的回调函数|

**返回值**：

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|currentTime|number|当前音频的播放位置，单位 s。只有在当前有合法的 src 时返回，时间不取整，结果保留不超过 6 位小数的浮点数或者整数|
|duration|number|当前音频的长度，单位 s。只有在当前有合法的 src 时返回|

**示例**：

```js
const audioCtx = swan.createInnerAudioContext();
      audioCtx.src = 'http://vd3.bdstatic.com/mda-ic7mxzt5cvz6f4y5/mda-ic7mxzt5cvz6f4y5.mp3';
// 事件监听
audioCtx.onTimeUpdate(res => {
    console.log('当前信息展示：', JSON.stringify(res));
});
```