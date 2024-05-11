# Savepic

从八六继承而来的插件之一，但是用 nonebot2 重写了

### countpic

计数满足条件的图片数量。

> /countpic [regexp]

regexp 是要匹配的正则表达式

### listpic

列出符合条件的图片名字，每页10张。

> /listpic [regexp] [\page num]

regexp 是要匹配的正则表达式

\page 是翻页，从1数起

#### 示例
```
/listpic 哭.*gif\page2
```

匹配图片名字符合 哭.*gif 条件的（例如“我哭死.capoo.gif”“哭晕.kemo.gif”）
并且返回第2页的结果


### mvpic

修改图片名字，支持标志压缩。

> /mvpic [sscope] [dscope] [sname] [dname]

| 标识 | 默认值 | 含义 |
| :-: | :-: | :-: |
| sscope | -l | 源图片的所在位置 |
| dscope | 与 sscope 相同 | 要修改到的目标位置 |
| sname | 不能缺省 | 原来的名字 |
| dname | 与 sname 相同 | 目标名字 |

其中，-l 表示本地（群）图，而 -g 表示全局图（要权限）

#### 示例
```
/mvpic -g sad.cappo sad.capoo
```

在全局图中重命名 sad.cappo 为 sad.capoo

```
/mvpic -lg sad.capoo
```

新增的标志压缩支持，-lg 等效于 -l -g

```
/mvpic -l -g sad.capoo
```
把 sad.capoo 从（当前）群的图改为全局的。

```
/mvpic sad sdd
```
把当前群中的 sad 图重命名为 sdd。


### randpic

随机图片，用法如下：

> /randpic [name]

其中，name是可选项，匹配图库中名字含有name的图片，并随机抽取一张返回。
name是大小写不敏感的。


### repic

随机图片（正则版）。

> /repic [regexp]

regexp 是要匹配的正则表达式，随机抽取一张名字符合regexp表达式的图片发送。


### savepic

保存图片，用法如下：

> /savepic name pic [-d] [-g] [-ac]

name 是 pic 要保存在图库中的名字，如果不是以 .png/.jpg/.gif 结尾，则自动添加 .jpg 后缀。

名字不能和其他图片名字相同。而每个群的群图名字并不通用。
例如，A群和B群都能自己的“草.jpg”。

| 选项 | 作用 | 权限 |
| :-: | :-: | :-: |
| d | 把存图变成删图 | 管理员 |
| g | 把作用域变成全局 | Fran/99/Yan |
| ac | 忽略相似图片 | 群员 |

#### 示例
```
/savepic 好
```
把图片存为“好.jpg”，“.jpg”是自动添加的。

```
/savepic -d 好
```
删除群图中的“好.jpg”。
