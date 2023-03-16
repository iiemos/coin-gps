<script setup lang="ts">
import { ElMessage } from 'element-plus'
import data from '@/data/emoji.json'
const source = ref('')
const { copy } = useClipboard({ source })
let keys:any = []
for (var key in data) keys.push(key)

const copyEmoji = async (e: any) => {
  source.value = e
  await copy()
  if (!source.value) return alert('Copied error!')
  ElMessage({
    message: `Copied ${e}`,
    center: true,
    customClass: 'copTips',
    type: 'success',
  })
}
useHead({
  title: 'Emoji - 一朵大呲花',
  meta: [
    { hid: 'keywords', name: 'keywords', content: '一朵大呲花,IT博客,技术博客,区块链博客' },
    { hid: 'description', name: 'description', content: '关于一朵大呲花个人博客的一些表情' },
  ],
})
</script>
<template>
  <div class="_emoji_ctx">
    <span class="_emoji_item" v-for="(item, idx) in keys" :key="idx" @click="copyEmoji(item)">{{ item }}</span>
  </div>
</template>
<style lang="ts" scoped>
css({
  '._emoji_ctx': {
    'margin': '0 auto',
    'max-width': '800px',
    'font-family': 'andalemono, menlo, monospace',
  },
  '._emoji_item':{
    'font-family': 'AppleColorEmoji', 
    'cursor': 'pointer', 
    'padding': '0.25rem 0.5rem', 
    'display': 'inline-block', 
    'border-radius': '4px', 
    'font-size': '22px', 
    '&:hover': {
      backgroundColor: '{color.primary.200}',
      '@dark': {
        backgroundColor: '{color.primary.900}'
      },
    }
  }
})
</style>