---
title: 注册页面
header: develop
nav: framework
sidebar: app_service_page
---

 ## 参数说明
 

**解释**：Page 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、页面事件处理函数、组件事件处理函数等。

**Object参数说明**：

|属性  |类型  |描述  |
|---- | ---- | ---- |
|data | Object | 页面的初始数据 |
|onLoad | Function | 页面的生命周期函数 -- 监听页面加载 |
|onShow | Function | 页面的生命周期函数 -- 监听页面显示 |
|onReady | Function | 页面的生命周期函数 -- 监听页面初次渲染完成 |
|onHide | Function | 页面的生命周期函数 -- 监听页面隐藏 |
|onUnload | Function | 页面的生命周期函数 -- 监听页面卸载 |
|onForceReLaunch|Function|页面的生命周期函数 -- 监听页面重启，单击右上角菜单栏<sup>注</sup>的重启按钮时触发|
|onPullDownRefresh | Function | 页面的事件处理函数 -- 监听用户下拉动作 |
|onReachBottom | Function | 页面的事件处理函数 -- 上拉触底事件的处理函数 |
|onShareAppMessage | Function | 页面的事件处理函数 -- 用户点击右上角转发 |
|onPageScroll | Function | 页面的事件处理函数 -- 页面滚动触发事件的处理函数 |
|onTabItemTap | Function | 页面的事件处理函数 -- 当前是 tab 页时，点击 tab 时触发 |
|其他 | Any | 开发者可以添加任意的函数或数据到 object 参数中 |

**名词解释:**
- 菜单栏: 页面右上角胶囊中三个点的图标，点击会弹出菜单面板(包含: 分享、评价、重启小程序等功能)。

**示例代码**

```js
// page.js
Page({
    data: {
        text: 'init data'
    },
    onLoad(options) {
        // do something when page load
    },
    onReady() {
        // do something when page ready
    },
    onShow() {
        // do something when page show
    },
    onHide() {
        // do something when page hide
    },
    onUnload() {
        // do something when page unload
    },
    onForceReLaunch() {
        // do something when page force reLaunch
    },    
    onPullDownRefresh() {
        // do something when pull down
    },
    onReachBottom() {
        // do something when page reach bottom
    },
    onShareAppMessage() {
        // return custom share data
    },
    onPageScroll: function () {
        // do something when page scroll
    },
    onTabItemTap(item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    },
    customData: {}
});
```

## 初始化数据

**解释:** 初始化数据将作为页面的第一次渲染数据。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串(例如: `数字`，`布尔值`，`对象`，`数组`)。

渲染层，通过SWAN模板，对数据进行绑定。

**示例代码**
<a href="swanide://fragment/b58b1c817a99eab0f0a510e6e62e06e81560699650104" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- index.swan -->
<view>{{text}}</view>
<!-- 渲染结果为: init data -->

<view>{{arr[0].name}}</view>
<!-- 渲染结果为: swan -->
```

```js
// index.js
Page({
    data: {
        text: 'init data',
        arr: [{name: 'swan'}, {name: 'Baidu'}]
    }
});
```


## 生命周期函数
> 更多介绍参见[生命周期介绍](http://smartprogram.baidu.com/docs/develop/framework/process_life/)。

生命周期的触发以及页面的路由方式详见

### onLoad(Object query)
页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。

**参数：**

|名称|类型|说明|
|----|----|----|
|query|Object|打开当前页面路径中的参数|

### onShow()
页面显示/切入前台时触发。

### onReady()
页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。

### onHide()
页面隐藏/切入后台时触发。 如通过调用 [swan.navigateTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/) 或底部 tab 切换到其他页面，小程序切入后台等时触发。

### onUnload()
页面卸载时触发。如通过调用 [swan.redirectTo](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-redirectTo/) 或 [swan.navigateBack](https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/) 到其他页面时触发。


<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
 <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>当页面被卸载时，前端基础库在触发onUnload的同时还触发了 onHide，onHide 共被触发2次。在新的基础库版本中，页面被卸载时会触发onUnload，同时 onHide 仍会被触发且仅被触发一次。**请提前做好兼容性处理**。</li><li>在解析 query 的时候，基础库会使用decodeURIComponent对query的参数值进行一次解码，该功能将在新的版本中下线。</li><li>如页面跳转时传递了 encode 后的值作为参数，为避免发生页面错误，使用时请自行将拿到的值使用decodeURIComponent进行一次decode操作。</li></ul></p>
</div>
</div>

## 页面事件处理函数

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
**解释**：在`Page`中定义 onPullDownRefresh 处理函数，监听该页面用户上拉触底事件。
**说明**：
* 可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
* 在触发距离内滑动期间，该事件只会被触发一次。

### onPageScroll
**解释**：在 Page 中定义 onPullDownRefresh 处理函数，监听用户滑动页面事件。
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
|path |String  |  否  | 页面 path ，必须是以 / 开头的完整路径。|
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

## onTabItemTap(Object object)
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

## 组件事件处理函数

**解释：**
除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数。

**示例代码：**

```xml
<!-- page.swan -->
<view bindtap="onTap"> tap </view>
```

```js
// page.js
Page({
    onTap() {
        console.log('tap');
    }
});
```

## setData 机制

**解释**：setData 函数，用于将数据，从逻辑层发送到视图层，当开发者调用 setData 后，数据的变化，会引起视图层的更新。
**参数说明**

|属性|类型|是否必填|描述|
|--|--|--|--|
|data|	Object|	是|	这次要改变的数据|	
|callback	|Function|	否	|setData引起的界面更新渲染完毕后的回调函数|

**说明**：
* Object 以`key: value`的形式表示，将`this.data`中的`key`对应的值改变成`value`。
    `key`可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如`array[2].message`、`a.b.c.d`，并且不需要在 `this.data`中预先定义；
* 直接修改`this.data`而不调用`this.setData`是无法改变页面的状态的，还会造成数据不一致；
* 仅支持设置可 JSON 化的数据；
* 请不要把`data`中任何一项的`value`设为`undefined`，否则将会有一些潜在问题出现；
* data 的键名必须遵守 camelCase (驼峰式)的命名规范，不得使用 kebab-case (短横线隔开式)规范。

**示例代码**：
<a href="swanide://fragment/99525adbd9f27ac70eac09f08fb32b581560578724171" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- index.swan -->
<view>{{text}}</view>
<button bindtap="changeText"> Change normal data </button>

<view>{{num}}</view>
<button bindtap="changeNum"> Change normal num </button>

<view>{{arr[0].text}}</view>
<button bindtap="changeItemInArr"> Change Arr data </button>

<view>{{obj.text}}</view>
<button bindtap="changeItemInObj"> Change Obj data </button>

<view>{{newField.text}}</view>
<button bindtap="addNewField"> Add new data </button>
```

```js
// index.js
Page({
  data: {
    text: 'init data',
    num: 0,
    arr: [{text: 'init data'}],
    obj: {
      text: 'init data'
    }
  },
  changeText() {
    // 不要直接通过 this.data.text = 'changed data' 修改this.data，应该使用 setData
    this.setData({
      text: 'changed data'
    });
  },
  changeNum() {
    // 或者，可以修改 this.data 之后马上用 setData 设置一下修改了的字段
    this.data.num = 1
    this.setData({
      num: this.data.num
    });
  },
  changeItemInArr() {
    // 对于对象或数组字段，可以直接修改一个子字段，这样方式会有带来更好的性能
    this.setData({
      'arr[0].text':'changed data'
    });
  },
  changeItemInObj(){
    this.setData({
      'obj.text': 'changed data'
    });
  },
  addNewField() {
    this.setData({
      'newField.text': 'new data'
    });
  }
});
```
