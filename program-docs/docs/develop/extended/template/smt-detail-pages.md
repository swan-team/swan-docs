---
title: 图文详情页
header: develop
nav: extended
sidebar:  template
webUrl: https://qft12m.smartapps.cn/subPackages/extensionsPackage/component/pages/smt-detail-pages/smt-detail-pages
---

**解释**：图文详情页模板。你可以加载含有图片、文本、引用、标题等形式的内容。同时，图文详情页模板内置了回到顶端按钮与关注/取消关注按钮，支持点击作者跳转与图片查看器。图文详情页通常用来展示文章、帖子等内容的详情。  

## 示例

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-detail-pages.png"  class="demo-qrcode-image" />



### 使用方法

1. 在小程序根目录下执行如下命令行，引入页面模板。

``` 
npm i @smt-ui-template/page-content-detail
```
### 代码示例

:::codeTab
```swan
<view class="wrap">
    <view s-if="!showPageStatus" class="content-header" ></view>
    <scroll-view scroll-y scroll-top="{=scrollTop=}" s-if="!showPageStatus" class="content-container {{isPhoneX ? 'content-container-ipx' : ''}}" bindscroll="onPageScroll" bindtouchmove="scrollPage" bindtouchstart="touchstart">
        <view class="content-title">
            <text selectable>{{title}}</text>
        </view>
        <view class="content-desp">
            <view class="author-detail" bindtap="tapuser" data-user-id="{{authorId}}">
                <image class="author-avator" mode="widthFix" src="{{avator}}"></image>
                <view class="author-other">
                    <view class="author-name">{{author}}</view>
                    <view class="publish-date">{{date}}</view>
                </view>
            </view>
            <button s-if="showFollowBtn" class="follow-btn" size="mini" type="{{isFollow ? 'default' : 'primary'}}" bindtap="tapfollow" loading="{{btnLoading}}">{{btnLoading ? '' : (isFollow ? '已关注' : '关注')}}</button>
        </view>
        <view class="content-detail">
            <view s-for="item in content" class="detail-{{item.type}}">
                <quote s-if="item.type == 'quote'" content="{{item.content}}"></quote>
                <text selectable s-if="item.type == 'p' || item.type == 'title'">{{item.content}}</text>
                <image lazy-load s-if="item.type == 'img'" mode="widthFix" src="{{item.content}}"  data-src="{{item.content}}" bindtap="tapimg" bindlongpress="longtapimg"></image>
            </view>
        </view>
        <top class="top-view {{showTopBtn ? 'top-view-show' : 'top-view-hide'}}" bind:top="backToTop"></top>
    </scroll-view>
</view>
```
:::
2. 获取数据：获取文章详情、页面跳转、关注/取消关注。

* 获取内容详情所需要的数据，请修改为相关的请求地址参数
:::codeTab
```js
        getArticleDetail(articleId, cb) {
        let params = {
            url: '',
            method: 'GET',
            data: {
                articleId
            },
       ...     
```
:::

* 点击用户事件处理，通常是跳转到用户详情页
  
:::codeTab
```js
        swan.navigateTo({
            url: `/user-detail/user-detail?userId=${userId}`
        });
```

::: 
* 发送 关注/取消关注 请求，请修改为相关的请求地址参数

:::codeTab
```js
        tapfollow(e) {
            ...
            let params = {
                url: '',
                method: 'POST',
                data: {
                    authorId: this.data.authorId
                },
            ...
        }
```
:::
## Bug & Tip

* Tip：模板中使用的是测试数据，你需要从接口中获取真实的数据。
* Tip：模板中内置了部分数据记录，你可以定义自己需要记录的数据。
* Tip: 页面模板功能从开发者工具 v2.25.1-rc 版本开始支持

