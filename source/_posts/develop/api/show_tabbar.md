---
title: 设置tabBar
header: develop
nav: api
sidebar: show_tabbar
---

## swan.setTabBarBadge

**解释：**为 tabBar 某一项的右上角添加文本

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|当前页面不含tabbar| -->

## swan.removeTabBarBadge

**解释：**移除tabBar某一项右上角的文本。

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|当前页面不含tabbar| -->


## swan.showTabBarRedDot

**解释：**显示 tabBar 某一项的右上角的红点

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败|

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|当前页面不含tabbar| -->

## swan.hideTabBarRedDot

**解释：**隐藏 tabBar 某一项的右上角的红点

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|当前页面不含tabbar| -->

## swan.setTabBarStyle

**解释：**动态设置 tabBar 的整体样式

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|color |HexColor | 否|tab 上的文字默认颜色|
|selectedColor |HexColor | 否|tab 上的文字选中时的颜色|
|backgroundColor |HexColor | 否| tab 的背景色|
|borderStyle |String |否 | tabbar上边框的颜色， 仅支持 black/white|
|success| Function | 否 |  接口调用成功的回调函数|
|fail   | Function  | 否 |接口调用失败的回调函数|
|complete  |  Function  |  否|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setTabBarStyle({
    color: '#FFFFBD',
    selectedColor: '#FFFFBD',
    backgroundColor: '#FFFFBD',
    borderStyle: 'white'
});
```
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar| -->

## swan.setTabBarItem

**解释：**动态设置 tabBar 某一项的内容

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| tabBar的哪一项，从左边算起。|
|text |String  |否| tab 上按钮文字|
|iconPath |String |否| 图片绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片。|
|selectedIconPath |String |否| 选中时的图片的绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px ，当`position`为 top 时，此参数无效。|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1002|超过icon文件最大值| -->


## swan.showTabBar

**解释：**显示 tabBar

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 | 是否需要动画效果，默认无。|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar| -->

## swan.hideTabBar

**解释：**隐藏 tabBar

**方法参数：**Object object

**`object`参数说明：**

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 | 是否需要动画效果，默认无。|
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
<!-- #### 错误码

**Andriod**

|错误码|说明|
|--|--|
|1001|执行失败 |

**iOS**
|错误码|说明|
|--|--|
|1001|当前页面不含tabba| -->