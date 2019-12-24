---
title: smt-swanx
header: develop
nav: extensions
sidebar: smt-swanx
---



**解释：** 在小程序开发中，总会遇到多页面需要使用同一数据的情况，swanx是个轻量级数据管理工具，可以帮助开发者解决数据监听，多页面共用数据，子组件轻松获得父组件数据等功能。



小程序中使用三方npm包方法，见<a href="https://smartapp.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>

```
    npm install @smt-lib/swanx
```


**方法** createStore

说明：创建store，可多页面共用一个，也可以每个页面独立使用自己的store。

|属性名 |类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|state |Object  |  是  | | 数据状态 |
|fields |Object/Array   | 是  ||需要同步到小程序data上的数据。当类型为Object时，可以自定义挂载到data上的属性名。fields支持制定对象中的子元素，例如: 'a.b'|
|actions|Object/Array|否||修改store状态的动作，当类型为Object时，可以自定义挂载到storeManager上的方法名|


**返回值**

说明：返回storeManger对象，storeManger对象包括以下方法

|名称|类型   |说明|
|---- | ---- | ---- | ----|----|
|subscribe|Function | 订阅方法  |
|getState|Function| 获取state值|
|dispatch|Function|更改store上数据状态，并触发有依赖的监听函数|
|unsubscribeAll|Function|清空所有订阅，无参数传入|



> 使用顺序：subscribe(fields, callback)

** `subscribe方法`说明 **
**`fields`参数说明**： 会变化的数据，默认fields中所有数据变化都会触发回调函数。
**`callback`参数说明**： 数据变化时的回调函数。


> getState(key)

** `getState方法`说明 **
**`key`参数说明**： 要获取数据的key，例如：'a' , 'a.b.c'。


> 使用顺序：dispatch(actionName, data)

** `dispatch方法`说明 **
**`actionName`参数说明**： action方法名。
**`data`参数说明**： 需要更新的数据。



**方法** storeBinding

说明：在onLoad或者attached时，将创建的store和当前上下文绑定


> 使用顺序：storeBinding(target, store)

** `storeBinding方法`说明 **
**`target`参数说明**： 当前上下文。
**`store`参数说明**： 创建后的store。



**返回值**

|类型   |说明|
|---- | ---- | ---- | ----|----|
|Function | 清空所有storeBinding  |



#### 代码示例1

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
```



**方法** connect

说明：使用connect装饰过的组件或者页面，可以更方便的使用父级的store，避免逐层传递公用数据。


> 使用顺序：connect(constructor, store)

** `connect方法`说明 **
**`constructor`参数说明**： 页面或组件原型。
**`store`参数说明**： 创建后的store，如果没填则默认使用当前组件的父页面的store。


**返回值**

|类型   |说明|
|---- | ---- | ---- | ----|----|
|Function | 装饰后的组件或页面原型  |



#### 代码示例2

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


