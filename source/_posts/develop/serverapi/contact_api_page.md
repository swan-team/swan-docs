---
title: 在页面中使用客服消息
header: develop
nav: serverapi
sidebar: contact_api_page
---
 

小程序 [button](/develop/component/formlist_button/) 组件提供了 open-type 属性来供开发者调用百度 APP 的开放能力，若开发者需要使用客服能力，需要将 open-type 属性的值设置为 contact，当用户点击该按钮时就会打开客服会话，如果用户在会话中点击消息卡片后返回小程序，开发者可以从 bindcontact 回调中获得具体的信息。 

**代码示例**：

<a href="swanide://fragment/98aecd7f087df1074986f7a658b710b01574068001913" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
<button open-type="contact" bindcontact="contactCB">点击进入客服页面</button>
```

```
Page({
    contactCB(e) {
        console.log(e.detail); // 输出：{errMsg: 'enterContact:ok'}
        // 进入客服会话页面成功，可进行自己的业务逻辑
        if (e.detail.errMsg === 'enterContact:ok') {
            swan.reportAnalytics('userMessage', {
                visit: 1,
                message: '进入客服页面PV'
            });
        }
        // 可进行一些进入失败的业务逻辑
        else {
            swan.reportAnalytics('userMessage', {
                visit: 0,
                message: '进入客服页面失败损失PV'
            });
        }
    }
});
```

#### 返回参数说明

| 参数 | 类型 | 说明 |
| ---- |---- |----|
| detail | object | 小程序消息的详细信息，{errMsg: 'enterContact:ok'} 表示进入客服页面成功 |