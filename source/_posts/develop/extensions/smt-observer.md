---
title: smt-observer
header: develop
nav: extensions
sidebar: smt-observer
---



**解释：** 在小程序开发中，总会遇到事件监听派发的需求，smt-observer是一个订阅发布器。



小程序中使用三方npm包方法，见<a href="https://smartprogram.baidu.com/docs/develop/framework/custom-component_trdparty/" target="_self" title="npm使用说明">npm使用说明</a>

```
    npm install @smt-lib/observer
```

实例化之后，获得eventsEmitter对象，eventsEmitter对象包含以下方法。

```
    const eventsEmitter = new EventsEmitter();
```


> 使用顺序：fireMessage(message)

说明：派发事件

**`fireMessage方法`说明 **
**`message`参数说明**： 发布的内容和监听的类型



#### 代码示例1

```
    // 订阅发布常规用法
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    eventsEmitter.onMessage('addA', message => {
        a += message.num;
    });

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    console.log(a); // 5

```

#### 代码示例2

```
    // 先发布后订阅
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitter.onMessage('addA', message => {
        a += message.num;
    }, {
        listenPreviousEvent: true
    });

    console.log(a); // 10

```

> 使用顺序：onMessage(type, handler, options)

说明：监听事件

**`onMessage方法`说明 **
**`type`参数说明**： 监听类型，如果是*则fireMessage任意类型时，都会执行当前的回调。type为数组时，代表同时监听多个类型
**`handler`参数说明**： 回调函数
**`options`参数说明**： 监听器配置信息


**options参数**

|参数|类型  |必填 | 默认值 |说明|
|---- | ---- | ---- | ----|----|
|once|boolean|否||回调是否只执行一次|
|listenPreviousEvent |boolean|否||是否先发布后监听|


#### 代码示例3

```
    // 监听多个type变化
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    eventsEmitter.onMessage(['addA', 'addB'], message => {
        a += message.num;
    });

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitter.fireMessage({
        type: 'addB',
        num: 5
    });

    console.log(a); // 10

```

#### 代码示例4

```
	// 监听类型为*时，执行任何fireMessage都会调用回调
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    let b = 0;
    eventsEmitter.onMessage('addA', message => {
        a += message.num;
    });

    eventsEmitter.onMessage('*', message => {
        b += message.num;
    });

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    console.log(b); // 5

```

> 使用顺序：delHandler(type, handler)

说明：删除事件监听

**`delHandler方法`说明 **
**`type`参数说明**： 监听类型，如果传入*则清除所有监听
**`handler`参数说明**： 希望删除的回调函数



#### 代码示例5

```
	// 删除某个type下的具体回调
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    let b = 0;
    const addA = message => {
        a += message.num;
    };
    const addB = message => {
        b += message.num;
    };

    eventsEmitter.onMessage('addA', addA);
    eventsEmitter.onMessage('addA', addB);

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitter.delHandler('addA', addA);

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    console.log(a); // 5
    console.log(b); // 10

```

#### 代码示例6

```
    // 删除所有回调
    const eventsEmitter = new EventsEmitter();
    let a = 0;
    const addA = message => {
        a += message.num;
    };

    eventsEmitter.onMessage('addA', addA);
    eventsEmitter.onMessage('addB', addA);

    eventsEmitter.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitter.delHandler('*');

    eventsEmitter.fireMessage({
        type: 'addB',
        num: 5
    });

    console.log(a); // 5

```


> 静态方法：merge(eventsEmitter)

说明：融合多条事件流成为一条

**`merge方法`说明 **
**`eventsEmitter`参数说明**：实例化的eventsEmitter对象


#### 代码示例7

```
	// 融合多条事件流成为一条
    const eventsEmitterA = new EventsEmitter();
    const eventsEmitterB = new EventsEmitter();
    const mergedEventsEmitter = EventsEmitter.merge(eventsEmitterA, eventsEmitterB);
    let a = 0;

    mergedEventsEmitter.onMessage(['addA', 'addB'], message => {
        a += message.num;
    });

    eventsEmitterA.fireMessage({
        type: 'addA',
        num: 5
    });

    eventsEmitterB.fireMessage({
        type: 'addB',
        num: 5
    });

    console.log(a); // 10

```

