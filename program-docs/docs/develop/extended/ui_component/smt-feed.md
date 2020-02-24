---
title: feed 信息流
header: develop
nav: extended
sidebar: smt-feed
# webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-feed/smt-feed
---

**解释：** 信息流组件，可配置下拉刷新、列表加载、上滑加载功能，适用于列表信息展示，并可放置在页面的任何部分；组件包含手势下拉以及api调用两种使用方式

##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|theme |String |否|-|主题配置，默认浅色；深色主题请指定dark|
|loadingHeight |Number |否|192px(设计稿宽度为1242)|加载、话术区域高度，单位为设备px，转换方法: import {upx2dpx} from &#39;@smt-ui&#x2F;component&#x2F;src&#x2F;common&#x2F;utils&#x2F;px&#39;;|
|pullToRefresh |Boolean |否|false|是否开启手势下拉刷新; 默认只能通过组件api调起|
|lowerThreshold |Number |否|150px（设备上的px）|触发scrolltolower事件的阈值|
|text |String |否|建议最多显示18个汉字，超出内容截断|加载成功时的展示话术|
|refresh |EventHandle |否||手势滑动触发加载时，响应该onRefresh事件; 通过调用api加载，不会触发该事件|
|startRefresh |EventHandle |否||手动调用该api，触发加载|
|stopRefresh |EventHandle |否||手动调用该api，停止加载，并弹出加载提示（对应属性text）；可使用await等待关闭动画结束|
|closeLoading |EventHandle |否||手动调用该api，立即关闭加载，不弹出加载提示；例如接口异常，建义直接关闭加载（小球交替一次大约为500ms，调用前可加延时避免关闭太快）|
|smt-feed-container |externalClass |否|-|组件整体class名|
|smt-feed-loading |externalClass |否|-|加载区域class名|
|smt-feed-content |externalClass |false||滚动区域class名，用于设置ios回弹背景|
|smt-refresh-circle-left |externalClass |否|-|加载中左侧小球class名|
|smt-refresh-circle-right |externalClass |否|-|加载中右侧小球class名|
|ext-cls-content |externalClass |否|-|滚动区域class名|
|smt-refresh-result-container |externalClass |否|-|加载话术外框class名|
|ext-cls-result-text |externalClass |否|-|加载话术文字class名|


## 示例

<a href="swanide://fragment/7b9bf19d0c974d45d9b68fd9fc4429b31577200628346" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-feed.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-feed.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<!-- 手势下拉刷新 & 触底加载 -->
<smt-feed
    class="smt-feed pull-down-refresh"
    pull-to-refresh
    bind:refresh="onRefresh"
    bind:scrolltolower="scrollToLower"
    text="{{PullText}}"
>
    <list list="{{list}}"></list>
    <smt-spin status="{{status}}" bind:tap="reload"></smt-spin>
</smt-feed>
```


* 在 js 文件中

```js
async onRefresh() {
    const refresh = await selComponent(this, '.pull-down-refresh');
    const {data: list} = await fetchData();
    await syncSetData(this, {
        status: 1,
        count: 0,
        list: list || this.data.list,
        text: list ? `为你推荐${list.length}条更新` : '暂时没有更新，休息一下'
    });
    refresh.stopRefresh();
},

async scrollToLower() {
    const {data: list} = await fetchData();
    const fail = this.data.count === 3;
    const end = this.data.count === 5;
    if (fail || end) {
        this.setData({
            status: fail ? 3 : 2
        });
        return;
    }
    await syncSetData(this, {
        list: list.concat(this.data.list || []),
        count: ++this.data.count
    });
}
```


* 在 css 文件中

```css
.smt-feed {
    display: block;
    height: calc(100vh - 40px);
}
```


## Bug&Tip

* Tip：和scroll-view一样，信息流组件作为局部滚动组件，必须在它的父级或本身指定高度。
* Tip：当同时启用下拉刷新和上滑加载且请求不稳定时，可使用CancelToken取消先前的请求。

