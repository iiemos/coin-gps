---
title: 'nuxt3 使用aos, 实现页面滑动动画'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'nuxt3 使用aos,实现页面滑动动画'
---

# nuxt3 使用Aos, 实现页面滑动动画

## 安装 Aos
```ts
  yarn add aos@next
```
## plugins 创建 aos.ts
```
  import AOS from 'aos';
  export default defineNuxtPlugin(() => {
    return {
      provide: {
        aos: () => AOS
      }
    }
  })
```

## nuxt.config.ts 引入样式文件
```ts
css:[
  ...,
  'aos/dist/aos.css',
],
```

## 页面中使用

<template>
  <div data-aos="fade-up" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10" ></div>
  <div data-aos="fade-down" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10" ></div>
  <div data-aos="fade-right" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10" ></div>
  <div data-aos="fade-left" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10" ></div>
  <div data-aos="fade-right" class="tw-w-40 tw-h-40 tw-bg-red-400 my-10" ></div>
</template>