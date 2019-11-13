---
title: 命令行工具
header: develop
nav: devtools
sidebar: commandtool
---

## 安装与更新

> [npm工具包下载地址](https://www.npmjs.com/package/swan-toolkit)

### 安装

```shell
npm i swan-toolkit -g
```

- 环境依赖：[Node.js](https://nodejs.org)
- 亦可局部安装，通过`npx`或`node_modules/.bin/swan`执行。
- 本工具跨平台，可以部署在windows/Mac/Linux，可用于产品集成流水线部署。
- （全局）安装后即可使用全局shell命令`swan`。

### 更新

当该npm包有更新时，将会在使用过程中以命令行输出形式提示，建议请按照提示使用安装命令更新npm包；另为了不干扰集成流水线功能，更新提示不会在使用`--json`参数时展示，对于此种情况建议定期检查并手动更新。

## 功能

> * 下文提到的登录密钥，因为涉及到个人账户的身份认证，在用于公共机器构建流水线时，建议使用独立开发账号的登录密钥，并做好用户隔离和安全保护，定期修改账户密码。
> * 登录密钥获取方式：在百度智能小程序开发者工具（版本高于2.4.1）中登录后，可通过"菜单-关于-复制登录密钥"获取。

### 预览

```shell
swan preview --project-path /path/to/your/project --token THE_TOKEN_WITH_PREVIEW_AUTHORIZATION
```
**输入参数**

|参数名|必填|说明|
|--|--|--|
| `-p, --project-path`|必填|小程序项目源码路径，可为相对路径或绝对路径。|
|`--token`|必填|有该小程序发布权限的登录密钥。|
|`--base64`|选填|输出base64格式的预览二维码图片。|
|`--json`|选填|只以json格式输出最终结果，推荐在集成构建中使用。|
|`-V, --verbose`|选填|输出日志|

**输出**
- 预览二维码、bundle_id
- exit code非0时，表示过程存在异常，请根据输出报错日志调查原因。

### web化预览

```shell
swan web-preview --project-path /path/to/your/project --token THE_TOKEN_WITH_PREVIEW_AUTHORIZATION
```
**输入参数**

|参数名|必填|说明|
|--|--|--|
|`-p, --project-path` |必填|小程序项目源码路径，可为相对路径或绝对路径。|
|`--token`|必填|有该小程序发布权限的登录密钥。|
|`--base64`|选填| 输出base64格式的预览二维码图片。|
|`--json` |选填|只以json格式输出最终结果，推荐在集成构建中使用。|
|`-V, --verbose`|选填| 输出日志|

**输出**

- 预览二维码
- exit code非0时，表示过程存在异常，请根据输出报错日志调查原因。

### 发布

```shell
swan upload --project-path /path/to/your/project --token THE_TOKEN_WITH_PREVIEW_AUTHORIZATION --release-version 1.0.0.0 --desc description
```
**输入参数**

|参数名|必填|说明|
|--|--|--|
|`-p, --project-path`|必填| 小程序项目源码路径，可为相对路径或绝对路径。|
|`--token`|必填|有该小程序发布权限的登录密钥。|
| `--release-version`|必填|发布版本号|
|`-d, --desc`|选填|版本描述|
|`-V, --verbose`|选填| 输出日志|

**输出**
- 发布成功提示
- exit code非0时，表示过程存在异常，请根据输出报错日志调查原因。

## 反馈与建议
如果在使用中遇到问题，或有改进建议，可以在[智能小程序开发者社区](https://smartprogram.baidu.com/forum/)中发帖向我们反馈，反馈时请注意以下几点：
- 反馈前请使用`swan version`获取基本版本信息，并在反馈内容中标明。
- "问题类型"请选择“开发者工具”，并在反馈内容中标明"cli命令行工具"。

您的反馈将有助于我们完善产品。
