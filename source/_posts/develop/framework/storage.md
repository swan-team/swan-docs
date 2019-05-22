---
title: 存储
header: develop
nav: framework
sidebar: storage
---

每个百度智能小程序都可以有自己的本地缓存，可以通过如下方法操作:


<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorage/">swan.setStorage</a>/<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#setStorageSync/">swan.setStorageSync</a>
<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorage/">swan.getStorage</a>/<a href="https://smartprogram.baidu.com/docs/develop/api/storage_save/#getStorageSync/">swan.getStorageSync</a>
<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#clearStorage/">swan.clearStorage</a>/<a href="">swan.clearStorageSync</a>
<a href="">swan.removeStorage</a>/<a href="https://smartprogram.baidu.com/docs/develop/api/storage_remove/#clearStorageSync/">swan.removeStorageSync</a>


通过以上方法可对本地缓存进行读写和清理。

**说明**：
* 同一个百度用户，同一个小程序 `storage` 上限为 10MB。
* `storage` 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据。
