---
title: Discuz!论坛接入百度小程序FAQ
header: introduction
nav: book
sidebar: productlaboratory_faq
---

 


## 一、前提条件


 -  论坛版本：目前仅支持 Discuz! x3.4；版本持续兼容中，如您有其他版本兼容需求，可在社区反馈；
 -  论坛编码：支持 utf-8 和 gbk 两种编码，请安装对应编码的插件；
 -  服务器运行系统：支持 linux 系统及其衍生系统，如 CentOS，不支持 Windows 系统；
 -  PHP 版本：支持 PHP 版本 5.3 及以上；

## 二、接入前，数据对接失败如何处理？
 

**1、数据对接时提示报错『论坛域名或App secret校验失败』。**

1）确保你已经在"论坛-管理中心-应用-插件"中安装了插件并填写了App Secret和论坛域名；

2）论坛域名后需添加"/"，且无需添加forum.php后缀， 如: https://www.baidu.com/。

3）确保两端填写的App Secret和论坛域名保持一致。

4）请在两端填写最新的App Secret，若你已经开通成功并进入下一个页面，请不要重置你的App Secret；

**2、检查第三方平台授权信息：**
请检查“设置-第三方服务”中是否有授权除“百度小社区平台”之外的其他第三方平台，若有，请取消其授权。

**3、检查插件是否安装成功：**
若放置插件目录到服务器处理完后，在Discuz!论坛管理中心未发现"百度小程序" 安装选项，原因为<百度小程序>插件目录未赋予777权限。请进入服务器，进入"论坛目录/upload/source/plugin"，执行以下命令：

```
chmod -R 777 baidusm_smartprogram
```

**4、检查是否新建数据表：**
用数据库管理员账号进入你的论坛数据库，查找数据库中是否有两个数据表(注意：请注意自己Discuz!论坛的数据库表前缀，换成自己的前缀即可，比如前缀是pre_): pre_swan_app_config 、 pre_login_token、pre_bind_bd2dz、pre_forum_user_map和pre_forum_thread_score；详细可以参考插件包下面的install.php中的SQL语句；如果没有，可以使用两种方法建表；

*  第一种：最简单的方式卸载插件包，再下载最新插件包重新安装即可；
*  第二种：请打开SQL手动建表窗口，输入以下语句：

1）如果是你utf-8编码的论坛，语句为：


```
CREATE TABLE IF NOT EXISTS `pre_swan_app_config` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ad_config` text NOT NULL,
  `is_effect` tinyint(1) NOT NULL DEFAULT '1',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `pre_login_token` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `uid` mediumint(8) unsigned NOT NULL,
  `username` char(15)  NOT NULL,
  `token` varchar(500)  NOT NULL,
  `is_effect` tinyint(1) NOT NULL DEFAULT '1',
  `expire_time` int(10) unsigned NOT NULL,
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `pre_bind_bd2dz` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增字段',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT 'discuz论坛昵称',
  `uid` bigint(20) NOT NULL DEFAULT '0' COMMENT 'discuz账号ID',
  `groupid` bigint(20) NOT NULL DEFAULT '0' COMMENT 'discuz用户组ID',
  `bd_account` varchar(2048) NOT NULL DEFAULT '' COMMENT '百度账号',
  `is_bind` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否绑定，0-未绑定，1-已绑定',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  `bind_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '绑定时刻Unix时间戳',
  `unbind_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '解绑时刻Unix时间戳',
  PRIMARY KEY (`id`),
  KEY `uid_index` (`uid`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `pre_forum_user_map` (
  `fid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `source_id` mediumint(8) NOT NULL DEFAULT '0' COMMENT 'uid或groupid',
  `source_type` tinyint(4) NOT NULL DEFAULT '0'COMMENT '1-用户uid，2-groupid',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`source_id`,`source_type`, `fid`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `pre_forum_thread_score` (
  `tid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `fid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `score` float(5,3) NOT NULL DEFAULT '0' COMMENT '分数权重',
  `hot_score` float(5,3) NOT NULL DEFAULT '0' COMMENT '热度分数',
  `time_score` float(5,3) NOT NULL DEFAULT '0' COMMENT '时间分数',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`tid`),
  KEY `idx_fid` (`fid`)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

```
2）如果是你gbk编码的论坛，语句为：

```
CREATE TABLE IF NOT EXISTS `pre_swan_app_config` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ad_config` text NOT NULL,
  `is_effect` tinyint(1) NOT NULL DEFAULT '1',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
  ) ENGINE=MyISAM DEFAULT CHARSET=gbk;
  
CREATE TABLE IF NOT EXISTS `pre_login_token` (
`id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
`uid` mediumint(8) unsigned NOT NULL,
`username` char(15)  NOT NULL,
`token` varchar(500)  NOT NULL,
`is_effect` tinyint(1) NOT NULL DEFAULT '1',
`expire_time` int(10) unsigned NOT NULL,
`update_time` int(10) unsigned NOT NULL DEFAULT '0',
`create_time` int(10) unsigned NOT NULL DEFAULT '0',
PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

CREATE TABLE IF NOT EXISTS `pre_bind_bd2dz` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增字段',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT 'discuz论坛昵称',
  `uid` bigint(20) NOT NULL DEFAULT '0' COMMENT 'discuz账号ID',
  `groupid` bigint(20) NOT NULL DEFAULT '0' COMMENT 'discuz用户组ID',
  `bd_account` varchar(2048) NOT NULL DEFAULT '' COMMENT '百度账号',
  `is_bind` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否绑定，0-未绑定，1-已绑定',
  `is_delete` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否删除，0-未删除，1-已删除',
  `bind_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '绑定时刻Unix时间戳',
  `unbind_time` bigint(20) NOT NULL DEFAULT '0' COMMENT '解绑时刻Unix时间戳',
  PRIMARY KEY (`id`),
  KEY `uid_index` (`uid`)
)ENGINE=MyISAM DEFAULT CHARSET= gbk;

CREATE TABLE IF NOT EXISTS `pre_forum_user_map` (
  `fid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `source_id` mediumint(8) NOT NULL DEFAULT '0' COMMENT 'uid或groupid',
  `source_type` tinyint(4) NOT NULL DEFAULT '0'COMMENT '1-用户uid，2-groupid',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`source_id`,`source_type`, `fid`)
)ENGINE=MyISAM DEFAULT CHARSET=gbk;

CREATE TABLE IF NOT EXISTS `pre_forum_thread_score` (
  `tid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `fid` mediumint(8) unsigned NOT NULL DEFAULT '0',
  `score` float(5,3) NOT NULL DEFAULT '0' COMMENT '分数权重',
  `hot_score` float(5,3) NOT NULL DEFAULT '0' COMMENT '热度分数',
  `time_score` float(5,3) NOT NULL DEFAULT '0' COMMENT '时间分数',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`tid`),
  KEY `idx_fid` (`fid`)
)ENGINE=MyISAM DEFAULT CHARSET=gbk;

```
5、建完表，请清理论坛缓存。

6、完成以上操作后，若仍然数据对接失败：

1）请进入服务器查看业务日志，是否有设置域名和App Secret的日志，如果没有，请检查网络后重新点击Discuz!论坛数据对接页面<确认开通>按钮。日志目录如下:

> Path-to-DiscuzX/upload/data/log/201907_swan.log， 

文件内容如下：
```
<?PHP exit;?> 2019-06-27 12:07:40 220.181.38.113 0 /plugin.php?action=selt&id=baidusm_smartprogram&mod=config&sign=ac789096e51e5b50a2583420455e86f81 
set SECRETKEY =uFCm8VI********fnKAwQSkLTuy

<?PHP exit;?> 2019-06-27 12:07:40 220.181.38.113 0 /plugin.php?action=selt&id=baidusm_smartprogram&mod=config&sign=ac789096e51e5b50a2583420455e86f81 
set DOMAIN =https://www.******.cn
```


2）查看webserver的访问日志和错误日志，把相关日志（访问日志、服务器错误日志、业务日志）及以下信息打包发给百度官方运营。打包文件命名<DZ接入反馈+小程序名称>，打包内容包括：

- 相关日志（日志中密码信息可酌情打码）
- 小程序后台Discuz!论坛数据对接页面截图（需含有填写的信息，可酌情打码）
- 在开通页面打开浏览器开发者工具(Mac快捷键 command+option+i;Windows快捷键F12)，定位到，截图以</discuz/data/discuzUrl?appId=xxxxxx>接口请求返回的内容页面，如图：

![image](https://smartprogram.baidu.com/docs/img/introduction/discuz/18.jpg)


- 论坛插件中心百度小程序插件截图（需含有填写的信息，可酌情打码）；
- 其他信息（个人信息整理成txt文件，命名为README.txt，包含以下内容：小程序Appid、小程序名称、论坛域名、论坛编码、服务器系统类型、PHP版本、小程序管理中心登录账号及密码、QQ号、手机号。另外，插件需打包成zip压缩包文件。）

## 三、接入后


**1、<小手机>上无数据展示**

首先要确保你的Discuz!论坛有帖子内容。若有，请确保Discuz!论坛编码格式、插件的编码格式和服务器编码格式一致，否则，请自行将三端的编码格式设置成一致。

- 小程序论坛首页是配合使用Discuz!原站的计划任务完成的帖子流更新，所以先确保Discuz!管理后台 工具->计划任务 中 名称为百度小程序统计板块与用户的关系定时任(baidusm_smartprogram:cron_save_data.php) 是可用状态。
- 一定要按照插件包的README.md 进行安装。 

## 四、更新流程
 
如需更新Discuz!小程序，一般需要同步更新小程序模版和插件，如果仅更新小程序模版/插件，可能会导致小程序的使用出现问题。

**1、插件更新：**

1）可前往Discuz!插件中心，检查是否有新版本；
2）或者在Discuz!论坛小手机页面，点击右上角的信息设置按钮，通过下载配置文件，用新的插件替换旧的插件，将新的插件重新部署到服务器，即可完成更新操作。

**2、小程序模版包更新**

在Discuz!论坛小手机页面，若检测到新版本，会出现更新栏，点击<立即更新>按钮，即可使用新的小程序模版包，并提交审核，审核通过后即可发布上线，完成小程序模版的更新。

## 五、联系方式

- [百度小程序反馈平台](https://smartprogram.baidu.com/forum/)

