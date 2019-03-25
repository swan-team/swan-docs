### swan.onAccelerometerChange()

监听加速度数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 swan.stopAccelerometer 停止监听。

```js
swan.onAccelerometerChange(callback)
```

**参数值：**

|属性|类型|描述|
|-|-|-|
|x|Number|X 轴|
|y|Number|Y 轴|
|z|Number|Z 轴|

**示例：**

```js
swan.onAccelerometerChange(function (res) {
    console.log(res.x);
    console.log(res.y);
    console.log(res.z);
});
```