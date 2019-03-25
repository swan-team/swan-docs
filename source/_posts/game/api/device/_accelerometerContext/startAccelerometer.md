### swan.startAcclerometer()

开始监听加速度数据。

```js
swan.startAcclerometer(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|interval|String|是|监听加速度数据回调函数的执行频率|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**interval 的合法值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。
|值|说明|
|-|-|
|game|适用于更新游戏的回调频率，在 20 ms/次左右|
|ui|适用于更新 UI 的回调频率，在 60 ms/次左右|
|normal|普通的回调频率，在 200 ms/次左右|


**示例：**

```js
swan.startAccelerometer({
    interval: 'ui'
});
```