<script setup lang="ts">
defineProps<{
  target: string
}>()
</script>

<template>
  <NuxtLink
    :href="`#${target}`"
    class="w-min flex gap-2 items-center group hover:text-primary-700 hover:dark:text-primary-500 hover:border-primary-700 hover:dark:border-primary-500 transition-colors duration-100"
  >
    <div class="border-t group-hover:w-20 w-10 transition-all duration-200" />
    <span
      class="capitalize"
      v-text="target"
    />
  </NuxtLink>
</template>
