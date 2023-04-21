<script setup lang="ts">
import chain from '~~/data/chain/chain'
const { $aos } = useNuxtApp()

// const { tree } = useDocus()
// const {
//   globals,
//   navigation,
//   surround,
//   page,
//   excerpt,
//   toc,
//   type,
//   layout,
//   next,
//   prev
// } = useContent()
// console.log('globals',globals)
// console.log( 'navigation',navigation)
// console.log( 'surround',surround)
// console.log( 'page',page )
// console.log( 'excerpt',excerpt)
// console.log( 'toc',toc)
// console.log( 'type',type)
// console.log( 'layout',layout)
// console.log( 'next',next)
// console.log( 'prev',prev)

const source = ref('')
// const { copy } = useClipboard({ source })
// let keys:any = []
// for (var key in data) keys.push(key)
const dialogVisible = ref(false)

const changeItem = (itm:any)=>{
  dialogVisible.value = true
}
onMounted(() => {
  $aos().init({
    easing: 'ease-out',
    duration: 1500,
    once: true
  })
});

const errorImg = (event: any) => {
  event.target.src = 'https://resources1.interface003.com/web20/img/default/dealer-default.png'
}
</script>
<template>
  <div class="_chain_ctx">
    <!-- <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <p v-for="item of link.children" :key="item._path">
              {{ item.title }}
              <p v-for="citem of item.children" :key="citem._path">
                {{ citem }}
              </p>
            </p>
          </li>
        </ul>
      </ContentNavigation>
    </nav> -->
    <h2 class="max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl text-3xl font-semibold md:text-4xl lg:text-5xl">
      PublicChain
    </h2>
    <CtxList :dataList="chain.data"/>
    <el-backtop :right="100" :bottom="100" :visibility-height="100">🖕</el-backtop>
  </div>
</template>
<style lang="ts" scoped>
css({
  '._chain_ctx': {
    'font-family': 'var(--font-mono)',
    '._chain_item': {
      'position': 'relative',
      'transition': 'all .2s',
      'box-shadow': '0 4px 15px 0 rgba(117,219,141,.24)',
      '&:hover': {
        'transform': 'translateY(-5px) !important',
        '._link_icon': {
          'opacity': 1,
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
  }
})
</style>