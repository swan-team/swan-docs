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

<a href="swanide://fragment/482e7c6c58d4a14339abc8fda24074c11557728348921" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setTabBarBadge">setTabBarBadge</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTabBarBadge() {
        swan.setTabBarBadge({
            index: 0,
            text: '文本',
            success: function () {
                console.log('setTabBarBadge success');
            },
            fail: function (err) {
                console.log('setTabBarBadge fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
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

<a href="swanide://fragment/284536873b4cc51e3b48942124ec4b7b1557728443718" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setTabBarBadge">setTabBarBadge</button>
    <button type="primary" bindtap="removeTabBarBadge">removeTabBarBadge</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTabBarBadge() {
        swan.setTabBarBadge({
            index: 0,
            text: '文本'
        });
    },
    removeTabBarBadge() {
        swan.removeTabBarBadge({
            index: 0,
            success: function () {
                console.log('removeTabBarBadge success');
            },
            fail: function (err) {
                console.log('removeTabBarBadge fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 30rpx;
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

<a href="swanide://fragment/2937f493a9bb306369b370c7126badd51557728534632" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showTabBarRedDot">showTabBarRedDot</button>
</view>
```

* 在 js 文件中

```js
Page({
    showTabBarRedDot() {
        swan.showTabBarRedDot({
            index: 0,
            success: function () {
                console.log('showTabBarRedDot success');
            },
            fail: function (err) {
                console.log('showTabBarRedDot fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
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

<a href="swanide://fragment/f7cad6e41c79acdff1f019cfe010f7261557728623673" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showTabBarRedDot">showTabBarRedDot</button>
    <button type="primary" bindtap="hideTabBarRedDot">hideTabBarRedDot</button>
</view>
```

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
            success: function () {
                console.log('hideTabBarRedDot success');
            },
            fail: function (err) {
                console.log('hideTabBarRedDot fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}

.wrap button {
    margin-bottom: 30rpx;
}
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

<a href="swanide://fragment/314390fbe5bef9e465d158b2102a9e121557728702320" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setTabBarStyle">setTabBarStyle</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTabBarStyle() {
        swan.setTabBarStyle({
            color: '#FFFFBD',
            selectedColor: '#FFFFBD',
            backgroundColor: '#FFFFBD',
            borderStyle: 'white',
            success: function () {
                console.log('setTabBarStyle success');
            },
            fail: function (err) {
                console.log('setTabBarStyle fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
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
|selectedIconPath |String |否|-| 选中时的图片的绝对路径，icon 大小限制为 40KB，建议尺寸为 81px * 81px ，当`position`为 top 时，此参数无效。|
|success| Function |   否 |-|  接口调用成功的回调函数|
|fail   | Function  |  否  |-| 接口调用失败的回调函数|
|complete  |  Function  |  否 |-|  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例**：

<a href="swanide://fragment/2cc5fab9e4c419ba33c2dc9857a24f811557728801013" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="setTabBarItem">setTabBarItem</button>
</view>
```

* 在 js 文件中

```js
Page({
    setTabBarItem() {
        swan.setTabBarItem({
            index: 0,
            text: '文本',
            iconPath: '/images/component_normal.png',
            selectedIconPath: '/images/component_selected.png',
            success: function () {
                console.log('setTabBarItem success');
            },
            fail: function (err) {
                console.log('setTabBarItem fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
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

<a href="swanide://fragment/5942c633249ac5244cb0f565c425cc1b1557728863827" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="showTabBar">showTabBar</button>
</view>
```

* 在 js 文件中

```js
Page({
    onLoad() {
        swan.hideTabBar();
    },
    showTabBar() {
        swan.showTabBar({
            animation: true,
            success: function () {
                console.log('showTabBar success');
            },
            fail: function (err) {
                console.log('showTabBar fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
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

<a href="swanide://fragment/87d265ceed5cf64c0141fb2c200bd5eb1557728942583" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <button type="primary" bindtap="hideTabBar">hideTabBar</button>
</view>
```

* 在 js 文件中

```js
Page({
    hideTabBar() {
        swan.hideTabBar({
            animation: true,
            success: function () {
                console.log('hideTabBar success');
            },
            fail: function (err) {
                console.log('hideTabBar fail', err);
            }
        });
    }
});
```
* 在 css 文件中

```css
.wrap {
    padding: 50rpx 30rpx;
}
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

