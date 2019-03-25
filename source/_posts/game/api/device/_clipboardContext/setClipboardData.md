### swan.setClipboardData()

设置系统剪贴板的内容。

```js
swan.setClipboardData(opt)
```

**参数值：**

|属性|类型|是否必填|描述|
|-|-|-|-|
|data|String|是|需要设置的内容|
|success|function|否|接口调用成功的回调函数|
|fail|function|否|接口调用失败的回调函数|
|complete|function|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.setClipboardData({
    data: 'baidu',
    success: function (res) {
        swan.getClipboardData({
            success: function (res) {
                console.log(res.data) // baidu
            }
        });
    }
});
```