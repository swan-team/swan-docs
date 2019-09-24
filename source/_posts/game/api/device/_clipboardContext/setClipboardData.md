### swan.setClipboardData()

设置系统剪贴板的内容。

```js
swan.setClipboardData(opts)
```

**opts 对象属性说明：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object|-|是|调用该方法时，要传入的对象参数|
|opts.data|string|-|是|需要设置的内容|
|opts.success|function|-|否|接口调用成功的回调函数|
|opts.fail|function|-|否|接口调用失败的回调函数|
|opts.complete|function|-|否|接口调用完成的回调函数（接口成功、失败都会执行）|

**示例：**

```js
swan.setClipboardData({
    data: 'baidu',
    success: res => {
        swan.getClipboardData({
            success: res => {
                console.log(res.data) // baidu
            }
        });
    }
});
```