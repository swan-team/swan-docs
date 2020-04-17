---
title: 自然搜索结果流量开通指引
header: introduction
nav: book
sidebar: productlaboratory_search
---





Discuz!小程序接入自然搜索结果流量支持以下两种方式，任选其一即可，推荐使用方式一。

## 方式一：使用产品实验室>Discuz!论坛内一键接入工具
 

产品实验室>Discuz!论坛内已上线自然搜索结果流量一键接入工具，具体见下图中的<自然搜索结果流量配置>栏，点击该栏右侧【前往配置】按钮即可前往使用一键提交工具。

>注：若小程序不存在线上版本，【前往配置】按钮将不可点击，一键提交工具不可使用。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/03091.png)

可选择已有H5资源替换或小程序新资源提交（sitemap）两种方式进搜索。[数据提交方式如何选择？](https://smartprogram.baidu.com/docs/introduction/rank_data/)

**1、已有H5资源替换**

若小程序未关联H5站点，需点击下图中的【立即关联】按钮，完成H5站点的关联。
>注：关联的H5站点需为进行Discuz!论坛数据对接时填写的H5站点。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/03092.png)

若小程序已经关联H5站点，则可点击【一键替换】按钮，分别对首页、帖子落地页和板块落地页进行一键替换。替换过程中需要在弹窗内补充对应页面的原站URL地址。

**2、小程序新资源提交（sitemap）**

通过产品实验室可一键提交小程序首页、帖子落地页以及板块落地页的sitemap，统一走周级别的资源收录通路，预计2～3周完成提交资源的收录。若您的小程序资源时效性较强， 可前往方式二选择天级别的sitemap资源提交方式。

>进行一键提交前请补充需要提交的论坛帖子ID（tid）和板块ID（fid）信息，补充格式请参照示例文件。

![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/03093.png)

## 方式二：使用搜索接入>自然搜索模块中的通用提交工具

具体步骤请参照文档：https://smartprogram.baidu.com/docs/introduction/intro/

补充信息如下：

**1、Discuz！小程序path地址**

> 首页：pages/index/index  
> 板块落地页：pages/plate-detail/plate-detail?fid=xxxx  
> 帖子落地页：pages/post-landpage/post-landpage?type=index&tid=xxxx

说明：其中xxxx为论坛PC站的帖子id（tid）或者板块id（fid）。

**2、已有H5资源替换**

> 适用场景：适用于论坛站点已被搜索资源平台收录，且近期有点击量的情况。

需通过正则表达式的方式声明 H5 链接与小程序路径间的对应关系，提交URL适配规则。示例如下：

- 首页：

|首页地址类型 | url适配规则示例 | 
|---|---|
|https://www.baidu.cc/forum.php |https://www.baidu.cc/forum.php$ => pages/index/index| 
|https://www.baidu.com.cn/forum/|https://www.baidu.com.cn/forum/$ => pages/index/index | 
|https://www.baidu.cn/bbs/index|https://www.baidu.cn/bbs/index$ => pages/index/index  | 
|http://bbs.baidu.com/ |http://bbs.baidu.com/$ => pages/index/index  | 


- 帖子落地页：

|帖子落地页地址类型 | url适配规则示例 | 
|---|---|
|https://baidu.zjo.com.cn/thread-217387-1-1.html |https://baidu.zjo.com.cn/thread-([\d]+)-1-1.html => pages/post-landpage/post-landpage?type=index&tid=${1} | 
|http://www.baidu.cn/bbs/forum.php?mod=viewthread&tid=17388 |http://www.baidu.cn/bbs/forum.php?mod=viewthread&tid=([\d]+) => pages/post-landpage/post-landpage?type=index&tid=${1} | 
|http://bbs.baidu.com/t96552p1 |http://bbs.baidu.com/t([\d]+)p1 => pages/post-landpage/post-landpage?type=index&tid=${1}| 


- 板块落地页：

|板块落地页地址类型 | url适配规则示例 | 
|---|---|
|https://www.baidu.com.cn/forum/forum-188-1.html |https://www.baidu.com.cn/forum/forum-([\d]+)-1.html => pages/plate-detail/plate-detail?fid=${1} | 
| http://www.baidu.cn/bbs/forum.php?mod=forumdisplay&fid=89|http://www.baidu.cn/bbs/forum.php?mod=forumdisplay&fid=([\d]+) => pages/plate-detail/plate-detail?fid=${1}  | 
|http://bbs.baidu.com/f2109p1 |http://bbs.baidu.com/f([\d]+)p1 => pages/plate-detail/plate-detail?fid=${1} | 

**3、提交sitemap**

> 适用场景：适用于论坛站点未被搜索资源平台收录，或已收录但近期没有点击量的情况

sitemap 用于声明主动推送给百度自然搜索收录的页面，包含“路径+参数”两部分，示例如下：

```
  pages/index/index  
  pages/plate-detail/plate-detail?fid=1234  
  pages/post-landpage/post-landpage?type=index&tid=1234  
```
其中，参数（fid/tid）导出命令行如下，供参考：

> 假设数据数据库表的前缀是pre_，开发者可以根据自己表的前缀进行调整成自己的表前缀。

**板块数据导出**  

1）limit 0, 100 => 导出第1-100条；SQL语句如下:
	
	第一种：
	```
	select fid from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 0, 100;
	```
	
	第二种：注意这种使用sql函数concat拼接，对数据库性能有点影响，建议一次不要导出太多数据
	```
	select concat("pages/plate-detail/plate-detail?fid=", fid) from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 0, 100;
	```

2）limit 100, 100 => 导出第100-200条；以此类推，limit 200, 100 SQL语句如下：
	```
	select fid from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 100, 100;
	
	select concat("pages/plate-detail/plate-detail?fid=", fid) from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 100, 100;
	```
**帖子数据导出**
  
1）limit 0, 500 => 导出第1-500条；SQL语句如下:

	第一种：
	```
	select tid from pre_forum_thread where displayorder >= 0 order by tid asc limit 0, 500;
	```
	第二种：注意这种使用sql函数concat拼接，对数据库性能有点影响，建议一次不要导出太多数据
	```
	select concat("pages/post-landpage/post-landpage?type=index&tid=", tid) from pre_forum_thread where displayorder >= 0 order by tid asc limit 0, 500;
	```
2）limit 500, 500 => 导出第500-1000条；以此类推，limit 1000, 500 SQL语句如下：
	```
	select tid from pre_forum_thread where displayorder >= 0 limit 500, 500;
	
	select concat("pages/post-landpage/post-landpage?type=index&tid=", tid) from pre_forum_thread where displayorder >= 0 order by tid asc limit 500, 500;
	```

	 
**板块与帖子数据导出替换**  

> 注意：使用第一种方式直接查询fid和tid的方式，需要将对应SQL查询出板块的fid，替换路径 pages/plate-detail/plate-detail?fid=$fid 中的fid，并拼接成完整的“路径+参数”后，再提交sitemap；  

> 同理：帖子的tid，替换路径 pages/post-landpage/post-landpage?type=index&tid=$tid 中的tid，并拼接成完整的“路径+参数”后，再提交sitemap。