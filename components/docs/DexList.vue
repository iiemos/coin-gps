<script setup lang="ts">
import data from '@/data/dex.json'
const source = ref('')
// const { copy } = useClipboard({ source })
// let keys:any = []
// for (var key in data) keys.push(key)
const errorImg = (event:any) => {
  event.target.src = 'https://resources1.interface003.com/web20/img/default/dealer-default.png'
}
</script>
<template>
    <div class="_chain_ctx">
    <h2 class="max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-3xl font-semibold md:text-4xl lg:text-5xl">
      Dex
    </h2>
    <div class="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 xl:grid-cols-3">
      <div class="_chain_item shadow-xl flex flex-row justify-between items-center sm:flex-col sm:justify-start sm:items-start cursor-pointer p-4 rounded-lg" v-for="(item, idx) in data" :key="idx">
        <img class="_chain_item_bg_img absolute top-4 w-20 h-20 sm:w-40 sm:h-40 inset-0 opacity-20 blur-md rounded-full" :src="item.Icon" loading="lazy">
        <icon-link class="_link_icon absolute w-5 h-5 right-4 top-4 z-50 text-gray-500 opacity-0 duration-200 transition-opacity"/>
        <div class="w-20 h-20 sm:w-40 sm:h-40 flex justify-center items-center sm:m-auto">
          <img class="_chain_item_icon w-10 h-10  sm:w-20 sm:h-20 rounded-full m-auto" :src="item.Icon" @error="errorImg"  loading="lazy"/>
        </div>
        <div class="text-right sm:text-left">
          <div class="_chain_item_name font-semibold u-text-gray-700 text-base sm:text-xl truncate">
            {{item.Name}}
          </div>
          <div class="_chain_item_protocols text-sm sm:text-base">Launched: {{item.Launched}}</div>
          <div class="_chain_item_protocols text-sm sm:text-base">Type: {{item.Type}}</div>
          <div class="_chain_item_protocols text-sm sm:text-base">Markets: {{item.Markets}}</div>
        </div>
      </div>
    </div>
    <el-backtop :right="100" :bottom="100" :visibility-height="100">🖕</el-backtop>
  </div>
</template>
<style lang="ts" scoped>
css({
  '._chain_ctx':{
    'font-family': 'var(--font-mono)',
    '._chain_item':{
      'position': 'relative',
      'transition': 'all .2s',
      // 'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'box-shadow': '0 4px 15px 0 rgba(117,219,141,.24)',
      '&:hover': {
        'transform': 'translateY(-5px)',
        '._link_icon': {
          'opacity': 1,
        },
      },
    },
    '._chain_item_bg_img': {
      'filter': 'blur(5px)',
        'left': '1rem',
        'top': '50%',
        'transform': 'translateY(-50%)',
        '@sm':{
          'left': '50%',
          'top': '1rem',
          'transform': 'translateX(-50%)',
        },
      '&::after': {
        'content': '""',
        'display': 'block',
        'background': 'rgba(0,0,0,0.5)',
        'zIndex': 1,
      }
    }
  }
})
</style>