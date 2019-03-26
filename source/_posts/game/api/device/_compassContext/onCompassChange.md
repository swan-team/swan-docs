### swan.onCompassChange()

监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 swan.stopCompass 停止监听。

```js
swan.onCompassChange(callback)
```

**callback 对象属性说明：**

|属性|类型|描述|
|-|-|-|
|direction|number|面对的方向度数|

**示例：**

```js
swan.onCompassChange(function (res) {
    console.log(res.direction);
});
```