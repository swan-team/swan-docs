### swan.getNetworkType()

获取网络类型。

```js
swan.getNetworkType(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object| |是|调用该方法时，要传入的对象参数|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口成功、失败都会执行）|

**返回值：**

**`success`**回调函数：

|参数|描述|
|-|-|
|networkType|网络类型，值有 wifi/2g/3g/4g/unknown (Android 下不常见的网络类型)/none (无网络)。|



**示例：**

```js
swan.getNetworkType({
    success: res => {
        console.log(res.networkType);
    }
});
```