---
title: 组件模版和样式
header: develop
nav: framework
sidebar: custom-component_temp
---

**解释**： 类似于页面，自定义组件拥有自己的 swan 模版和 css 样式。

### 组件模版

组件模版的写法与页面模板相同。组件模版与组件数据结合后生成的节点树，将被插入到组件的引用位置上。

在组件模板中可以提供一个 `<slot>` 节点，用于承载组件引用时提供的子节点。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/b0b4a27eaefc267dccc91533a557e9631545209935964" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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
<a href="swanide://fragment/7bffb3f2f34acb6871f987a5c087d92a1545214125462" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

**<div class="notice">示例： </div>**
<a href="swanide://fragment/349d0aa5c7ae0c3606c5e66d606bcf991545215122954" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

**<div class="notice">示例： </div>**
<a href="swanide://fragment/a94d00a5cd009be940d7a1785552e8351545218613573" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

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

**<div class="notice">示例： </div>**
<a href="swanide://fragment/b762787047ff293286e5fc5d3b3ff6461545219481937" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

组件的样式，可以在组件的 css 文件中编写，并且只对当前组件内节点生效。使用时，需要注意以下几点：

1. 只可以使用 class 选择器，其他的选择器，请改为 class 选择器实现；
2. 组件和引用组件的页面中使用后代选择器（.a .b）在一些极端情况下会有非预期的表现，如遇，请避免使用；
3. 继承样式，如 font 、 color ，会从组件外继承到组件内。

### 外部样式类
<div class="notice">解释： </div>
当组件希望接受外部传入的样式类（类似于 view 组件的 hover-class 属性）时，可以在 Component 中用 externalClasses 定义段定义若干个外部样式类。
> 小程序基础库版本 1.13.29 开始支持。

**注意：在同一个节点上使用普通样式类和外部样式类时，请避免出现两个类的优先级是未定义的情况。**

**<div class="notice">示例： </div>**
<a href="swanide://fragment/19a321c848e5a4d3bd2a1a1eeca0798c1545220350648" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
/* 组件 custom-component.js */
Component({
  externalClasses: ['external-class']
});

```

```xml
<!-- 组件 custom-component.swan -->
<view class="external-class">这段文本的颜色由组件外的 class 决定</view>
```

组件的使用者可以像使用其他属性一样，指定这个样式类对应的 class 。

```xml
<!-- 使用组件的页面或者组件 -->
<custom-component external-class="red-text" />
```
```css
.red-text {
  color: red;
}
```

### 全局样式类
<div class="notice">解释： </div>
使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的options.addGlobalClass字段置为true。
> 小程序基础库版本 1.13.29 开始支持。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/e192b342c1812c4a2ba1ef827afd429e1545276312298" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
/* 组件 custom-component.js */
Component({
  options: {
    addGlobalClass: true,
  }
});
```

```xml
<!-- 组件 custom-component.swan -->
<text class="global-class">这段文本的颜色由组件外的 class 决定</text>
```

```css
/* 组件外的样式定义 */
.global-class {
  color: red;
}
```

### 覆盖样式：
自定义组件会给每个样式前面加上前缀，前缀的类型为:用户定义的自定组件名字 + "__"。
例如：

```json
// JSON 文件里引用
{
    "usingComponents": {
        "custom": "/components/custom/custom"
    }
}
// /components/custom/custom的样式
.cus { color: red; }

```

那么 custom的样式会转变为

```
.custom__cus { color: red; }
```
所以当新样式的优先级高于加了前缀的样式时，才能覆盖。