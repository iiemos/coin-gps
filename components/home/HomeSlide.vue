<script setup lang="ts">
const props = defineProps({
  fileName: {
    type: String,
    default: 'chain'
  },
})
const sideList = ref(['exchange', 'chain', 'wallet'])
const getDataFile =  async (fileName:String)=> {
  const module = await import(`../../data/chain/${fileName}.ts`)
  return module.default
}
let dataArr:any = ref([])
sideList.value.forEach(async (item) => {
  const res:any = await getDataFile(item)
  dataArr.value.push(res.data.slice(0, 14))
})
</script>
<template>
  <div>
    <div class="relative mt-20" aria-hidden="true" style="">
      <div class="overflow-hidden">
        <div class="slider" v-for="datas,idx in dataArr" :key="idx">
          <div class="slide-track mb-2 sm:mb-8" :class="idx == 1 ? 'animation-reverse' : 'animation '">
            <div class="slide" v-for="item in datas">
              <div
                class="relative flex items-center justify-center bg-white dark:bg-gray-900 h-[86px] w-[86px] rounded-md ring-1 ring-gray-200 hover:ring-0 dark:ring-0 mt-1"
                tabindex="-1">
                <div>
                  <img :src="item.Icon" alt="item.Name" class="w-auto h-8 sm:h-12" loading="lazy" height="48" width="48">
                </div>
                <div class="hidden gradient-border gradient-border-dark dark:block"></div>
                <div class="dark:hidden gradient-border gradient-border-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute pointer-events-none top-0 left-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[100px] bg-gradient-to-r from-white via-white dark:from-black to-transparent z-[1]">
      </div>
      <div
        class="absolute pointer-events-none top-0 right-0 h-full w-[20px] sm:w-[50px] md:w-[100px] lg:w-[100px] bg-gradient-to-l from-white via-white dark:from-black to-transparent z-[1]">
      </div>
    </div>
  </div>
</template>

<style>
@import url(@/assets/css/HomeModulesList.css);
</style>