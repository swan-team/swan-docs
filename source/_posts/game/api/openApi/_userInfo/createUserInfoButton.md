### swan.createUserInfoButton()

创建获取用户信息的按钮，通过绑定 [userInfoButton.onTap(callback)](#userInfoButton-onTap) 事件，点击获取挂有用户信息的对象。

```js
swan.createUserInfoButton(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|
|opts|Object| |是|调用该方法时，要传入的对象参数|
|opts.type|string| |是|按钮的类型|
|opts.text|string| `'获取用户信息'` |否|按钮上的文本，仅当 opts.type 为 `'text'` 时有效|
|opts.image|string| `''` |否|按钮的背景图片，仅当 opts.type 为 `'image'` 时有效|
|opts.style|Object| |否|自定义按钮的样式|

`opts.type` 的合法值：

|值|描述|
|-|-|
| `'text'` |设置文本按钮|
| `'image'` |只能设置背景图片的按钮，背景图片会拉伸平铺按钮|

`opts.style` 的合法值：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|left|number| |否|左上角横坐标|
|top|number| |否|左上角纵坐标|
|width|number| |是|宽度|
|height|number| |是|高度|
|backgroundColor|string| |否|背景颜色|
|borderWidth|number| |否|边框宽度|
|borderColor|string| |否|边框颜色|
|borderRadius|number| |否|边框圆角|
|textAlign|string| `'left'` |否|文本的水平居中方式|
|fontSize|number| |否|文本字号|
|lineHeight|number| |否|文本的行高|

`style.textAlign` 的合法值：

|值|描述|
|-|-|
|left|左对齐|
|center|居中对齐|
|right|右对齐|

**返回值：**
返回 [userInfoButton](#userInfoButton) 对象。

**示例：**

```js
let button = swan.createUserInfoButton({
    type: 'text',
    text: '获取用户信息',
    style: {
        top: 0,
        left: 50,
        width: 150,
        height: 50,
        lineHeight: 50,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '#EEEEEE',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 4
    }
})
```