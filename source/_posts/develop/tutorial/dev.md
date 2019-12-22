---
title: 开发 .swan 文件
header: develop
nav: tutorial
sidebar: dev
---



这部分是每个智能小程序页面的展现模板，类似于 Web 开发中的 HTML，SWAN 模板中使用的标签均为 SWAN 组件规定的标签。

**代码示例**

```xml
<view s-for="item in items" class="single-item" bind:tap="oneItemClick" bind:touchstart="oneItemTouchStart" bind:touchmove="oneItemTouchmove" bind:touchcancel="oneItemTouchcancel" bind:touchend="oneItemTouchEnd">
    <image src="{{item.imgsrc}}" class="single-img"></image>
    <view class="single-text-area">
        <text class="single-title">
	    {{item.title}}
	</text>
	<view s-if="{{item.tags}}" class="tag-area">
	    <text s-for="tag in item.tags" class="{{tag.className}}">
	        {{tag.content}}
	    </text>
	</view>
    </view>
</view>
<view class="view-more" bind:tap="loadMore">
    <text>点击加载更多</text>
</view>

```
<br/>
### 基础数据绑定

**代码示例**

```xml
<!-- xxx.swan -->
<view>
    Hello My {{ name }}
</view>
```

```javascript
// xxx.js
Page({
    data: {
	name: 'SWAN'
    }
});
```

#### 循环

开发者可以通过在元素上添加`s-for`指令，来渲染一个列表。

**代码示例**

```xml
<view>
    <view s-for="p in persons">
	{{p.name}}
    </view>
</view>
```
```javascript
Page({
    data: {
	persons: [
	    {name: 'superman'},
	    {name: 'spiderman'}
	]
    }
});
```

#### 条件

开发者可以通过在元素上添加`s-if`指令，来在视图层进行逻辑判断：

**代码示例**

```xml
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```

```javascript
Page({
    data: {
	is4G: true,
	isWifi: false
    }
});
```
<br/>
### 事件

#### 事件处理

开发者可以使用`bind: + 事件名`来进行事件绑定

**代码示例**

```xml
<view class="view-more" bind:tap="loadMore">
    点击加载更多
</view>
```

```javascript
Page({
    loadMore: function () {
	console.log('加载更多被点击');
    }
});
```
目前支持的事件类型有：

|类型|触发条件|
|---|---|
|touchstart|手指触摸开始|
|touchmove|手指触摸后进行移动|
|touchend|手指触摸结束|
|touchcancel|手指触摸动作被打断，如来电提醒等|
|tap|手指触摸后马上离开动作|

#### 事件对象

当开发者绑定方法到事件，事件触发时，SWAN 会给触发的方法传递事件对象，事件对象因事件不同而不同，目前基础的事件对象结构为：

|属性|类型|说明|
|----|----|----|
|type|String|事件类型|
|currentTarget|Object|事件触发的属性集合|

#### dataset

开发者可以在组件中自定义数据，并在事件发生时，由 SWAN 所在事件对象中，传递给绑定函数。

**代码示例**

```xml
<view data-swan="1" bind:tap="viewtap">dataset-test</view>
```

```javascript
Page({
    viewtap: function (event) {
	console.log('value is:', event.currentTarget.dataset.swan);// 输出1
    }
});
```

#### touches

开发者在接收到触摸类事件后，在事件对象上，可以接收到当前停留在屏幕上的触摸点。

Touch 对象

|属性|类型|描述|
|----|----|----|
|pageX , pageY|Number|距离文档左上角的距离，横向为 X，纵向为 Y|
|clientX , clientY|Number|距离屏幕视口左上角距离，横向为 X，纵向为 Y|


**代码示例**

```xml
 <view bind:touchstart="viewtouchstart">viewtouchstart</view>
```

```javascript
Page({
    viewtouchstart: function (event) {
	    console.log('value is:', event.touches);
        // 输出 clientX: 44，clientX: 47，pageX: 44, pageY: 47
    }
});
```



