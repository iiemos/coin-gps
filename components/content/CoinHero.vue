<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  cta: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
  secondary: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
  video: {
    type: String,
    required: false,
    default: '',
  },
  snippet: {
    type: [Array, String] as PropType<string[] | string>,
    required: false,
    default: '',
  },
})
</script>

<template>
  <section class="block-hero">
    <div class="layout">
      <div class="content">
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>

        <h1 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Hero Title
          </ContentSlot>
        </h1>

        <p class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero default description.
          </ContentSlot>
        </p>

        <div v-if="$slots.extra" class="extra">
          <ContentSlot :use="$slots.extra" unwrap="p" />
        </div>

        <div class="actions">
          <ContentSlot v-if="$slots.actions" :use="$slots.actions" unwrap="p" />
          <template v-else>
            <ButtonLink
              v-if="cta"
              class="cta"
              bold
              size="medium"
              :href="(cta[1] as any)"
            >
              {{ cta[0] }}
            </ButtonLink>
            <a v-if="secondary" :href="(secondary[1] as any)" class="secondary">
              {{ secondary[0] }}
            </a>
          </template>
        </div>
      </div>

      <div class="support">
        <svg
          class="m-auto"
          version="1.1"
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          stroke="#65a30d"
          stroke-linecap="round"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path id="r1">
              <animate
                id="p1"
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin"
              />
            </path>
            <path id="r2">
              <animate
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+1s"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+1s"
              />
            </path>
            <path id="r3">
              <animate
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+2s"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+2s"
              />
            </path>
            <path id="r4">
              <animate
                id="p1"
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+3s"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+3s"
              />
            </path>
            <path id="r5">
              <animate
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+4s"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+4s"
              />
            </path>
            <path id="r6">
              <animate
                attributeName="d"
                values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+5s"
              />
              <animate
                attributeName="stroke-width"
                values="0;4;4;4;0"
                dur="6s"
                repeatCount="indefinite"
                begin="p1.begin+5s"
              />
            </path>
          </defs>
          <use xlink:href="#r1" />
          <use xlink:href="#r1" transform="rotate(60 160 160)" />
          <use xlink:href="#r1" transform="rotate(120 160 160)" />
          <use xlink:href="#r1" transform="rotate(180 160 160)" />
          <use xlink:href="#r1" transform="rotate(240 160 160)" />
          <use xlink:href="#r1" transform="rotate(300 160 160)" />
          <use xlink:href="#r2" transform="rotate(30 160 160)" />
          <use xlink:href="#r2" transform="rotate(90 160 160)" />
          <use xlink:href="#r2" transform="rotate(150 160 160)" />
          <use xlink:href="#r2" transform="rotate(210 160 160)" />
          <use xlink:href="#r2" transform="rotate(270 160 160)" />
          <use xlink:href="#r2" transform="rotate(330 160 160)" />
          <use xlink:href="#r3" />
          <use xlink:href="#r3" transform="rotate(60 160 160)" />
          <use xlink:href="#r3" transform="rotate(120 160 160)" />
          <use xlink:href="#r3" transform="rotate(180 160 160)" />
          <use xlink:href="#r3" transform="rotate(240 160 160)" />
          <use xlink:href="#r3" transform="rotate(300 160 160)" />
          <use xlink:href="#r4" transform="rotate(30 160 160)" />
          <use xlink:href="#r4" transform="rotate(90 160 160)" />
          <use xlink:href="#r4" transform="rotate(150 160 160)" />
          <use xlink:href="#r4" transform="rotate(210 160 160)" />
          <use xlink:href="#r4" transform="rotate(270 160 160)" />
          <use xlink:href="#r4" transform="rotate(330 160 160)" />
          <use xlink:href="#r5" />
          <use xlink:href="#r5" transform="rotate(60 160 160)" />
          <use xlink:href="#r5" transform="rotate(120 160 160)" />
          <use xlink:href="#r5" transform="rotate(180 160 160)" />
          <use xlink:href="#r5" transform="rotate(240 160 160)" />
          <use xlink:href="#r5" transform="rotate(300 160 160)" />
          <use xlink:href="#r6" transform="rotate(30 160 160)" />
          <use xlink:href="#r6" transform="rotate(90 160 160)" />
          <use xlink:href="#r6" transform="rotate(150 160 160)" />
          <use xlink:href="#r6" transform="rotate(210 160 160)" />
          <use xlink:href="#r6" transform="rotate(270 160 160)" />
          <use xlink:href="#r6" transform="rotate(330 160 160)" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.block-hero': {
    padding: '{space.20} 0',
    '@sm': {
      padding: '{space.24} 0',
    },
    '@lg': {
      padding: '{space.32} 0',
    },
    '.layout': {
      display: 'grid',
      gap: '{space.16}',
      '@lg': {
        gap: '{space.8}',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      }
    },
    '.content': {
      '@lg': {
        gridColumn: 'span 2 / span 2'
      },
      '.announce': {
        marginBottom: '{space.2}',
        textAlign: 'center',
        '@lg': {
          textAlign: 'start'
        }
      },
      '.title': {
        color: '{elements.text.primary.color.static}',
        fontWeight: '{fontWeight.bold}',
        letterSpacing: '{letterSpacing.tight}',
        textAlign: 'center',
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
        marginBottom: '{space.8}',
        px: '{space.8}',
        '@sm': {
          fontSize: '{text.5xl.fontSize}',
          lineHeight: '{text.5xl.lineHeight}',
        },
        '@lg': {
          px: '{space.0}',
          fontSize: '{text.6xl.fontSize}',
          lineHeight: '{text.6xl.lineHeight}',
          textAlign: 'start'
        }
      },
      '.description': {
        marginBottom: '{space.12}',
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
        textAlign: 'center',
        color: '{elements.text.secondary.color.static}',
        px: '{space.2}',
        '@lg': {
          textAlign: 'start'
        }
      },
      '.extra': {
        marginBottom: '{space.16}',
        display: 'flex',
        justifyContent: 'center',
        '@lg': {
          justifyContent: 'flex-start'
        }
      },
      '.actions': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '{space.4}',
        '@sm': {
          flexDirection: 'row',
          gap: '{space.6}'
        },
        '@lg': {
          justifyContent: 'flex-start'
        },
        '.cta': {
          marginBottom: 0
        },
        '.secondary': {
          fontWeight: '{fontWeight.medium}',
          color: '{elements.text.secondary.color.static}',
          '&:hover': {
            color: '{elements.text.secondary.color.hover}'
          }
        }
      }
    }
  }
})
</style>
