---
title: 界面
header: develop
nav: api
sidebar: show
---

交互反馈
-----

### showToast

**解释：**显示消息提示框

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title  | String | 否  | 提示的内容（最多 14 个字符）   |
|icon |   String | 否  | 图标，有效值 “success”, 默认“normal” |
|duration  |  Number | 否 |  提示的延迟时间，单位毫秒，默认：1500  |
|mask  |  Boolean |否  | 是否显示透明蒙层，防止触摸穿透，默认：false   |
|success| Function |   否 |  接口调用成功的回调函数 |
|fail  |  Function |   否  | 接口调用失败的回调函数 |
|complete   | Function |   否|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.showToast({
    title: '我是标题',
    icon: 'loading',
    duration: 1000,
});
```

### showLoading

**解释：**显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title  | String | 是  | 提示的内容|
|mask |   String| 否 |  是否显示透明蒙层，防止触摸穿透，默认：false|
|success |Function  |  否 |  接口调用成功的回调函数|
|fail  |  Function   | 否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

### hideToast

**解释：**隐藏消息提示框

### hideLoading

**解释：**隐藏 loading 提示框

**示例：**
```js
swan.showLoading({
    title: '加载中',
    mask: 'true'
});

setTimeout(function() {
    swan.hideLoading();
}, 2000);
```

### showModal

**解释：**显示模态弹窗

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title  | String|  是 |  提示的标题|
|content |String | 是 |  提示的内容|
|showCancel | Boolean|否  | 是否显示取消按钮，默认为 true|
|cancelText  |String | 否  | 取消按钮的文字，默认为“取消”，最多 4 个字符|
|cancelColor |HexColor|    否  | 取消按钮的文字颜色，默认为 “#000000”|
|confirmText |String | 否 |  确定按钮的文字，默认为“确定”，最多 4 个字符|
|confirmColor |   HexColor  |  否 |  确定按钮的文字颜色，默认颜色为“#3c76ff”|
|success| Function|    否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete   | Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|confirm |Boolean |为 true 时，表示用户点击了确定按钮  |
|cancel | Boolean |为 true 时，表示用户点击了取消|

**示例：**

```js
swan.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    cancelColor: '#999999',
    confirmColor: '#0099cc',
    success: function (res) {
        if (res.confirm) {
            console.log('用户点击了确定');
        } else if (res.cancel) {
            console.log('用户点击了取消');
        }
    }
});
```

### showActionSheet

**解释：**​显示操作菜单

**参数：**Object

​**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|itemList |   String Array  |  是 |  按钮的文字数组，数组长度最大为6个|
|itemColor |  HexColor|    否   |按钮的文字颜色，默认颜色为“#3c76ff”|
|success| Function  |  否  | 接口调用成功的回调函数，详见返回参数说明|
|fail  |  Function |   否  | 接口调用失败的回调函数|
|complete   | Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|tapIndex |   Number | 用户点击的按钮，从上到下的顺序，从0开始|


**示例：**

```js
swan.showActionSheet({
    itemList: ['同意', '一般', '不同意'],
    success: function (res) {
        console.log('用户点击了第' + (res.tapIndex + 1) + '按钮');
    }
});
```
设置导航条
-----

### setNavigationBarTitle

**解释：**动态设置当前页面的标题。

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title   |String|  是 |  页面标题|
|success |Function |   否 |  接口调用成功的回调函数|
|fail   | Function|    否 |  接口调用失败的回调函数|
|complete   | Function   | 否|   接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.setNavigationBarTitle({
    title: '我是页面标题'
});
```

### showNavigationBarLoading

**解释：**该方法在当前页面显示导航条加载动画

### hideNavigationBarLoading

**解释：**隐藏导航条加载动画。

### setNavigationBarColor

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|frontColor | String|  是  | 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000|
|backgroundColor| String | 是  | 背景颜色值，有效值为十六进制颜色|
|animation  | Object  |否  | 动画效果|
|animation.duration|  Number | 否  | 动画变化时间，默认0，单位：毫秒|
|animation.timingFunc |   String | 否  | 动画变化方式，默认 linear|
|success |Function  |  否 |  接口调用成功的回调函数|
|fail|    Function |   否  | 接口调用失败的回调函数|
|complete|    Function |   否   |接口调用结束的回调函数（调用成功、失败都会执行）|

**animation.timingFunc 有效值：**

|值  | 说明|
| ---- |---- |
|linear|  动画从头到尾的速度是相同的。|
|easeIn | 动画以低速开始|
|easeOut |动画以低速结束。|
|easeInOut  | 动画以低速开始和结束。|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- |---- |
|errMsg | String  |调用结果|


**示例：**

```js
swan.setNavigationBarColor({
    frontColor: '#ffffff',
    backgroundColor: '#ff0000',
    animation: {
        duration: 500,
        timingFunc: 'linear'
	}
});
```

设置tabBar
-----

### setTabBarBadge

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

### removeTabBarBadge

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

### showTabBarRedDot

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

### hideTabBarRedDot

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

### setTabBarStyle

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
    color: '##FFFFBD',
    selectedColor: '##FFFFBD',
    backgroundColor: '##FFFFBD',
    borderStyle: 'white'
});
```

### setTabBarItem

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

### showTabBar

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

### hideTabBar

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

导航
-----

### navigateTo

**解释：**保留当前页面，跳转到应用内的某个页面，使用 swan.navigateBack 可以返回到原页面。

**参数：**Object

**注意：**为了不让用户在使用智能小程序时造成困扰，我们规定页面路径只能是五层，请尽量避免多层级的交互方式。

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String  |是|   需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’|
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.navigateTo({
    url: 'example/xxx?key=value'
});
```


### redirectTo

**解释：**关闭当前页面，跳转到应用内的某个页面

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是  | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 ‘path?key=value&key2=value2’|
|success| Function |   否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
swan.redirectTo({
    url: 'example/xxx?key=value'
});
```

### switchTab

**解释：**跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是  | 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete |   Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例：**

```js
{
    "tabBar": {
        "list": [{
            "pagePath": "index",
            "text": "首页"
        },{
            "pagePath": "list",
            "text": "列表"
        }]
    }
}
```

```js
swan.switchTab({
    url: '/list',
});
```

### navigateBack

**解释：**关闭当前页面，返回上一页面或多级页面。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|delta  | Number | 否  | 返回的页面数，如果 delta 大于现有页面数，则返回到首页。默认为 1|

**示例：**

```js
// 注意：调用 navigateTo 跳转时，调用页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 当前是首页
swan.navigateTo({
    url: 'list?key=value'
});

// 当前是列表页
swan.navigateTo({
    url: 'detail?key=value'
});

// 在详情页内 navigateBack，将返回首页
swan.navigateBack({
    delta: 2
});

```

### reLaunch

**解释：**关闭所有页面，打开到应用内的某个页面。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|url |String | 是|   需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用 ? 分隔，参数键与参数值用=相连，不同参数用 & 分隔；如 ‘path?key=value&key2=value2’，如果跳转的页面路径是 tabBar 页面则不能带参数|
|success| Function |   否 |  接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|


**示例：**

```js
swan.reLaunch({
    url: 'example/xxx?key=value'
});
```

动画
-----

### createAnimation

**解释：**创建一个动画实例 animation

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |默认值  |说明|
|---- | ---- | ---- | ----- |---- |
|duration |Integer | 否|  400 | 动画持续时间，单位 ms |
|timingFunction |String | 否|  ‘linear’| 定义动画的效果 |
|delay|Integer | 否|  0 | 动画延迟时间，单位 ms |
|transformOrigin|String | 否|  ‘50% 50% 0’ | 动画 |

**timingFunction 有效值：**

|值   |说明  |
|---- | ---- |
|linear|以相同速度开始至结束|
|ease|慢速开始，然后变快，然后慢速结束|
|ease-in|慢速开始的过渡效果|
|ease-in-out|动画以低速开始和结束|
|ease-out|动画以低速结束|
|step-start|动画第一帧就跳至结束状态直到结束|
|step-end|动画一直保持开始状态，最后一帧跳到结束状态|

```
var animation = swan.createAnimation({
  transformOrigin: "50% 50%",
  duration: 1000,
  timingFunction: "ease",
  delay: 0
});
```


#### animation

**解释：**动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。

**animation方法列表**

普通样式：

|方法|参数|说明|
|----|----|----|
|opacity|value|透明度，参数范围 0~1|
|backgroundColor|color|颜色值|
|width|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|height|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|top|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|left|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|bottom|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|
|right|length|长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值|

旋转：

|方法|参数|说明|
|----|----|----|
|rotate|deg|deg的范围-180~180，从原点顺时针旋转一个 deg 角度|
|rotateX|deg|deg的范围-180~180，在X轴旋转一个 deg 角度|
|rotateY|deg|deg的范围-180~180，在Y轴旋转一个 deg 角度|
|rotateZ|deg|deg的范围-180~180，在Z轴旋转一个 deg 角度|
|rotate3d|(x,y,z,deg)|同 transform-function rotate3d|

缩放：

|方法|参数|说明|
|----|----|----|
|scale|sx,[sy]|一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数|
|scaleX|sx|在X轴缩放sx倍数|
|scaleY|sy|在Y轴缩放sy倍数|
|scaleZ|sz|在Z轴缩放sy倍数|
|scale3d|(sx,sy,sz)|在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数|


偏移：

|方法|参数|说明|
|----|----|----|
|translate|tx,[ty]|一个参数时，表示在X轴偏移 tx ，单位 px ；两个参数时，表示在 X 轴偏移 tx ，在 Y 轴偏移 ty ，单位 px 。|
|translateX|tx|在 X 轴偏移 tx ，单位 px|
|translateY|ty|在 Y 轴偏移 tx ，单位 px|
|translateZ|tz|在 Z 轴偏移 tx ，单位 px|
|translate3d|(tx,ty,tz)|在 X 轴偏移 tx ，在 Y 轴偏移 ty ，在 Z 轴偏移 tz，单位 px|

倾斜：

|方法|参数|说明|
|----|----|----|
|skew|ax,[ay]|参数范围-180~180；一个参数时， Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度。|
|skewX|ax|参数范围-180~180；Y 轴坐标不变， X 轴坐标延顺时针倾斜 ax 度|
|skewY|ay|参数范围-180~180；X 轴坐标不变， Y 轴坐标延顺时针倾斜 ay 度|


矩阵变形：

|方法|参数|说明|
|----|----|----|
|matrix|(a,b,c,d,tx,ty)|同transform-function matrix|
|matrix3d|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)|3D转换，同transform-function matrix|


#### 动画队列
调用动画操作方法后要调用 step() 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。


**示例：**

```js
<view bind:tap="starttoanimate" animation="{{animationData}}"></view>
```

```js
Page({
    data: {
        animationData: {}
    },
    starttoanimate: function () {
        var animation = swan.createAnimation();
        animation.rotate(90).translateY(10).step();
        animation.rotate(-90).translateY(-10).step();
        this.setData({
            animationData: animation.export()
        });
    }
});
```

下拉刷新
-----

### onPullDownRefresh

**解释：**在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。

**参数：**Object

**示例：**

```js
Page({
    onPullDownRefresh() {
        // do something
    }
});
```

需要在 config 的 `window` 选项中开启 `enablePullDownRefresh`。
当处理完数据刷新后，`swan.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

### startPullDownRefresh

**解释：**开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function |   否  | 接口调用成功的回调函数|
|fail   | Function |   否  | 接口调用失败的回调函数|
|complete  |  Function  |  否  | 接口调用结束的回调函数（调用成功、失败都会执行）|

**success返回参数说明：**

|参数名 |类型  |说明|
|---- | ---- | ---- |
|errMsg | String|  接口调用结果|

**示例：**

```js
swan.startPullDownRefresh();
```

### stopPullDownRefresh

**解释：**停止当前页面下拉刷新。

**参数：**无

**示例：**

```js
swan.stopPullDownRefresh();
```

