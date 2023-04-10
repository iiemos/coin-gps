<script setup>
import {ref} from 'vue'
import intr from '@/data/intr'
const { intes } = intr
const isTranslate = ref(false)
</script>
<template>
  <div class="iiemo_intr">
    <div class="_intr_tlt">
      introduction (介绍) <IconTranslate @click="isTranslate = !isTranslate"/>
    </div>
    <div class="skill_item" v-for="items,idx in intes" :key="idx">
      <div class="_item_ctx ani-leftIn"  :class="`ani-delay-${idx}`">
        <IconSuccess />
        <div>
          <p v-show="isTranslate">{{ items.en_desc }}</p>
          <p v-show="!isTranslate">{{ items.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="ts" scoped>
css({
  '.iiemo_intr': {
    position: 'relative',
    fontFamily: 'var(--font-mono)',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '._intr_tlt': {
      fontWeight: '{fontWeight.bold}',
      fontSize: '{text.4xl.fontSize}',
      lineHeight: '{text.4xl.lineHeight}',
      marginBottom: '{space.8}',
      display: 'flex',
      alignItems: 'center',
      'svg':{
        cursor: 'pointer',
        marginLeft: '{space.4}',
        transition: 'all .3s ease-in-out,translateY .3s ease-in-out,box-shadow .3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
        }
      },
      '@sm': {
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
      }
    },
    '._item_ctx': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'inherit',
      width: '100%',
      padding: '{space.2}',
      background: '{elements.backdrop.background}',
      transition: 'all .3s ease-in-out,translateY .3s ease-in-out,box-shadow .3s ease-in-out',
      '@sm': {
        flexDirection: 'column'
      },
      '@lg': {
        flexDirection: 'inherit'
      },
      '@2xl': {
        flexDirection: 'inherit',
      },
      'svg':{
        marginRight: '8px',
        minWidth: '24px',
        minHeight: '24px',
        height: 'var(--space-6)',
        width: 'var(--space-6)'
      },
      '&:hover': {
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
