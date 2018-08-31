---
title: 注册页面
header: develop
nav: framework
sidebar: app-service_page
---

 Page()
 ---

<div class="notice">解释： </div>Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

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

**<div class="notice">示例： </div>**

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

 初始化数据
 ---

<div class="notice">解释： </div>
初始化数据将作为页面的第一次渲染。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串，数字，布尔值，对象，数组。

渲染层，通过SWAN模板，对数据进行绑定。

**<div class="notice">示例： </div>**

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

### 生命周期函数

1、onLoad：页面加载
一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。

2、onShow：页面显示
每次打开页面都会调用一次。

3、onReady：页面初次渲染完成
一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
对界面的设置如：swan.setNavigationBarTitle 请在onReady之后设置。

4、onHide：页面隐藏
当 navigateTo 或底部 tab 切换时或Home键离开智能小程序时调用。

5、onUnload：页面卸载
当 redirectTo 或 navigateBack 的时候调用。


### 页面相关事件处理函数

1、onPullDownRefresh: 下拉刷新
监听用户下拉刷新事件。
需要在 app.json 的 window 选项中或页面配置中开启 enablePullDownRefresh 。
当处理完数据刷新后，swan.stopPullDownRefresh 可以停止当前页面的下拉刷新。

2、onReachBottom: 上拉触底
监听用户上拉触底事件。
可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
在触发距离内滑动期间，本事件只会被触发一次。

3、onPageScroll：页面滚动
监听用户滑动页面事件。
参数为 Object，包含以下字段：


**Object参数说明：**

|字段 |类型  |说明 |
|---- | ---- | ---- |
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

4、onShareAppMessage：用户点击分享
用户点击转发按钮的时候会调用
此事件需要 return 一个 Object，用于自定义转发内容

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

### 事件处理函数

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

### Page.prototype.setData()

<div class="notice">解释： </div>
setData 函数，用于将数据，从逻辑层发送到视图层，当开发者调用 setData 后，数据的变化，会引起视图层的更新。

**<div class="notice">示例： </div>**

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
