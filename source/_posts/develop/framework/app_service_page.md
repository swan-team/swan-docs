---
title: 注册页面
header: develop
nav: framework
sidebar: app_service_page
---

 ## Page
 

**解释**：Page 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

**Object参数说明：**

|属性  |类型  |描述  |
|---- | ---- | ---- |
|data | Object | 页面的初始数据 |
|onLoad | Function | 页面的生命周期函数 -- 监听页面加载 |
|onReady | Function | 页面的生命周期函数 -- 监听页面初次渲染完成 |
|onShow | Function | 页面的生命周期函数 -- 监听页面显示 |
|onHide | Function | 页面的生命周期函数 -- 监听页面隐藏 |
|onUnload | Function | 页面的生命周期函数 -- 监听页面卸载 |
|onPullDownRefresh | Function | 页面的事件处理函数 -- 监听用户下拉动作 |
|onReachBottom | Function | 页面的事件处理函数 -- 上拉触底事件的处理函数 |
|onShareAppMessage | Function | 页面的事件处理函数 -- 用户点击右上角转发 |
|onPageScroll | Function | 页面的事件处理函数 -- 页面滚动触发事件的处理函数 |
|onTabItemTap | Function | 页面的事件处理函数 -- 当前是 tab 页时，点击 tab 时触发 |
|其他 | Any | 开发者可以添加任意的函数或数据到 object 参数中 |

**示例**

```js
Page({
    data: {
        text: 'swan data'
    },

    onLoad: function (options) {
        // do something when page load
    },

    onReady: function () {
        // do something when page ready
    },

    onShow: function () {
        // do something when page show
    },

    onHide: function () {
        // do something when page hide
    },

    onUnload: function () {
        // do something when page unload
    },

    onPullDownRefresh: function () {
        // do something when pull down
    },

    onReachBottom: function () {
        // do something when page reach bottom
    },

    onShareAppMessage: function () {
        // return custom share data
    },

    onPageScroll: function () {
        // do something when page scroll
    },

    onTabItemTap: function (item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    },
    customData: {}
});
```

## 初始化数据

**解释**：
初始化数据将作为页面的第一次渲染。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串，数字，布尔值，对象，数组。

渲染层，通过SWAN模板，对数据进行绑定。

**示例**

```js
Page({
    data: {
        name: 'swan'
    }
});
```
```js
<view>{{name}}</view>
```

## 生命周期函数

|属性|类型|描述|触发时机|
|----|----|----|--------|
|onLaunch|Function|SWAN 初始化的生命周期函数|当 SWAN App 初始化完成时，会触发 onLaunch（全局只触发一次）|
|onShow|Function| SWAN App 展示时调用的生命周期函数|SWAN App 从后台进入前台，触发 onShow|
|onHide|Function| SWAN App 隐藏时调用的生命周期函数|SWAN App 从前台进入后台，触发 onHide|
|onLoad|Function| 监听页面加载的生命周期函数|SWAN App 页面加载完成，触发 onLoad|
|onReady|Function| 监听页面初次渲染完成的生命周期函数|SWAN App 页面渲染完成，触发 onReady|
|onUnload|Function| 监听页面卸载的生命周期函数|页面卸载，触发 onUnload|
|onError|Function|错误监听函数|当 SWAN App 发生错误时，会触发|


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>当页面被卸载时，前端基础库在触发onUnload的同时还触发了 onHide。在新的基础库版本中，页面被卸载时仅会触发onUnload，不会再触发 onHide，请提前做好兼容性处理。</li><li>当页面卸载时，如果需要执行某些逻辑，请将该逻辑放在 onUnload 中，而不是 放onHide 中。</li><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在新的版本中下线。</li><li>如页面跳转时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>

## 页面相关事件处理函数


### onPullDownRefresh
**解释**： 下拉刷新
**说明**：
监听用户下拉刷新事件。
* 需要在 app.json 的 window 选项中或页面配置中开启 enablePullDownRefresh 。
* 当处理完数据刷新后，swan.stopPullDownRefresh 可以停止当前页面的下拉刷新。

### onReachBottom
**解释**：上拉触底
**说明**：
监听用户上拉触底事件。
* 可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
* 在触发距离内滑动期间，本事件只会被触发一次。

### onPageScroll
**解释**：页面滚动
**说明**：
监听用户滑动页面事件。
参数为 Object，包含以下字段：


**Object参数说明：**

|字段 |类型  |说明 |
|---- | ---- | ---- |
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

### onShareAppMessage
**解释**：用户点击分享
**说明**：
用户点击转发按钮的时候会调用。
此事件需要 return 一个 Object，用于自定义转发内容。

** 自定义转发字段 **

|字段 |类型  |说明  |默认值 |
|---- | ---- | ---- | ---- |
|title |string | 转发标题 |当前的智能小程序的名称 |
|path |string | 转发路径 |当前页面 path ，必须是以 / 开头的完整路径 |

**<div class="notice">示例： </div>**

```js
Page({
    onShareAppMessage: function () {
        return {
            title: '标题',
            path: '/pages/path/path'
        }
    }
});
```

## 事件处理函数

<div class="notice">解释： </div>
除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数。

**<div class="notice">示例： </div>**

```xml
<view bindtap="tap"> tap </view>
```

```js
Page({
    tap: function() {
        console.log('tap')
    }
})
```

## Page.prototype.setData

**解释**：setData 函数，用于将数据，从逻辑层发送到视图层，当开发者调用 setData 后，数据的变化，会引起视图层的更新。
**参数说明**

|属性|类型|是否必填|描述|
|--|--|--|--|
|data|	Object|	是|	这次要改变的数据|	
|callback	|Function|	否	|setData引起的界面更新渲染完毕后的回调函数|

**说明**：
* Object 以 key: value 的形式表示，将 this.data 中的 key 对应的值改变成 value。
    key 可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。
* 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
* 仅支持设置可 JSON 化的数据。
* 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。


**示例：**

```xml
<view>{{name}}</view>
<view bindtap="tap">{{age}}</view>
```

```js
Page({
    data: {
        name: '',
        age: 0
    },
    tap: function () {
        this.setData({'age': 1});
    }
});
```
