---
title: 接入百度收银台常见问题
layout: gamedoc
categoryName: tutorials
topic: faq
priority: 11-01
---
1. 调起百度收银台的全参数大小写敏感；
2. tpOrderId 不能重复；
3. totalAmount 以‘分’为单位；
4. rsaSign 是对 appKey+dealId+tpOrderId+totalAmount 四个参数加密签名；[签名与验签文档](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_2_base/sign_v2.md)

5. [通知支付状态](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/standard_interface/push_notice.md)回调中返回的 rsaSign 要用**平台公钥**进行全参数验签（不要和之前填写在平台**设置中心**的开发者公钥搞混），在电商平台我的服务->操作->查看->开发者信息中查看；
![](/img/game/tutorials/rasSign.jpg)

6. 在电商平台订单查询长时间没有支付结果，请检查[通知支付状态](https://dianshang.baidu.com/platform/doclist/index.html#!/doc/nuomiplus_1_guide/mini_program_cashier/standard_interface/push_notice.md)给电商平台的返回值是否正确。
