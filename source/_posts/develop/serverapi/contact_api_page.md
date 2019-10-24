---
title: 在页面中使用客服消息
header: develop
nav: serverapi
sidebar: contact_api_page
---
 

小程序 [button](/develop/component/formlist_button/) 组件提供了 open-type 属性来供开发者调用百度 APP 的开放能力，若开发者需要使用客服能力，需要将 open-type 属性的值设置为 contact，当用户点击该按钮时就会打开客服会话，如果用户在会话中点击消息卡片后返回小程序，开发者可以从 bindcontact 回调中获得具体的信息。 


#### 代码示例

```js
	<button open-type="contact" bindcontact="contactCB">客服</button>
```

```
	Page({
		contactCB(e) {
			console.log(e.detail);
		}
	});
```

#### 返回参数说明

| 参数 | 类型 | 说明 |
| ---- |---- |----|
| detail | object | 小程序消息详细信息 |