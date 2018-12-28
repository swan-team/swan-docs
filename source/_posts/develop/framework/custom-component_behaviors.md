---
title: behaviors
header: develop
nav: framework
sidebar: custom-component_behaviors
---

## 定义和使用 behaviors

**定义**：behaviors 用于组件间代码共享，类似于一些编程语言中的“mixins”或“traits”。
* 每个 behavior 可以包含一组属性、数据、生命周期函数和方法，组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。
* 每个组件可以引用多个 behavior 。 同时 该behavior 也可以引用其它 behavior 。
* **behavior 需要使用 Behavior() 构造器定义。**

**<div class="notice">示例： </div>**
<a href="swanide://fragment/31f1513649db8443c74478888587a5081545884054821" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String,
      value: 'behavior'
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
});
```

组件引用时，需在 behaviors 定义段中将它们逐个列出。

```js
// my-component.js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String,
      value: 'component'
    }
  },
  data: {
    myData: {}
  },
  attached: function(){},
  methods: {
    myMethod: function(){}
  }
});
```

通过上面的例子可知： 
* my-behavior 中包含有 myBehaviorProperty 属性、 myBehaviorData 数据字段、 myBehaviorMethod 方法和一个 attached 生命周期函数。
* 在 my-component 组件定义中加入了 my-behavior 。
这将使得 my-component 中最终包含 myBehaviorProperty 、 myProperty 两个属性， myBehaviorData 、 myData 两个数据字段，和 myBehaviorMethod 、 myMethod 两个方法。
当组件触发 attached 生命周期时，会依次触发 my-behavior.js 中的 attached 生命周期函数和 my-component.js 中的 attached 生命周期函数。

## 字段的覆盖和组合规则

组件和它引用的 behavior 中可以包含同名的字段，对这些字段的处理方法如下：

- 如果有同名的属性或方法，组件本身的属性或方法会覆盖 behavior 中的属性或方法;
- 如果引用了多个 behavior ，在定义段中靠后 behavior 中的属性或方法会覆盖靠前的属性或方法;
- 如果有同名的数据字段，如果数据是对象类型，会进行对象合并，如果是非对象类型则会进行相互覆盖;
- 生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。如果同一个 behavior 被一个组件多次引用，它定义的生命周期函数只会被执行一次。

## 内置 behaviors

自定义组件可以通过引用内置的 behavior 来获得内置组件的一些行为。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/cfa1a5be4668bd92477696d55c1f84ba1545309188870" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
Component({
  behaviors: ['swan://form-field']
});
```

* 在上例中， swan://form-field 代表一个内置 behavior ，它使得这个自定义组件有类似于表单控件的行为。
* 内置 behavior 往往会为组件添加一些属性。在没有特殊说明时，组件可以覆盖这些属性来改变它的 type 或添加 observer 。

### swan://form-field

**解释**：使自定义组件有类似于表单控件的行为。 
form 组件可以识别这些自定义组件，并在 submit 事件中返回组件的字段名及其对应字段值。这将为它添加以下两个属性。


|属性名|类型|描述|最低版本|
|---|---|---|---|
|name|String|在表单中的字段名|<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">1.13.29</a>|
|value|任意|在表单中的字段值|<a href="https://smartprogram.baidu.com/docs/develop/tutorial/compatibility/">1.13.29</a>|

### swan://component-export

> 从基础库版本 2.0.5 开始提供支持。

**解释**：使自定义组件支持 export 定义段。这个定义段可以用于指定组件被 selectComponent 调用时的返回值。

未使用这个定义段时， selectComponent 将返回自定义组件的 this 。使用这个定义段时，将以这个定义段的函数返回值代替。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/693b56d555bf6f4478f6628cdd4d9e791545310017177" title="在开发者工具中预览效果" target="_blank">在开发者工具中预览效果</a>

```js
// 自定义组件的js文件
Component({
  behaviors: ['swan://component-export'],
  export() {
    return { componentField: 'componentValue' }
  }
});
```

```xml
<!-- 使用自定义组件时，对于自定义组件的引用模板 -->
<my-component id="custom-id" />
```

```js
this.selectComponent('#custom-id') // 等于 { componentField: 'componentValue' }
```
