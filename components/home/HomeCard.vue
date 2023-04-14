<template>
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
    <li class="rounded-md relative group">
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="flex items-center border-none px-4 pt-5 sm:px-6 justify-center u-border-gray-200 border-b">
          <img src="https://nuxt.com.cn/assets/home/ux-hybrid-dark.svg" class="h-full rounded-md hidden dark:block" loading="lazy">
          <img src="https://nuxt.com.cn/assets/home/ux-hybrid-light.svg" alt="" class="h-full rounded-md dark:hidden" loading="lazy">
        </div>
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <header class="font-semibold u-text-gray-900 text-xl">随需应变的呈现</header>
            <p class="u-text-gray-500">决定路由级别的呈现策略:SSR, SSG, CSR, ISR, ESR, SWR。 构建任何类型的网站或web应用程序时都要考虑到优化的性能。</p>
          </div>
        </div>
      </div>
    </li>
    <li class="rounded-md relative group">
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="flex items-center border-none px-4 pt-5 sm:px-6 justify-center u-border-gray-200 border-b">
          <img src="https://nuxt.com.cn/assets/home/ux-seo-dark.svg" class="h-full rounded-md hidden dark:block" loading="lazy">
          <img src="https://nuxt.com.cn/assets/home/ux-seo-light.svg" alt="" class="h-full rounded-md dark:hidden" loading="lazy">
        </div>
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <header class="font-semibold u-text-gray-900 text-xl">SEO & Web Vitals</header>
            <p class="u-text-gray-500">通过利用服务器端渲染，ESM格式和优化的图像，Nuxt网站可以被搜索引擎索引，同时为最终用户提供应用程序的感觉。</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>