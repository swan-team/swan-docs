### swan.stopAccelerometer()

停止监听加速度数据。

```js
swan.stopAccelerometer(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|


**示例：**

```js
swan.stopAccelerometer();
```