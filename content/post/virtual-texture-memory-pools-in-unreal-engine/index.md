---
title: 虚拟纹理内存池
description: 介绍虚拟纹理物理内存池的GPU内存分配。
weight: 1
image: ue5-hero.png
categories:
    - 设计视觉、渲染和图形效果
    - 优化和调试实时渲染项目
    - 虚拟纹理
---
虚拟纹理系统主要有两种GPU内存分配方式：页表内存（Page Table Memory）和物理内存池（Physical Memory Pool）。