### swan.onNetworkStatusChange()

监听网络状态变化。

```js
swan.onNetworkStatusChange(callback)
```

**callback 对象属性说明：**

|属性|类型|是否必填|描述|
|-|-|-|
|callback|function|是|监听事件的回调函数|

**返回值：**

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|isConnected|boolean|当前是否有网络链接|
|networkType|string|网络类型|

**networkType 有效值：**

|值|描述|
|-|-|
|wifi|wifi 网络|
|2g	|2g 网络|
|3g	|3g 网络|
|4g	|4g 网络|


**示例：**

```js
swan.onNetworkStatusChange(res => {
    console.log('网络切换结果', JSON.stringify(res));
});
```