<script setup>
import { ref } from 'vue'
import project from '@/data/project'
const { WEB, APPLETS, BLOCKCHAIN } = project
let change = ref('ALL')
let tabs = [
  'ALL',
  'WEB',
  'APPLETS',
  'BLOCKCHAIN',
]
const ALL = ref([
  ...WEB,
  ...APPLETS,
  ...BLOCKCHAIN,
])
const changeTabs = (i)=>{
  if(i == 'ALL') ALL.value = [ ...WEB, ...APPLETS, ...BLOCKCHAIN]
  if(i == 'WEB') ALL.value = WEB
  if(i == 'APPLETS') ALL.value = APPLETS
  if(i == 'BLOCKCHAIN') ALL.value = BLOCKCHAIN
  change.value = i
}
</script>
<template>
  <div class="iiemo_links">
    <div class="_link_box">
      <h1 class="_links_title">Portfolio</h1>
      <div class="links_tabs_warp">
        <div class="links_tabs">
          <div
            v-for="item in tabs"
            :key="item"
            class="_tabs_item"
            @click="changeTabs(item)"
            :class="{'_active': item == change}">
            {{ item }}
          </div>
        </div>
      </div>
      <div class="_links_warp">
        <div
          v-for="lItem,index in ALL"
          :key="lItem.link"
          class="_links_item ani-bottomIn" :class="`ani-delay-${index}`">
          <img class="_item_img" :src="lItem.img">
          <div class="_item_mode">
            <div class="_mode_title">{{ lItem.lab }}</div> 
            <div class="_mode_desc"> {{ lItem.link }}</div>
            <img v-if="lItem.qrcode" class="_item_qr_code" :src="lItem.qrcode">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="ts" scoped>
css({
  '.iiemo_links': {
    position: 'relative',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '.links_tabs_warp': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '40px',
      '.links_tabs': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '{space.2}',
        borderRadius: '99px',
        boxShadow: '0 0 1px 0 #185ee026, 0 6px 12px 0 #185ee026',
      },
      '._tabs_item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.75rem',
        fontWeight: '800',
        borderRadius: '99px',
        cursor: 'pointer',
        '&._active': {
          color: 'var(--color-white)',
          background: '{color.primary.600}',
        },
      },

    },
    '._links_title': {
      marginBottom: '{space.8}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '._links_warp': {
      display: 'grid',
      gap: '{space.4}',
      textAlign: 'start',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    },
    '._links_item': {
      display: 'block',
      position: 'relative',
      width: '100%',
      padding: '{space.2}',
      borderRadius: '{radii.xl}',
      cursor: 'pointer',
      color: '{color.primary.900}',
      border: '1px solid {elements.border.primary.static}',
      background: '{elements.backdrop.background}',
      // transition: 'all .3s ease-in-out,translateY .3s ease-in-out,box-shadow .3s ease-in-out',
      '&:hover': {
        // transform: 'translateY(-5px)',
        borderColor: '{color.primary.400}',
        '@dark': {
          color: '{color.primary.100}',
          backgroundColor: '{color.primary.900}'
        },
        '._item_mode': {
          opacity: '1',
          borderColor: '{color.primary.400}',
          backgroundImage: 'repeating-linear-gradient(45deg,#614eda98,#8631e798)',
        }
      },
      '._item_img': {
        maxHeight:  '270px',
        margin: '0 auto',
        objectFit: 'cover'
      },
      '._item_mode': {
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'all 0.3s',
        opacity: '0',
        width: '100%',
        height: '100%',
        borderRadius: '{radii.xl}',
        display: 'flex',
        color: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '._mode_title':{
          fontWeight: 600,
          fontSize: '{text.3xl.fontSize}',
          fontFamily: 'var(--font-mono)'
        },
        '._mode_desc':{
          textTransform: 'uppercase'
        },
        '._item_qr_code':{
        }
      }
    }
  },
  '.ani-leftIn':{
    animationName: 'leftIn',
    'animation-duration': '1s',
  },
  '.ani-scaleIn':{
    animationName: 'scaleIn',
    'animation-duration': '1s',
  },
  '.ani-bottomIn':{
    animationName: 'bottomIn',
    'animation-duration': '1s',
  },
  '.ani-delay-1':{
    '-webkit-animation-delay':' 50ms',
    'animation-delay': '50ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-2':{
    '-webkit-animation-delay':' 100ms',
    'animation-delay': '100ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-3':{
    '-webkit-animation-delay':' 150ms',
    'animation-delay': '150ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-4':{
    '-webkit-animation-delay':'200ms',
    'animation-delay': '200ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-5':{
    '-webkit-animation-delay':' 250ms',
    'animation-delay': '250ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-6':{
    '-webkit-animation-delay':' 50ms',
    'animation-delay': '50ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-7':{
    '-webkit-animation-delay':' 350ms',
    'animation-delay': '350ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-8':{
    '-webkit-animation-delay':' 400ms',
    'animation-delay': '400ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-9':{
    '-webkit-animation-delay':' 450ms',
    'animation-delay': '450ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-10':{
    '-webkit-animation-delay':'500ms',
    'animation-delay': '500ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-11':{
    '-webkit-animation-delay':' 550ms',
    'animation-delay': '550ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-12':{
    '-webkit-animation-delay':' 600ms',
    'animation-delay': '600ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-13':{
    '-webkit-animation-delay':' 650ms',
    'animation-delay': '650ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-14':{
    '-webkit-animation-delay':'700ms',
    'animation-delay': '700ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-15':{
    '-webkit-animation-delay':'750ms',
    'animation-delay': '750ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-16':{
    '-webkit-animation-delay':' 800ms',
    'animation-delay': '800ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-17':{
    '-webkit-animation-delay':'850ms',
    'animation-delay': '850ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-18':{
    '-webkit-animation-delay':'900ms',
    'animation-delay': '900ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-19':{
    '-webkit-animation-delay':'950ms',
    'animation-delay': '950ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '.ani-delay-20':{
    '-webkit-animation-delay':'1000ms',
    'animation-delay': '1000ms',
    '-webkit-animation-fill-mode': 'backwards!important',
    'animation-fill-mode': 'backwards!important',
  },
  '@-webkit-keyframes leftIn':{
    '0%': {
      transform: 'translateX(-50px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateX(0px)',
      opacity: 1
    },
  },
  '@keyframes leftIn':{
    '0%': {
      transform: 'translateX(-50px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateX(0px)',
      opacity: 1
    },
  },
  '@-webkit-keyframes scaleIn':{
    '0%': {
      transform: 'scale(.8)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    },
  },
  '@keyframes scaleIn':{
    '0%': {
      transform: 'scale(.8)',
      opacity: 0
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    },
  },
  '@-webkit-keyframes bottomIn':{
    '0%': {
      transform: 'translateY(50px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1
    },
  },
  '@keyframes bottomIn':{
    '0%': {
      transform: 'translateY(50px)',
      opacity: 0
    },
    '100%': {
      transform: 'translateY(0px)',
      opacity: 1
    },
  },
})
</style>
