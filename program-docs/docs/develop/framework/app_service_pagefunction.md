---
title: 页面事件处理函数
header: develop
nav: framework
sidebar: app_service_pagefunction
---



### onPullDownRefresh

**解释**：在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。

**代码示例**

<a href="swanide://fragment/f98d38475a52642dc24881e1c63bc47b1578383993104" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// page.js
Page({
    onPullDownRefresh() {
        // do something
    }
});
```
**说明**：
* 需要在`app.json`的`window`选项中开启 `enablePullDownRefresh`；
* 如果需要单个页面支持下拉刷新，可以直接在页面目录下的 json 配置文件中开启`enablePullDownRefresh`；
* 当处理完数据刷新后，[`swan.stopPullDownRefresh`](https://smartprogram.baidu.com/docs/develop/api/show/pull_swan-startPullDownRefresh/#swan-stopPullDownRefresh/)可以停止当前页面的下拉刷新。


### onReachBottom
**解释**：在`Page`中定义 onReachBottom 处理函数，监听该页面用户上拉触底事件。

**代码示例**

<a href="swanide://fragment/19863fc91f9ea66d1154820bc01769171577102326931" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// page.js
Page({
    onReachBottom(e) {
        console.log('onReachBottom')
        // 常见的业务场景是开发者在这里请求分页数据
    }
});
```
**说明**：
* 可以在 app.json 的 window 选项中或页面配置中设置触发距离 onReachBottomDistance 。
* 在触发距离内滑动期间，该事件只会被触发一次。

### onPageScroll
**解释**：在 Page 中定义 onPageScroll 处理函数，监听用户滑动页面事件。
**方法参数**：Object object
**Object参数说明**：

|字段 |类型  |说明 |
|---- | ---- | ---- |
|scrollTop|Number|页面在垂直方向已滚动的距离（单位px）|

**代码示例**

<a href="swanide://fragment/d702c48d19da7bf5f3fee2aaaf9788361578384055818" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// page.js
Page({
    onPageScroll(e) {
        console.log(e)
    }
});
```

**注意：**
- 请在需要的时候定义此方法，以减少不必要的事件派发对渲染层-逻辑层通信造成影响；
- 请避免在 onPageScroll 中过于频繁的执行 setData 等引起逻辑层-渲染层通信的操作（尤其是每次传输大量数据的时候）。


### onShareAppMessage
**解释**：在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息。

* 用户点击页面内的"分享"按钮([`button`](https://smartprogram.baidu.com/docs/develop/component/formlist_button/) 组件 open-type="share")或者页面右上角菜单的"分享"按钮的时候会调用；
* 此事件需要 return 一个`Object`，用于自定义分享内容。

**Web 态说明**：Web 态下，由于暂不支持分享，该方法不生效。

**百度APP中扫码体验：**

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/pages_onShareAppMessage.png"  class="demo-qrcode-image" />

**方法参数**：Object object
**Object参数说明**：

|参数名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|from |String  |是| |  分享事件来源。button：页面内转发按钮；menu：右上角分享菜单 。 |
|target |Object  |是| |  如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined。|

**自定义分享字段**：

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|title |String  |  否  | 分享标题|
|content |String  |  否  | 分享内容|
|imageUrl |String  |  否  | 分享图标|
|path |String  |  否  | 页面 path，必须是以 / 开头的完整路径。|
|success |Function  |  否  | 接口调用成功的回调函数|
|fail   | Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

**代码示例**
<a href="swanide://fragment/6b1e6d28c542397d04f5408242ac55a21573032765644" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

**场景一：分享页面为 tab 页**

 

```js
Page({
    data: {
        title: '全球实时财经行情'//推荐设置为具有小程序特色的标题  
    },
    onShareAppMessage() {
        return {
            title: this.data.title,
            content: '世界很复杂，百度更懂你——小程序简介或详细描述',//推荐设置为小程序简介或描述  
            imageUrl: 'https://b.bdstatic.com/miniapp/images/bgt_icon.png',
            path: '/index/index',
            success(res) {
                // 分享成功
            },
            fail(err) {
                // 分享失败
            }
        };
    }
});
```

**场景二：分享页面为详情落地页**
 
 

```js
Page({
    data: {
        // 实际应用中动态获取
        title: '美的集团(000333)',//推荐设置为详情页title
        price: '58.2',
        quoteChange: '+1.3%',
        id: '000333'
    },

    onLoad(res) {
        swan.setNavigationBarTitle({
            title: this.data.title
        })
    },

    onShareAppMessage(res) {
        return {
            title: this.data.title + ' 最新报价' + this.data.price,
            content: '更精简的股票小程序——股票精灵，快来查看热门股票吧',//推荐设置为详情页简介
            imageUrl: 'https://b.bdstatic.com/miniapp/images/bgt_icon.png',
            path: `/stockDetail/stockDetail?id=${this.data.id}`
        }
    }
});
```

**场景三：分享页面为资讯落地页**
 

```js
Page({
    data: {
        title: '瑞信：予美团“跑赢大市”评级',//推荐设置为文章标题
        content: [
            // 第一自然段
            '瑞信发布报告称，美团(03690)第三季外送业务同比增长约36%，加上盈利能力的持续改善，期内季绩将强劲增长，预计全年收入可同比增长38%至264亿元人民币，非国际财务报告准则净收益或达4.78亿元人民币。',
            // 第二自然段
            '该行称，尽管受季节性因素影响，第四季成本及补贴费用可能会较高，但预期业务正在稳步发展，期内订单量强劲增长或有助部分抵消季节性负面影响，相信今年全年可实现收支平衡，上调2019年盈利预测，调整后净利润达11亿元人民币。'
        ]//推荐设置为文章第一段
    },
    onLoad(options) {
        this.data.id = options.id || '';
    },
    onShareAppMessage() {
        return {
            title: this.data.title,
            content: this.data.content[0],
            imageUrl: 'https://b.bdstatic.com/miniapp/images/bgt_icon.png',
            path: '/article/article?id=${this.data.id}',
        };
    }
});
```
**Tips**
Page 中没有定义 onShareAppMessage 函数也可以正常调起分享功能，分享数据会优先使用setPageInfo中设置的页面标题和描述信息，其次使用小程序标题、小程序简介、小程序头像，再其次会使用默认智能小程序文案作为兜底，所以推荐开发者优先使用setPageInfo完善页面信息。

**分享渠道及字段说明图示**
![动态及微信好友示例](https://b.bdstatic.com/miniapp/images/dongtai.png)
![朋友圈及QQ好友示例](https://b.bdstatic.com/miniapp/images/pengyouquan7.png)
![QQ空间及百度Hi示例](https://b.bdstatic.com/miniapp/images/qqkongjian2.png)
![新浪微博及截屏分享示例](https://b.bdstatic.com/miniapp/images/xinlangweibo1.png)
![系统分享示例](https://b.bdstatic.com/miniapp/images/xitongfenxiang1.png)

### onTabItemTap(Object object)
**解释**：点击 tab 时触发。

**方法参数**：Object object
**Object参数说明**：

|参数名|类型|说明|最低版本|
|----|----|----|----|
|index|String|被点击tabItem的序号，从0开始|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|
|pagePath|String|被点击tabItem的页面路径|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|
|text|String|被点击tabItem的按钮文字|[3.0.2](https://smartprogram.baidu.com/docs/develop/swan/compatibility/)|

**代码示例**
<a href="swanide://fragment/31512b7bbfc12330f054e50873b05b8b1560700621686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// tab.js
Page({
    onTabItemTap(item) {
        console.log(item.index);
        console.log(item.pagePath);
        console.log(item.text);
    }
});
```

### onURLQueryChange

**解释**：在 Page 中定义 onURLQueryChange 处理函数，监听页面 URL query 改变。引起页面 URL query 更新的原因有：调用 [swan.setURLQuery](/develop/api/url_query/swan-setURLQuery/) 。
<!-- 带有 url-query-name 属性的 [tabs](/develop/component/nav/#tabs/) 切换 tab。 -->

**方法参数**：Object object

**Object参数说明**：

|字段 |类型  |说明 |
|---- | ---- | ---- |
|newURLQuery|Object| 改变后的 URL query |
|oldURLQuery|Object| 改变前的 URL query |

**代码示例**
<a href="swanide://fragment/5bb1ffbf3d23686cf27bf5ba40329d491567219843686" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
Page({
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery) //  输出结果为 {channel: 'movie'} {}
    },
    onLoad(query) {
        if(!query.channel) {
            swan.setURLQuery({channel: 'movie'})
        }
    }
})
```
