---
title: 循环
header: develop
nav: framework
sidebar: view_for
---

s-for
---
通过循环渲染列表是常见的场景，在元素上作用 s-for 指令，我们可以渲染一个列表。
### 默认情况
默认不写情况下，下标索引是为 index，数组当前变量名默认为 item。

**示例代码**

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="persons">
        {{index}}: {{item.name}}
    </view>
</view>
```

```javascript
// for-demo.js
Page({
    data: {
        persons: [
            {name: 'Curry'},
            {name: 'Thompson'},
            {name: 'Durant'},
            {name: 'Green'},
            {name: 'Cousins'}
        ]
    }
});
```

### 简写

通过简写的方式，指定下标索引和数组当前变量名。

**示例代码**

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="p,index in persons">
        {{index}}: {{p.name}}
    </view>
</view>
```

也可以通过使用 s-for-index 来指定下标索引，s-for-item 来指定数组当前变量名。

```xml
<!-- for-demo.swan-->
<view>
    <view s-for="persons" s-for-index="idx" s-for-item="p">
        {{idx}}: {{p.name}}
    </view>
</view>
```
