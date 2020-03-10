---
title: swiper 滑块视图容器
header: develop
nav: component
sidebar: view_swiper
# webUrl: https://qft12m.smartapps.cn/component/swiper/swiper
---



**解释**：滑块视图容器。内部只允许使用`<swiper-item>`组件描述滑块内容，否则会导致未定义的行为。

## 属性说明 

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|:---- |: ---- |: ---- |:---- |:---- | :---- | 
|indicator-dots | Boolean  |  false  | 否 |是否显示面板指示点|- |
|indicator-color| Color  | rgba(0, 0, 0, .3) | 否 |指示点颜色|- |
|indicator-active-color| Color | #333 | 否 |当前选中的指示点颜色|- |
|autoplay |Boolean  | false | 否 |是否自动切换|- |
|current|Number |0 | 否 |当前所在页面的 index|- |
|current-item-id|String|| 否 |当前所在滑块的 item-id，不能与 current 被同时指定|1.11 <p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|interval | Number | 5000 | 否 |自动切换时间间隔，单位ms|- |
|duration| Number |500 | 否 |滑动动画时长，单位ms|- |
|circular| Boolean |false | 否 |是否采用衔接滑动|- |
|vertical | Boolean  | false  | 否 |滑动方向是否为纵向|- |
|previous-margin|String|`"0px"`| 否 |前边距，可用于露出前一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|next-margin|String|`"0px"`| 否 |后边距，可用于露出后一项的一小部分，支持px和rpx|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|display-multiple-items|Number|1| 否 |同时显示的滑块数量|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|bindchange | EventHandle |  | 否 |current 改变时会触发 change 事件，event.detail = {current: current, source: source}|- |
|bindanimationfinish|EventHandle| | 否 |动画结束时会触发 animationfinish 事件，event.detail 同上|1.11<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

###  change 事件 source 返回值 

change事件中的source字段，表示触发change事件的原因，可能值如下：

|值 |说明|
|:---- |:---- |
| autoplay | 自动播放导致的swiper切换 |
| touch | 用户划动导致的swiper切换 |
| "" | 其他原因将返回空字符串 |

## 示例

<a href="swanide://fragment/5c70c59c82510ef6ee6aeba665d5dbbb1577360676452" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/swiper.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>


 
###  代码示例 ：滑块滑动


 

:::codeTab
```swan
<custom chineseName="滑块视图容器" engName="swiper"></custom>
<view class="wrap">
    <view class="card-area">
        <swiper 
            class="swiper"
            indicator-dots="{{switchIndicateStatus}}" 
            indicator-color="rgba(0,0,0,0.30)"
            indicator-active-color="#fff"
            autoplay="{{switchAutoPlayStatus}}"
            current="0"
            current-item-id="0"        
            interval="{{autoPlayInterval}}"
            duration="{{switchDuration}}"
            circular="true"
            vertical="{{switchVerticalStatus}}"
            previous-margin="0px"
            next-margin="0px"
            display-multiple-items="1"
            bind:change="swiperChange"
            bind:animationfinish="animationfinish">
            <swiper-item s-for="item in items"
                        item-id="{{itemId}}"
                        class="{{item.className}}">
                <view class="item">{{item.value}}</view>
            </swiper-item>
        </swiper>

        <view class="item-scroll border-bottom">
            <text class="switch-text-before">指示点</text>
            <switch class="init-switch" 
                    checked="{{switchIndicateStatus}}"
                    bind:change="switchIndicate">
            </switch>
        </view>

        <view class="item-scroll border-bottom">
            <text class="switch-text-before">自动切换</text>
            <switch checked="{{switchAutoPlayStatus}}" bind:change="switchAutoPlay" class="init-switch"></switch>
        </view>

        <view class="item-scroll">
            <text class="switch-text-before">纵向滑动</text>
            <switch checked="{{switchVerticalStatus}}" bind:change="switchVertical" class="init-switch"></switch>
        </view>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>滑块切换时长</view>
            <view>{{switchDuration}}ms</view>
        </view>
        <slider class="slider" 
                min="300" 
                max="1500" 
                value="{{switchDuration}}"
                bind:change="changeSwitchDuration">
        </slider>
    </view>
    <view class="card-area">
        <view class="top-description border-bottom">
            <view>自动切换时间间隔</view>
            <view>{{autoPlayInterval}}ms</view>
        </view>
        <slider class="slider" 
                min="1000" 
                max="5000" 
                value="{{autoPlayInterval}}"
                bind:change="changeAutoPlayInterval">
        </slider>
    </view>
</view>
```

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
        current: 0,
        itemId: 0,
        switchIndicateStatus: true,
        switchAutoPlayStatus: false,
        switchVerticalStatus: false,
        switchDuration: 500,
        autoPlayInterval: 2000
    },
    swiperChange(e) {
        console.log('swiperChange:', e.detail);
        this.setData({
            itemId: e.detail.current
        });
    },
    switchIndicate() {
        this.setData({
            switchIndicateStatus: !this.getData('switchIndicateStatus')
        });
    },
    switchVertical() {
        this.setData({
            switchVerticalStatus: !this.getData('switchVerticalStatus')
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

```css
.swiper {
    height: 2.18rem;
    border-radius: 8px 8px 0 0;
}

.item {
    width: 100%;
    height: 2.18rem;
    font-size: .18rem;
    color: #fff;
    text-align: center;
    line-height: 2.18rem;
}

.slider {
    margin: .3rem .23rem;
}

.switch-text-before {
    margin-top: .17rem;
}

.init-switch {
    vertical-align: middle;
    margin: .14rem 0 .14rem .17rem;
}

.color-a {
    background-color: #5B9FFF;
}

.color-b {
    background-color: #85B8FF;
}

.color-c {
    background-color: #ADCFFF;
}

.switch {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
```

:::
##  Bug & Tip 

* Tip：如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则会导致 setData 被重复调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起的。
* Tip：其中只可放置 swiper-item 组件，否则会导致未定义的行为。

## 参考示例

###  参考示例 1：用于实现顶部标签切换 

<a href="swanide://fragment/82da7e569b409a1fa4fb753a010fd35e1575120753274" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="container"> 
    <!-- 顶部导航 -->
    <view class="swiper-tab">
        <view class="tab-item {{currentTab==0 ? 'on' : ''}}" data-current="0" bindtap="swiperNav">Tab1</view> 
        <view class="tab-item {{currentTab==1 ? 'on' : ''}}" data-current="1" bindtap="swiperNav">Tab2</view>
        <view class="tab-item {{currentTab==2 ? 'on' : ''}}" data-current="2" bindtap="swiperNav">Tab3</view>
    </view>
    <!-- 顶部导航对应的内容 -->
    <swiper class="swiper" current="{{currentTab}}" duration="200" bindchange="swiperChange">
        <swiper-item>   
            <!-- 页面可使用自定义组件编写 -->
            <view>我是tab1</view>   
        </swiper-item>
        <swiper-item>
            <view>我是tab2</view>
        </swiper-item> 
        <swiper-item>
            <view>我是tab3</view>
        </swiper-item>
    </swiper>
</view>
```

 

```js
Page({
    data: {
        currentTab: 0,
    },
    swiperNav(e) {
        console.log(e); 
       
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            this.setData({ 
                currentTab: e.target.dataset.current, 
            })
        }
    },
    swiperChange: function (e) {
        console.log(e);  
        this.setData({
            currentTab: e.detail.current, 
        })
    }
})
```

 

```css
.swiper-tab {
    display: flex;
    flex-direction: row;
    line-height: 80rpx;
    border-bottom: 1rpx solid #f5f5f5;
}

.tab-item {
    width: 33.3%;
    text-align: center; 
    font-size: .16rem;
    color: rgb(116, 113, 113);
}

.swiper {
    height: 1100px; 
    background: #dfdfdf;
}

.on {
    color: #5B9FFF;
    border-bottom: 1px solid #5B9FFF;
    padding-bottom: 2px
}
```
:::
###  参考示例 2: 自定义底部切换圆点 

<a href="swanide://fragment/74666ea390cd54afd971879d8028578d1575819223978" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class="swiper-wrap">
    <swiper autoplay="auto" interval="5000" duration="500" current="{{swiperCurrent}}" bindchange="swiperChange" class="swiper">
        <swiper-item s-for="{{slider}}">
            <image src="{{item.imageUrl}}" class="img"></image>
        </swiper-item>
    </swiper>
    
    <view class="dots">
        <view s-for="{{slider}}" class="dot {{index == swiperCurrent ? ' active' : ''}}"></view>
    </view>
</view>
```

 
```js
Page({
    data: {
        slider: [{
            imageUrl: 'https://b.bdstatic.com/miniapp/image/hypnosis.jpeg'
        }, {
            imageUrl: 'https://b.bdstatic.com/miniapp/images/hypnosis.jpeg'
        }, {
            imageUrl: 'https://b.bdstatic.com/miniapp/image/airCaptain.jpeg'
        }],
        swiperCurrent: 0
    },
    swiperChange(e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
    }
})
```

  

```css
.swiper-wrap{
    position: relative;
}
.swiper-wrap .swiper{
    height: 300rpx;
}
.swiper-wrap .swiper .img{
    width: 100%;
    height: 100%;
}
.swiper-wrap .dots{
    position: absolute;
    right: 20rpx;
    bottom: 20rpx;
    display: flex;
    justify-content: center;
}
.swiper-wrap .dots .dot{
    margin: 0 8rpx;
    width: 14rpx;
    height: 14rpx;
    background: #fff;
    border-radius: 8rpx;
    transition: all .6s;
}

.swiper-wrap .dots .dot.active{
    width: 24rpx;
    background: #38f;
}
```
:::


