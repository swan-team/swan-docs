### swan.getClipboardData()

获取系统剪贴板内容。

```js
swan.getClipboardData(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**success回调函数**

|属性|类型描述|描述|
|-|-|-|
|data|String|剪贴板的内容|

**示例：**

```js
swan.getClipboardData({
    success: function (res) {
        console.log(res.data);
    }
});
```