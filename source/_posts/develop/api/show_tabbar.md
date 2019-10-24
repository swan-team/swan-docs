---
title: 设置tabBar
header: develop
nav: api
sidebar: show_tabbar
---

## swan.setTabBarBadge

**解释**：为 tabBar 某一项的右上角添加文本

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| -|tabBar的哪一项，从左边算起|
|text |String  |是|-| 显示的文本，超过 3 个字符则显示成“…”|
|success| Function  |  否  |-| 接口调用成功的回调函数|
|fail  |  Function  |  否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/0b8a3e106dcdf2db3a238ed3c23127f21569467141078" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js

swan.setTabBarBadge({
    index: 0,
    text: '文本',
    success: res => {
        console.log('setTabBarBadge success', res);
    },
    fail: err => {
        console.log('setTabBarBadge fail', err);
    }
});

```
 
#### 错误码
Andriod

|错误码|说明|
|--|--|
|1001|执行失败                                       |

iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1001|当前页面不含tabbar|


## swan.removeTabBarBadge

**解释**：移除tabBar某一项右上角的文本。

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| -|tabBar的哪一项，从左边算起|
|success| Function |   否  |-| 接口调用成功的回调函数|
|fail   | Function |   否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/0b8a3e106dcdf2db3a238ed3c23127f21569467141078" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.setTabBarBadge({
    index: 0,
    text: '文本'
});

removeTabBarBadge() {
    swan.removeTabBarBadge({
        index: 0,
        success: res => {
            console.log('removeTabBarBadge success');
        },
        fail: err => {
            console.log('removeTabBarBadge fail', err);
        }
    });
}
```
#### 错误码

* Andriod



|错误码|说明|
|--|--|
|1001|执行失败      |



* iOS


|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确   |
|1001|当前页面不含tabbar|


## swan.showTabBarRedDot

**解释**：显示 tabBar 某一项的右上角的红点

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| -|tabBar的哪一项，从左边算起|
|success |Function  |  否  | -|接口调用成功的回调函数|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete |   Function |   否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/616a15df8959503ae3c8fa0d3191020b1569467482291" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js

    showTabBarRedDot() {
        swan.showTabBarRedDot({
            index: 0,
            success: res => {
                console.log('showTabBarRedDot success');
            },
            fail: err => {
                console.log('showTabBarRedDot fail', err);
            }
        });
    }

```
#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败|

* iOS 

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1001|当前页面不含tabbar|


## swan.hideTabBarRedDot

**解释**：隐藏 tabBar 某一项的右上角的红点

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是| -|tabBar的哪一项，从左边算起|
|success |Function  |  否  |-| 接口调用成功的回调函数|
|fail   | Function |   否  | -|接口调用失败的回调函数|
|complete |   Function |   否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/616a15df8959503ae3c8fa0d3191020b1569467482291" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    showTabBarRedDot() {
        swan.showTabBarRedDot({
            index: 0
        });
    },
    hideTabBarRedDot() {
        swan.hideTabBarRedDot({
            index: 0,
            success: res => {
                console.log('hideTabBarRedDot success');
            },
            fail: err => {
                console.log('hideTabBarRedDot fail', err);
            }
        });
    }
});
```

#### 错误码
* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |


* iOS

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确|
|1001|当前页面不含tabbar|
## swan.setTabBarStyle

**解释**：动态设置 tabBar 的整体样式

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|color |HexColor | 否|-|tab 上的文字默认颜色|
|selectedColor |HexColor | 否|-|tab 上的文字选中时的颜色|
|backgroundColor |HexColor | 否|-| tab 的背景色|
|borderStyle |String |否 |-| tabbar上边框的颜色， 仅支持 black/white|
|success| Function | 否 |-|  接口调用成功的回调函数|
|fail   | Function  | 否 |-|接口调用失败的回调函数|
|complete  |  Function  |  否|-|接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/8a0d64dcd0e68d1861cc116a2e8c1b891569469282679" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
Page({
    setTabBarStyle() {
        swan.setTabBarStyle({
            color: '#38f',
            selectedColor: '#38f',
            backgroundColor: '#FFFFBD',
            borderStyle: 'black',
            success: res => {
                console.log('setTabBarStyle success');
            },
            fail: err => {
                console.log('setTabBarStyle fail', err);
            }
        });
    }
});
```


#### 错误码

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |

* iOS

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar  |
## swan.setTabBarItem

**解释**：动态设置 tabBar 某一项的内容

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|index |Number  |是|-| tabBar的哪一项，从左边算起。|
|text |String  |否| -|tab 上按钮文字|
|iconPath |String |否|-| 图片绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px，当 position 为 top 时，此参数无效，不支持网络图片。|
|selectedIconPath |String |否|-| 选中时的图片的绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px，当`position`为 top 时，此参数无效。|
|success| Function |   否 |-|  接口调用成功的回调函数|
|fail   | Function  |  否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/2030d26a377cc39560eb625d8dd8f2a11569468598586" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


* 在 js 文件中

```js
    swan.setTabBarItem({
        index: 0,
        text: '文本',
        iconPath: '/images/API_normal.png',
        selectedIconPath: '/images/API_selected.png',
        success: res => {
            console.log('setTabBarItem success');
        },
        fail: err => {
            console.log('setTabBarItem fail', err);
        }
    });
  
```


#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败 |

* iOS 

|错误码|说明|
|--|--|
|202|解析失败，请检查参数是否正确。|
|1002|超过icon文件最大值|


## swan.showTabBar

**解释**：显示 tabBar

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 |无| 是否需要动画效果。|
|success| Function |   否 | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否 | -| 接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/c6924169544d35cf75f404fdb41e88801569469634696" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js

    swan.showTabBar({
        animation: true,
        success: res => {
            console.log('showTabBar success');
        },
        fail: err => {
            console.log('showTabBar fail', err);
        }
    });
    
```
#### 错误码

* Andriod 

|错误码|说明|
|--|--|
|1001|执行失败 |

* iOS 

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar|

## swan.hideTabBar

**解释**：隐藏 tabBar

**方法参数**：Object object

**`object`参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|animation | Boolean | 否 | false | 是否需要动画效果。|
|success| Function |   否 | -| 接口调用成功的回调函数|
|fail   | Function  |  否  | -|接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例**：

<a href="swanide://fragment/c6924169544d35cf75f404fdb41e88801569469634696" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 js 文件中

```js
swan.hideTabBar({
    animation: true,
    success: res => {
        console.log('hideTabBar success');
    },
    fail: err => {
        console.log('hideTabBar fail', err);
    }
});
```

#### hideTabBar

* Andriod

|错误码|说明|
|--|--|
|1001|执行失败   |

* iOS

|错误码|说明|
|--|--|
|1001|当前页面不含tabbar  |

