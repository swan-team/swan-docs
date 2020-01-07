---
title: 性能优化建议
header: develop
nav: framework
sidebar: performance-tips
---



进入移动互联网时代，传统Web开发技术（HTML，CSS，JavaScript）风光不再，客户端技术（iOS以及Android）依靠良好的体验重新崛起。但是客户端技术的开发效率始终无法与Web技术抗衡，同时会受到诸多平台层面的限制。在这一大背景下，小程序独特的架构诞生了，它将Web前端技术与传统的客户端技术结合在一起，其目的是在开发效率上超过传统的客户端技术，在使用体验上超越传统的Web前端技术。由于小程序的架构区别于传统的Web前端技术，开发者在开发过程可能会遇到一些性能上的问题。本文旨在介绍百度小程序一些实现原理和优化手段，帮助开发者优化自己的小程序。

## 小程序运行时简介
在传统的Web前端项目中，所有代码全部运行在浏览器中。而小程序提供的运行环境有两种，分为逻辑层和视图层。假设现在开发者的小程序项目中有两个页面`pages/index和pages/home`，那么逻辑层代码指的是`app.js`与`pages/index/index.js`还有`pages/home/home.js`，视图层代码指的是`pages/index/index.swan`和`pages/home/home.swan`。在小程序中想要改变视图需要逻辑层与视图层之间进行通信，这部分通信是需要客户端参与，会消耗一定的系统资源。

## 包体积优化
减小包的体积可以减少包的下载时间。根据已经上线的小程序包的统计分析结果，我们建议开发者尽量将主包的体积控制在 **1M** 左右，包内的文件个数限制在 **200** 以内。除了体积之外，小程序包内的文件个数也直接影响到小程序包的解压速度。因此，需要减少小程序包内非必须的图片、字体、音频等资源的文件个数。同时，逻辑层与视图层的代码都需要加载到 webview 实例当中去，减小这部分的体积也会加快小程序的启动速度。

### 分包加载
分包加载是智能小程序用来解决包体积过大而给出的一个技术解决方案（点击查看[分包加载](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)相关文档）。为了最大程度的减少主包的大小，提高小程序的加载速度，开发者使用分包加载策略时，建议将必须的和经常访问的页面放入主包当中，例如将声明在 app.json 当中的 tabBar 配置项下的页面放入主包当中。另外，根据小程序的投放场景不同，开发者需要仔细思考自己的小程序中哪些页面是经常被访问的。举个例子，在Feed和搜索分发的小程序非首页页面我们建议放到主包中，避免首次打开投放页面处于分包内时需要先下载主包再下载分包而导致的性能退化。

**代码示例**

```json
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
- 过大的图片在加载时会消耗更多的系统资源。所以建议开发者尽量不使用超过 **300K** 的图片资源。
- 对小程序包内的图片选择合适的格式进行存储，不需要透明格式的图片，推荐采用 jpeg 格式来存储代替 png 格式。
- 适当的降低图片的质量，大多数场景我们并不需要 100% 的 JPEG 压缩比例，此时我们可以修改 JPEG 的压缩比例从而大幅减小 JPEG 图片的体积。例如：100% 的 JPEG 图片与 25% 压缩比大小差为 90%，但是肉眼可见的感知可能微乎其微。
- 对小程序包内的图片进行适当的压缩，对于 png 格式的图片，最常用的工具是[tinypng](https://tinypng.com/)。对于jpeg格式的图片，可以使用的工具是[tinyjpg](https://tinyjpg.com/)。也可以使用[EXIF Purge](http://www.exifpurge.com/)或者其他图片编辑软件来清除图片的exif信息，减小图片的体积。
- 去除小程序包内冗余和无用的图片资源，例如：重复的图片，未引用或不需要的资源文件等。
- 安卓端支持webp的图片格式，webp图片格式在有损压缩的情况下，肉眼不易察觉出压缩前后的变化，但是体积却得到很大的减小。需要注意的是，iOS平台下的小程序不支持webp格式，如果开发者要使用webp格式的图片的话，需要注意区分平台。

### 其他资源文件的优化

JSON描述文件可以通过[jsonminify](https://www.cleancss.com/json-minify/)工具对JSON文件进行压缩。

## 请求数据的优化
绝大多数小程序都需要请求服务端来获取渲染页面的数据，对于请求数据的优化，总结起来就是一句话，关键的早请求，不关键的晚请求。

涉及到关键数据的异步请求可以尽早的发出，不需要等待页面的 onReady 生命周期之后才去发送请求。这样可以让页面所需的数据尽可能早的处于 Ready 状态。除了在现有的生命周期发送数据请求以外，我们还提供了**prefetch**机制（prefetch机制需要在[app.json](/develop/tutorial/process/)之中进行配置）能够在小程序框架启动阶段就去请求数据，而不用等待页面生命周期触发。

根据小程序被打开的场景，可以对异步请求进行优先级排序，不重要的请求放在页面的 onReady 生命周期去请求。例如，贴吧小程序最经常被访问的页面是帖子内容页，因此除了当前帖子内容以外的数据请求都是非关键请求，可以将触发的时机延后，保证帖子内容尽可能早的被加载出来。

## setData操作的优化

setData方法是开发者通过逻辑层向视图层发送数据的方法。每一次 setData 的调用，都会触发一次通信，而每一次的通信都会消耗一定的系统资源，因此，开发者在使用 setData 需要注意以下几点：

1. 不要过于频繁调用setData，应考虑将多次setData合并成一次setData调用。
2. 不在视图层使用的数据不要通过setData传输。
3. 不在页面不可见之后使用setData.
4. 不建议在更新数据结构当中的某一子项的时候将整个数据结构放到setData方法中，可以通过优化setData的key值来实现。

    * **错误写法**：
    **代码示例**
    ```javascript
    let person = this.getData('person');
    person.age = 30;
    this.setData('person',person);
    ```

    * **正确写法**:
    **代码示例**
    ```javascript
    this.setData('person.age', 30);
    ```

    * 在更新列表中某一项内部的值时，**推荐的用法**为：
    **代码示例**
    ```javascript
    this.setData('list[0].person.name', 'Harry');
    ```
5. 在处理无限滚动页面加载的时候，我们发现很多开发者将新的一页上的数据添加整体的数据里面再调用setData。这样做造成每次页面加载传输的数据越来越大。
    * **未优化情况下的做法**：
    **代码示例**
    ```javascript
    let pages = this.data.pages.push(pageData)
    this.setData({
        list: pages
    });
    ```
    * **优化后的做法**：
    **代码示例**
    ```javascript
    Page({
        data: {
            pages: [], // 使用一个二维数组来描述长列表
            currentPage: 0 // 当前页面的页码
        },
        onReady() {
            // 如果需要更新一页的数据，那么直接更新二维数组中的项
            this.setData(`pages[${currentPage}]`, pageData);
        }
    });
    ```

6. 使用trackBy来优化列表更新时的渲染性能

    * 当使用下拉刷新功能时，新的数据会被添加到当前列表的头部，这种情况下，页面中列表内所有的项都会被重新渲染一次。
    **代码示例**
    ```javascript
    // 下拉刷新更新方式举例
    let list = list.unshift(newPage);
    this.setData({
        list
    });
    ```
    * 如果使用trackBy，那么原先的列表内的项位置会移动，新添加的项会被渲染。这样可以省去一部分重新渲染带来的消耗。
    **代码示例**
    ```xml
    // 使用trackBy举例
    <scroll-view>
        <view s-for="item, index in list trackBy item.id">
        </view>
    </scroll-view>
    ```

## 清理定时器
当使用`swan.navigateTo`进行页面跳转的时候，旧页面是没有被销毁的。旧页面当中定义的定时器仍旧会运行。因此在页面跳转的时候，一定要记住清理没有用的定时器:
**代码示例**
```javascript
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
自定义组件与模板内的import与include功能都可以达到代码复用的效果。需要注意的是，如果自定义组件内没有逻辑层的功能的话，这时候使用自定义组件就是非必须的了。我们可以用下面的方式实现代码的复用：
**代码示例**
```xml
<import src="./person.swan" />
<view class="container">
    <!-- 使用import复用模板代码 -->
    <template is="person-card" data="{{person}}" />
</view>
```

```javascript
// Person相关函数
export function play() { /* do something*/ }
export function eat() { /* do something*/ }
export function sing() { /* do something*/ }
```

```javascript
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

## 渐进式加载
提前加载页面的骨架，可以减少用户的白屏等待时长，百度智能小程序提供了渐进式加载机制，使用这一机制，可以给用户带来更好的用户体验。下面将介绍如何使用这一机制为开发者自己的小程序提供渐进式加载的能力。

- 第一步：在工程项目根目录新建skeleton文件夹（page 中的文件名可自定义），目录如下所示
```
  skeleton
  |--- page/
  |    |--- index.tpl  骨架屏模板代码
  |    |--- list.tpl  骨架屏模板代码
  |___ config.json  page和骨架屏的映射关系
```
   
- 第二步：使用标准HTML与CSS，编写骨架屏模板文件，如index.tpl骨架屏代码如下图
**代码示例**
```html
<style>
.skeleton-list {
    background: gray;
}
</style>
<div style="width:100%">
    <ul class="skeleton-list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
```

- 第三步：配置config.json文件，pages和骨架屏是多对一的映射关系，可配置多个页面对应同一个骨架屏模板
**代码示例**
```
{
    "pages/home/index": "skeleton/page/index",
    "pages/list/index": "skeleton/page/index"
}
```

**Bug&Tip**：
       1. 需要2.15及其上版本的开发者工具与基础库 3.70.53 及其以上版本
       2. 骨架屏移除的时机由开发者自己掌控。开发者可以在Page内通过调用this.removeSkeleton()移除。
       3. 在调用removeSkeleton方法的时候，需要有兼容逻辑（`this.removeSkeleton && this.removeSkeleton()`）
