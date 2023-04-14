<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  cta: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  secondary: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  },
  title: {
    type: String,
    required: false,
    default: ''
  },
  titleText: {
    type: String,
    required: false,
    default: ''
  },
  desc: {
    type: String,
    required: false,
    default: ''
  },
  descStrong: {
    type: String,
    required: false,
    default: ''
  },
})
</script>
<template>
  <div class="coin_home">
    <div class="mx-auto  lg: px-4 max-w-7xl flex px-4 pt-24 pb-4 sm:pb-8 md:pb-12 lg:pb-20 transition duration-700 relative opacity-100 translate-y-0 flex-col">
      <div class="flex flex-col justify-center">
        <h2 class="block_title max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">
          提供优化的
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
            用户体验
          </span>
        </h2>
        <p class="text-lg xl:text-xl 2xl:text-2xl u-text-gray-500 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
          用户如何与你的网站互动和体验你的网站将决定你的影响力。实用性、易用性和效率是关键。
          <strong>
            Nuxt内置了一组特性，使这成为可能
          </strong>
        </p>
      </div>
      <ul class="grid grid-cols-1 gap-8 pt-16 sm:grid-cols-2 lg:grid-cols-3">
        <li class="rounded-md relative group">
          <div class="hidden gradient-border gradient-border-dark dark:block"></div>
          <div class="dark:hidden gradient-border gradient-border-light"></div>
          <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
            <div class="flex items-center border-none px-4 pt-5 sm:px-6 justify-center u-border-gray-200 border-b">
              <img src="https://nuxt.com.cn/assets/home/ux-fast-dark.svg" class="h-full rounded-md hidden dark:block" loading="lazy">
              <img src="https://nuxt.com.cn/assets/home/ux-fast-light.svg" alt="" class="h-full rounded-md dark:hidden" loading="lazy">
            </div>
            <div class="px-4 pb-5 pt-4 sm:p-6">
              <div class="flex flex-col gap-y-4">
                <header class="font-semibold u-text-gray-900 text-xl">速度与激情</header>
                <p class="u-text-gray-500">优化了代码拆分、摇树、优化的冷启动、链接预取、有效负载提取，仅举几个例子。默认是快速，这样你就可以专注于构建。</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="ts" scoped>
css({
})
</style>
