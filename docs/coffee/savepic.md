---
sidebar_position: 1
---

# Savepic

从八六继承而来的插件之一，但是用 nonebot2 重写了

## savepic

保存图片，用法如下：

/savepic name pic [-d] [-g] [-ac]

name是pic要保存在图库中的名字，如果不是以 .png/.jpg/.gif 结尾，则自动添加 .jpg 后缀。该字段对应作用域唯一

-d 选项是把存图变成删图，删除指定名字的图片，例如：/savepic -d 呵呵.龙图.jpg

-ac 选项是忽视存图时候机器人提示有相似图片。

-g 选项是把作用域变成全局，需要权限。


## listpic

列出符合条件的图片名字，每页10张。

/listpic [regexp] [\page num]

regexp 是要匹配的正则表达式

\page 是翻页，从0数起，具体示例如下：

/listpic 哭.*gif\page2

匹配图片名字符合 哭.*gif 条件的（例如“我哭死.capoo.gif”“哭晕.kemo.gif”）

并且返回第3页的结果

## countpic

计数满足条件的图片数量。

/countpic [regexp]

regexp 是要匹配的正则表达式

## repic

随机图片（正则版）。

/repic [regexp]

regexp 是要匹配的正则表达式，随机抽取一张名字符合regexp表达式的图片发送。

## randpic

随机图片，用法如下：

/randpic [name]

其中，name是可选项，匹配图库中名字含有name的图片，并随机抽取一张返回。
name是大小写不敏感的。

