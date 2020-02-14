### swan.onAccelerometerChange()

监听加速度数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。

```js
swan.onAccelerometerChange(callback)
```

**callback 回调参数：**

|属性|类型|描述|
|-|-|-|
|x|number|X 轴|
|y|number|Y 轴|
|z|number|Z 轴|

**示例：**

```js
swan.onAccelerometerChange(function (res) {
    console.log(res.x);
    console.log(res.y);
    console.log(res.z);
});
```