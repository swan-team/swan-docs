---
title: 页面事件处理函数
header: develop
nav: framework
sidebar: app_service_pagefunction
---



### onPullDownRefresh

**解释**：在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
**示例代码**：
<a href="swanide://fragment/fc0587d7ad5ffc1c3c8ad5182c14cc461548069060160" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// page.js
Page({
    onPullDownRefresh() {
        // do something
    }
});
```
**说明**：
* 需要在`app.json`的`window`选项中开启 `enablePullDownRefresh`；
* 如果需要单个页面支持下拉刷新，可以直接在页面目录下的 json 配置文件中开启`enablePullDownRefresh`；
* 当处理完数据刷新后，[`swan.stopPullDownRefresh`](https://smartprogram.baidu.com/docs/develop/api/show_pull/#swan-stopPullDownRefresh/)可以停止当前页面的下拉刷新。


### onReachBottom
**解释**：在`Page`中定义 onReachBottom 处理函数，监听该页面用户上拉触底事件。
**说明**：
* 可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
* 在触发距离内滑动期间，该事件只会被触发一次。

### onPageScroll
**解释**：在 Page 中定义 onPageScroll 处理函数，监听用户滑动页面事件。
**方法参数**：Object object
**Object参数说明**：

|字段 |类型  |说明 |
|---- | ---- | ---- |
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

**注意：**
- 请在需要的时候定义此方法，以减少不必要的事件派发对渲染层-逻辑层通信造成影响；
- 请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作（尤其是每次传输大量数据的时候）。


### onShareAppMessage
**解释**：在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。

* 用户点击分享按钮的时候会调用；
* 此事件需要 return 一个`Object`，用于自定义分享内容。

**方法参数**：Object object
**Object参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|from |String  |是| -|  分享事件来源。button：页面内转发按钮；menu：右上角分享菜单 。 |
|target |Object  |是| -|  如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined。|

**自定义分享字段**：

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title |String  |  否  | 分享标题|
|content |String  |  否  | 分享内容|
|imageUrl |String  |  否  | 分享图标|
|path |String  |  否  | 页面 path，必须是以 / 开头的完整路径。|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**示例代码**：
<a href="swanide://fragment/5ade9255636e820034fd14dee1d9a1ef1540396560" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onShareAppMessage(res) {
        if (res.from === 'button') {
            console.log(res.target); // 来自页面内转发按钮
        }
        return {
            title: '智能小程序示例',
            content: '世界很复杂，百度更懂你',
            path: '/pages/openShare/openShare?key=value'
        };
    }
});
```

### onTabItemTap(Object object)
**解释**：点击 tab 时触发。

**方法参数**：Object object
**Object参数说明**：

|参数名|类型|说明|最低版本|
|----|----|----|----|
|index|String|被点击tabItem的序号，从0开始|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|
|pagePath|String|被点击tabItem的页面路径|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|
|text|String|被点击tabItem的按钮文字|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|

**示例代码**
<a href="swanide://fragment/31512b7bbfc12330f054e50873b05b8b1560700621686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// tab.js
Page({
  onTabItemTap(item) {
    console.log(item.index);
    console.log(item.pagePath);
    console.log(item.text);
  }
});
```

### onURLQueryChange

**解释**：在 Page 中定义 onURLQueryChange 处理函数，监听页面 URL query 改变。引起页面 URL query 更新的原因有：调用 [swan.setURLQuery](/develop/api/url_query/swan-setURLQuery/) 。
<!-- 带有 url-query-name 属性的 [tabs](/develop/component/nav/#tabs/) 切换 tab。 -->

**方法参数**：Object object

**Object参数说明**：

|字段 |类型  |说明 |
|---- | ---- | ---- |
|newURLQuery|Object| 改变后的 URL query |
|oldURLQuery|Object| 改变前的 URL query |

**示例代码**
<a href="swanide://fragment/5bb1ffbf3d23686cf27bf5ba40329d491567219843686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery) //  输出结果为 {channel: 'movie'} {}
    },
    onLoad(query) {
        if(!query.channel) {
            swan.setURLQuery({channel: 'movie'})
        }
    }
})
```
