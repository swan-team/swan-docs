---
title: getApp
header: develop
nav: framework
sidebar: app_service_registergetapp
---


全局的 getApp 函数可以用来获取到智能小程序实例。

**参数**
**Object object**

|属性|类型|默认值|必填|说明|最低版本|
|----|----|----|----|----|----|
|allowDefault|boolean|false|否|在 App 未定义时返回默认实现。当App被调用时，默认实现中定义的属性会被覆盖合并到App中。一般用于[独立分包](https://smartprogram.baidu.com/docs/develop/framework/subpackages/)。|3.60.2|


**示例代码**

```js
// other.js 获取以上经过App方法注册后的app实例
var appInstance = getApp();
console.log(appInstance.globalData); // This is global data
```
<div class="m-doc-custom-examples">
<div class="m-doc-custom-examples-warning">
    <p class="m-doc-custom-examples-title">注意</p><p class="m-doc-custom-examples-text"><ul><li>App() 必须在 app.js 中注册，且不能注册多个；</li><li>不要在 App() 内的函数中调用 getApp() 函数，可以通过 this 获取 app 实例；</li><li>不要在 onLaunch 中调用 getCurrentPages() ，因为此时 page 还没有生成。</li></ul></p>
</div>
</div>