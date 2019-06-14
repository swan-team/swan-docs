---
title: 自定义组件扩展
header: develop
nav: framework
sidebar: custom-component_extend
---

为了更好定制自定义组件的功能，可以使用自定义组件扩展机制。
> 从小程序基础库版本 2.0.5 开始支持。

## 扩展后的效果

为了更好的理解扩展后的效果，在此举例说明：

**<div class="notice">示例： </div>**
<a href="swanide://fragment/f2098282d8393f340ab37b278baac92b1545996186866" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// behavior.js
module.exports = Behavior({
  definitionFilter(defFields) {
    defFields.data.from = 'behavior'
  }
})

// component.js
Component({
  data: {
    from: 'component'
  },
  behaviors: [require('behavior.js')],
  ready() {
    console.log(this.data.from) // 此处会发现输出 behavior 而不是 component
  }
});
```

通过例子可以发现，自定义组件的扩展其实就是提供了修改自定义组件定义段的能力。

## 使用扩展

Behavior() 构造器提供了新的定义段 definitionFilter ，用于支持自定义组件扩展。 definitionFilter 是一个函数，在被调用时会注入两个参数：
* 第一个参数是使用该 behavior 的 component/behavior 的定义对象；
* 第二个参数是该 behavior 所使用的 behavior 的 definitionFilter 函数列表。

**<div class="notice">示例： </div>**
<a href="swanide://fragment/f345c27e9d5cead64e6ca47bc090e8fa1545996451082" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// behavior3.js
module.exports = Behavior({
    definitionFilter(defFields, definitionFilterArr) {}
});

// behavior2.js
module.exports = Behavior({
  behaviors: [require('behavior3.js')],
  definitionFilter(defFields, definitionFilterArr) {
    // definitionFilterArr[0](defFields)
  }
});

// behavior1.js
module.exports = Behavior({
  behaviors: [require('behavior2.js')],
  definitionFilter(defFields, definitionFilterArr) {}
});

// component.js
Component({
  behaviors: [require('behavior1.js')]
});
```

**说明**：

上述代码中声明了1个自定义组件和3个 behavior，每个 behavior 都使用了 definitionFilter 定义段。按照声明的顺序会有如下事情发生：

- 当进行 behavior2 的声明时就会调用 behavior3 的 definitionFilter 函数，其中 defFields 参数是 behavior2 的定义段， definitionFilterArr 参数即为空数组，因为 behavior3 没有使用其他的 behavior 。
- 当进行 behavior1 的声明时就会调用 behavior2 的 definitionFilter 函数，其中 defFields 参数是 behavior1 的定义段， definitionFilterArr 参数是一个长度为1的数组，`definitionFilterArr[0]` 即为 behavior3 的 definitionFilter 函数，因为 behavior2 使用了 behavior3。用户在此处可以自行决定在进行 behavior1 的声明时要不要调用 behavior3 的 definitionFilter 函数，如果需要调用，在此处补充代码 `definitionFilterArr[0](defFields)` 即可，definitionFilterArr 参数会由基础库补充传入。
- 同理，在进行 component 的声明时就会调用 behavior1 的 definitionFilter 函数。

简单概括，definitionFilter 函数可以理解为当 A 使用了 B 时，A 声明就会调用 B 的 definitionFilter 函数并传入 A 的定义对象让 B 去过滤。此时如果 B 还使用了 C 和 D ，那么 B 可以自行决定要不要调用 C 和 D 的 definitionFilter 函数去过滤 A 的定义对象。

