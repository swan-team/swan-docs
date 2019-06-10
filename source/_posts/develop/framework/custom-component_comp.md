---
title: Component构造器
header: develop
nav: framework
sidebar: custom-component_comp
---

### 定义段与示例方法

<div class="notice">解释： </div>
Component构造器可用于定义组件，调用Component构造器时可以指定组件的属性、数据、方法等。

|字段|类型|是否必填|描述|最低版本|
|---|--|---|---|---|
|properties|Object Map|否|组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数|-|
|data|Object|否|组件的内部数据，和 properties 一同用于组件的模版渲染|-|
|methods|Object|否|组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_cont/">组件事件</a>|-|
|behaviors|Array.<string>|否|类似于mixins和traits的组件间代码复用机制，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_behaviors/">behaviors</a>|-|
|created|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用setData,参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|-|
|attached|Function|否|组件生命周期函数，在组件实例进入页面节点树时执行，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|-|
|ready|Function|否|组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|-|
|detached|Function|否|组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|-|
|externalClasses|Array.<string>|否|组件接受的外部样式类，参见<a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_temp/">组件模板和样式</a>|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|options|Object Map|否|一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|lifetimes|Object|否|组件生命周期声明对象，组件的生命周期：created、attached、ready、detached将收归到lifetimes字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则lifetimes字段内声明方式优先级最高，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|pageLifetimes|Object|否|组件所在页面的生命周期声明对象，目前仅支持页面的show和hide两个生命周期，参见 <a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_lifetimes/">组件生命周期</a>|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|definitionFilter|Function|否|定义段过滤器，用于自定义组件扩展，参见<a href="http://smartprogram.baidu.com/docs/develop/framework/custom-component_extend/">自定义组件扩展</a>|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|


生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问。组件包含一些通用属性和方法。

|属性名|类型|描述|最低版本|
|---|--|---|---|
|is|String|组件的文件路径|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|id|String|节点id|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|dataset|String|节点dataset|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|data|Object|组件数据，**包括内部数据和属性值**|-|
|properties|Object|组件数据，**包括内部数据和属性值**（与data一致）。|-|

|方法名|参数|描述|最低版本|
|---|---|---|---|
|setData|Object newData|设置data并执行视图层渲染|-|
|hasBehavior|Object|检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">1.13.27</a>|
|triggerEvent|String name, Object detail|触发事件，参见 <a href="http://smartprogram.baidu.com/docs/develop/framework/custom-component_cont/">组件事件</a>|-|
|createSelectorQuery||创建一个 <a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#selectorQuery/">SelectorQuery</a> 对象，选择器选取范围为这个组件实例内, 与 swan.createSelectorQuery().in(this) 是等效|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">2.5.3</a>|
|createIntersectionObserver|Object options|创建一个 <a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#IntersectionObserver/">IntersectionObserver</a> 对象，选择器选取范围为这个组件实例内|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">2.5.3</a>|
|selectComponent|String selector|使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象（会被 swan://component-export 影响），在生命周期 onReay 开始时生效|-|
|selectAllComponents|String selector|使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组|-|
|groupSetData|Function callback|立刻执行 callback ，其中的多个 setData 之间不会触发界面进行重复绘制|<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">2.10.7</a>|

**<div class="notice">示例： </div>**
<a href="swanide://fragment/0fef06c66614299980e55bdb56cf34521545277337898" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// 自定义组件js
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

**注意**：
在 properties 定义段中，属性名应该采用驼峰写法（propsName）；在 `swan` 模板中，指定属性值时则对应使用连字符写法（ `component-tag-name props-name="props value"` ）。

### 使用 Component 构造器构造页面

**解释:**
事实上，一个自定义组件也可以视为一个页面，故页面也可以使用 Component 构造器构造，拥有与普通组件一样的定义段与实例方法，其必要配置项（json）与正常自定义组件一致，即需要有`component: true`字段。

**关于页面传参:**
从其它页面跳转到由自定义组件构造的页面时，如跳转到页面 /components/custom/custom?paramA=123&paramB=xyz ，你可以在由custom组件构造的页面onLoad生命周期中获取传递的query字段。

**注意:**
页面的生命周期方法（即 on 开头的方法），应写在 methods 定义段中。

**<div class="notice">示例： </div>**

```json
{
    "component": true,
    "usingComponents": {}
}
```

```js
/* /components/custom/custom.js */
Component({
  methods: {
    onLoad: function(options) {
      console.log(options.paramA); // 123
      console.log(options.paramB); // xyz
    }
  }
});
```

**说明**：
- 使用 this.data 可以获取内部数据和属性值，但不要直接修改它们，应使用 setData 修改；
- 属性名应避免以 data- 开头，因为在 SWAN 中，`data-name='swan'` 会被作为节点 dataset 来处理；
- 属性名应避免以 prop- 开头 在处理过程中会将该前缀删除；
- 属性名应避免包含 “ _ ” 字符, 因为在渲染过程中将会以 “ _ ” 字符进行拆分。
