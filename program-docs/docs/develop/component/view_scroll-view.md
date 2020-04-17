---
title: scroll-view 可滚动视图区域
header: develop
nav: component
sidebar: view_scroll-view
webUrl: https://qft12m.smartapps.cn/component/scroll-view/scroll-view
---




**解释**：可滚动视图区域，可实现横向滚动和竖向滚动。使用竖向滚动时，需要给定一个固定高度，可以通过css来设置height。

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明| 
|:---- | :---- |: ---- |:---- |:---| 
|scroll-x | Boolean  |  false  | 否 | 允许横向滚动|  
|scroll-y| Boolean  | false | 否 |允许纵向滚动| 
|upper-threshold| Number &#124; String | 50 | 否 | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件| 
|lower-threshold| Number &#124; String |50 | 否 |距底部/右边多远时（单位 px），触发 scrolltolower 事件|  
|scroll-top | Number &#124; String  | | 否 |设置竖向滚动条位置。要动态设置滚动条位置，用法`scroll-top="{= scrollTop =}"`| 
|scroll-left| Number &#124; String  | | 否 |设置横向滚动条位置。要动态设置滚动条位置，用法`scroll-left="{= scrollLeft =}"`|  
|scroll-into-view | String  | | 否 |值应为某子元素 id（id 不能以数字开头）,设置滚动方向后，按方向滚动到该元素，动态设置用法`scroll-into-view="{= scrollIntoView =}"`。| 
|scroll-with-animation| Boolean  | false | 否 |在设置滚动条位置时使用动画过渡|  
|enable-back-to-top| Boolean | false | 否 | ios点击顶部导航栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向 |  
|bindscrolltoupper | EventHandle  | | 否 |滚动到顶部/左边，会触发 scrolltoupper 事件|  
|bindscrolltolower | EventHandle |  | 否 |滚动到底部/右边，会触发 scrolltolower 事件|  
|bindscroll | EventHandle | | 否 | 滚动时触发， event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} | |  


## 示例

<a href="swanide://fragment/6b47965d6a966447e4c10226e7c6ee541577361102399" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/scroll-view.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

 
###  代码示例 1：纵向滚动  

 

 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description">纵向滚动</view>
        <scroll-view
            class="scroll-view"
            scroll-y
            upper-threshold="1"
            lower-threshold="1"
            scroll-top="{= scrollTop =}"
            scroll-into-view="{= scrollIntoView =}"
            scroll-with-animation="true"
            enable-back-to-top="true"
            bindscrolltoupper="upper"
            bindscrolltolower="lower"
            bindscroll="scroll">
            <view id="one" class="color-a">A</view>
            <view id="two" class="color-b">B</view>
            <view id="three"  class="color-c">C</view>
        </scroll-view>  
        <view class="page-section-btns">
            <view class="next" bindtap="tap">下一页</view>
            <view bindtap="tapMove">滚动</view>
            <view class="scrollToTop" bindtap="scrollToTop">回顶部</view>
        </view>
    </view>
</view>
```
 

```js
const order = ['one', 'two', 'three'];
Page({
    data: {
        scrollIntoView: 'one',
        scrollTop: 0,
        scrollLeft: 0
    },
    upper() {
        swan.showToast({
            title: '到顶了',
            icon: 'none'
        });
    },

    lower() {
        swan.showToast({
            title: '到底了',
            icon: 'none'
        });
    },

    scroll(e) {
        console.log('获取滚动事件的详细信息e.detail：', e.detail);
        this.setData({
            scrollTop: e.detail.scrollTop
        })
    },

    scrollToTop(e) {
        console.log(e);
        this.setData({
            scrollTop: 0,
        });
    },
    tap(e) {
        for (let i = 0; i < order.length; ++i) {
            if (order[i] === this.data.scrollIntoView) {
                const next = (i + 1) % order.length;
                this.setData({
                    scrollIntoView: order[next],
                    scrollTop: next * 500,
                });
                break;
            }
        }
    },
    tapMove() {
        this.setData({
            scrollTop: this.data.scrollTop + 10,
        });
    }
});
```
:::
###  代码示例 2：横向滚动 

 

 

:::codeTab
```swan
<view class="wrap">
    <view class="card-area">
        <view class="top-description">横向滚动</view>
        <scroll-view
            class="scroll-view"
            scroll-x
            bindscrolltoupper="toLeft"
            bindscrolltolower="toRight"
            scroll-left="{= scrollLeft =}"
            upper-threshold="1"
            lower-threshold="1"
            bindscroll="scroll">
            <view id="four" class="color-a row-view">A</view>
            <view id="five" class="color-b row-view">B</view>
            <view id="six" class="color-c row-view">C</view>
        </scroll-view>
    </view>
</view>

```
 

```js
Page({
    data: {
        scrollLeft: 0
    },

    toLeft() {
        swan.showToast({
            title: '到最左边了',
            icon: 'none'
        });
    },
    toRight() {
        swan.showToast({
            title: '到最右边了',
            icon: 'none'
        });
    },
    scroll(e) {
        console.log('获取滚动事件的详细信息e.detail：');
        console.dir(e.detail);
        this.setData({
            scrollTop: e.detail.scrollTop
        })
    }
});
```
:::
##  Bug & Tip 

* Tip：请勿在 scroll-view 中使用 textarea、map、canvas、video 组件；更多请看[原生组件说明](https://smartprogram.baidu.com/docs/develop/component/native/)。
* Tip：scroll-into-view 的优先级低于 scroll-top、scroll-left。
* Bug：在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh。
* Tip：若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view。
* Tip：scroll-into-view、scroll-top、scroll-left 需要在页面数据高度（或宽度）撑开时生效，若有异步加载数据，请在数据渲染完成时，重新动态赋值，才可生效。
* Tip：在设置 scroll-view 组件 height 属性不是内容可视区总高度时，使用 swan.pageScrollTo() API 无法生效。


## 参考示例

###  参考示例 1： 横向滚动套纵向滚动常用业务场景  
<a href="swanide://fragment/b8dd91b985ad471daeb43f8b79d7bc011575813000917" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>
 
:::codeTab
```swan
<view class="wrap">
     <view class="card-area">
        <view class="top-description border-bottom">推荐列表</view>
        <scroll-view
            scroll-x
            class="scroll-view"
        >
            <view class="flex">
                <scroll-view class="item" scroll-y s-for="item in list">
                    <image class="image" src="{{item.src}}"></image>
                    <view class="introduce">{{item.description}}</view>
                </scroll-view>
            </view>
        </scroll-view>
    </view>
</view>
```
:::
###  参考示例 2: 隐藏scroll-view的滚动条 

<a href="swanide://fragment/31ddeb76caca2583eba8b86df7dbf54a1575871524499" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 
:::codeTab
```css
/* 添加此属性隐藏scroll-view的滚动条 */
::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
```
:::
###  参考示例 3: 竖向锚点示例

<a href="swanide://fragment/6ee800a0957e3701c72c6c4ccff649d41576571802737" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

 

:::codeTab
```swan
<view class='scroll-box' style='height:{{ht}}px;'>
    <scroll-view scroll-y class='menu-tab' scroll-into-view="{{toView}}" scroll-with-animation="true">
        <view s-for="{{tabList}}" s-key="">
            <view class='item-tab {{item.checked ? "item-act":""}}' id="t{{index}}" data-index="{{index}}" bindtap='intoTab'>{{item.title}}</view>
        </view>
    </scroll-view>
  
    <scroll-view scroll-y style='height:{{ht}}px;'
    scroll-with-animation="true"
    bindscrolltoupper="upper"
    bindscrolltolower="lower"
    bindscroll="scrollRight"
    scroll-into-view="{{toViewRt}}">
        <view s-for="{{contList}}" s-key="">
            <view class='cont-box' id="t{{index}}" style='height:{{ht}}px;'>{{item.cont}}</view>
        </view>
    </scroll-view>
</view>
```

 

```js
var app = getApp();

Page({
    data: {
        current: 0, 
        // 左侧菜单
        tabList: [
            { title: 'tab1', checked: true },
            { title: 'tab2', checked: false },
            { title: 'tab3', checked: false },
            { title: 'tab4', checked: false },
            { title: 'tab5', checked: false },
            { title: 'tab6', checked: false }
        ],
        // 右侧内容
        contList: [
            { cont: 'tab1'},
            { cont: 'tab2'},
            { cont: 'tab3'},
            { cont: 'tab4'},
            { cont: 'tab5'},
            { cont: 'tab6'}
        ],
    },
  
    // 循环切换
    forTab(index) {
        let lens = this.data.tabList.length;
        let _id = 't' + index;
        for (let i = 0; i < lens; i++) {
        this.data.tabList[i]['checked'] = false;
    }
    this.data.tabList[index]['checked'] = true;
        this.setData({
            tabList: this.data.tabList,
            toView: _id,
            current: index
        });
    },
  
    // 点击左侧菜单栏
    intoTab(e) {
        let lens = this.data.tabList.length;
        let _index = e.currentTarget.dataset.index;
        this.forTab(_index);
        let _id = 't' + _index;
        this.setData({
            toViewRt: _id
        });
    },
  
    // 滚动右侧菜单
    scrollRight(e) {
        //console.log(e)
        let _top = e.detail.scrollTop;
        let progress = parseInt(_top / this.data.ht); // 计算出 当前的下标
        if (progress > this.data.current) { // 向上拉动屏幕
        
        this.setData({ current: progress });
        this.forTab(this.data.current);
    } else if (progress == this.data.current) {
        return false;
    } else { // 向下拉动屏幕
        this.setData({
            current: progress == 0 ? 0 : progress--
        });
            this.forTab(progress);
        }
    },
  
    onLoad: function (options) {
        console.log(this.data.tabList)
        // 框架尺寸设置
        swan.getSystemInfo({
            success: (options) => {
                var wd = options.screenWidth; // 页面宽度
                var ht = options.windowHeight; // 页面高度
                this.setData({ wd: wd, ht: ht })
            }
        });
    },
  
    onShow: function () {
        // 初始化状态
        this.setData({
            toView: 't' + this.data.current,
            toViewRt: 't' + this.data.current
        })
    }
})
```
:::


