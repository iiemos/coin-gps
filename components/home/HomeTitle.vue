<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  titleColorText: {
    type: String,
    required: false,
    default: ''
  },
  desc: {
    type: String,
    required: false,
    default: ''
  },
  descStrong: {
    type: String,
    required: false,
    default: ''
  },
})
</script>
<template>
  <div class="flex flex-col justify-center">
    <h2 class="block_title max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">
      <ContentSlot :use="$slots.title" unwrap="p" />

      <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
        <ContentSlot :use="$slots.titleColorText" unwrap="p" />
      </span>
    </h2>
    <p class="text-lg xl:text-xl 2xl:text-2xl u-text-gray-500 sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
      <ContentSlot :use="$slots.desc" unwrap="p"/>
      <strong>
        <ContentSlot :use="$slots.descStrong" unwrap="p"/>
      </strong>
    </p>
  </div>
</template>