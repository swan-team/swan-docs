---
title: swan.offLocationChange
header: develop
nav: api
sidebar: swan-offLocationChange
---

**解释**：取消监听实时地理位置变化事件

## 方法参数 

Function callback

### `callback`参数说明 ：

实时地理位置变化事件的回调函数

## 示例

 
### 代码示例 

 * 在 js 文件中

```js
Page({
    onLocationChange() {
        const noop = res => {
            console.log('location change', res);
        };
        swan.onLocationChange(noop);
        swan.offLocationChange(noop);
    }
})
```
