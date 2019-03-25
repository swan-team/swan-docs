### swan.setKeepScreenOn()

设置是否保持常亮状态。仅在当前小游戏生效，离开小游戏后设置失效。

```js
swan.setKeepScreenOn(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|keepScreenOn|Boolean|是|是否保持屏幕常亮|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|