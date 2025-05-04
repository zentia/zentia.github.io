---
title: 渲染依赖图
description: 一种即时模式API，可将要编译和执行的渲染命令记录到图数据结构中。
weight: 5
image: ue5-hero.png
categories:
    - 图形编程
---
渲染依赖图（Render Dependency Graph），也称为渲染图或RDG，是一种即时模式应哟个程序编程接口（API），它将要编译和执行的渲染命令记录到图数据结构中。RDG通过自动化易出错的操作来简化代码，并遍历依赖图以优化内存使用并在CPU和GPU上进行渲染通道。

