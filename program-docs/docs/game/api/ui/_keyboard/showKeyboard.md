### swan.showKeyboard()

显示键盘

```js
swan.showKeyboard(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object| |否|调用该方法时，要传入的对象参数|
|opts.defaultValue|string|`''`|否|键盘输入框显示的默认值|
|opts.maxLength|number| |否|键盘中文本的最大长度|
|opts.multiple|boolean|`false`|否|是否为多行输入|
|opts.confirmHold|boolean|`false`|否|当点击完成时键盘是否收起|
|opts.confirmType|string|`'done'`|否|键盘右下角 `confirm` 按钮的类型，只影响按钮的文本内容	|
|opts.success|function| |否|接口调用成功的回调函数|
|opts.fail|function| |否|接口调用失败的回调函数|
|opts.complete|function| |否|接口调用完成的回调函数（接口调用成功、失败都会执行）|

`opts.confirmType` 的有效值：

|值|描述|
|-|-|
| `'done'` |完成|
| `'next'` |下一个|
| `'search'` |搜索|
| `'go'` |前往|
| `'send'` |发送|

**示例：**

```js
swan.showKeyboard({
    defaultValue: '请输入账号名',
    maxLength: 150,
    multiple: true,
    confirmHold: true,
    confirmType: 'done',
    success: res => {
        console.log(res);
    },
    fail: err => {
        console.log(err);
    }
})
```
