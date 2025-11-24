<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="py-2 px-4 sticky z-2 backdrop-blur-md top-0 text-xl font-medium md:hidden"
  >
    <h2 v-text="title" />
  </div>
</template>
