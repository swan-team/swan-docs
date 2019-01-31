### openDataContext.postMessage()

`postMessage()` 是 [OpenDataContext](#OpenDataContext) 对象上的方法，该方法是向开放数据域发送消息。

```js
openDataContext.postMessage(opts)
```
**参数值：**

|属性|类型|默认值|是否必填|描述|
|-|-|-|-|-|-|
|opts|Object| |是|向开放数据域发送的消息，opts 中及嵌套对象中 key 的 value 可以是 number、string、boolean、null。|

**示例：**

```js
// 主域中
const openDataContext = swan.getOpenDataContext();
openDataContext.postMessage({
    test: 'test'
});
```