---
title: 模板
header: develop
nav: framework
sidebar: view_template
---

SWAN 提供模板 template 的用法，旨在提高工程化和代码可维护性，可以在模板中定义代码片段，并被外界注入值，然后在合适的时机调用。

### 定义模板
name 属性，定义了模板的名字。`<template>`内定义代码片段，如：

**代码示例**

```xml
<!-- template-demo.swan-->
<template name="person-card">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>
```

**注意:**
- 模板之间不可嵌套。

### 使用模板
通过 is 属性，声明需要使用的模板，data 是所需要传入到模板的值，注意对象字面量的使用方法，对象字面量是三个大括号包裹。

**代码示例**

```xml
<!-- template-demo.swan-->
<template is="person-card" data="{{{...person}}}" />
```

```js
// template-demo.js
Page({
    data: {
        person: {
            name: 'Lebron James',
            pos: 'SF', age: 33
        }
    }
});
```
is可以动态决定具体需要渲染哪个模板。

**代码示例**

<a href="swanide://fragment/d097c432563a4d0fc2e7bd4fedc917431578384398434" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- template-demo.swan-->
<template name="odd">
   <view> odd </view>
</template>


<template name="even">
   <view> even </view>
</template>


<block s-for="{{[1, 2, 3, 4, 5]}}">
   <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```
