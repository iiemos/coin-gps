import { resolve } from 'pathe'
import { createResolver } from '@nuxt/kit'

const { resolve: resolveThemeDir } = createResolver(import.meta.url)
const alias = {}
export default defineNuxtConfig({
  alias,
  app: {
    head: {
      script: [
        // { // 谷歌分析替代品
        //   defer: true,
        //   'data-domain': 'iiemo.com',
        //   src: 'https://plausible.io/js/script.js'
        // }
      ]
    }
  },
  content:{
    highlight: {
      preload: ['xml']
    }
  },
  modules: ['@nuxt-themes/tokens', '@element-plus/nuxt'],
  plugins: [
    
  ],
  components: [
    { path: resolveThemeDir('components/icons'), global: true, prefix: '' },
  ],
  extends: '@nuxt-themes/docus',
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  colorMode: {
    preference: 'dark'
  },
  highlight: {
    theme: {
      // Default theme (same as single string)
      default: 'vitesse-light',
      // Theme used if `html.dark`
      dark: 'vitesse-dark',
      // Theme used if `html.sepia`
      // sepia: 'monokai'
    }
  },
  runtimeConfig: {
    content: {
      // @ts-ignore
      // TODO: fix types
      documentDriven: {
        host: 'https://www.iiemo.com'
      }
    },
    public: {
      algolia: {
        applicationId: '',
        apiKey: '',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'content-nuxtjs'
        }
      }
    }
  }
})
