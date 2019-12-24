---
title: 数据监听器
header: develop
nav: framework
sidebar: custom-component_observers
---

> 数据监听器可以用于监听和响应任何属性和数据字段的变化。数据监听器自小程序基础库版本 3.105.9 开始支持。

## 使用数据监听器

有时，需要组合监听一些数据字段。

例如，`this.data.sum`永远是 `this.data.numberA`与`this.data.numberB`的和。此时，可以使用数据监听器进行如下实现。

代码片段示例：
[在开发者工具中预览效果](swanide://fragment/d3f85183f54ec67cc54c1334b40beeca1577099991584)
**代码示例**

```js
Component({
    properties: {
        numberA: {
            type: Number,
            value: 0
        },
        numberB: {
            type: Number,
            value: 0
        }
    },
    attached: function() {
        this.setData({
            numberA: 1,
            numberB: 2
        })
    },
    observers: {
        'numberA, numberB': function (numberA, numberB) {
            // 在 numberA 或者 numberB 被设置时，执行这个函数
            this.setData({
                sum: numberA + numberB
            })
        }
    }
});
```

## 监听字段语法

数据监听器支持监听属性或内部数据的变化，可以同时监听多个。一次`setData`最多触发每个监听器一次。

同时，监听器可以监听子数据字段，如下例所示。

**代码示例**

```js
Component({
    observers: {
        'some.subfield': function(subfield) {
            // 使用 setData 设置 this.data.some.subfield 时触发
            // （除此以外，使用 setData 设置 this.data.some 也会触发）
            subfield === this.data.some.subfield
        },
        'arr[12]': function(arr12) {
            // 使用 setData 设置 this.data.arr[12] 时触发
            // （除此以外，使用 setData 设置 this.data.arr 也会触发）
            arr12 === this.data.arr[12]
        },
    }
});
```

如果需要监听所有子数据字段的变化，可以使用通配符`**`。

```js
Component({
    observers: {
        'some.field.**': function(field) {
            // 使用 setData 设置 this.data.some.field 本身或其下任何子数据字段时触发
            // （除此以外，使用 setData 设置 this.data.some 也会触发）
            field === this.data.some.field
        },
    },
    data: {
        some: {
            field: {
                subfield: [1, 2, 3]
            }
        }
    },
    attached: function() {
        // 会触发 observers
        this.setData({
            'some.field': {}
        });
        
        // 会触发 observers
        // this.setData({
        //     'some.field.xxx': {}
        // });

        // 会触发 observers
        // this.setData({
        //     'some': {}
        // });
    }
});

```

特别地，仅使用通配符`**`可以监听全部`setData`。

```js
Component({
    observers: {
        '**': function(value) {
            // 数据发生变化即触发，这里的 value 是 properties 和 data 的合集
        }
    }
})
```


### Bugs & Tips:
- 数据监听器监听的是`setData`中涉及的数据字段，并且只有这些字段发生改变时才会触发，类似`observer`;
- 在数据监听器中再次进行`setData`设置被监听的字段，可能会造成循环监听，请注意使用；
- 由于小程序对`setData`进行了优化操作，所以如果同步的多次设置`setData`那么实际上之后执行最后一次`setData`引起的`observers`。

**代码示例**

```js
Component({
    properties: {
        numberA: {
            type: Number,
            value: 0
        },
        numberB: {
            type: Number,
            value: 0
        }
    },
    attached: function() {
        this.setData({
            numberA: 1,
            numberB: 2
        });
        this.setData({
            numberA: 2,
            numberB: 3
        })
    },
    observers: {
        'numberA, numberB': function (numberA, numberB) {
            // 在 numberA 或者 numberB 被设置时，执行这个函数
            this.setData({
                sum: numberA + numberB
            })
        }
    }
});
```

以上只会执行一次`observers`。

