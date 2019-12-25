---
title: 自然搜索结果流量开通指引
header: introduction
nav: book
sidebar: productlaboratory_search
---





> 自然搜索结果流量[接入步骤](https://smartprogram.baidu.com/docs/introduction/intro/)

##  开通材料
  

###  1.  Discuz！小程序path地址  


* 首页：`pages/index/index ` 
* 板块落地页：`pages/plate-detail/plate-detail?fid=xxxx  `
* 帖子落地页：`pages/post-landpage/post-landpage?type=index&tid=xxxx`

说明：其中xxxx为论坛PC站的帖子id或者板块id。

###  2.  已有H5资源替换  

**适用场景**：适用于论坛站点已被搜索资源平台收录，且近期有点击量的情况。

需通过正则表达式的方式声明 H5 链接与小程序路径间的对应关系，提交URL适配规则。示例如下：

- 首页：

|首页地址类型 | url适配规则示例 | 
|---|---|
|`https://www.baidu.cc/forum.php` |`https://www.baidu.cc/forum.php => pages/index/index`| 
|`https://www.baidu.com.cn/forum/`|`https://www.baidu.com.cn/forum/ => pages/index/index` | 
|`https://www.baidu.cn/bbs/index`|`https://www.baidu.cn/bbs/index => pages/index/index`  | 
|`https://bbs.baidu.com/ `|`https://bbs.baidu.com => pages/index/index ` | 


- 帖子落地页：

|帖子落地页地址类型 | url适配规则示例 | 
|---|---|
|`https://baidu.zjo.com.cn/thread-217387-1-1.html `|`https://baidu.zjo.com.cn/thread-([\d]+)-1-1.html => pages/post-landpage/post-landpage?type=index&tid=${1} `| 
|`https://www.baidu.cn/bbs/forum.php?mod=viewthread&tid=17388` |`https://www.baidu.cn/bbs/forum.php?mod=viewthread&tid=([\d]+) => pages/post-landpage/post-landpage?type=index&tid=${1}` | 
|`https://bbs.baidu.com/t96552p1` |`https://bbs.baidu.com/t([\d]+)p1 => pages/post-landpage/post-landpage?type=index&tid=${1}`| 


- 板块落地页：

|板块落地页地址类型 | url适配规则示例 | 
|---|---|
|`https://www.baidu.com.cn/forum/forum-188-1.html` |`https://www.baidu.com.cn/forum/forum-([\d]+)-1.html => pages/plate-detail/plate-detail?fid=${1} `| 
| `https://www.baidu.cn/bbs/forum.php?mod=forumdisplay&fid=89`|`https://www.baidu.cn/bbs/forum.php?mod=forumdisplay&fid=([\d]+) => pages/plate-detail/plate-detail?fid=${1}`  | 
|`https://bbs.baidu.com/f2109p1 `|`https://bbs.baidu.com/f([\d]+)p1 => pages/plate-detail/plate-detail?fid=${1}` | 


###  3.  提交sitemap  

**适用场景**：适用于论坛站点未被搜索资源平台收录，或已收录但近期没有点击量的情况

sitemap 用于声明主动推送给百度自然搜索收录的页面，包含“路径+参数”两部分，示例如下：

```
pages/index/index  
pages/plate-detail/plate-detail?fid=1234  
pages/post-landpage/post-landpage?type=index&tid=1234  
```

其中，参数导出命令行如下，供参考：

> 假设数据数据库表的前缀是pre_，开发者可以根据自己表的前缀进行调整成自己的表前缀。

  板块数据导出    

1）limit 0, 100 => 导出第1-100条；SQL语句如下:
```	
	select fid from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 0, 100;
```
2）limit 100, 100 => 导出第100-200条；以此类推，limit 200, 100 SQL语句如下：
```	
	select fid from pre_forum_forum where status = 1 and type = 'forum' and displayorder >= 0 order by fid asc limit 100, 100;
```
  帖子数据导出  
  
1）limit 0, 500 => 导出第1-500条；SQL语句如下：

```
	select tid from pre_forum_thread where displayorder >= 0 order by tid asc limit 0, 500;
```
	
2）limit 500, 500 => 导出第500-1000条；以此类推，limit 1000, 500 SQL语句如下：

```
	select tid from pre_forum_thread where displayorder >= 0 limit 500, 100;
```


	 
  板块与帖子数据导出替换    

将对应SQL查询出板块的fid，替换路径 `pages/plate-detail/plate-detail?fid=$fid` 中的fid，并拼接成完整的“路径+参数”后，再提交sitemap；  
同理：帖子的tid，替换路径 `pages/post-landpage/post-landpage?type=index&tid=$tid` 中的tid，并拼接成完整的“路径+参数”后，再提交sitemap。
