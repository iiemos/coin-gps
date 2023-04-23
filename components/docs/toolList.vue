<script setup lang="ts">
import tool from '@/data/chain/tool'
</script>

<template>
  <div>
    <CtxList :dataList="tool.data"/>
  </div>
</template>