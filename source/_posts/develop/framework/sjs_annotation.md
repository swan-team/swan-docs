---
title: 注释
header: develop
nav: framework
sidebar: sjs_annotation
---


sjs文件中的注释方式与JavaScript一致。

- sjs文件中的代码注释

**代码示例**
<a href="swanide://fragment/7e3ca2da2a2e276f7bee1362e32abae81571218281469" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```js
// pages/utils/sjs

// const NAME = 'sjs';

/**
 * let str = 'swan';
 */
```

- import-sjs 标签中代码注释

**代码示例**
<a href="swanide://fragment/49b3a3d912d60f810dd5e1d76f2a98371571218778225" title="在开发者工具中预览效果" target="_self">在开发者工具中预览效果</a>

```xml
<!-- pages/index/index.swan -->

<import-sjs module="utils">
// const NAME = 'sjs';

/**
 * let str = 'swan';
 */

</import-sjs>
```


上述例子中，所有`SJS`代码均被注释掉了。