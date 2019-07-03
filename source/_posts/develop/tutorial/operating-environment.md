---
title: JavaScript 支持情况
header: develop
nav: tutorial
sidebar: operating-environment
---

智能小程序基础库内置了 polyfill 的解决方案，已经支持了绝大部分的 ES6 API。具体如下：
* es7.array.includes
* es6.array.find-index
* es6.array.from
* es6.array.find
* es6.array.fill
* es6.array.copy-within
* es6.object.get-own-property-descriptor
* es7.object.entries
* es6.object.assign
* es7.object.values
* es6.math.asinh
* es6.math.atanh
* es6.math.cbrt
* es6.math.expm1
* es6.math.clz32
* es6.math.cosh
* es6.math.fround
* es6.math.hypot
* es6.math.log1p
* es6.math.log2
* es6.math.log10
* es6.math.sign
* es6.math.sinh
* es6.math.tanh
* es6.math.trunc
* es6.string.from-code-point
* es6.string.code-point-at
* es6.string.starts-with
* es6.string.ends-with
* es6.string.includes
* es6.string.repeat
* es7.string.pad-start
* es7.string.pad-end
* es6.regexp.flags
* es6.map
* es6.weak-map
* es6.set
* es6.weak-set
* es6.symbol
* es6.reflect.apply
* es6.reflect.construct
* es6.reflect.define-property
* es6.reflect.delete-property
* es6.reflect.get
* es6.reflect.get-own-property-descriptor
* es6.reflect.get-prototype-of
* es6.reflect.has
* es6.reflect.is-extensible
* es6.reflect.own-keys
* es6.reflect.prevent-extensions
* es6.reflect.set
* es6.reflect.set-prototype-of
* es7.promise.finally
* es6.array.iterato

其他不在列表中说明的新特性，例如 await async等，目前暂不支持。