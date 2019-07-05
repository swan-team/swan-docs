# 视图层 View

小程序框架是数据驱动视图，逻辑层的数据反映到视图层驱动视图层渲染，用户在视图层进行交互操作通过事件绑定发送回逻辑层进行逻辑处理。


## .swan文件

用以编写小程序的页面结构，小程序同时也提供了丰富的基础组件来帮助开发者更快速的搭建页面结构。具体可参见<a href="https://smartprogram.baidu.com/docs/develop/component/componetlist/" target="_target">小程序组件</a>。

SWAN模板中使用的标签均为SWAN组件规定的标签。

### 基础数据绑定

```xml
    <!-- index.swan -->
    <view>{{message}}</view>
```

```js
    Page({
        data: {
            message: 'Hello, My First Smartprogram!'
        }
    });
```

### 数据渲染

通过在元素上使用小程序提供的s-for指令可以渲染一个指定的列表。

```xml
    <!-- index.swan -->
    <view s-for="person in persons">
        {{person.name}}
    </view>
```

```js
    Page({
        data: {
            persons: [
                {
                    name: 'superman'
                },
                {
                    name: 'spiderman'
                },
                {
                    name: 'ironman'
                }
            ]
        }
    });
```

### 条件渲染

通过在元素上使用s-if指令，开发者可以为一个元素的渲染指定条件。当s-if条件成立时渲染该元素，当该条件不成立时，则不会在页面上渲染该元素。

```xml
    <!-- index.swan -->
    <view s-if="is4G">4G</view>
    <view s-if="isWifi">WIFI</view>
```

```js
    Page({
        data: {
            is4G: true,
            isWifi: false
        }
    });
```
