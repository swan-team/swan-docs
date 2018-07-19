---
title: 视图层
header: develop
nav: framework
sidebar: view
---
介绍
-----
框架的视图层由 模板语法 与 CSS 规范 编写，由组件来进行展示。
将逻辑层的数据渲染到视图层，同时将视图层的事件传递给逻辑层。
视图层 SWAN 用来描述 XML 的结构。
CSS 用来描述样式。
组件是视图的基本单位，是独立的数据、逻辑、视图的封装单元。

SWAN 模板语法
-----

### 起步

SWAN 是框架设计的一套标签语言，由[组件](../../component/view)、[事件处理](#事件处理)系统构成的一套页面结构。
下面一些简单的例子来说明 SWAN 模板 的简单用法。

<div class="notice">[数据绑定](#数据绑定)</div>

```xml
<!-- data-demo.swan-->
<view>Hello, {{name}}</view>
```

```javascript
// data-demo.js
Page({
    data: {
        name: 'SWAN'
    }
});

```

<div class="notice">[循环](#循环)</div>

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="p,index in persons">
        {{index}}: {{p.name}}
    </view>
</view>
```
```javascript
// for-demo.js
Page({
    data: {
        persons: [
            {name: 'Curry'},
            {name: 'Thompson'},
            {name: 'Durant'},
            {name: 'Green'},
            {name: 'Cousins'}
        ]
    }
});
```

<div class="notice">[条件](#条件)</div>

```xml
<!-- if-demo.swan-->
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```
```javascript
// if-demo.js
Page({
    data: {
        is4G: true,
        isWifi: false
    }
});
```

<div class="notice">[模板](#模板)</div>

```xml
<!-- template-demo.swan-->
<template name="tagCard">
    <view>
        <text>标签: {{tag}}</text>
        <text>昵称: {{nickname}}</text>
    </view>
</template>

<template name="personCard">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

<template name="teamCard">
    <view s-for="item, index in teams">
        <text>球队: {{index}} - {{item}}</text>
    </view>
</template>

<template name="ageCard">
    <view>
        <text>年龄: {{age}}</text>
    </view>
</template>

<template is="personCard" data="{{person}}" />
<!-- 对象字面量 -->
<template is="teamCard" data="{{ {teams} }}" />
<template is="tagCard" data="{{ {tag, nickname: 'king'} }}" />
<template is="ageCard" data="{{ {...person} }}" />

```
```javascript
// template-demo.js
Page({
    data: {
        person: {name: 'Lebron James', pos: 'SF', age: 33},
        teams: ['Cleveland Cavaliers', 'Miami Heat', 'Los Angeles Lakers'],
        tag: 'basketball'
    }
});
```

<div class="notice">[事件处理](#事件处理)</div>


```xml
<!-- event-demo.swan-->
<view class="view-more" bindtap="loadMore">
    点击加载更多
</view>
```

```javascript
// event-demo.js
Page({
    data: {
        firstScreen: true
    },
    loadMore: function () {
        console.log('加载更多被点击');
    }
});
```
具体更详细的用法请看下面的章节：
<div class="notice">[数据绑定](#数据绑定)</div>、<div class="notice">[循环](#循环)</div>、<div class="notice">[条件](#条件)</div>、<div class="notice">[模板](#模板)</div>、<div class="notice">[事件处理](#事件处理)</div>、<div class="notice">[引用](#引用)</div>

<br />

数据绑定
----

SWAN 模板中的动态数据，都从逻辑层 Page 中 data 对象来。

<br />

### 基础数据绑定
数据绑定和许多模板引擎一样，数据包裹在双大括号里面。

<br />

### 内容

```xml
<!-- data-demo.swan -->
<view>
    Hello My {{ name }}
</view>
```

```javascript
// data-demo.js
Page({
    data: {
        name: 'SWAN'
    }
});
```

<br />

### 属性绑定

```xml
<!-- attr-demo.swan -->
<view class="c-{{className}}">属性绑定</view>
```

```javascript
// attr-demo.js
Page({
    data: {
        className: 'blue'
    }
});
```

<br />

### 控制属性(不需要被双大括号包裹)

```xml
<!-- condition-demo.swan -->
<view s-if="flag"></view>
```

```javascript
// condition-demo.js
Page({
    data: {
        flag: true
    }
});
```

<br />

### 运算
SWAN 模板 提供了丰富的表达式类型支持，让使用者在编写视图模板时更方便。
- 数据访问(普通变量、属性访问)
- 一元否定
- 二元运算
- 二元关系
- 三元条件
- 括号
- 字符串
- 数值
- 布尔

通过下面例子列举支持的表达式类型。
```xml
<!-- operation-demo.swan -->

<!-- 普通变量 -->
<text>{{name}}</text>

<!-- 属性访问 -->
<text>{{person.name}}</text>
<text>{{persons[1]}}</text>

<!-- 一元否定 -->
<text>{{!isOK}}</text>
<text>{{!!isOK}}</text>

<!-- 二元运算 -->
<text>{{num1 + num2}}</text>
<text>{{num1 - num2}}</text>
<text>{{num1 * num2}}</text>
<text>{{num1 / num2}}</text>
<text>{{num1 + num2 * num3}}</text>

<!-- 二元关系 -->
<text>{{num1 > num2}}</text>
<text>{{num1 !== num2}}</text>

<!-- 三元条件 -->
<text>{{num1 > num2 ? num1 : num2}}</text>

<!-- 括号 -->
<text>{{a * (b + c)}}</text>

<!-- 数值 -->
<text>{{num1 + 200}}</text>

<!-- 字符串 + 三元条件 -->
<text>{{item ? ',' + item : ''}}</text>

<!-- 三元运算 -->
<checkbox checked="{{flag ? true : false}}"></checkbox>

<!-- 数组字面量 -->
<text>{{ ['john', 'tony', 'lbj'] }}</text>

```
<br />

#### 对象字面量(对象字面量是三个大括号包裹)
对象字面量支持了在模板里重组对象以及使用扩展运算符 ... 来展开对象。

```xml
<!-- template-demo.swan-->
<template name="tagCard">
    <view>
        <text>标签: {{tag}}</text>
        <text>昵称: {{nickname}}</text>
    </view>
</template>

<template name="personCard">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

<template name="teamCard">
    <view s-for="item, index in teams">
        <text>球队: {{index}} - {{item}}</text>
    </view>
</template>

<template name="ageCard">
    <view>
        <text>年龄: {{age}}</text>
    </view>
</template>

<template is="personCard" data="{{person}}" />
<!-- 对象字面量 -->
<template is="teamCard" data="{{ {teams} }}" />
<template is="tagCard" data="{{ {tag, nickname: 'king'} }}" />
<template is="ageCard" data="{{ {...person} }}" />

```
```javascript
// template-demo.js
Page({
    data: {
        person: {name: 'Lebron James', pos: 'SF', age: 33},
        teams: ['Cleveland Cavaliers', 'Miami Heat', 'Los Angeles Lakers'],
        tag: 'basketball'
    }
});
```

<br />


循环
----

### s-for
通过循环渲染列表是常见的场景。通过在元素上作用 s-for 指令，我们可以渲染一个列表。

#### 默认情况
默认不写情况下，下标索引是为 index，数组当前变量名默认为 item。

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="persons">
        {{index}}: {{item.name}}
    </view>
</view>
```

```javascript
// for-demo.js
Page({
    data: {
        persons: [
            {name: 'Curry'},
            {name: 'Thompson'},
            {name: 'Durant'},
            {name: 'Green'},
            {name: 'Cousins'}
        ]
    }
});
```

<br />

#### 简写

通过简写的方式，指定下标索引和数组当前变量名。

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="p,index in persons">
        {{index}}: {{p.name}}
    </view>
</view>
```

也可以通过使用 s-for-index 来指定下标索引，s-for-item 来指定数组当前变量名。

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="persons" s-for-index="idx" s-for-item="p">
        {{idx}}: {{p.name}}
    </view>
</view>
```



条件
----

### s-if
通过 s-if 指令，我们可以为元素指定条件。当条件成立时元素可见，当条件不成立时元素不存在。
通过 s-elif 指令可以给 s-if 增加一个额外条件分支块。
通过 s-else 指令可以给 s-if 增加一个不满足条件的分支块。s-else 指令没有值。

```xml
<!-- if-demo.swan-->
<view s-if="is4G">4G</view>
<view s-elif="isWifi">Wifi</view>
<view s-else>Other</view>
```
```javascript
// if-demo.js
Page({
    data: {
        is4G: true,
        isWifi: false
    }
});

```

#### block s-if
block 虚拟组件，在渲染时不会包含自身，只会渲染其内容。可以用来渲染一组组件或者标签。

```xml
<!-- if-demo.swan-->
<block s-if="flag">
  <view> name </view>
  <view> age </view>
</block>
```


模板
----

SWAN 提供模板 template 的用法，旨在提高工程化和代码可维护性，可以在模板中定义代码片段，并被外界注入值，然后在合适的时机调用。

### 定义模板

name 属性，定义了模板的名字。

```xml
<!-- template-demo.swan-->
<template name="personCard">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

```

### 使用模板
通过 is 属性，声明需要使用的模板，data 是所需要传入到模板的值，注意对象字面量的使用方法，以及对象字面量是三个大括号包裹。

```xml
<!-- template-demo.swan-->
<template is="personCard" data="{{person}}" />

```

```javascript
// template-demo.js
Page({
    data: {
        person: {name: 'Lebron James', pos: 'SF', age: 33}
    }
});
```

事件处理
----
### 事件介绍
事件提供了一种可以将用户的行为从视图层反馈到逻辑层进行处理的通讯方式。触发绑定在组件上的事件的时候，就会执行逻辑层中对应的事件处理函数，同时也可以传递数据，例如 id ,  dataset 等。

### 使用事件的简单 demo

目标：
在组件中绑定一个事件处理函数 bindtap 。

模板：
```xml
<view id="swanTap" data-say="hello" bindtap="tapHandle"> 点击 </view>
```

定义事件的处理函数：
```js
Page({
  tapHandle: function(e) {
    swan.showToast(e.currentTarget.dataset.say);
  }
});
```

可以看到，当用户点击组件时能够打提示 hello 。


### 事件的分类
与浏览器的 DOM 事件类似，智能小程序的视图中事件分为冒泡事件和非冒泡事件。
冒泡事件指的是当组件上的事件被触发后，该事件会向父节点传递。非冒泡事件指的是当组件上的事件被触发后，该事件不会向父节点传递。
在 SWAN 提供的事件中，冒泡事件如下列表展示，不在列表展示的事件均为非冒泡事件。

|事件类型 |触发时机 |
|---- | ---- |
|tap | 触摸后马上离开  |
|longtap | 触摸后超过350ms再离开（推荐使用 longpress 事件代替）  |
|longpress | 触摸后超过350ms再离开，如果是指定了事件回调函数并触发了这个事件，tap 事件将不被触发  |
|touchstart  |  触摸开始时    |
|touchmove  |   触摸后移动时 |
|touchcancel  | 触摸后被打断时，如来电等  |
|touchend  |    触摸结束时|
|transitionend  |   会在 transition 或 swan.createAnimation 动画结束后触发 |
|animationstart  |   会在 animation 动画开始时触发 |
|animationiteration  |    会在 animation 一次迭代结束时触发   |
|animationend  |  会在 animation 动画完成时触发 |

### 事件绑定和冒泡
事件绑定在组件上，与属性的写法相同，都是以 key、value 的形式。

key 以 bind 或 catch 开头，衔接事件类型，例如 bindtap、catchtouchcancel。也可以在 bind 和 catch 后可以紧跟一个冒号，如 bind:tap、catch:touchstart，其功能不变。
bind 与 catch 的区别是 bind 事件绑定不会阻止冒泡事件向上冒泡，catch 事件绑定可以阻止冒泡事件向上冒泡。
value 对应的是在 Page 中定义同名的函数，否则在事件触发时执行函数会抛出异常。

下面看一个例子：
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
效果：
用户点击 text 会先后调用 handleTap3 和 handleTap2。这是因为 tap 事件冒泡到了 module，而 module 阻止了 tap 事件冒泡，不再向父节点传递。
用户点击 module 会触发 handleTap2。
用户点击 wrap 会触发 handleTap1。

### 事件的捕获
捕获阶段是位于冒泡阶段之前，在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反。
在捕获阶段监听的方式是采用 capture-bind、capture-catch 关键字，后者将中断捕获阶段和取消冒泡阶段。

举个例子：
```xml
<view id="wrap" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
  wrap
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    text
  </view>
</view>
```
效果：text 会先后调用 handleTap2、handleTap4、handleTap3、handleTap1。

### 事件对象

默认当组件触发事件时，逻辑层绑定事件的处理函数会收到一个默认参数，就是事件对象。

下面是事件对象详细属性列表：

|属性 | 类型  |  说明|
|---- | ---- |
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
|---- | ---- |
|id | String | 触发事件组件的 id|
|tagName | String | 触发事件组件的类型|
|dataset | Object | 触发事件组件上由data-开头的自定义属性组成的集合,详细属性参见 [dataset](./#dataset) |

#### currentTarget

|属性 | 类型  |  说明|
|---- | ---- |
|id | String | 事件绑定的组件的 id|
|tagName | String | 事件绑定的组件的类型|
|dataset | Object | 事件绑定的组件上由data-开头的自定义属性组成的集合,详细属性参见 [dataset](./#dataset) |

#### detail
是自定义事件所携带的数据，具体详见组件定义中各个事件的定义。

#### dataset
在组件的事件被触发时，也可以传递自定义的数据。 
书写方式： 以 data- 开头，多个单词由连字符-链接，不能有大写(大写会自动转成小写)，最终的 - 在 dataset 中会将连字符转成驼峰式写法。
如组件上`data-car-color`属性值的读取方式是: event.currentTarget.dataset.carColor。

#### touch
|属性 | 类型  |  说明|
|---- | ---- |
|identifier | Number | 触摸点的标识符|
|clientX, clientY  |  Number | 距离页面可显示区域（屏幕除去导航条）左上角的X轴与Y轴的距离|
|pageX, pageY |   Number | 距离文档左上角的X轴与Y轴的距离|

#### changedTouch
数据格式同 touches，指的是有变化的触摸点，如 touchstart（开始），touchmove（变化），touchend，touchcancel（结束）等。

点击事件的 detail 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离。

引用
----
SWAN 可以通过`import`和`include`来引用文件。

### import
通过`import`和`template`配合使用，可以将代码分离以及复用。

```xml
<!-- personCard.swan-->
<template name="personCard">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

```
在`personCard.swan`里定义了一个模板，在`index.swan`里引用文件，并使用它的模板。
```xml
<!-- index.swan-->
<import src="./personCard.swan" />
<template is="personCard" data="{{person}}" />

```

### include
通过`include`可以将目标模板，整个(除了 template)引入到当前的位置，相当于`inline`。

```xml
<!-- detail.swan-->
<include src="header.swan" />
<view class="detail">body</view>

```

```xml
<!-- header.swan-->
<view class="header">header</view>

```
<br />

CSS
----
CSS 是描述 SWAN 的样式语言。支持 CSS 的属性。
在此基础上，做了一些编译支持：
- 尺寸单位
- 样式导入

### 尺寸单位
对于自适应的单位，推荐使用 CSS3 vw 为单位，vw 代表视窗( Viewport )的宽度为1%。
同时也支持 rpx，规定屏幕宽为750rpx。在 iPhone X 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

<br />

### 样式导入
为了工程化和代码复用，我们支持 @import 语句，导入 CSS 文件。

<br />

```css
/* header.css */
.header {
    padding: 8px;
}
```

```css
/* index.css */
@import "header.css";
.body {
    padding: 12px;
}
```

<br />

组件
----
SWAN 框架为开发者提供了一系列组件，可以让开发者基于这些基础组件快速开发。
详情请见[组件文档](../../component/view)



