<script setup lang="ts">
// import safety from '@/data/chain/safety'
// import dynamicImport from 'vite-plugin-dynamic-import'
// const addJs = async (name:any)=>{
//   // return resolveThemeDir(`@/data/chain/${name}.ts`)
//   return await import (`@/data/chain/${name}`)
// }
// import fse from 'fs-extra/esm'
// import { readFile } from 'fs/promises'
// import fs from 'fs'
// import path from 'path'
// const props = defineProps({
//   fileName: {
//     type: String,
//     default: 'safety'
//   },
// })



// const files:any = import.meta.globEager('@/data/chain/**.ts')
// const files:any = import.meta.globEager(`@/data/chain/${props.fileName}.ts`)
// console.log('files',files);
// let messages: any = {}
// for (const key in files) {
//   // messages[key.split('_')[1].split('.')[0].toLowerCase()] = files[key].default
//   // messages[key]
//   console.log(files[key]);
  
// }
// const prepareTS = (fileName:any) => {
//   const module = fs.readFileSync(path.resolve(__dirname, `../../data/chain/${fileName}.ts`))
//   return module
// }
// prepareTS()
// const addJs =  async (fileName:any)=> {
//   // const module = await import(`@/data/chain/${fileName}.ts`)
//   const module = await import(`@/data/chain/${props.fileName}.ts`)
//   // const module = import(`@/data/chain/${props.fileName}.ts`)
//   // 假设该文件导出一个名为 default 的对象
//   return module
// }
// const res:any = await addJs('safety')
// const res:any = prepareTS('safety')
// console.log('res',res);

</script>

<template>
  <div>
    <!-- <CtxList :dataList="res?.default?.data"/> -->
  </div>
</template>