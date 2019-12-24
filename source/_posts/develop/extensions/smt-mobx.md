---
title: smt-mobx
header: develop
nav: extensions
sidebar: smt-mobx
---



**解释：** 在小程序开发中，总会遇到多页面需要使用同一数据的情况，从而产生了希望引入mobx、redux等数据状态管理框架的诉求。smt-mobx是小程序使用mobx的连接器，帮助开发者在小程序开发中使用mobx。mobx使用的是4.13.1版本。<a href="https://cn.mobx.js.org/" title="mobx官网" target="_self">mobx官网</a>



小程序中使用三方npm包方法，见<a href="https://smartapp.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>

```
    npm install @smt-lib/mobx
```


**方法**：createStoreManager

说明：在onLoad或者attached时创建storeManager

> 使用顺序：createStoreManager(target, options, throttle)

** `createStoreManager方法`说明 **
**`target`参数说明**： 当前上下文
**`options`参数说明**： 包括observable后的store，fields，actions
**`throttle`参数说明**： 可throttle的函数，默认为swan.nextTick

**options参数说明**：

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|store |Object  |  是  | | observable后的store |
|fields |Object/Array   | 是  ||需要同步到小程序data上的数据。当类型为Object时，可以自定义挂载到data上的属性名|
|actions|Object/Array|否||修改store状态的动作，当类型为Object时，可以自定义挂载到storeManager上的方法名|


**返回值**

说明：返回storeManager对象，storeManager对象包括以下方法

|名称 |类型   |说明|
|---- | ---- | ---- | ----|----|
|destoryAll |Function | 清空所有storeManager  |
|updateImmediately |Function |及时同步store的状态更新到小程序data上|
|actions中的方法|Function|actions中的所有方法，都会挂到storeManager|




#### 代码示例

```
    // store.js
    import { observable, action } from 'mobx';
    export const store = observable({
        // 数据字段
        a: 1,
        b: 2,
        addA: action(function () {
            this.a++;
        }),
        addB: action(function () {
            this.b++;
        })
    });


    // 页面a
    import {createStoreManager} from '@smt-lib/mobx';
    import {store} from './store';
    Page({
        data: {
            // 默认数据
        },
        onLoad () {
            // 将actions上的方法，绑到this.storeManager上
            // 将fields上的数据，链接到this.data上
            this.storeManager = createStoreManager(this, {
                store,
                fields: ['a', 'b'],
                actions: {
                    myAddA: 'addA',
                    myAddB: () => store.addB
                }
            });
        },
        updateNum() {
            this.data.a  // 获取store中的a
            this.storeManager.myAddA();  // 调用store.js中的addA方法
        },
        onUnload() {
            // 在onUnload时需要清空绑定的storeManager
            this.storeManager.destoryAll();
        }
    });
```
