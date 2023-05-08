<script setup lang="ts">
const props = defineProps({
  score: {
    type: [Number],
    required: true,
    Default: 0,
    validator: (value) => value >= 0 && value <= 10,
  },
});

const starCounts = computed(() => {
  const scorePerStar = 2;
  const fullStars = Math.floor((props.score + 1) / scorePerStar);
  const halfStar = (props.score + 1) % scorePerStar >= 1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return {
    fullStars,
    halfStar,
    emptyStars,
  };
});

const colorClass = computed(() => {
  if (props.score > 6) {
    return 'text-lime-500';
  } else if (props.score <= 6 && props.score > 4) {
    return 'text-yellow-500';
  } else {
    return 'text-orange-500';
  }
});

function getStarIcon(index:any) {
  const { fullStars, halfStar } = starCounts.value;
  if (index <= fullStars) {
    return 'ic:round-star';
  } else if (index === fullStars + 1 && halfStar) {
    return 'ic:round-star-half';
  } else {
    return 'ic:round-star-border';
  }
}
</script>
<template>
  <div class="flex items-center px-2">
    <Icon v-for="i in 5" :key="i" :name="getStarIcon(i)" class="text-2xl" :class="colorClass"/>
  </div>
</template>

