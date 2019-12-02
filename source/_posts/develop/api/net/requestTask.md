---
title: RequestTask
header: develop
nav: api
sidebar: requestTask
---

 

**解释**：网络请求任务对象

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/requestTask.png"  class="demo-qrcode-image" />


 
**图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/requestTask.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**

<a href="swanide://fragment/2666d8786677778d18177eae7db623d11572938991162" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<button bindtap="createRequestTask">创建request实例对象</button>
```

* 在 js 文件中

```js
Page({
    data: { },
    createRequestTask() {
        const requestTask = swan.request({
            url: 'https://sfc.baidu.com/shopping/nianhuo/bimai',
            header: {
                'content-type': 'application/json'
            },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            data: {
                tabname: '美食酒水'
            },
            success: res => {
                
            },
            fail: err => {
                swan.showToast({
                    title: '创建失败',
                    icon: 'none'
                });
                console.log('request fail', err);
            },
            complete: () => {
                console.log('request complete');
            }
        });
        console.log('res', requestTask);
        swan.showModal({
            title: '创建' + requestTask._reqId,
            content: JSON.stringify(requestTask)
        });
    }
});

```

**Bug & Tip**：

*  content-type 默认为 'application/json'；
*  url 中不能有端口。

