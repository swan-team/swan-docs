### swan.startAcclerometer()

开始监听加速度数据。

```js
swan.startAcclerometer(opts)
```

**opts 对象属性说明**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object| |是|调用该方法时，要传入的对象参数|
|opts.interval|string| |是|监听加速度数据回调函数的执行频率|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

**interval 的有效值**

根据机型性能、当前 CPU 与内存的占用情况，interval 的设置与实际 swan.onAccelerometerChange() 回调函数的执行频率会有一些出入。

|值|说明|
|-|-|
|game|适用于更新游戏的回调频率，在 20 ms/次左右|
|ui|适用于更新 UI 的回调频率，在 60 ms/次左右|
|normal|普通的回调频率，在 200 ms/次左右|


**示例：**

```js
swan.startAccelerometer({
    interval: 'ui',
    success: res => {
        console.log(res);
    }
});
```