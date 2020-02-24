---
title: 组件生命周期
header: develop
nav: framework
sidebar: custom-component_lifetimes
---

## 组件的主要生命周期

**解释**：自定义组件的生命周期，指的是组件自身的一些可自执行的方法，这些方法会在特殊的时间点或遇到一些特殊页面行为时被自动触发而执行。

**组件的生命周期**：created、 attached、 ready 、detached, 这些方法包含了一个组件实例生命流程的主要时间点，具体的使用场景如下:

- **created**：组件实例刚刚被创建好时， created 生命周期被触发，通常情况下，这个生命周期只应该用于给组件 this 添加一些自定义属性字段；
- **attached**：在组件完全初始化完毕、进入页面节点树后， attached 生命周期被触发。此时， this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行；
- **ready**：在attached生命被触发之后，组件的ready生命周期会被触发；
- **detached**：在组件离开页面节点树后， detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 detached 方法会被触发。

## 定义生命周期方法

生命周期方法可以直接定义在 Component 构造器的第一级参数中。

除了以上声明方式，还可以在 lifetimes 字段内进行声明（推荐使用这种方式进行管理，其优先级最高）。

**代码示例**
```js
// 自定义组件js文件
Component({
    // ...
    lifetimes: {
        attached: function() {
            // 在组件实例进入页面节点树时执行
        },
        detached: function() {
            // 在组件实例被从页面节点树移除时执行
        }
    }
    // ...
});
```

在内置 behaviors 中也可以编写生命周期方法，但不会与其他 behaviors 中的同名生命周期相互覆盖。

当前自定义自身可用的全部生命周期及其描述如下表所示：

|生命周期|参数|描述|最低版本|
|---|---|---|---|
|created|无|在组件实例刚刚被创建时执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.10.13</a>|
|attached|无|在组件实例进入页面节点树时执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.10.13</a>|
|ready|无|在组件在视图层布局完成后执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.10.13</a>|
|detached|无|在组件实例被从页面节点树移除时执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.10.13</a>|

## 组件所在页面的生命周期

还有一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在 pageLifetimes 定义段中定义。其中可用的生命周期包括：

|生命周期|参数|描述|最低版本|
|---|---|---|---|
|show|无|组件所在的页面被展示时执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|hide|无|组件所在的页面被隐藏时执行|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|

**代码示例**
```js
// 自定义组件js文件
Component({
    // ...
    pageLifetimes: {
        show: function() {
        // 组件所在的页面被展示时触发
        },
        hide: function() {
        // 组件所在的页面被隐藏时触发
        }
    }
    // ...
});
```