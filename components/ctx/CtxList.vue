<script setup lang="ts">
import { ref } from 'vue'
import defaultImg from '@/assets/img/default.svg'
const props = defineProps({
  dataList: {
    type: [Array, Object],
    default: [] || {}
  },
  iconClass: {
    type: String,
    default: ''
  },
  blurry: {
    type: Boolean,
    default: true,
    required: false
  }
})
const isShowMore = ref(true) // 是否显示加载更多按钮
const pageSize = 50 // 每页显示的数量
const currentPage = ref(1) // 每页显示的数量
const start = (currentPage.value - 1) * pageSize // 当前页的起始索引
const end = start + pageSize // 当前页的结束索引
const currentList = ref( props.dataList.slice(start, end) )// 当前页需要显示的数据
if(end >= props.dataList.length) isShowMore.value = false
watch(currentPage, () => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  console.log('start',start)
  console.log('end',end)
  const newList = props.dataList.slice(start, end)
  currentList.value = [...currentList.value, ...newList]
  if(end >= props.dataList.length) isShowMore.value = false
})
const getColorClass = (score:any) => {
  return {
    'text-green-500': score > 6,
    'text-amber-500': score <= 6 && score > 4,
    'text-red-500': score <= 4,
  }
}

const dialogVisible = ref(false)
const currentItem: any = ref({})
const changeItem = (itm: any) => {
  currentItem.value = itm
  dialogVisible.value = true
}
const errorImg = (event: any) => {
  event.target.src = defaultImg
}
const loadMore = () => {
  // 加载更多逻辑
  currentPage.value++
}
</script>

<template>
  <div class="list_warp">
    <ul role="list" class="divide-y divide-gray-100 dark:divide-gray-800">
      <li class="_chain_item cursor-pointer flex justify-between gap-x-6 py-5" v-for="(item, idx) in currentList" :key="idx"
        @click="changeItem(item)">
        <div class="flex gap-x-4">
          <icon-link
            class="_link_icon absolute w-5 h-5 right-4 top-4 z-50 text-gray-500 opacity-0 duration-200 transition-opacity" />
          <div class="relative w-20 h-20 flex items-center justify-center">
            <img class="_list_item_bg_img absolute top-4 w-20 h-20 inset-0 opacity-20 blur-md rounded-full"
              :src="item.Icon" loading="lazy">
            <img class="_item_icon h-12 w-12 flex-none rounded-full bg-gray-50" :src="item.Icon" :alt="item.Name"
              @error="errorImg">
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              {{ item.Name }}
              <span v-if="item.CoinName" class=" font-normal text-sm u-text-gray-500 sm:min-h-[20px] mb-4">
                {{ item.CoinName }}
              </span>
            </p>
            <div v-if="item.Type" class="text-sm sm:text-base">
              类型:
              <span v-for="(tItm, idx) in  item.Type" :key="tItm">
                <span v-if="idx <= 3"
                  class="rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider m-1 bg-purple-100 text-purple-500 dark:bg-white/10 dark:text-orange-300 astro-ES6RJE63">{{ tItm }}</span>
              </span>
              <span class="text-purple-500  dark:text-orange-300" v-if="item.Type.length > 3">...</span>
            </div>
            <div v-if="item.Score" class="flex flex-wrap items-center">
              <span class="text-sm">评分</span>
              <ScoreIcon :score="Number(item.Score)"/>
              <span class="text-base font-bold" :class="getColorClass(item.Score)">{{ item.Score }}</span>
            </div>
            <div class="flex flex-wrap">
              <span class="text-xs" v-if="item.Protocols">
                协议: {{ item.Protocols }}
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.Markets">
                <div class="mb-1 text-base">{{ item.Markets }}</div>  
                市场
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.MktShare">
                <div class="mb-1 text-base">{{ item.MktShare }}</div> 
                市场占有率
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.Launched">
                <div class="mb-1 text-base">{{ item.Launched }}</div> 
                启动时间
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.Coins">
                <div class="mb-1 text-base">{{ item.Coins }}</div>  
                币种
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.Liquidity">
                <div class="mb-1 text-base">{{ item.Liquidity }}</div>  
                流动性
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.WeeklyVisits">
                <div class="mb-1 text-base">{{ item.WeeklyVisits }}</div>  
                每周访问次数
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 dark:bg-gray-900 rounded-md text-center" v-if="item.FiatSupported1">
                <div class="mb-1 text-base">{{ item.FiatSupported1 }}</div>  
                法币支持
              </span>
            </div>
            <p class="_item_desc mt-2 text-xs leading-5 text-gray-500 break-words">
              {{ item.Desc }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div v-show="isShowMore" class="flex justify-center mt-4">
      <div class="inline-flex justify-center gap-2 lg:gap-6 cursor-pointer"  @click="loadMore">
        <div class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-base px-4 py-2 relative text-white gradient-border-2 border-gradient-br-gradient-gray-900 hover:border-gradient-br-gradient-black before:absolute before:transition before:duration-200 before:rounded-lg before:opacity-0 hover:before:opacity-75 before:-inset-0.5 before:bg-gradient-to-r before:from-green-400 before:via-teal-400 before:to-teal-600 before:blur-md before:z-[-1] inline-flex items-center rounded-lg focus-visible:ring-2" href="">
          <span class="text-left break-all line-clamp-1">加载更多</span>
        </div>  
      </div>
    </div>
    <client-only>
      <el-dialog v-model="dialogVisible" align-center class="max-w-screen-sm" style="width: 90%;border-radius: 10px;">
        <div class="model_warp">
          <img class="_model_item_bg_img absolute top-4 w-20 h-20 sm:w-40 sm:h-40 inset-0 opacity-20 blur-md rounded-full"
            :src="currentItem.Icon" loading="lazy">
          <img class="w-10 h-10  sm:w-20 sm:h-20 rounded-full m-auto" :src="currentItem.Icon" @error="errorImg"
            loading="lazy" />
          <div class="mt-8 text-center text-base font-semibold leading-6 text-gray-900 ">{{ currentItem.Name }}</div>
          <div v-if="currentItem.Score" class="flex flex-wrap items-center mt-2">
            <span class="text-sm font-bold">评分</span>
            <ScoreIcon :score="Number(currentItem.Score)"/>
            <span class="text-base font-bold" :class="getColorClass(currentItem.Score)">{{ currentItem.Score }}</span>
          </div>
          <div v-if="currentItem.Type" class="text-sm sm:text-base">
            类型:
            <span v-for="(tItm, idx) in  currentItem.Type" :key="idx">
              <span
                class="rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider m-1 bg-purple-100 text-purple-500 dark:bg-white/10 dark:text-orange-300 astro-ES6RJE63">{{ tItm }}</span>
            </span>
          </div>
          <div class="flex flex-wrap">
            <div v-if="currentItem.Protocols" class="flex items-center flex-wrap justify-start gap-3 mt-4">
              <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
                <svg aria-hidden="true"
                  viewBox="0 0 10 10" class="h-2.5 w-2.5">
                  <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-lime-300">
                  </path>
                  <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-green-300">
                  </path>
                </svg>
                <span class="ml-2.5">协议：</span>
              </h2>
              <span class="text-gray-900">{{ currentItem.Protocols }}</span>
            </div>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.Markets">
              <div class="mb-1 text-base">{{ currentItem.Markets }}</div>  
              市场
            </span>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.MktShare">
                <div class="mb-1 text-base">{{ currentItem.MktShare }}</div> 
                市场占有率
              </span>
              <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.Launched">
                <div class="mb-1 text-base">{{ currentItem.Launched }}</div> 
                启动时间
              </span>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md" v-if="currentItem.Coins">
              <div class="mb-1 text-base">{{ currentItem.Coins }}</div>  
              币种
            </span>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.Liquidity">
              <div class="mb-1 text-base">{{ currentItem.Liquidity }}</div>  
              流动性
            </span>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.WeeklyVisits">
              <div class="mb-1 text-base">{{ currentItem.WeeklyVisits }}</div>  
              每周访问次数
            </span>
            <span class="text-xs mr-2 mt-2 px-4 py-1 bg-gray-100 rounded-md text-center" v-if="currentItem.FiatSupported1">
              <div class="mb-1 text-base">{{ currentItem.FiatSupported1 }}</div>  
              法币支持
            </span>
          </div>
          <div class="flex items-center flex-wrap justify-start gap-3 mt-4">
            <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
              <svg aria-hidden="true"
                viewBox="0 0 10 10" class="h-2.5 w-2.5">
                <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-violet-300">
                </path>
                <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-pink-300">
                </path>
              </svg>
              <span class="ml-2.5">官方链接：</span>
            </h2>
            <NuxtLink class="inline-flex justify-center rounded-lg text-sm font-sm py-1 px-2 bg-white/0 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " v-if="currentItem.OfficialUrl" title="官方网站" aria-label="官方网站"
              :href="currentItem.OfficialUrl" target="_blank">
              官方网站
              <icon-link class="ml-2 w-5 h-5 right-4 top-4 z-50 text-gray-500" />
            </NuxtLink>
            <NuxtLink class="inline-flex justify-center rounded-lg text-sm font-sm py-1 px-2 bg-white/0  ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " v-if="currentItem.BlockBrowser" title="区块链浏览器" aria-label="区块链浏览器"
              :href="currentItem.BlockBrowser" target="_blank">
              区块链浏览器
              <icon-link class="ml-2 w-5 h-5 right-4 top-4 z-50 text-gray-500" />
            </NuxtLink>
            <NuxtLink class="inline-flex justify-center rounded-lg text-sm font-sm py-1 px-2 bg-white/0  ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " v-if="currentItem.WhitePaper" title="白皮书" aria-label="白皮书"
              :href="currentItem.WhitePaper" target="_blank">
              白皮书
              <icon-link class="ml-2 w-5 h-5 right-4 top-4 z-50 text-gray-500" />
            </NuxtLink>
          </div>
          <div class="flex items-center justify-start gap-3 mt-4">
            <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
              <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5"><path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-indigo-300"></path><path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-blue-300"></path></svg>
              <span class="ml-2.5">社交媒体：</span>
            </h2>
            <NuxtLink v-if="currentItem.Twitter" title="Twitter" aria-label="Twitter" :href="currentItem.Twitter"
              target="_blank">
              <Icon class="text-2xl" name="fa-brands:twitter" />
            </NuxtLink>
            <NuxtLink v-if="currentItem.Telegram" title="Telegram" aria-label="Telegram" :href="currentItem.Telegram"
              target="_blank">
              <Icon class="text-2xl" name="fa-brands:telegram" />
            </NuxtLink>
            <NuxtLink v-if="currentItem.Discord" title="Discord" aria-label="Discord" :href="currentItem.Discord"
              target="_blank">
              <Icon class="text-2xl" name="fa-brands:discord" />
            </NuxtLink>
            <NuxtLink v-if="currentItem.Facebook" title="Facebook" aria-label="Facebook" :href="currentItem.Facebook"
              target="_blank">
              <Icon class="text-2xl" name="fa-brands:facebook" />
            </NuxtLink>
          </div>
          <div class="mt-8 text-sm text-gray-500">
            {{ currentItem.Desc }}
          </div>
        </div>
      </el-dialog>
    </client-only>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.list_warp': {
    'font-family': 'var(--font-mono)',
    '._chain_item': {
      'position': 'relative',
      'transition': 'all .2s',
      '&:hover': {
        '._item_icon': {
          '-webkit-animation': 'jumps 1.2s ease 1',
          'animation': 'jumps 1.2s ease 1',
        },
        '._link_icon': {
          'opacity': 1,
        },
      },
    },
    '._item_desc': {
      'display': '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      'overflow': 'hidden',
      'text-overflow': 'ellipsis',
      'overflow-wrap': 'break-word',
      'word-break': 'break-word',
    },
    '._model_item_bg_img': {
      'filter': 'blur(5px)',
      'left': '50%',
      'top': '2.5rem',
      'transform': 'translateX(-50%)',
      '@sm': {
        'top': '1rem',
      },
      '&::after': {
        'content': '""',
        'display': 'block',
        'background': 'rgba(0,0,0,0.5)',
        'zIndex': 1,
      }
    },
    // '._chain_item_protocols': {
    //   // 'max-width': '260px',
    //   'width': 'auto',
    // }
  },
  '._list_item_bg_img': {
    'filter': 'blur(5px)',
    'top': '50%',
    'transform': 'translateY(-50%)',
    '&::after': {
      'content': '""',
      'display': 'block',
      'background': 'rgba(0,0,0,0.5)',
      'zIndex': 1,
    }
  },
  '.model_warp': {

  },
  '.website_link': {
    display: 'flex',
  }

})
</style>