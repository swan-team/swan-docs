---
title: 组件模版和样式
header: develop
nav: framework
sidebar: custom-component_temp
---



<div class="notice">解释： </div>
类似于页面，自定义组件拥有自己的 swan 模版和 css 样式。

### 组件模版

组件模版的写法与页面模板相同。组件模版与组件数据结合后生成的节点树，将被插入到组件的引用位置上。

在组件模板中可以提供一个 `<slot>` 节点，用于承载组件引用时提供的子节点。

**<div class="notice">示例： </div>**
```xml
<!-- 组件内部模板 -->
<view class="wrapper">
    <view>组件内部节点</view>
    <slot></slot>
</view>
```

```xml
<view>
    <custom-component>
        <view>这里是插入到组件slot中的内容</view>
    </custom-component>
</view>
```

### 模版数据绑定

与普通的 SWAN 模版类似，可以使用数据绑定，这样就可以向子组件的属性传递动态数据。

```xml
<view>
    <custom-component prop-a="{{dataFieldA}}" prop-b="{{dataFieldB}}">
        <view>这里是插入到组件slot中的内容</view>
    </custom-component>
</view>
```

在以上例子中，组件的属性 propA 和 propB 将收到页面传递的数据。页面可以通过 setData 来改变绑定的数据字段。

### 组件的slot
<div class="notice">解释： </div>
在组件的视图模板中可以通过 slot 声明一个插槽的位置，其位置的内容可以由外层组件或者页面定义。

**<div class="notice">示例：</div>**
```xml
<!-- 组件中的定义 -->
<view>
    <slot></slot>
</view>
```
```xml
<!-- 使用组件的页面或者组件 -->
<view>
    <custom-component>
        <view>我是slot中插入的节点</view>
    </custom-component>
</view>
```

通过 name 属性可以给 slot 命名。一个视图模板的声明可以包含一个默认 slot 和多个命名 slot。外层组件或页面的元素通过 slot="name" 的属性声明，可以指定自身的插入点。

**<div class="notice">示例：</div>**
```xml
<view>
    <slot name="slot1"></slot>
    <slot name="slot2"></slot>
</view>
```
```xml
<view>
    <custom-component>
        <view slot="slot1">我会被插入到组件上方</view>
        <view slot="slot2">我会被插入到组件下方</view>
    </custom-component>
</view>
```

#### slot指令应用
<div class="notice">解释： </div>
在 slot 声明时应用 if 或 for 指令，可以让插槽根据组件数据动态化。
**<div class="notice">示例：</div>**
```xml
<view>
    <slot s-if="!visible" name="subcomponent"></slot>
</view>
```

#### 数据环境
<div class="notice">解释： </div>
插入 slot 部分的内容，其数据环境为声明时的环境。
```xml
<!-- custom-component自定义组件 -->
<view class="component-range">
    <slot name="inner"></slot>
</view>
```
```js
Component({
    data: {
        name: 'swan-inner'
    }
});
```

```xml
<!-- 使用组件的页面或者组件 -->
<view>
    <custom-component>
        <view>{{name}}</view>
    </custom-component>
</view>
```
```js
Page({
    data: {
        name: 'swan-outer'
    }
});
```
渲染结果：
```
<view>
    <view class="component-range">
        <view>swan-outer</view>
    </view>
</view>
```

#### scoped 插槽
<div class="notice">解释： </div>
如果 slot 声明中包含 s-bind 或 1 个以上 var- 数据前缀声明，该 slot 为 scoped slot。scoped slot 具有独立的 数据环境。
scoped slot 通常用于组件的视图部分期望由 外部传入视图结构，渲染过程使用组件内部数据。
```xml
<!-- custom-component自定义组件 -->
<view class="component-range">
    <slot name="inner" var-name="name"></slot>
</view>
```
```js
Component({
    data: {
        name: 'swan-inner'
    }
});
```

```xml
<!-- 使用组件的页面或者组件 -->
<view>
    <custom-component>
        <view>{{name}}</view>
    </custom-component>
</view>
```
```js
Page({
    data: {
        name: 'swan-outer'
    }
});
```
渲染结果：
```
<view>
    <view class="component-range">
        <view>swan-inner</view>
    </view>
</view>
```

### 组件样式
组件的样式，可以在组件的 css 文件中编写，并且只对当前组件内节点生效。使用时，需要注意以下几点：

1. 只可以使用 class 选择器，其他的选择器，请改为 class 选择器实现。

2. 组件和引用组件的页面中使用后代选择器（.a .b）在一些极端情况下会有非预期的表现，如遇，请避免使用。

3. 继承样式，如 font 、 color ，会从组件外继承到组件内。
