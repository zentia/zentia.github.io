---
title: GPU转储文件查看器工具
description: 这个多平台命令可以将中间RDG纹理和缓冲转储至磁盘中，用以调查并调试渲染问题。
weight: 5
image: ue5-hero.png
categories:
    - 优化和调试实时渲染项目
---
DumpGPU是一个不受平台限制的控制台命令，能够将中间渲染资源二进制或采集帧转储到磁盘中。转储文件会保存为.json和.bin文件，可以使用轻量级网页浏览器查看。

![](gpu-dump-viewer.png)