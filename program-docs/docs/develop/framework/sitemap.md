---
title: swan-sitemap 动态库
header: develop
nav: framework
sidebar: sitemap
---



## 介绍 

swan-sitemap 动态库是百度小程序官方发布的用于生成[小程序索引页](https://smartprogram.baidu.com/docs/introduction/rank_synchronism/)的动态库组件，开发者可以在小程序项目中引用 swan-sitemap 动态库，并通过 swan-sitemap-list 组件高效的开发出符合搜索收录规范的小程序索引页。

## 使用方法 

1. 在项目中声明引用 swan-sitemap 动态库 
在 app.json 文件配置的 dynamicLib 字段中增加对 swan-sitemap 的引用，具体格式在[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)文档中查看。 
```json
    "dynamicLib": {
        // 'swan-sitemap-lib' 是个可自己定的别名。
        "swan-sitemap-lib": {
             // provider 是要引用的动态库的名字，在此为 'swan-sitemap'。
            "provider": "swan-sitemap"
        }
    }
```

2. 创建一个索引页页面，并在页面中声明引用 swan-sitemap-list 组件 
    动态库中的组件与其他自定义组件类似，都需要在 page 中使用。所以首先需要创建一个 page，page 路径可自定义，推荐路径为 swan-sitemap/index（即在小程序项目根目录创建 swan-sitemap 文件夹，并在文件夹下创建 index.js、index.swan、index.css、index.json 页面文件)。

    索引页上线后，需要在开发者平台提交最终的索引页路径，具体提交步骤见文档[小程序资源自动同步](https://smartprogram.baidu.com/docs/introduction/rank_synchronism)。

    页面中引用动态库组件的方式是：在页面的 json 配置的 usingComponents 字段中声明组件引用。具体格式在[使用动态库](https://smartprogram.baidu.com/docs/develop/framework/dynamiclib_use/)文档中查看。
    ```json
        "usingComponents": {
            "swan-sitemap-list": "dynamicLib://swan-sitemap-lib/swan-sitemap-list"
        }
    ```
3. 在页面代码中使用 swan-sitemap-list 组件 

    3.1 模板代码(.swan文件)示例如下

    swan-sitemap-list 组件需要的具体数据及其含义见下节 “swan-sitemap-list 组件字段详解”
    ```xml
        <swan-sitemap-list
            list-data="{{listData}}"
            current-page="{{currentPage}}"
            total-page="{{totalPage}}"
            path="/swan-sitemap/index">
        </swan-sitemap-list>
    ```
    3.2 页面 JS 文件示例如下
    ```js
        Page({
            data: {
                listData: [],
                totalPage: 1,
                currentPage: 1,
                path: 'swan-sitemap/index'
            },
            
            onLoad(e) {
                // 初始页面打开时，需要读取页面的 currentPage 参数（即翻页页码），并根据参数值请求数据
                let {currentPage} = e;
                // 起始页码为 1，如读取到的值为空，默认赋值起始页码
                currentPage = +currentPage || 1;
                // 根据当前页码获取该页数据资源
                this.requestData(currentPage);
            },
            
            requestData(currentPage) {
                // 发起数据资源请求。
                swan.request({
                url: sitemapUrl, // 数据接口，需改为开发者实际的请求接口
                data: {
                    page: currentPage // 参数中需携带页码参数，此为示例，可根据实际情况传入其他所需参数
                    },
                success: res => {
                    if (+res.data.code === 0) {
                    let resData = res.data.data;
                    // 根据返回数据更新列表。如请求返回格式不符合模板数据 listData 的要求格式，需调整格式后再赋值给 listData。
                    // listData 的格式要求为：
                    // Array<{title:string, path:string, releaseDate:DateString}>，详见下节 “list-data 项格式说明”
                    this.setData({
                        listData: resData.list,
                        totalPage: resData.totalPage,
                        currentPage
                            });
                        }
                    }
                });
            }
        });
    ```
swan-sitemap-list 组件字段详解 

|属性名 | 类型 | 是否必填 | 说明 | 
|---|---|---|---|
|list-data | Array | 是 | 当前索引页的小程序资源页面集合（建议长度 100-200 左右） | 
|current-page | Number | 是 | 当面页码 | 
|total-page|Number  | 是 | 索引页总共页数 | 
|path |String  | 是 | 动态库索引页的path | 

其中 list-data 数组中的每项为一个 Object，该 Object 具体格式为：

|属性名 | 类型 | 是否必填 | 说明 | 示例 | 
|---|---|---|---|---|
|title| String | 是 | 资源页面标题 | “第92届奥斯卡金像奖” | 
|path | String | 是 | 资源页面路径（可带参数） | “/page/article?id=51283431” | 
|releaseDate | String | 是 | 资源发布时间（格式为 YYYY-MM-DD HH:mm:ss） | “2020-01-01 08:40:06” | 

### 其他开发要求 

1.【强制】页面参数必须有且仅有一个参数 currentPage，用于指定翻页页码，起始值为 1。 页面根据 currentPage 参数展示指定页资源列表。即一个合法的索引页 URI 格式为${path}?currentPage=${currentPage}
2.【强制】需在页面初始化时（如 onLoad 生命周期）获取 currentPage 参数，并通过 currentPage 请求当页的数据
3.【建议】 资源列表中每个列表项包含一条资源发布时间显示，格式为 YYYY-MM-DD HH:mm:ss
3.【建议】 资源列表按照更新日期倒序排列。将较新的资源放在最前面可以提高爬虫发现和收录效率
4.【建议】 每页资源条数在 100-200 左右。

### 展示示例 
![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/20200116.png)
