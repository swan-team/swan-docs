---
title: 模板
header: develop
nav: framework
sidebar: view_template
---
SWAN 提供模板 template 的用法，旨在提高工程化和代码可维护性，可以在模板中定义代码片段，并被外界注入值，然后在合适的时机调用。

### 定义模板

name 属性，定义了模板的名字。`<template>`内定义代码片段，如：

```xml
<!-- template-demo.swan-->
<template name="person-card">
    <view>
        <text>位置: {{pos}}</text>
        <text>姓名: {{name}}</text>
    </view>
</template>

```

<!-- ** 注意： **
模板之间不可嵌套。 -->

### 使用模板
通过 is 属性，声明需要使用的模板，data 是所需要传入到模板的值，注意对象字面量的使用方法，对象字面量是三个大括号包裹。

```xml
<!-- template-demo.swan-->
<template is="person-card" data="{{{person}}}" />

```

```javascript
// template-demo.js
Page({
    data: {
        person: {name: 'Lebron James', pos: 'SF', age: 33}
    }
});
```
