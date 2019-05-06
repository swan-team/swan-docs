---
title: 性能优化建议
header: develop
nav: framework
sidebar: performance-tips
---

在您做小程序性能优化之前，建议您先了解小程序的运行原理。
在传统的 Web 前端项目中，所有代码全部运行在浏览器中。而小程序提供的运行环境有两种，分为逻辑层和视图层。假设现在开发者的小程序项目中有两个页面 pages/index和pages/home ，那么逻辑层代码指的是 app.js 与 pages/index/index.js 还有pages/home/home.js ，视图层代码指的是 pages/index/index.swan 和 pages/home/home.swan。在小程序中想要改变视图需要逻辑层与视图层之间进行通信，这部分通信是需要客户端参与的。

## 控制包体积的大小

减小包的体积可以减少包的下载时间。除了体积之外，小程序包内的文件个数也直接影响到小程序包的解压速度。因此，需要减少小程序包内非必须的图片，字体，音频等资源的文件个数。同时，逻辑层与视图层的代码都需要加载到webview组件当中去，减小这部分的体积也会加快小程序的启动速度。根据已经上线的小程序包的统计分析后，我们建议开发者尽量将主包的体积限制在**1M**左右，包内的文件个数大小限制在**200**以内。

### 分包加载

[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)通用策略一般来讲就是将必须的和经常访问的页面放入主包当中。建议将声明在 app.json 当中的 tabBar 配置项下的页面以及小程序经常会被访问到的页面都放入主包当中。另外，根据小程序的投放场景不同，“经常访问的页面”可能还需要做更多考虑，例如：在 Feed 和搜索分发的小程序非首页页面也建议放到主包中，避免首次打开投放页面处于分包内时需要先下载主包再下载分包导致的性能退化。

```
{
	"pages": [
		// 该配置项下经常要访问的页面放入主包当中，其余页面放入子包当中
		"pages/index/index",
	    "pages/detail/detail"
	],
	"tabBar": {
		// 该配置项下面的页面建议放入主包当中
	    "list": [
		    {
		        "pagePath": "pages/index/index",
		        "text": "首页"
		    },
		    {
		        "pagePath": "pages/logs/logs",
		        "text": "日志"
		    }
	    ]
	}
}
```

### 图片的优化

- 原则上除小程序 icon 以外的图片资源均应部署到 cdn 上，不建议把所有的图片都放在小程序包内，这样会增大包的体积。影响小程序包的下载速度与解压速度。
- 过大的图片在加载时会消耗更多的系统资源。所以建议开发者尽量不使用超过**300K**的图片资源。
- 对小程序包内的图片选择合适的格式进行存储，不需要透明格式的图片，推荐采用 jpeg 格式来存储代替 png 格式。
- 对小程序包内的图片进行适当的压缩，对于 png 格式的图片，最常用的工具是[tinypng](https://tinypng.com/)。对于 jpeg 格式的图片，可以使用的工具是[tinyjpg](https://tinyjpg.com/)。也可以使用[http://www.exifpurge.com/](http://www.exifpurge.com/)或者其他图片编辑软件来清除图片的 exif 信息，减小图片的体积。
- 去除小程序包内冗余和无用的图片资源，例如：重复的图片，未引用或不需要的资源文件等。
- 安卓端支持 webp 的图片格式，webp图片格式在有损压缩的情况下，肉眼不易察觉出压缩前后的变化，但是体积却得到很大的减小。需要注意的是，iOS平台下的小程序不支持 webp 格式，如果开发者要使用webp格式的图片的话，需要注意区分平台。

### 其他资源文件的优化

JSON 描述文件可以通过[jsonminify](https://www.cleancss.com/json-minify/)工具对JSON文件进行压缩。

## 请求数据的优化

绝大多数小程序都需要请求服务端来获取渲染页面的数据，对于请求数据的优化，总结起来就是一句话，关键的早请求，不关键的晚请求。

涉及到关键数据的异步请求可以尽早的发出，不需要等待页面的 onReady 生命周期之后才去发送请求。这样可以让页面所需的数据尽可能早的处于Ready状态。除了在现有的生命周期发送数据请求以外，我们还提供了**prefetch**机制，能够在小程序框架启动阶段就去请求数据，而不用等待页面生命周期触发。

根据小程序被打开的场景，可以对异步请求进行优先级排序，不重要的请求放在页面的 onReady 生命周期去请求。例如，贴吧小程序最经常被访问的页面是帖子内容页，因此，除了当前帖子内容以外的数据请求都是非关键请求，可以将触发的时机延后，保证帖子内容尽可能早的被加载出来。

## setData 操作的优化

setData 方法是开发者通过逻辑层向视图层发送数据的方法。每一次 setData 的调用，都会触发一次通信，而每一次的通信都会消耗一定的系统资源，因此，开发者在使用 setData 需要注意以下几点：

**1. 不要过于频繁调用 setData，应考虑将多次 setData 合并成一次 setData 调用。**
**2. 不在视图层使用的数据不要通过 setData 传输。**
**3. 不在页面不可见之后使用 setData。**
**4. 不建议在更新数据结构当中的某一子项的时候将整个数据结构放到setData方法中，可以通过优化 setData 的 key 值来实现。**

错误写法：
```
let person = this.getData('person');
person.age = 30;
this.setData('person',person);
```

正确写法:

```
this.setData('person.age', 30);
```

在更新列表中某一项内部的值时，推荐的用法为：

```
this.setData('list[0].person.name', 'Harry');
```
**5. 在处理无限滚动页面加载的时候，我们发现很多开发者将新的一页上的数据添加整体的数据里面再调用setData。这样做造成每次页面加载传输的数据越来越大。**

未优化情况下的做法：
```
let pages = this.data.pages.push(page)
this.setData({
	list: pages
});
```

**6. 使用 trackBy 来优化列表更新时的渲染性能。**

当使用下拉刷新功能时，新的数据会被添加到当前列表的头部，这种情况下，页面中列表内所有的项都会被重新渲染一次。
```
// 下拉刷新更新方式举例
let list = list.unshift(newPage);
this.setData({
	list
});
```
如果使用trackBy，那么原先的列表内的项位置会移动，新添加的项会被渲染。这样可以省去一部分重新渲染带来的消耗。
```
// 使用trackBy举例
<scroll-view>
	<view s-for="item, index in list trackBy item.id">
	</view>
</scroll-view>
```

## 清理定时器
当使用`swan.navigateTo`进行页面跳转的时候，旧页面是没有被销毁的。旧页面当中定义的定时器仍旧会运行。因此在页面跳转的时候，一定要记住清理没有用的定时器
```
Page({
	onReady() {
		this.timer = setInterval(() => {
			// do something
		}, 300);
	},
	onHide() {
		// 在页面不在前台显示的时候，清除无用的定时器
		this.timer && clearInterval(this.timer);
	}
})
```

## 合理使用自定义组件
自定义组件与模板内的import与include功能都可以达到代码复用的效果。需要注意的是，如果自定义组件内没有逻辑层的功能的话，这时候使用自定义组件就是非必须的的了。
```
<import src="./person.swan" />
<view class="container">
	<!-- 使用import复用模板代码 -->
	<template is="person-card" data="{{person}}" />
</view>
```

```
// Person相关函数
export function play() { /* do something*/ }
export function eat() { /* do something*/ }
export function sing() { /* do something*/ }
```

```
// 复用person.js中的函数
import * as Person from './person';
Page({
	onReady() {
		this.play();
		this.eat();
		this.sing();
	},
	onShow() {},
	onLoad() {},
	onHide() {},
	...Person
})
```




<!-- 代码包的优化
-----

### 优化大小
对于开发者来说，为了实现更加丰富的功能，所以有时会忽略对代码包大小的优化，但对于用户设备来说，需要把智能小程序所使用的代码包下载到本地空间。
所以代码包的大小会影响着用户所需的下载流量以及空间占用。另外，代码包的下载速度也会直接影响着用户的首次打开智能小程序的体验。

智能小程序的打包过程会把用户工程下所有的文件都进行打包，生成最终的用户包，所以，应该在实际开发用户包的过程中，实现业务逻辑的同时尽量去除冗余，提高复用性，及时清理不再使用的库文件和资源，来减少代码包的大小。

### 使用分包
可以合理的使用智能小程序的分包策略。按功能聚合、业务代码的使用频度等指标来进行代码包的拆分，当用户访问到不同包内的页面时，客户端再分别加载对应的分包。这样既能够减少智能小程序首次加载时的使用流量，也能够提升智能小程序首次加载时的速度。

### 图片资源优化
当使用大图片或者是长列表图片时，可能会导致客户端的内存占用上升，当占用量达到一定指标时，会触发客户端销毁智能小程序的机制。另外，大图片也可能会造成客户端的卡顿，所以建议开发者尽量减少使用大图片的资源。
<br/>
合理的使用 setData
-----
setData 是用户开发中经常使用的接口，对于手机百度智能小程序而言，使用不当也是极易引起性能问题的接口。
为了使大家更好的理解 setData 的错误用法，首先先介绍一下其背后的工作原理。

### setData 的工作原理
智能小程序的逻辑层与视图层分属于不同的运行环境，相互之间不具备直接数据共享通道，他们之间的数据传递是通过客户端的消息事件派发来实现，所以到达视图层的 object 对象并非原指针，而是数据的复制版本。两者数据也并非完全同步，而是在数据未到达视图层之前，逻辑层的数据会领先于视图层。

智能小程序的视图层使用了 san 框架，相对于其他类似 react 等 mvvm 框架来通过 virtual dom diff 来实现组件的渲染来说，san 框架是基于 data 的 diff 来进行的组件重新渲染，减少了内存的使用率与计算量，保证视图更新的高效性。所以智能小程序的视图层对于数据的变更更加敏感，感受到数据变更时则会直接触发组件的重渲染。
<br/>
### 常见不合理的使用 case
下面列举在开发者开发的过程中会常见的使用 setData 不当的场景。

#### 1. setData 数据粒度划分不够

常见场景：开发者仅改变对象中某个属性的值，setData 的数据却是整个对象
例如：假设 person 的模型为
```js
		{
			name:'swan',
			age:'20',
			sex:'man',
			getName:fn,
			……
		}
```
错误写法：
```js	
		let person = this.getData('person');
		person.age = 30;
		this.setData('person',person);
```		
正确写法：
```js		
		this.setData('person.age',30);
```		
此时，若逻辑层直接向视图层传递更新整个 person ，那么首先传输的数据量会成倍增长，其次，视图层中所有使用了 person 中任何属性的组件均重新渲染。
好在逻辑层对于此处进行了优化，在逻辑层先进行数据对比，自动将 setData('person',person) 补全为 setData('person.age',30)。
但上述写法也依旧使逻辑层增加处理过程，并且对于特殊的数据类型，如 array ，逻辑层的 diff 比较无法精准到具体 key 。
例如：假设 numbers 模型为 [1,2,3,4,5]
错误写法：
```js	
		let numbers = this.getData('numbers');
		numbers.unshift();
		this.setData('numbers',numbers);
```				
正确写法：
```js	
		this.unshiftData(array);
```				
所以在开发过程中，开发者应正确划分 setData 的数据粒度，以优化程序性能。
<br/>
#### 2. 频繁的 setData
原因同上，频繁的 setData，常见场景如 setInterval ，或其他循环执行。
上述操作逻辑层每次均会通过客户端传递数据到视图层，消耗用户的网络流量与增加传输次数。并且，视图层也会频繁的重渲染组件，造成用户视觉卡顿等不好的体验。
<br/>
#### 3. 智能小程序页面不可见后进行 setData
在页面进入到后台状态时，程序后台的 setData 会占用前台页面的执行资源，且后台页面的渲染对用户并不可见，导致资源浪费。所以在页面隐藏时，不应该继续进行 setData 。 -->
