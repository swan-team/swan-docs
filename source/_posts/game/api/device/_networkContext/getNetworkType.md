### swan.getNetworkType()

获取网络类型。

```js
swan.getNetworkType(opts)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

`Object` 类型的对象：

|属性|类型|描述|
|-|-|-|
|networkType|string|网络类型|

**示例：**

```js
swan.getNetworkType({
    success: res => {
        console.log(res.networkType);
    }
});
```