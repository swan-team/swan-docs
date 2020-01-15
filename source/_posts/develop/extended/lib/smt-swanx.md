---
title: swanx
header: develop
nav: extended
sidebar: smt-swanx
---



**解释：** 在小程序开发中，总会遇到多页面需要使用同一数据的情况，swanx是个轻量级数据管理工具，可以帮助开发者解决数据监听，多页面共用数据，子组件轻松获得父组件数据等功能。小程序中使用三方npm包方法，见<a href="https://smartapp.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>。



## 方法参数

 
 
###   createStore方法参数说明：

> 创建store，可多页面共用一个，也可以每个页面独立使用自己的store。

|参数 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|state |Object  |  是  | | 数据状态 |
|fields |Object/Array   | 是  ||需要同步到小程序data上的数据。当类型为Object时，可以自定义挂载到data上的属性名。fields支持制定对象中的子元素，例如: 'a.b'|
|actions|Object/Array|否||修改store状态的动作，当类型为Object时，可以自定义挂载到storeManager上的方法名|


###  返回值 

返回storeManger对象，storeManger对象包括以下方法

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|subscribe|Function | 订阅方法  |
|getState|Function| 获取state值|
|dispatch|Function|更改store上数据状态，并触发有依赖的监听函数|
|unsubscribeAll|Function|清空所有订阅，无参数传入|



### storeManger对象的subscribe方法参数

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|fields|Object/Array | 会变化的数据，默认fields中所有数据变化都会触发回调函数  |
|callback|Function|数据变化时的回调函数|


### storeManger对象的getState方法参数

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|key|string | 要获取数据的key，例如：'a' , 'a.b.c'  |



### storeManger对象的dispatch方法参数 

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|actionName|string | action方法名  |
|data|Object/Array/String | 需要更新的数据  |



 
###  storeBinding方法参数说明

> 在onLoad或者attached时，将创建的store和当前上下文绑定


|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|target|Object | 当前上下文  |
|store|Object | 创建后的store |



###  返回值 

|类型   |说明|
|---- | ---- | ---- | ----|----|
|Function | 清空所有storeBinding  |




 

 
### connect方法参数说明 
> 使用connect装饰过的组件或者页面，可以更方便的使用父级的store，避免逐层传递公用数据。

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|constructor|Object | 页面或组件原型  |
|store|Object | 创建后的store，如果没填则默认使用当前组件的父页面的store|


### 返回值 

|类型   |说明|
|---- | ---- | ---- | ----|----|
|Function | 装饰后的组件或页面原型  |



## 代码示例

<a href="swanide://fragment/5998a5812e9778f63e2c6cca22c479091578403243598" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>


### 扫码体验

<div class='scan-code-container'>
    <img src="https://b.bdstatic.com/miniapp/assets/images/doc_demo/subPackages_extensionsPackage_component_pages_smt-swanx.png" class="demo-qrcode-image" />
    <font color=#777 12px>请使用百度APP扫码</font>
</div>



### 图片示例

<div class="m-doc-custom-examples">
    <div class="m-doc-custom-examples-correct">
        <img src="https://b.bdstatic.com/searchbox/icms/searchbox/img/swan-lib-swanx.png">
    </div> 
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>    
    <div class="m-doc-custom-examples-correct">
        <img src=" ">
    </div>       
</div>

### 安装

```
    npm install @smt-lib/swanx
```

### 代码示例1

```
	// store.js
    import {createStore} from '@smt-lib/swanx';
    export const store = createStore({
        state: {
            a: 0
        },
        fields: ['a'],
        actions: {
            changeA(num) {
                return {
                    ...this.state,
                    a: this.state.a + num
                };
            }
        }
    });

    // a页面
    import { store } from "./store";
    import { storeBinding } from "@smt-lib/swanx";
    Page({
        data: {
            a: 0
        },

        storeBind() {
            this.unbindStore = storeBinding(this, store);
            swan.showToast({
                title: '已绑定',
                icon: 'none'
            });
        },

        myChangeA() {
            store.dispatch('changeA', 1);
            swan.showModal({
                title: 'swanx',
                content: 'data.a=' + this.data.a,
                confirmText: '确定',
                showCancel: false
            });
        },

        destory() {
            if (this.unbindStore) {
                this.unbindStore();
                swan.showToast({
                    title: '已取消绑定',
                    icon: 'none'
                });
            } else {
                swan.showModal({
                    title: 'swanx',
                    content: '请先绑定store',
                    confirmText: '确定',
                    showCancel: false
                });
            }
        },

        unOnload() {
            this.unbindStore && this.unbindStore();
        }
    });
```



### 代码示例2

```
    // store.js
    import { createStore } from "@smt-lib/swanx";
    export const store = createStore({
        state: {
            a: 1,
            b: {
                d: 4,
                e: 5
            },
            c: 3
        },
        fields: ['a', 'b.d'],
        actions: {
            changeA(num) {
                return {
                    ...this.state,
                    a: this.state.a + num
                };
            },
            addD() {
                return {
                    ...this.state,
                    b: {
                        ...this.state.b,
                        d: this.state.b.d + 1
                    }
                };
            }
        }
    });

    // a页面
    import { store } from "./store";
    import { storeBinding } from "@smt-lib/swanx";
    Page({
        data: {},
        onLoad() {
            this.unbindStore = storeBinding(this, store);
            console.log(this.store);
        },

        myChangeA() {
            store.dispatch('changeA', 1);
        },

        unOnload() {
            this.unbindStore();
        }
    });


    // a页面的b组件
    import { connect } from "@smt-lib/swanx";
    const newComponent = connect(Component);
    newComponent({
        properties: {},
        pageLifetimes: {
            attached() {
                console.log(this.data.a);
                store.subscribe(['b.d'], state => {
                    console.log(state.b);
                });
            }
        },
        method: {
            myChangeA() {
                this.store.dispatch('changeA', 1);
            }
        }
    });

```


