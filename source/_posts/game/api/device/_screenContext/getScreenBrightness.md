### swan.getScreenBrightness()

获取屏幕亮度。

```js
swan.getScreenBrightness(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

**success 回调函数**

|属性|类型描述|描述|
|-|-|-|
|value|Number|屏幕亮度值，范围 0~1，0 最暗，1 最亮|