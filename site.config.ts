import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '938d408c2d2045c4b3369aff6ac4fb29',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '4ff9ccfc-8d6e-488b-b710-938caaf39470', 
  // basic site info (required)
  name: 'Tensai Mono',
  domain: 'tensai-mono.me',
  author: '',

  // open graph metadata (optional)
  description: 'Tensai Mono merupakan website dokumentasi perkuliahan dijurusan Teknik Informatika dan bertujuan sarana diskusi',

  // social usernames (optional)
  twitter: 'TensaiMono',
  github: 'tensai-mono', 
  youtube: 'channel/UCZ-6HYwjvFiirJwrqpGnNVQ',
  instagram: 'tensaimono',
  // newsletter: '#', // optional newsletter URL
  // , // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationStyle: 'custom',
navigationLinks: [
  { 
  },
  { 
  }
]
})
