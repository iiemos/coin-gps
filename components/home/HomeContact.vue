<template>
  <ul class="grid grid-cols-1 gap-8 pt-16 sm:grid-cols-2 lg:grid-cols-3">
    <li class="rounded-md relative group">
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <header class="font-semibold u-text-gray-900 text-xl">
              <Icon name="fa6-brands:twitter" class="h-8 w-8 mr-2 inline-block" />
              在 Twitter 上关注我们
            </header>
            <p class="u-text-gray-500">了解最新消息、发布和即将发生的事件的最佳地点是我们的 Twitter。</p>
          </div>
        </div>
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="inline-flex justify-center gap-2 lg:gap-6">
            <NuxtLink class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2" href="">
              <span class="text-left break-all line-clamp-1">View Twitter</span>
            </NuxtLink>  
          </div>
        </div>
      </div>
    </li>
    <li class="rounded-md relative group">
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <header class="font-semibold u-text-gray-900 text-xl">
              <Icon name="fa6-brands:discord" class="h-8 w-8 mr-2 inline-block" />
              加入 Discord
            </header>
            <p class="u-text-gray-500">与其他用户和团队成员讨论与 项目 相关的一切，提供反馈并寻求支持。</p>
          </div>
        </div>
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="inline-flex justify-center gap-2 lg:gap-6">
            <NuxtLink class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2" href="">
              <span class="text-left break-all line-clamp-1">View Discord</span>
            </NuxtLink>  
          </div>
        </div>
      </div>
    </li>
    <li class="rounded-md relative group">
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <div class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <header class="font-semibold u-text-gray-900 text-xl">
              <Icon name="fa6-brands:telegram" class="h-8 w-8 mr-2 inline-block" />
              加入 Telegram
            </header>
            <p class="u-text-gray-500">我们在 Telegram 上建立了社区，方便用户随时随地获取最新的 Web3 项目动态和交流。欢迎加入我们的 Telegram 群组。</p>
          </div>
        </div>
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="inline-flex justify-center gap-2 lg:gap-6">
            <NuxtLink class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2" href="">
              <span class="text-left break-all line-clamp-1">View Telegram</span>
            </NuxtLink>  
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>