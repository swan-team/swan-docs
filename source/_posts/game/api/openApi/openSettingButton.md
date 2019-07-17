---
title: 设置
layout: gamedoc
topic: openApi
draft: true
categoryName: api
priority: 01-04
---

### OpenSettingButton

[`swan.createOpenSettingButton()`](#swan-createOpenSettingButton) 的返回值，用户点击后点击按钮展示用户在该小游戏中已经授权过的权限页面

`OpenSettingButton.show()`
显示打开设置页面按钮

`OpenSettingButton.hide()`
隐藏打开设置页面按钮

`OpenSettingButton.destory()`
销毁打开设置页面按钮



### swan.createOpenSettingButton()

创建打开设置页面的按钮，点击按钮展示用户在该小游戏中已经授权过的权限。

```js
swan.createOpenSettingButton(opts)
```

**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object|{}|是|调用该方法时，要传入的对象参数|
|opts.type|string||是|设置按钮的类型|
|opts.text|string||否|设置按钮上的文本，当 type 为 'text' 时有效|
|opts.image|string||否|设置按钮的背景图片，当 type 为 'image' 时有效|
|opts.style|Object||否|自定义按钮的样式|

`opts.type` 的合法值：

|值|描述|
|-|-|
|text|设置文本按钮|
|image|只设置背景图片的按钮，背景图片大小会自动拉伸到与按钮相同|

`opts.style` 对象的合法值：

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|left|number| |否|左上角横坐标|
|top|number| |否|左上角纵坐标|
|width|number| |是|宽度|
|height|number| |是|高度|
|backgroundColor|string| |否|背景颜色|
|color|string| |否|文字颜色|
|borderWidth|number| |否|边框宽度|
|borderColor|string| |否|边框颜色|
|borderRadius|number| |否|边框圆角|
|textAlign|string| `'left'` |否|文本的水平居中方式|
|fontSize|number| |否|文本字号|
|fontWeight|number| |否|文本粗细|
|lineHeight|number| |否|文本的行高|
|hidden|boolean| `false` |否|是否隐藏|
|opacity|number| |否|透明度|

`style.textAlign` 的合法值：

|值|描述|
|-|-|
|left|左对齐|
|center|居中对齐|
|right|右对齐|

返回值

[OpenSettingButton](#OpenSettingButton)

**示例：**

```js
let button = swan.createOpenSettingButton({
    type: 'text',
    text: '打开设置页面',
    style: {
        top: 0,
        left: 50,
        width: 100,
        height: 50,
        lineHeight: 50,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#000000',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        textAlign: 'center',
        fontSize: 16
    }
})
```

