---
title: smt-refresh 刷新
header: develop
nav: extensions
sidebar: smt-refresh
---

**解释：** 可用于页面任意区域；使用时需自行添加下拉逻辑改变offset-y参数；smt-feed组件对smt-refresh进行了封装，支持手势交互和api调起刷新。

##  属性说明 

|属性名 | 类型 | 必填 | 默认值 |说明 |
|---|---|---|---|---|
|theme |String |否|-|主题配置，默认浅色；深色主题请指定dark|
|loadingHgt |Number |否|192px（需转换为设备尺寸）|加载区域高度|
|offsetY |Number |否|0|垂直移动距离，*建议后续在sjs中使用|
|status |Number |否|0|加载状态 0: 未开始 1: 加载中 2: 展示话术|
|text |String |否|建议最多显示18个汉字，超出内容截断|加载成功时的展示话术|

## 代码示例

<a href="swanide://fragment/598510a21b650b89e2e5d13c814dc46c1577192328823" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

### 扫码体验

<img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/smt-refresh.png"  class="demo-qrcode-image" />

###  图片示例 

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/miniapp/images/smt-refresh.gif">
    </div>  
</div>

###  代码示例

* 在 swan 文件中

```html
<!-- 刷新：不包含手势交互，需通过改变offset-y和status自定义交互 -->
<smt-refresh status="{{status}}" offset-y="{{offsetY}}" text="为您推荐xx条更新"></smt-refresh>

<!-- 信息流：包含手势交互 -->
<smt-feed
    class="smt-feed"
    theme="{{dark ? 'dark' : ''}}"
    pull-to-refresh
    bind:refresh="onRefresh"
    text="{{text}}"
>
    <list list="{{list}}" theme="{{dark ? 'dark' : ''}}"></list>
</smt-feed>
```


* 在 js 文件中

```javascript
async onRefresh() {
    console.log('触发 onRefresh');
    const refresh = await selComponent(this, '.pull-down-refresh');
    const {code, data: list} = await this.fetchData();
    if (code !== 0) {
        swan.showToast({title: '网络错误', mask: true, icon: 'none'});
        refresh.closeLoading();
        return;
    }
    await syncSetData(this, {
        status: 1,
        list: list || this.data.list,
        text: list ? `本次共加载${list.length}条数据！` : '暂时没有更新，休息一下'
    });
    refresh.stopRefresh();
}
```


* 在 css 文件中

```css
.smt-feed {
    height: 3.51rem;
    display: block;
    background-color: #fff;
}
```


