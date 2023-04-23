import { resolve } from 'pathe'
import { createResolver } from '@nuxt/kit'
const { resolve: resolveThemeDir } = createResolver(import.meta.url)
const alias = {}
export default defineNuxtConfig({
  alias,
  app: {
    head: {
      script: [
        { // 谷歌分析替代品
          defer: true,
          'data-domain': 'iiemo.com',
          src: 'https://plausible.io/js/script.js'
        }
      ]
    }
  },
  css:[
    'aos/dist/aos.css',
    '@/assets/css/entry.css',
    '@/assets/css/cardItem.css',
  ],
  content:{
    highlight: {
      preload: ['xml']
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt-themes/tokens',
    '@element-plus/nuxt'
  ],
  plugins: [
  ],
  i18n: {
    locales: () => [{
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr-FR.js',
      name: 'Français'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en'
  },
  elementPlus: { /** Options */ },
  components: [
    { path: resolveThemeDir('components/icons'), global: true, prefix: '' },
    { path: resolveThemeDir('components/home'), global: true, prefix: '' },
    { path: resolveThemeDir('components/docs'), global: true, prefix: '' },
    { path: resolveThemeDir('components/ctx'), global: true, prefix: '' },
  ],
  extends: '@nuxt-themes/docus',
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  colorMode: {
    preference: 'system'
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
