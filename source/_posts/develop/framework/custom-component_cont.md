---
title: 组件间通信与事件
header: develop
nav: framework
sidebar: custom-component_cont
---


### 组件间通信
组件间的基本通信方式有以下几种：
- 在父组件中可以通过设置子组件的properties来向子组件传递数据；
- 在父组件中定义messages对象，对子组件dispatch方法进行拦截，从而达到子组件向上通信；
- 子组件可以通过triggerEvent方法触发父组件的自定义事件进行传参；
- 如果以上几种方式不足以满足需要，父组件还可以通过 this.selectComponent 方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。

### 监听事件
<div class="notice">解释： </div>
事件系统是组件间通信的主要方式之一。自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件。

监听自定义组件事件的方法与监听基础组件事件的方法完全一致：

**示例： **
```xml
<!-- 父组件模板 -->
<component-tag-name bindmyevent="onMyEvent" />
```

### 通过dispatch方法与父组件通信

通过 dispatch 方法，子组件可以向组件树的上层派发消息。消息将沿着组件树向上传递，直到遇到第一个处理该消息的组件，则停止。
通过 messages 可以声明组件要处理的消息，messages 是一个对象，key 是消息名称，value 是消息处理的函数，接收一个包含 target(派发消息的组件) 和 value(消息的值) 的参数对象。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/6f6ac82db74aa8795dfbc27fd760dd611545889059135" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
/* 父组件逻辑 */
Component({
    messages: {
        'childmessage': function (e) {
            console.log('childmessage', e);
        }
    }
});
```
```js
/* 子组件逻辑 */
Component({
    created() {
        this.dispatch('childmessage', {
            name: 'swan'
        });
    }
});
```

### 通过triggerEvent方法与父组件通信

<div class="notice">解释： </div>
自定义组件触发事件时，需要使用 triggerEvent 方法，指定事件名和detail对象：
```xml
<button bindtap="onTap">点击这个按钮将触发 myevent 事件</button>
```

**<div class="notice">示例： </div>**
<a href="swanide://fragment/e5621e1c241dd7b47f2bc844277117b81545308225206" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
/* 组件逻辑 */
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
```js
/* 页面逻辑 */
Page({
    onMyEvent: function (e) {}
})
```
**注意**：
对于 triggerEvent 方法，在基础库版本 2.0.3 之前（不包含2.0.3）只支持传递类型为object的数据，从 2.0.3 开始支持传递其它数据类型（不包括function和undefined），其它低版本请做好<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容</a>。