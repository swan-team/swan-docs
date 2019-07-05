# 获取界面上的节点信息

<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createSelectorQuery/" target="_blank">节点信息查询API</a>可以用于获取节点属性、样式以及在页面中的位置。

最常用于查询某个节点的当前位置信息和样式信息。

**代码示例**

```js
    Page({
        getReact() {
            swan.createSelectorQuery()
                .select('#the-id')
                .boundingClientRect(function(rect) {
                    rect.id         // 节点ID
                    rect.dataset    // 节点的dataset
                    rect.left       // 节点的左边界坐标
                    rect.right      // 节点的右边界坐标
                    rect.top        // 节点的上边界坐标
                    rect.bottom     // 节点的下边界坐标
                    rect.width      // 节点的宽度
                    rect.height     // 节点的高度
                })
                .exec();
        }
    });
```

上述示例中， `#the-id`是一个节点选择器，它返回一个<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#nodesRef/" target="_blank"> nodesRef </a> 节点对象。

### 获取节点布局相交信息

<a href="https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createIntersectionObserver/" target="_blank">节点布局相交信息 API</a>可用于推断某些节点是否可以被用户看见，有多大比例可以被用户看见。

关于节点布局相交信息 API ，主要涉及了以下几个概念：

- 参照节点：监听动作的参照节点，取它的布局区域作为参照区域，也可以选取页面显示区域作为参照区域。
- 目标节点：监听的目标，默认只能是一个节点（将 selectAll 属性设置为true时，可以同时监听多个节点，但是同时选中过多的节点将会影响渲染性能）。
- 相交区域：目标节点的区域与参照区域相交的区域。
- 相交比例：相交区域占参考区域的比例。
- 阈值：一个数组，当相交比例达到设定的阈值时，会触发监听器的回调函数。

以下代码可以在目标节点（用选择器 `.ball`指定）进入或离开参照区域(用选择器 `.scroll-view`指定)，并且与参照节点相交或相离程度达到目标节点布局区域的10%和60%时，触发监听器的回调函数，同时在页面销毁时停止监听。

**示例代码：**

```js
    Page({
    data: {
        appear: false
    },
    onReady() {
        const observer = swan.createIntersectionObserver(this, {
            thresholds: [0.1, 0.6]
        });
        observer.relativeTo('.scroll-view').observe('.ball', res => {
            res.id                      // 目标节点id
            res.dataset                 // 目标节点dataset
            res.intersectionRatio       // 相交区域占目标节点的布局区域的比例
            res.intersectionRect        // 相交区域

        });
        this.observer = observer;
    },
    onUnload() {
        this.observer && this.observer.disconnect();
    }
});
```

应当注意的是，与页面显示区域的相交区域并不准确代表用户可见的区域，因为参与计算的区域是“布局区域”，布局区域可能会在绘制时被其他节点裁剪隐藏（如遇祖先节点中 overflow 样式为 hidden 的节点）或遮盖（如遇 fixed 定位的节点）。

在自定义组件中，推荐使用 this.createIntersectionObserver([options]) 来代替 swan.createIntersectionObserver，这样可以确保在正确的范围内选择节点。


