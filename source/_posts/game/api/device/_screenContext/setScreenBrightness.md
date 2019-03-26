### swan.setScreenBrightness()

设置屏幕亮度。

```js
swan.setScreenBrightness(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.value|number|-|是|屏幕亮度值，范围 0~1，0 最暗，1 最亮|
|opts.success|function|-|否|接口调用成功的回调函数|
|opts.fail|function|-|否|接口调用失败的回调函数|
|opts.complete|function|-|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.setScreenBrightness({
    value: 0.5,
    success: function (res) {
        console.log(res);
    }
})
```
