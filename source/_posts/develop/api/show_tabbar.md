---
title: 设置tabBar
header: develop
nav: api
sidebar: show_tabbar
---

setTabBarBadge
---
**解释：**为 tabBar 某一项的右上角添加文本

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|index |Number  |是| tabBar的哪一项，从左边算起|
|text |String  |是| 显示的文本，超过 4 个字符则显示成“…”|
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setTabBarBadge({
    index: 0,
    text: '文本'
});
```

removeTabBarBadge
---
**解释：**移除tabBar某一项右上角的文本。

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|index |Number  |是| tabBar的哪一项，从左边算起|
|success| Function |   否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.removeTabBarBadge({
    index: 0
});
```

showTabBarRedDot
---
**解释：**显示 tabBar 某一项的右上角的红点

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|index |Number  |是| tabBar的哪一项，从左边算起|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.showTabBarRedDot({
    index: 0
});
```

hideTabBarRedDot
---
**解释：**隐藏 tabBar 某一项的右上角的红点

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|index |Number  |是| tabBar的哪一项，从左边算起|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.hideTabBarRedDot({
    index: 0
});

```

setTabBarStyle
---
**解释：**动态设置 tabBar 的整体样式

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- |---- |---- |
|color |HexColor | 是 |tab 上的文字默认颜色|
|selectedColor |HexColor | 是 | tab 上的文字选中时的颜色|
|backgroundColor |HexColor | 是 | tab 的背景色|
|borderStyle |String | 是 | tabbar上边框的颜色， 仅支持 black/white|
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.setTabBarStyle({
    color: '#FFFFBD',
    selectedColor: '#FFFFBD',
    backgroundColor: '#FFFFBD',
    borderStyle: 'white'
});
```

setTabBarItem
---
**解释：**动态设置 tabBar 某一项的内容

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- |---- |---- |
|index |Number  |是| tabBar的哪一项，从左边算起|
|text |String  |是| tab 上按钮文字|
|iconPath |String |是| 图片绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片|
|selectedIconPath |String |是| 选中时的图片的绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px ，当`position`为 top 时，此参数无效|
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.setTabBarItem({
    index: 0,
    text: '文本',
    // 图片路径
    iconPath: '/images/component_normal.png',
    // 选中图片路径
    selectedIconPath: '/images/component_selected.png',
});
```

showTabBar
---
**解释：**显示 tabBar

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- |---- |---- |
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.showTabBar({
    success: function (res) {
        console.log(res);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```

hideTabBar
---
**解释：**隐藏 tabBar

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- |---- |---- |
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.hideTabBar({
    success: function (res) {
        console.log(res);
    },
    fail: function (err) {
        console.log('错误码：' + err.errCode);
        console.log('错误信息：' + err.errMsg);
    }
});
```
