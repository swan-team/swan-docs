---
title: swiper 滑块视图容器
header: develop
nav: component
sidebar: view_swiper
---



**解释**：滑块视图容器。内部只允许使用`<swiper-item>`组件描述滑块内容，否则会导致未定义的行为。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/swiper.png"  class="demo-qrcode-image" />

**属性说明**：

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|---- | ---- | ---- |---- |---- |
|indicator-dots | Boolean  |  false  | 否 |是否显示面板指示点|- |
|indicator-color| Color  | rgba(0, 0, 0, .3) | 否 |指示点颜色| |
|indicator-active-color| Color | #333 | 否 |当前选中的指示点颜色| |
|autoplay |Boolean  | false | 否 |是否自动切换| |
|current|Number |0 | 否 |当前所在页面的 index| |
|current-item-id|String|| 否 |当前所在滑块的 item-id，不能与 current 被同时指定|1.11 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|interval | Number | 5000 | 否 |自动切换时间间隔，单位ms|- |
|duration| Number |500 | 否 |滑动动画时长，单位ms|- |
|circular| Boolean |false | 否 |是否采用衔接滑动| |
|vertical | Boolean  | false  | 否 |滑动方向是否为纵向|- |
|previous-margin|String|`"0px"`| 否 |前边距，可用于露出前一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|next-margin|String|`"0px"`| 否 |后边距，可用于露出后一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|display-multiple-items|Number|1| 否 |同时显示的滑块数量|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|bindchange | EventHandle |  | 否 |current 改变时会触发 change 事件，event.detail = {current: current, source: source}|- |
|bindanimationfinish|EventHandle| | 否 |动画结束时会触发 animationfinish 事件，event.detail 同上|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

**change 事件 source 返回值**

change事件中的source字段，表示触发change事件的原因，可能值如下：

|值 |说明|
|---- | ---- |
| autoplay | 自动播放导致的swiper切换 |
| touch | 用户划动导致的swiper切换 |
| "" | 其他原因将返回空字符串 |


**图片示例**：

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/swiper.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

**代码示例**：

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


**Bug & Tip**：

* 如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则会导致 setData 被重复调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起的。
* 其中只可放置 swiper-item 组件，否则会导致未定义的行为。
