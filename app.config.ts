export default defineAppConfig({
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  docus: {
    title: 'iiEmo',
    description: 'Write pages in markdown, use Vue components and enjoy the power of Nuxt with a blazing fast developer experience.',
    image: 'https://content.nuxtjs.org/preview.png',
    url: 'https://content.nuxtjs.org',
    socials: {
      twitter: '@nuxt_js',
      github: 'nuxt/content',
    },
    github: {
      dir: 'docs/content',
      root: 'docs/content',
      edit: true,
      releases: true,
      owner: 'nuxt',
      repo: 'content',
      branch: 'main'
    },
    cover: {
      src: '/cover.jpg',
      alt: 'Content made easy for Vue developers'
    },
    aside: {
      level: 1
    },
    layout: {
      fluid: true
    },
    header: {
      logo: 'IconLogo',
    },
    footer: {
      credits: {
        text: 'iiEmo',
        // icon: 'IconDocus',
        icon: 'IconGhost',
        href: '/',
      },
      iconLinks: [
        {
          label: 'NuxtJS',
          href: 'https://nuxtjs.org',
          icon: 'IconNuxt'
        },
        {
          label: 'Vue Telescope',
          href: 'https://vuetelescope.com',
          icon: 'IconVueTelescope'
        }
      ]
    }
  }
})
