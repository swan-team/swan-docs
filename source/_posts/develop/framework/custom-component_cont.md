---
title: 组件间通信与事件
header: develop
nav: framework
sidebar: custom-component_cont
---


### 组件间通信

组件间的基本通信方式有以下几种：
1. 父组件可以通过设置子组件的properties来设置数据。
2. 子组件可以使用dispatch方法，父组件中定义messages，对于dispatch方法进行拦截，从而达到子组件向上通讯。

### 监听事件
<div class="notice">解释： </div>
事件系统是组件间通信的主要方式之一。自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件。

监听自定义组件事件的方法与监听基础组件事件的方法完全一致：

**示例： **
```xml
<component-tag-name bindmyevent="onMyEvent" />
```

### 组件的 dispatch

通过 dispatch 方法，组件可以向组件树的上层派发消息。消息将沿着组件树向上传递，直到遇到第一个处理该消息的组件，则停止。通过 messages 可以声明组件要处理的消息。messages 是一个对象，key 是消息名称，value 是消息处理的函数，接收一个包含 target(派发消息的组件) 和 value(消息的值) 的参数对象。

**示例： **
```js
// 父组件
Component({
    messages: {
        'childmessage': function (e) {
            console.log('childmessage', e);
        }
    }
});
```
```js
// 子组件
Component({
    created() {
        this.dispatch('childmessage', {
            name: 'swan'
        });
    }
});
```

```js
Page({
    onMyEvent: function (e) {}
})
```

### 触发事件
<div class="notice">解释： </div>
自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名和detail对象：
```xml
<button bindtap="triggerEvent">点击这个按钮将触发 myevent 事件</button>
```

```js
Component({
    properties: {},
    methods: {
        onTap: function() {
            var myEventDetail = {} // detail对象，提供给事件监听函数
            this.triggerEvent('myevent', myEventDetail);
        }
    }
});
```
