---
title: setData 机制
header: develop
nav: framework
sidebar: app_service_page_setData
---


**解释**：setData 函数用于将数据，从逻辑层发送到视图层，当开发者调用 setData 后，数据的变化会引起视图层的更新。
**参数说明**

|属性|类型|默认值|必填|描述|
|--|--|--|--|--|
|data|	Object| |	是|	这次要改变的数据|	
|callback	|Function||	否	|setData引起的界面更新渲染完毕后的回调函数|

**说明**：
* Object 以`key: value`的形式表示，将`this.data`中的`key`对应的值改变成`value`。
    `key`可以以数据路径的形式给出，支持改变数组中的某一项或对象的某个属性，如`array[2].message`、`a.b.c.d`，并且不需要在 `this.data`中预先定义；
* 直接修改`this.data`而不调用`this.setData`是无法改变页面的状态的，还会造成数据不一致；
* 仅支持设置可 JSON 化的数据；
* 请不要把`data`中任何一项的`value`设为`undefined`，否则将会有一些潜在问题出现；
* data 的键名必须遵守 camelCase (驼峰式)的命名规范，不得使用 kebab-case (短横线隔开式)规范。

**代码示例**
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

连续使用 setData 来改变界面的方法也可以达到动画的效果。这样可以任意地改变界面，但通常会产生较大的延迟或卡顿，甚至导致小程序僵死。此时可以通过将页面的 setData 改为 自定义组件 中的 setData 来提升性能。下面的例子是使用 setData 来实现秒表动画的示例。

**代码示例**
<a href="swanide://fragment/cf67007a80abff300e2d312e73356ee71577267116005" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<view>
  <stopwatch id="stopwatch" class="stopwatch" />
  <button class="btn" s-if="{{!started}}" bindtap="start">开始计时</button>
  <button class="btn" s-if="{{started}}" bindtap="stop">停止计时</button>
</view>
```

```js
const app = getApp()

Page({
  data: {
    started: false
  },
  start: function() {
    this.setData({
      started: true
    })
    this.selectComponent('#stopwatch').start()
  },
  stop: function() {
    this.setData({
      started: false
    })
    this.selectComponent('#stopwatch').stop()
  }
})
```

```js
// 自定义组件中js
Component({
  data: {
    text: '00:00.000'
  },
  methods: {
    start: function() {
      var convertTimeStampToString = function(ts) {
        var ms = String(1000 + Math.floor(ts) % 1000).slice(1)
        var s = String(100 + Math.floor(ts / 1000) % 60).slice(1)
        var m = Math.floor(ts / 60000)
        if (m < 10) m = '0' + m
        return m + ':' + s + '.' + ms
      }
      this.setData({
        text: convertTimeStampToString(0)
      })
      var startTime = Date.now()
      var self = this
      this._interval = setInterval(function() {
        self.setData({
          text: convertTimeStampToString(Date.now() - startTime)
        })
      }, 33)
    },
    stop: function() {
      clearInterval(this._interval)
    }
  }
})
```
逻辑层在设置数据后可执行函数。

**代码示例**

```js

this.setData({
    text: 'Set some data for updating view.'
}, function() {
    // this is setData callback
})

```