---
slug: m7208w-pro
title: Linux 下的 Lenovo M7208W Pro 打印机
date: 2025-10-01
authors: Yan
tags: [linux, printer]
---

# 神秘打印机

时隔多年还是成功完成了高中时候的梦想（？），成功在 Linux 下使用这台打印机。

## Lenovo M7208W Pro

Lenovo M7208W Pro 是联想的黑白激光打印机，早就停产了，反正不推荐入手。官方的[驱动](https://www.lenovoimage.com/index.php/services/servers_drivers?cat_id=0&ProCode=&OS=%E5%85%A8&baseclass=0&key_words=M7208W)只支持 Windows 和 MacOS。

<p align="center">
  <img src="https://p2.lefile.cn/product/adminweb/2020/11/11/LiBJWIbijDzRksB4wL7GQOu0j-1926.jpg"
    alt="Lenovo M7208W Pro" width="400px"
  />
</p>

功能挺全面的，从打印到扫描，再到复印都有。可惜如今在全能扫描王的时代，扫描功能已经不那么重要了。

### 打印机的坑

这玩意支持的打印语言有且仅有 GDI。如果是 PCL 或者 PostScript，那直接通用驱动就行了。因此这也是为什么不推荐入手的原因之一，有这精力折腾，为何不买个支持 PCL 或 PostScript 的打印机呢？

## Linux 下的解决方案

早些年间我是使用 VirtualBox 虚拟机，然后 USB 直通，在 Windows 虚拟机中打印。这样就能使用官方驱动了，堪称完美，除了效率低下。

在 Linux 下，打印机服务是使用 CUPS（Common Unix Printing System）。最开始我尝试了一番兄弟（Brother）打印机的驱动，因为 Lenovo 打印机大多是找的兄弟或者奔图代工，然并卵，都没有成功。

~~遇到困难睡大觉~~

### 先说结论

Lenovo M7268W 和 M7208W Pro 都支持网络打印，也就是 IPP Everywhere 协议。只要打印机和电脑在同一局域网内，就能直接使用 CUPS 的通用驱动打印。开启一下就行了。

#### 开启网络打印

1. 安装打印机驱动，我用的是 Windows。

2. 打开`设置` -> `打印机 WIFI`，开启 `WLAN`，然后选择你的 Wi-Fi 网络，输入密码连接。

3. 重启打印机

于是乎万事大吉，只要打印机和电脑在同一局域网内，就能直接使用 CUPS 的 IPP Everywhere 协议打印。抓包了一下，M7208W Pro 的 IPP 支持的有 PDF、JPEG 和 URF，按照 IPP Everywhere 的规范，理论上来说应该还支持 PWG Raster，没测试过。

#### 不想开网络打印？

按照[这个帖子](https://forum.ubuntu.org.cn/viewtopic.php?t=494336)帖主[幽谷青松](https://forum.ubuntu.org.cn/memberlist.php?mode=viewprofile&u=163898&sid=a2c4a6ffced9524833b0102ed5b617bb)的说法，可以使用`HP-color-laserjet-pro-mfp-m177fw.ppd`这个 PPD 文件。

为什么惠普的 PPD 文件能用？这倒是个好问题。

##### 怎么找到这个 PPD 文件？

理论上来说，CUPS 自带了，如果没有，可以安装 HPLIP：

> apt install hplip

然后就能在 CUPS 的添加打印机界面中找到`HP Color LaserJet Pro MFP M177fw`这个型号，选择它就行了。

### 过程

::TODO::