---
title: 代码构成
header: develop
nav: server
sidebar: web_canonical
---

## 配置Web版智能小程序与H5站点映射关系

由于 Web 版智能小程序接入搜索时，需要提供智能小程序与其对应的H5站点的映射关系，因此开发者需要在 app.json 中进行相关配置。



### 配置方式

在 app.json 中增加 url-mapping 字段，配置智能小程序与其对应的H5页面的 url 的映射规则：

```json
{
    "pages": [
        "path/to/smartapp/page1/page1",
        "path/to/smartapp/page2/page2",
        "path/to/smartapp/page3/page3"
    ],
    "url-mapping": {
        "path/to/smartapp/page1/page1":"/path/to/h5/page1?query1=${appquery1}&query2=${appquery2}",
        "path/to/smartapp/page2/page2":"/path/to/h5/page2?query3=${appquery3}&query4=${appquery4}",
        "path/to/smartapp/page3/page3":"/path/to/h5/page3?query5=${appquery5}&query6=${appquery6}"
    }
}
```
**说明**：
*  url-mapping 字段为 Object，在pages 中配置的每一个页面的 url 作为 key，每一个小程序页面对应的 H5 页面作为 value; 每一对"key-value"作为一个完整的url映射。
*  url 映射规则通过字符串模板的方式进行定义，模板变量的界定符是`${}`。需要将 Web 版智能小程序 url 中的 query 部分，和字符串模板进行编译，生成正式的 url 实例。
*  url 映射规则不包含 host 部分，具体的 host 需要开发者访问智能小程序B端后台进行单独配置。

### 配置示例 

以百度贴吧智能小程序为例，在app.json中配置url-mapping字段如下：

```json
    {
        "pages": {
            "pages/index/index",
            "pages/pb/pb",
            "pages/frs/frs"
        }
        "url-mapping": {
            "pages/index/index":"/",
            "pages/pb/pb":"/p/${tid}",
            "pages/frs/frs": "/?kw=${kw}"
        }
    }
```
**说明**：
百度贴吧智能小程序首页为：`http://smartapps-tieba.baidu.com/pages/frs/frs?kw=baidu `， 那么这个地址将映射到百度贴吧的H5站点域名：`http://tieba.baidu.com/?kw=baidu` 。


