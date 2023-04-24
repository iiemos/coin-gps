<template>
  <ul class="grid grid-cols-1 gap-8 pt-16 sm:grid-cols-2 lg:grid-cols-4">
    <li class="rounded-md relative group cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon absolute right-4 top-4 text-gray-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50"
        width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z">
        </path>
      </svg>
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <NuxtLink
        href="/chain/chain-data/public-chain"
        class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <Icon name="icon-park-outline:blockchain" class="h-8 w-8 mr-2 inline-block" />
            <header class="text-5xl font-semibold u-text-gray-900"> 140+ </header>
            <p class="u-text-gray-500 text-lg font-medium">公链项目</p>
          </div>
        </div>
      </NuxtLink>
    </li>
    <li class="rounded-md relative group cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon absolute right-4 top-4 text-gray-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50"
        width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z">
        </path>
      </svg>
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <NuxtLink
        href="/chain/transaction/exchange"
        class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <Icon name="mingcute:bank-line" class="h-8 w-8 mr-2 inline-block" />
            <header class="text-5xl font-semibold u-text-gray-900"> 300+ </header>
            <p class="u-text-gray-500 text-lg font-medium">交易所</p>
          </div>
        </div>
      </NuxtLink>
    </li>
    <li class="rounded-md relative group cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon absolute right-4 top-4 text-gray-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50"
        width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z">
        </path>
      </svg>
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <NuxtLink href="/chain/transaction/dex"
        class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">

        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <Icon name="ri:token-swap-line" class="h-8 w-8 mr-2 inline-block" />
            <header class="text-5xl font-semibold u-text-gray-900"> 350+ </header>
            <p class="u-text-gray-500 text-lg font-medium">去中心化金融</p>
          </div>
        </div>
      </NuxtLink>
    </li>
    <li class="rounded-md relative group cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="icon absolute right-4 top-4 text-gray-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100 z-50"
        width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z">
        </path>
      </svg>
      <div class="hidden gradient-border gradient-border-dark dark:block"></div>
      <div class="dark:hidden gradient-border gradient-border-light"></div>
      <NuxtLink href="/chain/develop/docs"
        class="overflow-hidden sm:rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 hover:ring-0 shadow-none dark:bg-gray-900/50 bg-white hover:bg-white hover:dark:bg-gray-900 h-full w-full flex flex-col justify-between relative">
        <div class="px-4 pb-5 pt-4 sm:p-6">
          <div class="flex flex-col gap-y-4">
            <Icon name="material-symbols:settings-outline" class="h-8 w-8 mr-2 inline-block" />
            <header class="text-5xl font-semibold u-text-gray-900"> 40+ </header>
            <p class="u-text-gray-500 text-lg font-medium">区块链技术</p>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>