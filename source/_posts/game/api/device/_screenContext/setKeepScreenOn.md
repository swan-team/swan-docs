### swan.setKeepScreenOn()

设置是否保持常亮状态。仅在当前小游戏生效，离开小游戏后设置失效。

```js
swan.setKeepScreenOn(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.keepScreenOn|boolean|-|是|是否保持屏幕常亮|
|opts.success|function|-|否|接口调用成功的回调函数|
|opts.fail|function|-|否|接口调用失败的回调函数|
|opts.complete|function|-|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.setKeepScreenOn({
    keepScreenOn: true,
    success: res => {
        console.log(res);
    }
})
```