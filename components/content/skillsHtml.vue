<script setup>
import skills from '@/data/skills'
import { randomColor } from '@/data/global'
const { skill } = skills
</script>
<template>
  <div class="iiemo_skills">
    <div class="_skills_tlt">
      Skills (技能)
    </div>
    <div class="skill_item" v-for="item,idx in skill" :key="idx">
      <div class="_item_tlt">{{ item.name }}</div>
      <div class="_item_con">
        <div class="_item_ctx ani-leftIn" v-for="items,idxs in item.list" :key="idxs"  :class="`ani-delay-${idxs}`">
          <Icon :name="items.icon" />
          <span :style="{ color: randomColor() }">{{ items.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="ts" scoped>
css({
  '.iiemo_skills': {
    position: 'relative',
    fontFamily: 'var(--font-mono)',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '._skills_tlt': {
      fontWeight: '{fontWeight.bold}',
      fontSize: '{text.4xl.fontSize}',
      lineHeight: '{text.4xl.lineHeight}',
      '@sm': {
        fontSize: '{text.3xl.fontSize}',
        lineHeight: '{text.3xl.lineHeight}',
      }
    },
    '._item_tlt': {
      marginBottom: '{space.8}',
      marginTop: '{space.8}',
      fontSize: '{text.2xl.fontSize}',
      lineHeight: '{text.2xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.2xl.fontSize}',
        lineHeight: '{text.2xl.lineHeight}',
      }
    },
    '._item_con': {
      display: 'grid',
      gap: '{space.4}',
      textAlign: 'start',
      '@sm': {
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    },
    '._item_ctx': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'inherit',
      width: '100%',
      fontFamily: 'var(--font-mono)',
      padding: '{space.2}',
      borderRadius: '{radii.xl}',
      cursor: 'pointer',
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
      },
      '&:hover': {
        transform: 'translateY(-5px)',
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
