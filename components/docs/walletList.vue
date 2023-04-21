<script setup lang="ts">
import wallet from '@/data/chain/wallet'
</script>

<template>
  <div>
    <CtxList :dataList="wallet.data"/>
  </div>
</template>