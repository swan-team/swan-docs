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
|properties|Object|否|组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数。|
|data|Object|否|组件的内部数据，和 properties 一同用于组件的模版渲染。|
|methods|Object|否|组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用。|
|created|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData。|
|attached|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行。|
|ready|Function|否|组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息。|
|detached|Function|否|组件生命周期函数，在组件实例被从页面节点树移除时执行。|
|externalClasses|Array|否|组件接受的外部样式类，参见<a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_temp/">组件模板和样式</a>。|
|options|Object|否|一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）|
|lifetimes|Object|否|组件生命周期声明对象，组件的生命周期：created、attached、ready、detached将收归到lifetimes字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高|
|pageLifetimes|Object|否|组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期。|
|definitionFilter|Function|否|定义段过滤器，用于自定义组件扩展，参见<a href="http://smartprogram.baidu.com/docs/develop/framework/custom-component_extend/">自定义组件扩展</a>。|

生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问。组件包含一些通用属性和方法。

|属性名|类型|描述|
|--|--|--|
|is|String|组件的文件路径|
|id|String|节点id|
|dataset|String|节点dataset|
|data|Object|组件数据，**包括内部数据和属性值**|
|properties|Object|组件数据，**包括内部数据和属性值**（与data一致）。|

|方法名|参数|描述|
|--|--|--|
|setData|Object newData|设置data并执行视图层渲染|
|hasBehavior|Object|检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）|
|triggerEvent|String name, Object detail|触发事件，参见 [组件间通信与事件](http://smartprogram.baidu.com/docs/develop/framework/custom-component_cont/)|
|createSelectorQuery||创建一个 <a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery/">SelectorQuery</a> 对象，选择器选取范围为这个组件实例内, 与 swan.createSelectorQuery().in(this) 是等效|
|createIntersectionObserver|Object options|创建一个 <a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver/">IntersectionObserver</a> 对象，选择器选取范围为这个组件实例内|
|selectComponent|String selector|使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象，在生命周期 onReay 开始时生效。|
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

**说明**：
- 使用 this.data 可以获取内部数据和属性值，但不要直接修改它们，应使用 setData 修改。
- 属性名应避免以 data- 开头，因为在 SWAN 中， `data-xyz='xxx'` 会被作为节点 dataset 来处理。
- 属性名应避免以 prop- 开头 在处理过程中会将该前缀删除。
- 属性名应避免以 “ _ ” 开头, 在处理过程会将全部前缀 “ _ ” 删除。
