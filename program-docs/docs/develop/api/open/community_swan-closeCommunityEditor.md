---
title: swan.closeCommunityEditor
header: develop
nav: api
sidebar: community_swan-closeCommunityEditor
# webUrl: https://qft12m.smartapps.cn/swan-api/communityEditor/communityEditor
---
 

**解释**： 关闭原生全屏内容发布器

 
## 方法参数 

Object object

### emojiPath 参数说明  

|属性名 |类型  |必填 | 默认值 |说明|
|:---- |:---- |:---- |:----|:----|
|success  |  Function  | 否 | |发布成功的回调函数|
|fail  |  Function  | 否 | |发布失败的回调函数|
|complete  |  Function  | 否 | |接口调用结束的回调函数（调用成功、失败都会执行）|
## 示例

<a href="swanide://fragment/61a61af4932a793e8af63c36c4ba1fb11578992643734" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/api_closeCommunityEditor.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

###  图片示例  
<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/api_closeCommunityEditor.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### 代码示例 

* 在 swan 文件中

```html
<view class="wrap">
    <view class="card-area">
        <view class="top-description border-bottom">
           <view>原帖标题</view>
           <view>{{content}}</view>
        </view>
        <button type="primary" bindtap="openCommunityEditor">点击回复原帖</button>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: { 
        content: '原帖内容'
    },
    onLoad(e) {
    },
    openCommunityEditor() {
        swan.openCommunityEditor({
            contentPlaceholder: '请输入帖子正文',
            titlePlaceholder: '请输入标题',
            moduleList: ['title', 'image', 'emoji', 'target'],
            imageConf: {
                maxNum: 9,
                ratio: 1
            },
            navBarTitleText: '发布帖子',
            navBarTextStyle: 'black',
            navBarBackgroundColor: '#ffffff',
            confirmText: '发布',
            confirmColor: '#3388ff',
            cancelText: '取消',
            cancelColor: '#666666',
            targetText: '话题/吧/版块',
            emojiPath: '../../emojidata',
            success: function (res) {
                console.log('openCommunityEditor success', res);
                // 将图片上传到服务器
                //  swan.uploadFile({
                //     url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
                //     filePath: res.tempFilePaths[0], // 要上传文件资源的路径
                //     name: 'myfile',
                //     success: function (res) {
                //         console.log(res.statusCode);
                //         // 上传成功关闭发布器
                //         swan.closeCommunityEditor();
                //     },
                //     fail: function (err) {
                //         console.log('错误码：' + err.errCode);
                //         console.log('错误信息：' + err.errMsg);
                //     }
                // });
                swan.closeCommunityEditor();
                swan.showToast({
                    title: '发布成功',
                    icon: 'none'
                });
            },
            fail: function (err) {
                console.log('openCommunityEditor fail', err);
                swan.closeCommunityEditor();
            },
            complete: function (res) {
                console.log('openCommunityEditor complete', res);
            }
        });
        // 定时器模拟开发者的提示时机，真实时机可据业务场景触发
        let that = this;
        setTimeout(function () {
            swan.showModal({
                title: '更新提示',
                content: '您所评论的内容有更新，是否要回到原帖查看',
                success(res) {
                    console.log(res)
                    if (res.confirm) {
                        swan.closeCommunityEditor();
                        that.setData('content', '更新的内容')
                    }
                    else if(res.cancel) {
                        console.log('用户点击了取消');
                    }
                }
            });
        }, 5000);
    }
});
```
