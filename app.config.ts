export default defineAppConfig({
  github: {
    owner: 'nuxt',
    repo: 'content',
    branch: 'main'
  },
  docus: {
    title: 'iiEmo',
    description: '一朵大呲花,IT博客,技术博客,区块链博客.',
    image: 'https://content.nuxtjs.org/preview.png',
    url: 'https://www.iiemo.com',
    socials: {
      // twitter: '@iiemo',
      github: 'iiemos',
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
        icon: 'IconGhost',
        href: '#'
      },
      iconLinks: []
    }
  }
})
