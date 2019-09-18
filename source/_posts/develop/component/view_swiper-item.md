---
title: swiper-item 滑块视图容器子项
header: develop
nav: component
sidebar: view_swiper-item
---
 

**解释**： 滑块视图容器子项，仅可放置在`<swiper>`组件中，宽高自动设置为100%。


**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/swiper.png"  class="demo-qrcode-image" />


**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|item-id|String| | 否 |该swiper-item的标识符|1.11 低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

**示例**：
<a href="swanide://fragment/d0dec68787a4c179328c6a22d80325981565503528602" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

* 在 swan 文件中

```html
<view class="wrap">
    <view class="title"></view>
    <view class="swiper-wrap">
        <swiper 
            indicator-color="rgba(0,0,0,0.30)"
            indicator-active-color="#fff"
            duration="{{switchDuration}}"
            interval="{{autoPlayInterval}}"
            autoplay="{{switchAutoPlayStatus}}"
            indicator-dots="{{switchIndicateStatus}}" 
            vertical="false"
            circular="true"
            current="0"
            current-item-id="0"
            previous-margin="0px"
            next-margin="0px"
            display-multiple-items="1"
            bind:change="swiperChange"
            bind:animationfinish="animationfinish"
        >
            <block s-for="item in items">
                <swiper-item class="{{item.className}}">
                    <view class="item">{{item.value}}</view>
                </swiper-item>
            </block>
        </swiper>
    </view>

    <view class="switch-wrap">
        <view>
            <text>指示器</text>
            <switch checked="{{switchIndicateStatus}}" bind:change="switchIndicate" class="switch"></switch>
        </view>
        <view>
            <text>自动播放</text>
            <switch checked="{{switchAutoPlayStatus}}" bind:change="switchAutoPlay" class="switch"></switch>
        </view>
    </view>

    <view class="slider-wrap">
        <view>
            <view class="slider-title-time">
                <text class="slider-title">幻灯片切换时长</text>
                <text class="slider-time">{{switchDuration}}ms</text>
            </view>
            <slider min="300" max="1500" value="{{switchDuration}}"  bind:change="changeSwitchDuration"></slider>
        </view>

        <view>
            <view class="slider-title-time">
                <text class="slider-title">自动播放间隔时长</text>
                <text class="slider-time">{{autoPlayInterval}}ms</text>
            </view>
            <slider min="1000" max="5000" value="{{autoPlayInterval}}" bind:change="changeAutoPlayInterval"></slider>
        </view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        items: [
            {
                className: 'color-a',
                value: 'A'
            }, {
                className: 'color-b',
                value: 'B'
            }, {
                className: 'color-c',
                value: 'C'
            }
        ],
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
        ],
        current: 0,
        switchIndicateStatus: true,
        switchAutoPlayStatus: false,
        switchDuration: 500,
        autoPlayInterval: 2000
    },
    
    swiperChange(e) {
        console.log('swiperChange:', e.detail);
    },
    switchIndicate() {
        this.setData({
            switchIndicateStatus: !this.getData('switchIndicateStatus')
        });
    },
    switchAutoPlay() {
        this.setData({
            switchAutoPlayStatus: !this.getData('switchAutoPlayStatus')
        });
    },
    changeSwitchDuration(e) {
        this.setData({
            switchDuration: e.detail.value
        });
    },
    changeAutoPlayInterval(e) {
        this.setData({
            autoPlayInterval: e.detail.value
        });
    },
    animationfinish() {
        console.log('animationfinish');
    }
});
```

