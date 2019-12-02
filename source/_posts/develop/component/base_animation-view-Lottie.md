---
title: animation-view Lottie 动画
header: develop
nav: component
sidebar: base_animation-view-Lottie
---



**解释**：支持 Lottie 动画，客户端创建的[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/animation-view.png"  class="demo-qrcode-image" />

## **属性说明**

|属性名 |类型  |默认值  |必填 |说明|最低版本|
|---- | ---- | --- | ---- |---- |---|
| path | String  |  |是 |动画资源地址，目前只支持绝对路径| |
| loop | Boolean  |  false | 否 |动画是否循环播放 | |
|autoplay | Boolean | true	  |否 |动画是否自动播放	| |
|action | String  |	  play |否 |动画操作，可取值 play、pause、stop	| |
|hidden | Boolean  |  true |否 |是否隐藏动画| |
|bindended | EventHandle |   | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。）|3.0.0|

### **action 有效值**:

| 值 | 说明 |
| ---- | ---- |
| play | 播放 |
| pause | 暂停 |
| stop | 停止 |

## 示例
### **图片示例**

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/animation-view.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

### **代码示例**


<a href="swanide://fragment/72ffe9be4e8e6dbcd24ca12659fd43591572918523899" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="container">
    <view class="animation-content hide">
        <view class="animation-info">
            <animation-view id="myAnim" action="{{action}}" loop="{{loop}}" hidden="{{hidden}}" class="controls hide" autoplay="{{autoplay}}" bind:ended="end" path="{{path}}">
            </animation-view>
        </view>
        <view class="button-content">
            <button bind:tap="playLottie" class="toggle-animation" type="primary" hover-stop-propagation="true">{{status}}lottie动画</button>
        </view>
    </view>
</view>

```
* 在 js 文件中

```javascript
Page({
    data: {
        action: 'play',
        hidden: false,
        path: '/anims/lottie_example.json',
        loop: true,
        autoplay: true,
        status: '停止'
    },
    onShow(){
        console.log('手百版本11.3以上才可使用');
    },
    playLottie() {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play' : 'pause';
        let status = action === 'pause' ? '播放' : '停止';

        this.setData({
            action,
            status
        });
    },
    end() {
        console.log('播放结束,设置不循环播放才能再次触发');
    }
});
```


## **Bug & Tip**

* Tip：animation-view组件的位置信息、padding值以path里传的json文件里的left、top、padding值为准。
* Tip：animation-view组件不支持原生组件嵌套。
* Tip：为避免出现iOS中画面被拉伸的情况，建议将animation-view组件的长宽比设置的与动画长宽比一致。
