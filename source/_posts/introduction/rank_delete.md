---
title: 资源删除功能介绍
header: introduction
nav: book
sidebar: rank_delete
---



### 1.小程序资源删除是什么？ 

开发者可通过资源删除向百度搜索提交需要删除的已索引资源，提交的内容将在百度搜索结果中屏蔽，生效时间在30分钟左右。

### 2.适用于哪些小程序资源？ 

小程序中的死链内容、较为低质的内容、不适合搜索的内容以及不想在百度搜索中展示的内容，都可以通过资源删除提交。

### 3.如何使用资源删除？ 

1. 进入搜索接入-自然搜索，点击资源删除；

    ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/5.png)

2. 点击选择文件，上传需要删除的资源文件；

    ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/2.png)

3. 将需要删除的资源path路径，每⾏一条，使用txt格式，每个文件最多允许1000个path路径，且需小于10MB，可下载查看文件示例；例如：

    ```
        /pages/sampecat/samplefile?id=1
        /pages/sampecat/samplefile?id=2
        /pages/sampecat/samplefile?id=3
        /pages/sampecat/samplefile?id=4
        /pages/sampecat/samplefile?id=5
        /pages/sampecat/samplefile?id=6
        /pages/sampecat/samplefile?id=7
        /pages/sampecat/samplefile?id=8
        /pages/sampecat/samplefile?id=9
        /pages/sampecat/samplefile?id=10
    ```


4. 成功提交文件后按钮将置灰，每天最多可提交一次，可在下方表格中查看处理状态、时间并下载已识别path。

    ![图片](https://b.bdstatic.com/searchbox/icms/searchbox/img/4.png)
