---
title: 界面
header: develop
nav: api
sidebar: show
---
### 界面 API 列表

|API|说明|
|----|----|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#createCanvasContext">createCanvasContext</a>|在 Page 中，推荐使用this.createCanvasContext(canvasId)，进行绘图上下文的创建。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasToTempFilePath-OBJECT-this">canvasToTempFilePath(OBJECT, this)</a>|把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径。在自定义组件下，第二个参数传入组件实例this，以操作组件内 canvas 组件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setFillStyle">canvasContext.setFillStyle</a>|设置填充色|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setStrokeStyle">canvasContext.setStrokeStyle</a>|设置边框颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setShadow">canvasContext.setShadow</a>|设置阴影样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createLinearGradient">canvasContext.createLinearGradient</a>|创建一个线性的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createCircularGradient">canvasContext.createCircularGradient</a>|创建一个圆形的渐变颜色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-addColorStop">canvasContext.addColorStop</a>|创建一个颜色的渐变点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineWidth">canvasContext.setLineWidth</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineCap">canvasContext.setLineCap</a>|设置线条的端点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineJoin">canvasContext.setLineJoin</a>|设置线条的交点样式。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineDash">canvasContext.setLineDash</a>|设置线条的宽度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setMiterLimit">canvasContext.setMiterLimit</a>|设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离，当 setLineJoin() 为 miter 时才有效，超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-rect">canvasContext.rec</a>|创建一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fillRect">canvasContext.fillRect</a>|填充一个矩形。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-strokeRect">canvasContext.strokeRect</a>|画一个矩形(非填充)。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-clearRect">canvasContext.clearRect</a>|清除画布上在该矩形区域内的内容。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fill">canvasContext.fill</a>|对当前路径中的内容进行填充。默认的填充色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-stroke">canvasContext.stroke</a>|画出当前路径的边框。默认颜色为黑色。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-beginPath">canvasContext.beginPath</a>|开始创建一个路径，需要调用 fill 或者 stroke 才会使用路径进行填充或描边。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-closePath">canvasContext.closePath</a>|关闭一个路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-moveTo">canvasContext.moveTo</a>|把路径移动到画布中的指定点，不创建线条。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-lineTo">canvasContext.lineTo</a>|lineTo 方法增加一个新点，然后创建一条从上次指定点到目标点的线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-arc">canvasContext.arc</a>|画一条弧线。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-scale">canvasContext.scale</a>|在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-rotate">canvasContext.rotate</a>|以原点为中心，原点可以用 translate 方法修改。顺时针旋转当前坐标轴。多次调用 rotate，旋转的角度会叠加。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-translate">canvasContext.translate</a>|对当前坐标系的原点 (0, 0) 进行变换，默认的坐标系原点为页面左上角。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-clip">canvasContext.clip</a>|clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setFontSize">canvasContext.setFontSize</a>|设置字体的字号|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-fillText">canvasContext.fillText</a>|在画布上绘制被填充的文本。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTextAlign">canvasContext.setTextAlign</a>|用于设置文字的对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTextBaseline">canvasContext.setTextBaseline</a>|用于设置文字的水平对齐。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-drawImage">canvasContext.drawImage</a>|绘制图像到画布。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setGlobalAlpha">canvasContext.setGlobalAlph</a>|设置全局画笔透明度。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-measureText">canvasContext.measureText</a>|测量文本尺寸信息，目前仅返回文本宽度。同步接口。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-arcTo">canvasContext.arcTo</a>|根据控制点和半径绘制圆弧路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-strokeText">canvasContext.strokeText</a>|给定的 (x, y) 位置绘制文本描边的方法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setLineDashOffset">canvasContext.setLineDashOffset</a>|设置虚线偏移量的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-createPattern">canvasContext.createPattern</a>|对指定的图像创建模式的方法，可在指定的方向上重复元图像。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-bezierCurveTo">canvasContext.bezierCurveTo</a>|创建三次方贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-quadraticCurveTo">canvasContext.quadraticCurveTo</a>|创建二次贝塞尔曲线路径。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-save">canvasContext.save</a>|保存当前的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-restore">canvasContext.restore</a>|恢复之前保存的绘图上下文。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-draw">canvasContext.draw</a>|将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-font">canvasContext.font</a>|设置当前字体样式的属性。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_canvas/#canvasContext-setTransform">canvasContext.setTransform</a>|使用矩阵重新设置（覆盖）当前变换的方法。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#showToast">showToast</a>|显示消息提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#showLoading">showLoading</a>|显示 loading 提示框, 需主动调用 hideLoading 才能关闭提示框。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#hideToast">hideLoading</a>|隐藏 loading 提示框|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#showModal">showModal</a>|显示模态弹窗|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_toast/#showActionSheet">showActionSheet</a>|显示操作菜单|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#setNavigationBarTitle">setNavigationBarTitle</a>|动态设置当前页面的标题。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#showNavigationBarLoading">showNavigationBarLoading</a>|该方法在当前页面显示导航条加载动画。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#hideNavigationBarLoading">hideNavigationBarLoading</a>|隐藏导航条加载动画|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#setNavigationBarColor">setNavigationBarColor</a>|动态设置当前页面导航条颜色|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#setTabBarBadge">setTabBarBadge</a>|为 tabBar 某一项的右上角添加文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#removeTabBarBadge">removeTabBarBadge</a>|移除tabBar某一项右上角的文本|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#showTabBarRedDot">showTabBarRedDot</a>|显示 tabBar 某一项的右上角的红点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#hideTabBarRedDot">hideTabBarRedDot</a>|隐藏 tabBar 某一项的右上角的红点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#setTabBarStyle">setTabBarStyle</a>|动态设置 tabBar 的整体样式|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#setTabBarItem">setTabBarItem</a>|动态设置 tabBar 某一项的内容|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#showTabBar">showTabBar</a>|显示 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#hideTabBar">hideTabBar</a>|隐藏 tabBar|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#navigateTo">navigateTo</a>|保留当前页面，跳转到应用内的某个页面，使用 swan.navigateBack 可以返回到原页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#redirectTo">redirectTo</a>|关闭当前页面，跳转到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#switchTab">switchTab</a>|跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#navigateBack">navigateBack</a>|关闭当前页面，返回上一页面或多级页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_tab/#reLaunch">reLaunch</a>|关闭所有页面，打开到应用内的某个页面。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_createAnimation/#createAnimation">createAnimation</a>|创建一个动画实例 animation|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_pagescrollto/#pageScrollTo">pageScrollTo</a>|将页面滚动到目标位置（可以设置滚动动画时长）。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_pull/#onPullDownRefresh">onPullDownRefresh</a>|在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_pull/#startPullDownRefresh">startPullDownRefresh</a>|开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_pull/#stopPullDownRefresh">stopPullDownRefresh</a>| 停止当前页面下拉刷新。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#createSelectorQuery">createSelectorQuery</a>| 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-in-component">selectorQuery.in(component)</a>|将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-select-selector">selectorQuery.select(selector)</a>| 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectAll-selector">selectorQuery.selectAll(selector)</a>|在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-selectViewport">selectorQuery.selectViewport()</a>| 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#nodesRef-boundingClientRect-callback">nodesRef.boundingClientRect([callback])</a>| 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#nodesRef-scrollOffset-callback">nodesRef.scrollOffset([callback])</a>| 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#nodesRef-fields-fields-callback">nodesRef.fields(fields,[callback])</a>|获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。|
|<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery-exec-callback">selectorQuery.exec([callback])</a>|执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。|

<!-- 交互反馈
-----

### showToast

**解释：**显示消息提示框

**参数：**Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title  | String | 是  | 提示的内容 |
|icon | String | 否  | 图标，有效值 “success”、“loading”、“none”, 默认“none” |
|duration  |  Number | 否 |  提示的延迟时间，单位毫秒，默认：1500 |
|success| Function |   否 |  接口调用成功的回调函数 |
|fail  |  Function |   否  | 接口调用失败的回调函数 |
|complete   | Function |   否|   接口调用结束的回调函数（调用成功、失败都会执行）|
|mask|Boolean|否|是否显示透明蒙层，防止触摸穿透，默认：false|

**icon有效值：**

|有效值 |说明  |
|---- | ---- |
|success | 显示成功图标，此时 title 文本最多显示 7 个汉字长度。 |
|loading |显示加载图标，此时 title 文本最多显示 7 个汉字长度。|
|none |不显示图标，此时 title 文本最多可显示两行。默认值  |

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

**解释：**动态设置当前页面导航条的颜色。

**参数：**Object

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
    color: '#FFFFBD',
    selectedColor: '#FFFFBD',
    backgroundColor: '#FFFFBD',
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

位置
-----

### pageScrollTo

**解释：**将页面滚动到目标位置（可以设置滚动动画时长）。

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |默认值  |说明|
|---- | ---- | ---- | ----- |---- |
|scrollTop |Number | 是|  - | 滚动到页面的目标位置（单位 px） |
|duration |Number | 否| 300 | 滚动动画的时长，（单位 ms） |

**示例：**

```js
swan.pageScrollTo({
    scrollTop: 0,
    duration: 300
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
如果需要单个页面支持下拉刷新，可以直接在页面目录下的 json 配置文件中开启`enablePullDownRefresh`。
当处理完数据刷新后，`swan.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

### startPullDownRefresh

**解释：**开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。

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

**解释：** 停止当前页面下拉刷新。

**参数：** 无

**示例：**

```js
swan.stopPullDownRefresh();
```

节点信息
-----

### createSelectorQuery

**解释：** 返回一个 SelectorQuery 对象实例。可以在这个实例上使用 select 等方法选择节点，并使用 boundingClientRect 等方法选择需要查询的信息。

**参数：** Object

**示例：**

```js
Page({
    queryMultipleNodes: function(){
        var query = swan.createSelectorQuery()
        query.select('#the-id').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function(res){
            res[0].top       // #the-id节点的上边界坐标
            res[1].scrollTop // 显示区域的竖直滚动位置
        })
    }
});
```

### selectorQuery

**selectorQuery 对象的方法列表：**

|方法 |参数  |说明|
|---- | ---- | ---- |
|in| object Component | 参考下面详细介绍 |
|select   | selector | 参考下面详细介绍 |
|selectAll  |  selector  | 参考下面详细介绍 |
|selectViewport  |      | 参考下面详细介绍 |
|exec  |  callback  | 参考下面详细介绍 |

### selectorQuery.in(component)

**解释：** 将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点。）

**示例：**

```js
Component({
    queryMultipleNodes: function(){
        var query = swan.createSelectorQuery().in(this)
        query.select('#the-id').boundingClientRect(function(res){
            res.top // 这个组件内 #the-id 节点的上边界坐标
        }).exec()
    }
});
```

### selectorQuery.select(selector)

**解释：** 在当前页面下选择第一个匹配选择器 selector 的节点，返回一个 NodesRef 对象实例，可以用于获取节点信息。

selector 类似于 CSS 的选择器，但仅支持下列语法。

1、ID 选择器：#the-id
2、class 选择器（可以连续指定多个）：.a-class.another-class
3、子元素选择器：.the-parent > .the-child
4、后代选择器：.the-ancestor .the-descendant
5、跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
6、多选择器的并集：#a-node, .some-other-nodes

### selectorQuery.selectAll(selector)

**解释：** 在当前页面下选择匹配选择器 selector 的节点，返回一个 NodesRef 对象实例。 与 selectorQuery.select(selector) 不同的是，它选择所有匹配选择器的节点。

### selectorQuery.selectViewport()

**解释：** 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。

### nodesRef.boundingClientRect([callback])

**解释：** 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。其功能类似于 DOM 的 getBoundingClientRect。返回值是 nodesRef 对应的 selectorQuery。

返回的节点信息中，每个节点的位置用 left、right、top、bottom、width、height 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例：**

```js
Page({
    getRect: function(){
        swan.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
            rect.id      // 节点的ID
            rect.dataset // 节点的dataset
            rect.left    // 节点的左边界坐标
            rect.right   // 节点的右边界坐标
            rect.top     // 节点的上边界坐标
            rect.bottom  // 节点的下边界坐标
            rect.width   // 节点的宽度
            rect.height  // 节点的高度
        }).exec()
    },
    getAllRects: function(){
        swan.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
            rects.forEach(function(rect){
                rect.id      // 节点的ID
                rect.dataset // 节点的dataset
                rect.left    // 节点的左边界坐标
                rect.right   // 节点的右边界坐标
                rect.top     // 节点的上边界坐标
                rect.bottom  // 节点的下边界坐标
                rect.width   // 节点的宽度
                rect.height  // 节点的高度
            })
        }).exec()
    }
});
```

### nodesRef.scrollOffset([callback])

**解释：** 添加节点的滚动位置查询请求，以像素为单位。节点必须是 scroll-view 或者 viewport 。返回值是 nodesRef 对应的 selectorQuery 。

返回的节点信息中，每个节点的滚动位置用 scrollLeft 、s crollTop 字段描述。如果提供了 callback 回调函数，在执行 selectQuery 的 exec 方法后，节点信息会在 callback 中返回。

**示例：**

```js
Page({
    getScrollOffset: function(){
        swan.createSelectorQuery().selectViewport().scrollOffset(function(res){
            res.id      // 节点的ID
            res.dataset // 节点的dataset
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
        }).exec()
    }
});
```

### nodesRef.fields(fields,[callback])

**解释：** 获取节点的相关信息，需要获取的字段在 fields 中指定。返回值是 nodesRef 对应的 selectorQuery 。可指定获取的字段包括：

|字段名 |默认值  |说明|
|---- | ---- | ---- |
|id| 否 | 是否返回节点 id |
|dataset  | 否 | 是否返回节点 dataset |
|rect  |  否  | 是否返回节点布局位置（left right top bottom） |
|size  |  否  | 是否返回节点尺寸（width height） |
|scrollOffset  |  否  | 是否返回节点的 scrollLeft scrollTop ，节点必须是 scroll-view 或者 viewport |
|properties  |  []  | 指定属性名列表，返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取） |
|computedStyle  |  []  | 指定样式名列表，返回节点对应样式名的当前值 |

**示例：**

```js
Page({
    getFields: function(){
        swan.createSelectorQuery().select('#the-id').fields({
            dataset: true,
            size: true,
            scrollOffset: true,
            properties: ['scrollX', 'scrollY'],
            computedStyle: ['margin', 'backgroundColor']
        }, function(res){
            res.dataset    // 节点的dataset
            res.width      // 节点的宽度
            res.height     // 节点的高度
            res.scrollLeft // 节点的水平滚动位置
            res.scrollTop  // 节点的竖直滚动位置
            res.scrollX    // 节点 scroll-x 属性的当前值
            res.scrollY    // 节点 scroll-y 属性的当前值
            // 此处返回指定要返回的样式名
            res.margin
            res.backgroundColor
        }).exec()
    }
});
```

### selectorQuery.exec([callback])

**解释：** 执行所有的请求，请求结果按请求次序构成数组，在 callback 的第一个参数中返回。 -->
