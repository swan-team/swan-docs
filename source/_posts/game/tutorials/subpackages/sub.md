---
title: 如何进行分包加载
layout: gamedoc
categoryName: tutorials
topic: subpackages
priority: 10-01
---


对于游戏逻辑以及资源等等较为丰富的游戏而言，文件的加载时间很大程度上会受到影响。因此，使用分包的方式，可以在进入游戏的时候只加载最必要的那部分包（称为“主包”），在游戏的进行过程中按需加载其他的包（称为“分包”），从而缩短进入游戏前的加载时间。

### 包大小限制

- 单个包（主包或分包）大小不超过 5M
- 所有包的总大小不超过 10M

### 使用方法

分包是通过 `game.json` 配置的，`subpackages` 是一个数组，每一个元素是一个分包，其 `root` 可以指定一个目录或 JavaScript 文件。如果 `root` 是一个目录，则会将 `root` 下的 `index.js` 作为分包的入口文件，目录下的资源将会统一打包。
`game.json` 形如：

```
{
  ...
  "subpackages": [
    {
      "name": "stage1",
      "root": "stage1/"
    }, {
      "name": "stage2",
      "root": "stage2.js"
    }
  ]
  ...
}
```

项目目录形如：

```
├── game.js
├── game.json
├── images
│   ├── a.png
│   ├── b.png
├── stage1
│   └── game.js
│   └── images
│       ├── 1.png
│       ├── 2.png
└── stage2.js
```

没有配置在 `subpackages` 的目录和文件将被打包到主包中。目前不支持将开放数据域目录设置为分包。

### 分包加载

使用 [`swan.loadSubpackage`](/api/subpackages/loadSubpackage/) 下载分包，它会返回一个 [`LoadSubpackageTask`](/api/subpackages/loadSubpackageTask/) 对象，用以获得下载进度。

```js
const loadTask = swan.loadSubpackage({
  name: 'stage1', // 分包名字，对应 game.json 中的 name 字段
  success: function(res) {
    // 分包加载成功后通过 success 回调
  },
  fail: function(res) {
    // 分包加载失败通过 fail 回调
  }
});
loadTask.onProgressUpdate(res => {
  console.log('分包下载进度百分比', res.progress);
  console.log('已经下载的数据长度', res.totalBytesWritten);
  console.log('数据总长度', res.totalBytesExpectedToWrite);
});
```
