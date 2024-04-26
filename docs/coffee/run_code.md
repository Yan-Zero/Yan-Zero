---
sidebar_position: 2
---

# 运行代码

各种沙盒中运行代码。

## Mathematicas

[Mathematica](https://www.wolfram.com/mathematica/) 以其卓越的技术和简易实用广受赞誉，提供了单一整合、持续扩展的系统，涵盖了技术计算的广度和深度—并可以经由任何网页浏览器在云端使用或在所有现代桌面系统的本机上操作。
(From Wolfram Index)

### mma

> /mma [Expr]

在 Tio.Run 的沙盒上运行 Mathematicas 代码，未联网所以无法使用 Wolfram Alpha。

#### 示例
```
/mma Solve[x^2 + x + 1 == -10, {x}]
```

求解如上的方程。

### mma2tex

> /mma2tex

在执行完 mma 的指令后，可以使用 /mma2tex 显示输出结果。（如果 mma 的标记难以阅读的话）

## Python 

[Python](https://www.python.org/) 由荷兰国家数学与计算机科学研究中心的吉多·范罗苏姆于 1990 年代初设计，作为一门叫做ABC语言的替代品。[Python](https://www.python.org/) 提供了高效的高级数据结构，还能简单有效地面向对象编程。[Python](https://www.python.org/) 语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言，随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。
(From 百度百科)

### py

> /py [Code]

执行代码，也是运行在 Tio 沙盒上，但是可联网，python 版本是 3.6。

#### 示例
```
/py
import random
print(random.randint(1,10))
```
