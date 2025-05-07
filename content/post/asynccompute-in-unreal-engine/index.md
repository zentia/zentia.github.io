---
title: 异步计算
description: 异步计算（AsyncCompute） 是一种硬件功能，用于交错不同GPU任务并提高工作效率。
weight: 7
image: ue5-hero.png
categories:
    - 设计视觉、渲染和图形效果
    - 图形编程
---
渲染硬件接口（RHI）现支持 Xbox One 的异步计算（AsyncCompute）。此法可运行与渲染异步的 dispatch() 调用，有效利用未使用的 GPU 资源（计算单元（CU）、寄存器和带宽）。异步计算使用单独的上下文，我们通过 RHI 函数同步渲染和计算上下文。Dr PIX 可用于识别从异步计算获益的区域。例如，特定渲染通道中半数 CU 均未使用，这些 CU 则可能被异步计算任务所利用。异步计算存在一些限制：