---
title: RHI
date: 2023-09-07
description: RHI
tags: 
    - RHI
categories:
    - RHI
---
RHI指的是`Render hardware interface`，作用像Unity里面的DeviceServer，针对DX11，DX12，Opengl等平台抽象出相同的接口，我们能方便的使用相同接口对应不同渲染平台
# RHI.h
主要定义一些硬件平台接口的公共变量
- 硬件支持项，是否支持`PF_FloatRGBA`格式渲染目标，手机平台是否支持`FrameBuffer`拾取，支持体纹理，支持硬件合并渲染等
- 硬件变量，如最大Cube纹理数，引用贴图长宽最大值等
- 常见渲染定义，如`FSamplerStateInitializerRHI`纹理采样，`FRasterizerStateInitializeRHI`栅栏化
# FGlobalShader
全局Shader，简单来说，不和Mesh和Material关联，一般用于后处理，固定画个方块，如处理特效
# DynamicRHI.h
包含FDyamicRHI接口定义，渲染所需求所有接口，创建buffer，创建纹理，设置着色器参数，UAV等
# FMeshDrawingPolicy
整合渲染模型过程，从绑定Shader到调用DrawCall，各个子类对应不同的独立着色器程序
- 初始化，根据需要生成或绑定各个对应的shader
- SetSharedState，设定和Mesh无关的Shader变量。
- SetMeshRenderState，设定和Mesh相关的Shader变量。
- DrawMesh调用DrawCall