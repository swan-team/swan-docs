---
title: 振动
header: develop
nav: api
sidebar: device_vibrate
---


vibrateLong
---
**解释：** 使手机发生较长时间的振动（400ms）
**参数：** Object

**Object参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调|
|fail  |  Function  |  否 |  接口调用失败的回调函数|
|complete  |  Function |   否 |  接口调用结束的回调函数（调用成功、失败都会执行）|

vibrateShort
---
**解释：**使手机发生较短时间的振动（15ms）

**参数：**Object

**Object 参数说明：**

|参数名 |类型  |必填  |说明|
|---- | ---- | ---- |---- |
|success| Function  |  否  | 接口调用成功的回调函数|
|fail  |  Function  |  否  | 接口调用失败的回调函数|
|complete  |  Function  |  否 |  接口调用结束的回调函数（调用成功、失败都会执行）|
