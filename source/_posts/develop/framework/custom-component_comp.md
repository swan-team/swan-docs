---
title: Component构造器
header: develop
nav: framework
sidebar: custom-component_comp
---


<div class="notice">解释： </div>
Component构造器可用于定义组件，调用Component构造器时可以指定组件的属性、数据、方法等。

|字段|类型|是否必填|描述|
|--|--|--|--|
|properties|Object|否|组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数|
|data|Object|否|组件的内部数据，和 properties 一同用于组件的模版渲染|
|methods|Object|否|组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用|
|created|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行|
|attached|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行|
|ready|Function|否|组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息|
|detached|Function|否|组件生命周期函数，在组件实例被从页面节点树移除时执行|

|方法名|参数|描述|
|--|--|--|
|setData|Object newData|设置data并执行视图层渲染|
|triggerEvent|String name, Object detail|触发事件，参见 [组件事件](./#触发事件)|
|selectComponent|String selector|使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象。|
|selectAllComponents|String selector|使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组。|

**示例： **

```js
Component({
    properties: {
        propName: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'val', // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
               // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});

```
