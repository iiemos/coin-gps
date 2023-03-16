---
title: 'vue-i18n 通过key值查询对应语言'
keywords: '一朵大呲花,IT博客,技术博客,区块链博客'
description: 'vue中通过key值查询对应语言，更直观的看到需要翻译的字段'
---

> 工作中运营部门的语言包管理后台导出JOSN格式是 `{ 数字：翻译的字段 }` 展现在页面中，不知所云，后期维护起来完全不知道这是个什么东西，所以就用key值看查询对应的value，再反过来用value查出对应的字段进行展示

## 对应的json文件
```json
  // zh-cn.json
  {
    "24013":"使用 vue-i18n",
    "24014":"引入依赖",
    "24015":"导出依赖",
    .....
  }

  // en.json
  {
    "24013":"Use vue-i18n",
    "24014":"import dependencies",
    "24015":"export dependencies",
    .....
  }
```
## v2中使用
```ts
  /*
    main.js
  */
  import Vue from 'vue'
  import VueI18n from 'vue-i18n'
  import findKey from 'lodash/findKey.js'
  // 在 VueI18n 原型链上面添加 translation 转换的方法
  VueI18n.prototype.translation = function (value) {
    const zh = require('~/zh-cn.json')
    const val = findKey(zh, function (o) {
      return o == value
    })
    if (!val) {
      return value + '(未翻译)'
    }
    return this.$t(val)
  }
  const i18n = new VueI18n({
    locale: "zh-cn", // 定义默认语言为中文
    messages: {
      "zh-cn": require("../zh-cn.json"),
      en: require("../en.json"),
      // .....
    },
  });

  Vue.prototype.$v = i18n.translation;
  Vue.use(VueI18n)


  /*
    xxx.vue
  */
  <template> {{ $v('引入依赖') }} </template>
  // 如果该字段json文件中没有就会渲染成 ------ 引入依赖(未翻译)
```

## v3中使用

```ts
  /*
    utlis/i18n.ts
  */
  import { createI18n } from 'vue-i18n'
  // vite 动态引入所有语言
  const files = import.meta.globEager('../public/lang/**.json') // 同步引入

  let messages: any = {}
  for (const key in files) {
    messages[key.split('_')[1].split('.')[0].toLowerCase()] = files[key].default
  }

  const language = (navigator.language || 'en').toLocaleLowerCase() // 获取浏览器的语言
  const i18n: any = createI18n({
    legacy: false,
    locale: localStorage.getItem('langCode') || language.split('-')[0] || 'en', // 从缓存里拿，没有就用浏览器语言
    messages,
  })
  export default i18n


  /*
    utlis/utlis.ts
  */

  import findKey from 'lodash/findKey.js'
  import i18n from './i18n'
  // 配置全局公共方法使用
  const langTranslation = (value: any) => {
    const module = import.meta.globEager(`../public/lang/TXT_zh-CN.json`)
    const val = findKey(module['../public/lang/TXT_zh-CN.json'].default, function (o: any) {
      // if (o == value) console.log('o', o)
      return o == value
    })
    // console.log('val: ', val)
    if (!val) {
      return value + '(未翻译)'
    }
    return i18n.global.tm(val)
  }

  export default {
    install: (app: any) => {
      app.config.globalProperties.vvv = langTranslation
    },
  }


  /*
    main.ts
  */
  import { createApp } from 'vue'
  import commonFun from './utlis/utlis'
  import i18n from './utlis/i18n'
  const app = createApp(App)
  app.use(i18n).use(commonFun)
```

## nuxt 中使用

```ts
  /*
    plugins/utlis.js
  */
  import Vue from 'vue'
  import findKey from 'lodash/findKey.js'
  import VueI18n from 'vue-i18n'
  Vue.use(VueI18n)
  VueI18n.prototype.translation = function (value) {
    const zh = require('~/zh-cn.json')
    const val = findKey(zh, function (o) {
      return o == value
    })
    if (!val) {
      return value + '(未翻译)'
    }
    return this.$t(val)
  }
  export default ({ app, store, $axios, $cookies }) => {
    app.i18n = new VueI18n({
      silentTranslationWarn: true,
      locale: store.state.LanguageCode,
      fallbackLocale: 'en',
      messages: {
        'zh-cn': require('~/zh-cn.json'),
        ar: require('~/ar.json'),
        en: require('~/en.json'),
        de: require('~/de.json'),
      }
    })
    Vue.prototype.$v = app.i18n.translation
  }


  /*
    nuxt.confog.js
  */
    plugins: [
    '~/plugins/utlis.js',
  ],
```