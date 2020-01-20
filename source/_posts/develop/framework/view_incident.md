---
title: 事件处理
header: develop
nav: framework
sidebar: view_incident
---

事件提供了一种可以将用户的行为从视图层反馈到逻辑层进行处理的通讯方式。触发绑定在组件上的事件的时候，就会执行逻辑层中对应的事件处理函数，同时也可以传递数据，例如 id ,  dataset 等。

### 事件示例

**目标**：
在组件中绑定一个事件处理函数 bindtap 。

**模板**：
```xml
<view id="swanTap" data-say="hello" bindtap="tapHandle"> 点击 </view>
```

**定义事件的处理函数：**
```js
Page({
    tapHandle(e) {
        swan.showToast(e.currentTarget.dataset.say);
    }
});
```
**效果：**
当用户单击组件时，显示: "hello"。

### 事件的分类
与浏览器的 DOM 事件类似，智能小程序的视图中事件分为`冒泡事件`和`非冒泡事件`。
* 冒泡事件指的是当组件上的事件被触发后，该事件会向父节点传递；
* 非冒泡事件指的是当组件上的事件被触发后，该事件不会向父节点传递；
* 原生组件`video`、`live-player`、`canvas`、`cover-view`、`cover-image`等从[`基础库1.12.0`](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)开始支持冒泡。

**冒泡事件如下表，不在列表的事件均为非冒泡事件。**

|事件类型 |触发时机 |
|---- | ---- |
|tap | 触摸后马上离开  |
|longtap | 触摸后超过350ms再离开（推荐使用 longpress 事件代替）  |
|longpress | 触摸后超过350ms再离开，如果是指定了事件回调函数并触发了这个事件，tap 事件将不被触发  |
|touchstart  |  触摸开始时    |
|touchmove  |   触摸后移动时 |
|touchcancel  | 触摸后被打断时，如来电等  |
|touchend  |    触摸结束时|
|touchforcechange|支持 3D Touch 的 iPhone 设备，重按时会触发。|
|transitionend  | 会在 transition 或 swan.createAnimation 动画结束后触发 |
|animationstart  | 会在 animation 动画开始时触发 |
|animationiteration  | 会在 animation 一次迭代结束时触发   |
|animationend  |  会在 animation 动画完成时触发 |

### 事件绑定和冒泡
事件绑定在组件上，与属性的写法相同（以 key、value 的形式）。

- key 以 bind 或 catch 开头，衔接事件类型，例如 bindtap、catchtouchcancel。也可以在 bind 和 catch 后可以紧跟一个冒号，如 bind:tap、catch:touchstart，其功能不变。
- bind 与 catch 的区别是 bind 事件绑定不会阻止冒泡事件向上冒泡，catch 事件绑定可以阻止冒泡事件向上冒泡；
- value 对应的是在 Page 中定义同名的函数，否则在事件触发时执行函数会抛出异常。

**代码示例**
```xml
<view id="wrap" bindtap="handleTap1">
    wrap
    <view id="module" catchtap="handleTap2">
        module
        <view id="text" bindtap="handleTap3">
            text
        </view>
    </view>
</view>
```

**效果**：
* 用户单击 text 会先后调用 handleTap3 和 handleTap2。这是因为 tap 事件冒泡到了 module，而 module 阻止了 tap 事件冒泡，不再向父节点传递；
* 用户单击 module 会触发 handleTap2；
* 用户单击 wrap 会触发 handleTap1。

### 事件的捕获

捕获阶段是位于冒泡阶段之前，在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反。
在捕获阶段监听的方式是采用`capture-bind`、`capture-catch`关键字，后者将中断捕获阶段和取消冒泡阶段。

**代码示例**
```xml
<view id="wrap" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
    wrap
    <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
        text
    </view>
</view>
```
**效果**：
- 用户单击 text 会先后调用 handleTap2、handleTap4、handleTap3、handleTap1。

### 事件对象

默认当组件触发事件时，逻辑层绑定事件的处理函数会收到一个默认参数，即事件对象。

下面是事件对象详细属性列表：

|属性 | 类型  |  说明|
|---- | ---- |---- |
|type  |  String | 事件的类型|
|timeStamp |  Integer | 事件触发的时间戳（毫秒）|
|target | Object | 触发事件的组件的属性值集合，详细属性参见 [target](./#target) |
|currentTarget |  Object | 当前组件的一些属性值集合，详细属性参见 [currentTarget](./#currentTarget) |
|detail | Object | 自定义事件对象属性列表，详细属性参见 [detail](./#detail)|
|touches |  Array   | 触摸事件类型存在，存放当前停留在屏幕中的触摸点信息的数组，touch 详细属性参见 [touch](./#touch) |
|changedTouches |  Array   | 触摸事件类型存在，存放当前变化的触摸点信息的数组, changedTouch [changedTouch](./#changedTouch)  |

下面是事件对象的属性为属性值集合时的详细信息。
#### target

|属性 | 类型  |  说明|
|---- | ---- |---- |
|id | String | 触发事件组件的 id|
|tagName | String | 触发事件组件的类型|
|dataset | Object | 触发事件组件上由data-开头的自定义属性组成的集合,详细属性参见 [dataset](./#dataset) |

#### currentTarget

|属性 | 类型  |  说明|
|---- | ---- |---- |
|id | String | 事件绑定的组件的 id|
|tagName | String | 事件绑定的组件的类型|
|dataset | Object | 事件绑定的组件上由data-开头的自定义属性组成的集合,详细属性参见 [dataset](./#dataset) |

#### detail
是自定义事件所携带的数据，具体详见[组件](https://smartprogram.baidu.com/docs/develop/component/component/)定义中各个事件的定义。

#### dataset
在组件的事件被触发时，也可以传递自定义的数据。
书写方式： 以 data- 开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)，最终的 - 在 dataset 中会将连字符转成驼峰式写法。
如组件上`data-car-color`属性值的读取方式是: event.currentTarget.dataset.carColor。

#### touch
|属性 | 类型  |  说明|
|---- | ---- |---- |
|identifier | Number | 触摸点的标识符|
|clientX, clientY  |  Number | 距离页面可显示区域（屏幕除去导航条）左上角的X轴与Y轴的距离|
|pageX, pageY |   Number | 距离文档左上角的X轴与Y轴的距离|

#### changedTouch
数据格式同 touches，指的是有变化的触摸点，如 touchstart（开始），touchmove（变化），touchend，touchcancel（结束）等。

点击事件的 detail 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离。
