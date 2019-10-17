# 智能小程序文档编写指导&规范
## 如何编写

### 开启本地预览
进入 swan-docs，终端执行 `npm start`;

终端看到`Hexo is running at http://localhost:4000/docs/. Press Ctrl+C to stop.` 提示，启动成功。

访问 http://localhost:4000/docs/introduction/register/ 开始编辑（path与线上一致）。

### 编写
编辑器打开模块，找到你要编辑的文档所在文件夹，修改刷新浏览器即可看到修改。

#### 新增文档
如果是新增文档，去到`source/_data/nav.yml`新增一份配置（nav.yml配置说明见编写规范）。然后到对应的目录下建立一个.md。

## 编写规范
### 导航配置
该配置相当于书的目录。
第一层级为header导航栏（一级导航），第二层级为左侧导航（二级导航），第三层级为左侧导航子导航（h1），第四层级为md页面（h2），第五层级为md页面内锚点（h3）。  
第三层级是可选的，如果不配置text，则第三层级不显示。  

nav.yml 例子如下
```
    -
      link: /design/principle
      text: 设计
      name: design
      nav:
        -
          link: /design/principle
          text: 智能小程序设计指南
          name: book
          sidebar:
            -
                link: /design/principle
                text: 设计原则
                name: principle
            -
                link: /design/specification
                text: 样式规范
                name: specification
            -
                link: /design/component
                text: 组件
                name: component
                sidebar:
                -
                    link: /design/header
                    text: 头部组件
                    name: header
```

## 定制模板
在.md文件中可以引入定制模板按参数替换即可
### 下载模板
```
<div class="m-doc-custom-download">
  <a href="{下载链接左}" class="m-doc-custom-download-left">
    <img src="{图片左}">
    <p>{文案左}</p>
  </a>
  <a href="{链接右}" class="m-doc-custom-download-right">
    <img src="{图片右}">
    <p>{文案右}</p>
  </a>
</div>
```
**参数**
- {链接左} 替换成下载链接
- {链接右} 替换成下载链接
- {图片左} 替换成图片地址
- {图片右} 替换成图片地址
- {文案左} 替换成文案说明
- {文案右} 替换成文案说明

### 双图模板 & 三图模板
```
  <div class="m-doc-custom-img">{待选模板}</div>
  // 待选模板
  <div><img src="{图片}"></div>
```
**参数**
- {图片} 替换成图片地址
- {待选模板} 两图就复制两个待选模板进去，三图就复制三个待选模板进去，将`{图片}`替换要展示图片地址。

### 左图右文模板
```
  <div class="m-doc-custom-text-image"><div>{待选模板}</div><div><img src="{图片}"></div></div>
  // 待选模板1
  <p class="m-doc-custom-text-image-h2">{标题文案}</p>
  // 待选模板2
  <notice>{加粗文案}</notice>
  // 待选模板3
  <p>{普通文案}</p>
  // 待选模板4
  <ul><li>{列表文案}</li><li>{列表文案}</li></ul>
```
### 示例模板
```
  <div class="m-doc-custom-examples">{待选模板}</div>
  // 待选模板
  <div class="{待选样式}">
    <img src="{图片地址}">
    <p class="m-doc-custom-examples-title">{高亮文案}</p>
    <p class="m-doc-custom-examples-text">{解释说明}</p>
  </div>
```
**参数**
- {图片} 替换成图片地址
- {待选模板} 两列就复制两个待选模板进去，三列就复制三个待选模板进去。
- {待选样式} 正确：m-doc-custom-examples-correct，错误：m-doc-custom-examples-error，警告：m-doc-custom-examples-warning
- {高亮文案} 高亮的文案
- {解释说明} 对示例的解释说明

### 控制在不同设备中显示

只在pc端显示添加 `class="ispc"` ，只在百度 App端显示添加 `class="isbox"` ，只在除百度 App外移动端显示添加 `class="ismobile"` ，参考 [设计-重创新](http://localhost:4000/docs/docs/design/principle/innovation/) 实现。  