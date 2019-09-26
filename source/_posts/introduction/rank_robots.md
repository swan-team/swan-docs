---
title: 设置页面基础信息
header: introduction
nav: book
sidebar: rank_robots
---
 

开发者可通过robots文件声明小程序中不想被搜索引擎收录的部分或者指定搜索引擎只收录特定的部分。仅当您的小程序中包含不希望被视频搜索引擎收录的内容时，才需要使用robots.txt文件。文件上传路径为：智能小程序开发者平台->设置->开发设置->小程序资源抓取设置->点击“设置”按钮->点击“上传协议”按钮。

该文件中的记录通常以一行或多行User-agent开始，后面加上若干Disallow和Allow行,详细情况如下：



* **User-agent:**

    该项的值用于描述搜索引擎robot的名字。在`"robots.txt"`文件中，如果有多条User-agent记录说明有多个robot会受到`"robots.txt"`的限制，对该文件来说，至少要有一条User-agent记录。如果该项的值设为`*`，则对任何robot均有效，在`"robots.txt"`文件中，`"User-agent:*"`这样的记录只能有一条。如果在`"robots.txt"`文件中，加入`"User-agent:SomeBot"`和若干Disallow、Allow行，那么名为`"SomeBot"`只受到`"User-agent:SomeBot"`后面的 Disallow和Allow行的限制。

* **Disallow:**

    该项的值用于描述不希望被访问的一组URL，这个值可以是一条完整的路径，也可以是路径的非空前缀，以Disallow项的值开头的URL不会被 robot访问。例如`"Disallow:/help"`禁止robot访问/help.html、/helpabc.html、/help/index.html，而`"Disallow:/help/"`则允许robot访问/help.html、/helpabc.html，不能访问/help/index.html。`"Disallow:"`说明允许robot访问该网站的所有url，在`"/robots.txt"`文件中，至少要有一条Disallow记录。如果`"/robots.txt"`不存在或者为空文件，则对于所有的搜索引擎robot，该网站都是开放的。


* **Allow:**

    该项的值用于描述希望被访问的一组URL，与Disallow项相似，这个值可以是一条完整的路径，也可以是路径的前缀，以Allow项的值开头的URL 是允许robot访问的。

    例如`"Allow:/hibaidu"`允许robot访问/hibaidu.htm、/hibaiducom.html、/hibaidu/com.html。一个网站的所有URL默认是Allow的，所以Allow通常与Disallow搭配使用，实现允许访问一部分网页同时禁止访问其它所有URL的功能。

* **使用"*"and"$"：** 

    百度spider支持是用以下两个通配符来模糊匹配url。
    "*" 匹配0或多个任意字符
    "$" 匹配行结束符



|举例 | 用法 | 
|---|---|
|禁止所有搜索引擎访问小程序中的任何部分</p> | `User-agent: Disallow: / `| 
| 允许所有的robot访问| `User-agent: * Allow: / ` | 
| 仅禁止Baiduspider访问您的小程序| `User-agent: Baiduspider Disallow: / ` | 
|仅允许Baiduspider访问您的小程序 |  `User-agent: Baiduspider Allow: / User-agent:* Disallow: /` | 
|禁止spider访问特定目录 |` User-agent: * Disallow: /cgi-bin/ Disallow: /tmp/ Disallow: /~joe/ `| 
| 允许访问特定目录中的部分url|  `User-agent: * Allow: /cgi-bin/see Allow: /tmp/hi Allow: /~joe/look Disallow: /cgi-bin/ Disallow: /tmp/ Disallow: /~joe/ `| 
| 禁止Baiduspider抓取小程序中所有图片|  `User-agent: Baiduspider Disallow: /*.jpg$ Disallow: /*.jpeg$ Disallow: /*.gif$ Disallow: /*.png$ Disallow: /*.bmp$`| 
       

>百度会严格遵守robots的相关协议，请注意区分您不想被抓取或收录的目录的大小写，百度会对robots中所写的文件和您不想被抓取和收录的目录做精确匹配，否则robots协议无法生效。