<script setup lang="ts">
const props = defineProps({
  fileName: {
    type: String,
    default: 'chain'
  },
})
const getDataFile =  async ()=> {
  const module = await import(`../../data/chain/${props.fileName}.ts`)
  return module.default
}
const res:any = await getDataFile()
console.log('res.data.length',res.data.length);

</script>

<template>
  <div>
    <CtxList :dataList="res?.data"/>
  </div>
</template>