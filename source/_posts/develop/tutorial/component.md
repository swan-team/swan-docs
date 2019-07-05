# 组件

组件是小程序的基本组成部分，是独立的视图封装单元。小程序为开发者们提供了丰富的基础组件，开发者可以在小程序页面自由的使用这些组件，也可以将其进行组合使用，通过调用多个组件来封装成一个大组件，以完成更为复杂的页面设计。

从页面角度看，组件是HTML元素的扩展，它与基础HTML元素一样，都需要通过指定组件的标签名来使用，开发者在.swan文件中写上指定的组件标签名即可把该组件显示在当前页面上，以button组件为例，使用一个button组件需要这样写：


```xml
<button>button组件</button>
```

小程序组件也对外提供了很多属性来丰富组件的功能，开发者可以通过指定这些属性的值来使组件进行不同状态的展示。例如，我们希望展示一个主操作类型按钮，那么我们可以指定button组件的type属性值为primary，这样我们就会在页面上看到一个蓝底的按钮，此外，type属性的值还可以设置为default或warn，这样我们会分别得到一个次要操作按钮（白底）和一个警告类操作按钮（红底）。

```xml
 <button type="primary">主操作按钮</button>
```

此外，小程序组件还提供了多种事件类型，开发者可以通过事件绑定的方式来获取用户在组件上进行的操作行为。例如当用户点击了button组件时，开发者可以通过绑定组件的tap事件来处理：

```xml
<button bind:tap="clickBtn" type="primary">主操作按钮</button>
```

作为HTML元素的扩展，小程序组件同样支持开发者像使用原生HTML元素时一样，为组件添加class或者style属性以控制组件的样式，应当注意的是，小程序提供的组件中有一些原生组件，这些组件脱离在web-view的渲染流程外，部分css样式无法应用于原生组件，具体说明可以参考<a href="https://smartprogram.baidu.com/docs/develop/component/native/" target="_blank">原生组件说明</a>

更多关于组件的说明，请参考<a href="https://smartprogram.baidu.com/docs/develop/component/componetlist/" target="_blank">小程序组件</a>
