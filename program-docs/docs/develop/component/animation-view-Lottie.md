---
title: animation-view Lottie 动画
header: develop
nav: component
sidebar: base_animation-view-Lottie
webUrl: https://qft12m.smartapps.cn/subPackages/componentPackage/pages/animation-view/animation-view
---



**解释**：仅支持 Lottie 动画的客户端[原生组件](https://smartprogram.baidu.com/docs/develop/component/native/)，使用时请注意相关限制，动画资源地址可到[lottie的官方库](https://github.com/airbnb/lottie-web)进行查询。

##  属性说明

|属性名 |类型  |默认值  |必填 |说明|最低版本|
|:---- |: ---- | :--- | :---- |:---- | :---|
| path | String  |  |是 |动画资源地址，目前只支持绝对路径|- |
| loop | Boolean  |  false | 否 |动画是否循环播放 | -|
|autoplay | Boolean | true	  |否 |动画是否自动播放	|- |
|action | String  |	  play |否 |动画操作，可取值 play、pause、stop	|- |
|hidden | Boolean  |  true |否 |是否隐藏动画| -|
|bindended | EventHandle |   | 否 | 当播放到末尾时触发 ended 事件（自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。）|3.0.0<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

###  action 有效值

| 值 | 说明 |
|:---- |:---- |
| play | 播放 |
| pause | 暂停 |
| stop | 停止 |

## 示例

<a href="swanide://fragment/773e8370ff783eb66df9666b9cfb39741579144901388" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/animation-view.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 

###  代码示例1 - 动画资源地址在本地，path为相对路径


 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <animation-view class="controls" path="{{path}}" loop="{{loop}}" autoplay="{{autoplay}}" action="{{action}}" hidden="{{hidden}}" bindended="lottieEnd">
        </animation-view>
        <button bindtap="playLottie" type="primary">{{status}}lottie动画</button>
    </view>
</view>
```
 

```js
Page({
    data: {
        path: '/anims/lottie_example_one.json',
        loop: true,
        autoplay: true,
        action: 'play',
        hidden: false,
        status: '暂停'
    },
    onShow() {
        console.log(' 百度 App版本11.3以上才可使用');
    },
    playLottie() {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play' : 'pause';
        let status = action === 'pause' ? '播放' : '暂停';
        this.setData({
            action,
            status
        });
    },
    lottieEnd() {
        console.log('自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。');
    }
});
```
:::

###  代码示例2 - 动画资源地址在服务器上存放

> 此种使用方式建议在真机查看完整效果，注意path属性仅可在组件初始化时传入，不支持用setData方法后续动态传入。

<a href="swanide://fragment/91ca60efd6f0a977bfba5c315083a57a1579157854484" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="animation-view-area">
            <animation-view s-if="{{shouldShow}}" class="controls" path="{{path}}" loop="{{loop}}" autoplay="{{autoplay}}" action="{{action}}" hidden="{{hidden}}" bindended="lottieEnd">
            </animation-view>
        </view>
        <button bindtap="playLottie" type="primary">{{status}}lottie动画</button>
    </view>
</view>

```
 

```js
Page({
    data: {
        path: '',
        loop: true,
        autoplay: true,
        action: 'play',
        hidden: false,
        status: '暂停',
        shouldShow: ''
    },
    onShow() {
        console.log(' 百度 App版本11.3以上才可使用');
        swan.downloadFile({
            url: 'https://b.bdstatic.com/miniapp/images/lottie_example_one.json',
            header: {
                'content-type': 'application/json'
            },
            success: res => {
                const filePath = res.tempFilePath;
                this.setData({
                    shouldShow: true,
                    path: filePath
                });
            }
        });
    },
    playLottie() {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play' : 'pause';
        let status = action === 'pause' ? '播放' : '暂停';
        this.setData({
            action,
            status
        });
    },
    lottieEnd() {
        console.log('自然播放结束会触发回调，循环播放结束及手动停止动画不会触发。');
    }
});
```
:::
##  Bug & Tip

* Tip：animation-view组件的位置信息、padding值以path里传的json文件里的left、top、padding值为准。
* Tip：animation-view组件不支持原生组件嵌套。
* Tip：为避免出现iOS中画面被拉伸的情况，建议将animation-view组件的长宽比设置的与动画长宽比一致。
* Tip：path暂不支持远程路径，原因是端上暂不支持解析远程路径的 json 文件, 如果不想将 json 文件放在小程序包内，可以通过API [swan.downloadFile](https://smartprogram.baidu.com/docs/develop/api/net/downloadFile/)将文件下载到本地，具体可参考上方代码示例2。
