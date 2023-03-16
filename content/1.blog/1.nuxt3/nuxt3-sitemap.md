---
title: 'Nuxt sitemap 网站地图'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'Nuxt sitemap 生成网站地图'
summary:
  title: 'Nuxt sitemap 生成网站地图'
  type: 'Nuxt sitemap'
  icon: '🍉'
  desc: 'Nuxt  生成网站地图'
  tags: 'Nuxt'
  createtime: '2023-01-29'
  pic: ''
---

# nuxt3 sitemap 生成网站地图

---

## 自定义 sitemap 文件

```ts
// static/sitemap.js
import axios from 'axios'
import moment from 'moment' // 时间转换
const sitemap = []
const lang = [
  'de', // 德语http://192.168.1.2:3000/zh-cn/sitemap/sitemap.xml
  'en',
  'es',
  'fil',
  'fr', // 法语
  'hi', // 印地
  'id',
  'it', // 意大利
  'ja',
  'ko', // 韩语
  'pt', // 葡萄牙语
  'ru',
  'th',
  'vi',
  'zh',
  'zh-tw',
]

const tStart = new Date().getTime() - 51840000000
const tEnd = new Date().getTime() + 1209600000
const arrTime = []
for (let i = tStart; i <= tEnd; i = i + 86400000) {
  arrTime.push('sitemap_' + moment(i).format('YYYYMMDD') + '_1')
  arrTime.push('sitemap_' + moment(i).format('YYYYMMDD') + '_2')
}

for (let i = 0; i < arrTime.length; i++) {
  const obj = {
    path: `/en/sitemap/${arrTime[i]}.xml`, // 生成的文件路径
    hostname: '', // 网站的网址https://www.wikifx.com
    cacheTime: 1000 * 60 * 60 * 24, // 一天的更新频率，只在generate:false有用
    gzip: true, // 生成.xml.gz的sitemap
    generate: false,
    exclude: [], // 排除不要的页面，这里的 路径是相对于hostname
    defaults: {
      changefred: 'always',
      lastmod: new Date(),
    },
    routes: async () => {
      // 获取对应时间段的json文件
      let URL = `https://xxxxxx/${arrTime[i]}_zh.json`
      const productList = await axios
        .get(URL)
        .then((res) => {
          const proList = res.data
          const siteArray = []
          let siteObject = {}
          proList.forEach((element) => {
            siteObject = {
              url: element.u,
              changefred: 'daily',
              lastmod: element.d,
            }
            siteArray.push(siteObject)
          })
          return siteArray
        })
        .catch((err) => {
          console.log(err)
          return []
        })
      return productList
    },
  }
  sitemap.push(obj)
}
export default sitemap
```

## nuxt.config.js 中使用

```ts
import sitemap from './static/sitemap'

export default {
  modules: ['@nuxtjs/sitemap'],
  sitemap,
}
```
