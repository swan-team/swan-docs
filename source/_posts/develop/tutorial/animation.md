# 动画

在小程序中，开发者可以使用原生的 css渐变 和 css动画 来创建简易的动画效果，同时，小程序也提供了一组api来方便开发者动态创建一个动画实例。

### 通过接口创建动画实例

小程序提供了 <a href="https://smartprogram.baidu.com/docs/develop/api/show_createanimation/#swan-createAnimation/" target="_blank">swan.createAnimation</a> 接口来动态创建一个动画实例。在动画过程中，还可以使用 `bindtransitionend`、`bindanimationiteration`、`bindanimationstart`、`bindanimationend`  来监听动画事件。


| 事件名 | 说明 |
| ----- | --- |
| transitionend | CSS transition结束后触发，若在transition完成之前移除transition，则不会触发该事件。 |
| animationiteration | CSS 动画完成一次迭代时触发，当CSS animation-iteration-count属性值为1时，不会触发。 |
| animationstart | CSS 动画开始时触发，如果CSS 动画设置了animation-delay延时，事件会在延迟时效过后立即触发。 |
| animationend | CSS 动画结束时触发 |

### 动画组件

小程序还提供了一个动画组件 <a href="https://smartprogram.baidu.com/docs/develop/component/base/#animation-view/" target="_blank">animation-view</a> 来为开发者提供控制动画播放的方式。该组件为客户端创建的<a href="https://smartprogram.baidu.com/docs/develop/component/native/"> 原生组件 </a>，并支持 Lottie 动画。

<a href="swanide://fragment/1aaf692b0800fd9e2ea9d84e1c0613431556528002310" target="_blank">在开发者工具中预览效果</a>

