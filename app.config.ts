export default defineAppConfig({
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  docus: {
    title: 'CoinGPS',
    description: '一朵大呲花,IT博客,技术博客,区块链博客.',
    image: 'https://content.nuxtjs.org/preview.png',
    url: 'https://www.iiemo.com',
    socials: {
      twitter: '@iiemo',
      github: 'iiemos',
    },
    headerAD: {
      isShow: true,
      icon:'🌰',
      text: '中文课程已上线',
      linkText: '《Nuxt3全栈实战开发简书》',
      link: 'https://www.nuxt.com',
    },
    github: {
      dir: 'docs/content',
      root: 'docs/content',
      edit: false,
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
        text: 'CoinGPS',
        icon: 'IconGhost',
        href: '#'
      },
      textLinks: [
        {
          text: 'GitHub',
          href: '',
          target: '_blank'
        },
        {
          text: '',
          href: '',
          target: '_blank'
        },
      ],
      iconLinks: []
    }
  }
})
