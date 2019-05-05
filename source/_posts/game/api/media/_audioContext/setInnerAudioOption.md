### swan.setInnerAudioOption()

> 基础库 swan-game.js 1.7.2 版本开始支持。

对 innerAudioContext 进行小游戏内部的全局设置。

```javascript
swan.setInnerAudioOption(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|---|-------|---|-------|-------|
|mixWithOther|boolean|false|否|设置是否与其他音频混播，默认为 false|
|obeyMuteSwitch|boolean|true|否|（iOS 特有）是否遵循静音开关，设置为 false 之后，即使是在静音模式下，也能播放声音|
|success|function||否|设置成功的回调函数|
|fail|function||否|设置失败的回调函数|
|complete|function||否|接口调用完成的回调函数（接口成功、失败都会执行）|

`success` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|调用结果|

`fail` 回调函数：

形如 `function (res) {...}`，其中：

|属性|类型|描述|
|-|-|-|
|res.errMsg|string|报错信息|


**示例：**

```javascript
swan.setInnerAudioOption({
    mixWithOther: true,
    obeyMuteSwitch: true,
    success: res => {
        console.log('设置成功');
    },
    fail: err => {
        console.log('设置失败', err);
    }
});
```