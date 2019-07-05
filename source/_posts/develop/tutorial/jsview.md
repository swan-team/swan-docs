# js文件

为了降低开发成本提高运行效率，小程序的js文件在开发语法上与原生javascript语法没有什么区别，在js文件中开发者可以使用小程序提供的Page()函数来注册一个页面，指定页面的初始数据、生命周期及事件处理函数等，协同.swan文件快速搭建一个数据驱动的视图。

### 页面更新

开发者可以在.js文件中对用户在页面中产生的交互操作进行监听，并通过自定义方法对数据进行更改触发页面的变化。

```xml
    <!-- index.swan -->
    <view>{{message}}</view>
    <button bind:tap="changeMsg">点击按钮更改message的值</button>
```

```js
    Page({
        data: {
            message: '初始化message的值'
        },

        changeMsg: function() {
            this.setData({
                message: '更新后的message的值'
            });
        }
    });
```

**说明：**

* 书写 SWAN APP 的逻辑层请使用 JavaScript；
* 逻辑层在更新数据后，会触发视图层的更新；
* 在 app.js 中使用 App 方法，在页面 JS 中使用 Page 方法，来进行页面的逻辑管理；
* 可以在 SWAN 命名空间下，使用各种小程序提供的 API 能力；
* 框架中不支持使用window、document、location、navigator、localStorage、history等web、浏览器 API 。

