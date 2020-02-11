---
title: tabs 标签栏
header: develop
nav: component
sidebar: tabs
---



**解释**：标签栏，用于让用户在不同的视图中进行切换。基础库 3.100.4 版本开始支持。

##  属性说明 

|属性名 |类型  |默认值  | 必填 |说明|最低版本|
|:---- |: ---- |: ---- |:---- |:---- |:---- |
|tabs-background-color|	String|	'#fff'| 否 |tabs 背景色,必须填写十六进制颜色|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|tabs-active-text-color| String |'#000'  |否 |tabs 激活 tab-item 文字颜色|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|tabs-inactive-text-color| String | '#666' |否 |tabs 非激活 tab-item 文字颜色|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|tabs-underline-color| String | '#333' |否 |tabs 激活 tab-item 下划线颜色|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|active-name| String | 无 | 否 |仅用于普通标签栏组件，当前激活 tab-item 的 对应的name 值，须搭配bindtabchange 一起使用。|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|url-query-name| String | 无 |否 |仅用于可寻址标签栏组件，当前 tab 所改变的 url query 中参数 key，需要通过 tabs 修改页面 url 的时候设置。|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|max-tab-item-amount| Number | 5 |否 |当前 tabs 视图中最多容纳的 tab-item 数量，低于此数量均分排列，超出此数量划屏。默认五个，开发者根据业务需求调整|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|
|bindtabchange| EventHandle |  |否 |tab 被点击的回调，可以在e.detail.name中取到当前点击的tab-item对应name值|3.100.4<p>低版本请做<a href="https://smartprogram.baidu.com/docs/develop/swan/compatibility/">兼容性处理</a>|

## 示例

<a href="swanide://fragment/554b5ec0fb2f1b226477a355d32c77a81577363516679" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/tabs.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>

普通标签栏组件与可寻址标签栏组件的区别是：可寻址标签栏组件在标签栏 tab 切换时，该页面的 uri 参数会同步变化；反之，跳转某页面 uri 时，指定标签栏栏绑定的参数值也会打开该值对应的 tab 页。由于这种绑定关系的存在，相比于普通标签栏栏，可寻址标签栏栏更利于搜索引擎收录。 建议开发者尽量使用可寻址标签栏栏组件实现页面主标签栏栏功能 。例如：主页的多频道切换。

标签栏组件的使用需要通过 tabs 和 [tab-item](https://smartprogram.baidu.com/docs/develop/component/tab-item/) 组件配合实现。
###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/images/tabs.gif">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>     
</div>

###  代码示例 1 ：普通标签栏（默认样式）

* 在 swan 文件中

```html
<view class="card-area">
    <view class="top-description border-bottom">默认样式</view>
    <tabs 
        class="border-bottom"
        active-name="{{activeName}}" 
        bindtabchange="tabsOne">
        <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
    </tabs>
    <view class="intro">
        <view>标签{{content}}内容展示区</view>
    </view>
</view>
```

* 在 js 文件中

```js
Page({
    data: {
        tabs: [{
            name: '一',
            label: '标签一'
        }, {
            name: '二',
            label: '标签二'
        }, {
            name: '三',
            label: '标签三'
        }],
        content: '一',
    },
    tabsOne(e) {
        console.log(e.detail.name);
        this.setData({
            content: e.detail.name,
            activeName: e.detail.name
        })
    }
});
```

###  代码示例 2 ：可横滑展示


* 在 swan 文件中

```html

<view class="card-area">
    <view class="top-description border-bottom">
        <view>可横滑显示</view>
        <view>max-tab-item-amount='7'</view>
    </view>
    <tabs 
        url-query-name="two" 
        max-tab-item-amount='5' 
        class="border-bottom" 
        bindtabchange="tabsTwo">
        <tab-item s-for="tab in tabsTwo" name="{{tab.name}}" label="{{tab.label}}" />
    </tabs>
    <view class="intro">
        <view>标签{{contentTwo}}内容展示区</view>
    </view>
</view>

```

* 在 js 文件中

```js

Page({
    data: {
        tabsTwo: [{
            name: '一',
            label: '标签一'
        }, {
            name: '二',
            label: '标签二'
        }, {
            name: '三',
            label: '标签三'
        }, {
            name: '四',
            label: '标签四'
        }, {
            name: '五',
            label: '标签五'
        }, {
            name: '六',
            label: '标签六'
        }, {
            name: '七',
            label: '标签七'
        }],
        contentTwo: '一'
    },
    tabsTwo(e) {
        console.log(e.detail.name);
        this.setData({
            contentTwo: e.detail.name
        })
    }
});

```

###  代码示例 3 ：自定义样式


* 在 swan 文件中

```html

<view class="card-area">
    <view class="top-description border-bottom">
        <view>自定义样式</view>
    </view>
    <tabs 
        url-query-name="three" 
        class="border-bottom"
        tabs-background-color="#3388ff"
        tabs-underline-color = "#fff"
        tabs-inactive-text-color="#fff"
        tabs-active-text-color="#fff"
        bindtabchange="tabsThree"
        >
        <tab-item s-for="tab in tabsThree" 
                  name="{{tab.name}}" 
                  label="{{tab.label}}" />
    </tabs>
    <view class="intro">
        <view>标签{{contentThree}}内容展示区</view>
    </view>
</view>

```

* 在 js 文件中

```js

Page({
    data: {
        tabsThree: [{
            name: '一',
            label: '标签一',
        }, {
            name: '二',
            label: '标签二',
        }, {
            name: '三',
            label: '标签三'
        }],
        contentThree: '一'
    },
    tabsThree(e) {
        console.log(e.detail.name);
        this.setData({
            contentThree: e.detail.name
        })
    }
});

```

###  代码示例 4 ：显示徽标


* 在 swan 文件中

```html

<view class="card-area">
    <view class="top-description border-bottom">
        <view>显示徽标</view>
    </view>
    <tabs url-query-name="four" class="border-bottom" bindtabchange="tabsFour">
        <tab-item 
            badge-type="{{tab.badgeType}}"
            badge-text="{{tab.badgeText}}"
            s-for="tab in tabsFour" 
            name="{{tab.name}}" 
            label="{{tab.label}}" />
    </tabs>
    <view class="intro">
        <view>标签{{contentFour}}内容展示区</view>
    </view> 
</view> 

```

* 在 js 文件中

```js

Page({
    data: {
        tabsFour: [{
            name: '一',
            label: '标签一',
            badgeType: 'text',
            badgeText: '99+'
        }, {
            name: '二',
            label: '标签二',
            badgeType: 'dot'
        }, {
            name: '三',
            label: '标签三'
        }],
        contentFour: '一'
    },
    tabsFour(e) {
        console.log(e.detail.name);
        this.setData({
            contentFour: e.detail.name
        })
    }
});

```

###  代码示例 5 ：跳转寻址

* 旧页面:

* 在 swan 文件中

```html

<view class="card-area">
    <view class="top-description border-bottom">
        <view>支持寻址</view>
    </view>
    <button type="primary" bind:tap="enterNewTabsPage">进入页面并定位到标签二</button>
</view>

```

* 在 js 文件中

```js
Page({
    data: {
        tabsFour: [{
            name: '一',
            label: '标签一',
            badgeType: 'text',
            badgeText: '99+'
        }, {
            name: '二',
            label: '标签二',
            badgeType: 'dot'
        }, {
            name: '三',
            label: '标签三'
        }],
        contentFour: '一'
    },
    enterNewTabsPage() {
        swan.navigateTo({
            url: "/newTabs/newTabs?position=二"
        });
    }
});

```

* 新页面:

* 在 swan 文件中

```html

<tabs url-query-name="position" class="border-bottom">
    <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
</tabs>

```

* 在 js 文件中

```js
Page({
    data: {
        tabs: [{
            name: '一',
            label: '标签一'
        }, {
            name: '二',
            label: '标签二'
        }, {
            name: '三',
            label: '标签三'
        }],
        content: '一'
    },
    onLoad(query) {
        console.log(query);
        swan.setURLQuery(query);
        this.setData({
            content: query.position
        });
    },
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(oldURLQuery, newURLQuery);
        this.setData({
            content: `${newURLQuery.position}`
        });
    }
});

```

###  代码示例 6 ：可寻址标签栏用法


* 在 swan 文件中

```html
<!-- 指定 url-query-name 后，通过修改url来控制当前选中的tab，无需指定 active-name -->
<!-- 虽然 bindtabchange 依旧会生效，但是直接使用 onURLQueryChange 是更好的做法 -->
<tabs url-query-name="city">
    <tab-item s-for="tab in tabs" name="{{tab.name}}" label="{{tab.label}}" />
</tabs>
<!-- 查看页面uri变化 -->
<view class="wrap">{{content}}</view>
```

* 在 js 文件中

```js
Page({
    data: {
        tabs: [{
            name: 'beijing',
            label: '北京'
        },
        {
            name: 'shanghai',
            label: '上海'
        },
        {
            name: 'guangzhou',
            label: '广州'
        }, 
        {
            name: 'shenzhen',
            label: '深圳'
        }, {
            name: 'xiamen',
            label: '厦门'
        }, {
            name: 'haerbin',
            label: '哈尔滨'
        }],
        content: 'beijing'
    },
    // 监听函数，点击切换 tabs 组件或者调用 swan.setURLQuery 时，url 发生变化自动触发
    onURLQueryChange({newURLQuery, oldURLQuery}) {
        console.log(newURLQuery, oldURLQuery)
        this.setData({
            content: `${oldURLQuery.city || 'beijing'} To ${newURLQuery.city}`
        })
	    // 此时tab切换，刷新tabs下方视图数据
    }
});

```


> active-name 和 url-query-name 不要搭配在一起使用：
* 如果开发者需要的只是一个普通的顶部标签栏组件，可以通过 active-name 配合 bindtabchange 来控制当前选中tab-item；
* 如果开发者需要的是可以修改页面 url 的顶部标签栏组件，只需指定url-query-name，无需设置 active-name


 相关链接 ：
[onURLQueryChange](https://smartprogram.baidu.com/docs/develop/api/url_query/onURLQueryChange/)

##  Bug & Tip 

* Bug：页面中有多个tab组件时，已知徽标会错位，css里全局设置 *{box-sizing: content-box;} 做兼容。
