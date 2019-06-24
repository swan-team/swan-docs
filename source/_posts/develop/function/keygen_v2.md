---
title: 密钥生成
header: develop
nav: function
sidebar: keygen_v2
---

##  RSA公私钥生成 

**生成方式**：使用OpenSSL命令生成。

首先进入OpenSSL工具，再输入以下命令：

```
OpenSSL> genrsa -out rsa_private_key.pem   1024  #生成私钥
OpenSSL> pkcs8 -topk8 -inform PEM -in rsa_private_key.pem -outform PEM -nocrypt -out rsa_private_key_pkcs8.pem #开发者需要将私钥转换成PKCS8格式
OpenSSL> rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem #生成公钥
OpenSSL> exit #退出OpenSSL程序
```

经过以上步骤，开发者可以在当前文件夹中（OpenSSL运行文件夹），看到rsa_private_key.pem（RSA私钥）. rsa_private_key_pkcs8.pem（pkcs8格式RSA私钥）和rsa_public_key.pem（对应RSA公钥）3个文件。开发者将私钥保留，将公钥提交给百度电商开放平台，用于验证签名。

>对于使用Java的开发者，将pkcs8在console中输出的私钥去除头尾. 换行和空格，作为开发者私钥，对于.NET和PHP的开发者来说，无需进行去除头尾. 换行和空格命令行操作。

* 标准的私钥文件示例（PHP. .NET使用）：

```
-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQCzrQWntOKChNlF9B1l+21rHjALLhUlLgXtvsGFNL3X5KdxUM8P
IrXog0tNXiuW8XPoP3o25y/gKNWyUfzyRD/0Eu4NvHH4IzMAte9adj2prq3niDho
CNKf9KsyHYTxvsu3Sw66ejQqKobT74SSZ9EHm1UF7n64muso9ofd+RPFIQIDAQAB
AoGBAJ30+ya/p+5Uemq8PGgejMgCBvydK6u+9SlYbOr9PfShqO6+uvm0azWYz0ea
BToy1NIVlAzWW8l2PMACwhv+EjW4oHe++6UIvAPrWVBnPlPlpaTx+Z/QVdm0GWjm
2Jnd1CToB2jeLDfGm9w387BvpVCVeLz9wdvNIRnmOaAoD21BAkEA19DHseFLeT4z
hNlYXg4Vz9tUhXFm7RL6fTXbUFI8WYpUK7PyCYTirjAuU8jbh5rCpf8MOolH8C5Z
9sthM5FWyQJBANUhlPlpjR6LH7lkQ7Oatqp4JpZioaPdo2xGK0vTOT5k9hnpAjRr
hPNRZ5ORIM+qkkblOHHFr4RtjbU2DLIIL5kCQAjk/OXy4BZuHtdx0beGoxV+95vM
Ua6hops4dgJ4cS5Lii6G6wnDZUhCihY/5/RNx4np2gorkEBw2JpYRXhHnCkCQHsv
cMKDflwz/z8RM4xAlOmMjokHMvPaa9Vt7SJjUEe+5Ptu0KZpqqtT1rDVBgjhRrCR
VgF0SBEbnPcq6UWRM6kCQQCuPWrK7tZ5fWVzYHlqxWVppAyHfIr02RBDhkHw3rpN
yOcDC2DOMNnqMtAEO0MB+lnE2LVKEx2psXhsCWe66IGv
-----END RSA PRIVATE KEY-----
```

* PKCS8处理后的私钥文件示例：

```
-----BEGIN PRIVATE KEY-----
MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALOtBae04oKE2UX0
HWX7bWseMAsuFSUuBe2+wYU0vdfkp3FQzw8iteiDS01eK5bxc+g/ejbnL+Ao1bJR
/PJEP/QS7g28cfgjMwC171p2PamureeIOGgI0p/0qzIdhPG+y7dLDrp6NCoqhtPv
hJJn0QebVQXufria6yj2h935E8UhAgMBAAECgYEAnfT7Jr+n7lR6arw8aB6MyAIG
/J0rq771KVhs6v099KGo7r66+bRrNZjPR5oFOjLU0hWUDNZbyXY8wALCG/4SNbig
d777pQi8A+tZUGc+U+WlpPH5n9BV2bQZaObYmd3UJOgHaN4sN8ab3DfzsG+lUJV4
vP3B280hGeY5oCgPbUECQQDX0Mex4Ut5PjOE2VheDhXP21SFcWbtEvp9NdtQUjxZ
ilQrs/IJhOKuMC5TyNuHmsKl/ww6iUfwLln2y2EzkVbJAkEA1SGU+WmNHosfuWRD
s5q2qngmlmKho92jbEYrS9M5PmT2GekCNGuE81Fnk5Egz6qSRuU4ccWvhG2NtTYM
sggvmQJACOT85fLgFm4e13HRt4ajFX73m8xRrqGimzh2AnhxLkuKLobrCcNlSEKK
Fj/n9E3HienaCiuQQHDYmlhFeEecKQJAey9wwoN+XDP/PxEzjECU6YyOiQcy89pr
1W3tImNQR77k+27Qpmmqq1PWsNUGCOFGsJFWAXRIERuc9yrpRZEzqQJBAK49asru
1nl9ZXNgeWrFZWmkDId8ivTZEEOGQfDeuk3I5wMLYM4w2eoy0AQ7QwH6WcTYtUoT
HamxeGwJZ7roga8=
-----END PRIVATE KEY-----
```


* 标准的公钥文件示例（PHP. .NET使用）：

```
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCzrQWntOKChNlF9B1l+21rHjAL
LhUlLgXtvsGFNL3X5KdxUM8PIrXog0tNXiuW8XPoP3o25y/gKNWyUfzyRD/0Eu4N
vHH4IzMAte9adj2prq3niDhoCNKf9KsyHYTxvsu3Sw66ejQqKobT74SSZ9EHm1UF
7n64muso9ofd+RPFIQIDAQAB
-----END PUBLIC KEY-----
```