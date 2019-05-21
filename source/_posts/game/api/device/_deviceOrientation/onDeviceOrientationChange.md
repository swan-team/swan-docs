### swan.onDeviceOrientationChange()

监听转屏事件。

```js
swan.onDeviceOrientationChange(callback)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|callback|function|是|事件的回调函数|


参数

**Object res**

|属性|类型|描述|
|-|-|-|
|value|string|切换后的屏幕方向|

**value 的合法值**

|值|说明|
|-|-|
|landscape|横屏正方向，以 HOME 键在屏幕右侧为正方向|
|landscapeReverse|横屏反方向，以 HOME 键在屏幕左侧为反方向|

**示例：**

```js
swan.onDeviceOrientationChange(function (res) {
    console.log(res.value);
});
```