---
title: 循环
header: develop
nav: framework
sidebar: view_for
---

## s-for
 
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

## trackBy

如果列表中的项目会动态地增加、删除，并且希望列表中的项目保持自己的特征和状态（例如 input 中的输入内容），需要在 s-for 指令声明中指定 trackBy。

trackBy 后跟的值可以是 s-for 的 array 中 item 本身或者其属性（如 item.id），该值需要是列表中唯一的字符串或数字，且不能动态改变。

当数据更新触发重新渲染时，将自动跟踪项的变更，原先列表内的项位置会移动，新添加的项会被渲染，以确保组件保持自身的状态，并且省去一部分重新渲染带来的消耗。

**示例代码**
<a href="swanide://fragment/014b4d7f802a3fdadbbf35fe7195cab31568198084119" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<input s-for="list trackBy item" placeholder="请输入内容" />
<button bindtap="delete">删除首项</button>
```

```js
Page({
    data: {
        list: [1, 2, 3, 4]
    },
    delete() {
        const list = this.data.list
        console.log('当前删除项目 id', list.splice(0, 1)[0])
        this.setData({list})
    }
})
```

**Tips**：

当循环渲染自定义组件列表时，不指定 trackBy 而动态增删数组中的元素，可能会导致调用错误的 attached detached 生命周期函数。
