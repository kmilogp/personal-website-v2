<script lang="ts" setup>
defineProps<{
  experience: {
    period: string
    title: string
    link: string
    description: string
    technologies: string[]
  }
}>()
</script>

<template>
  <div class="grid grid-cols-5 gap-4">
    <div class="col-span-1 text-xs pt-1 uppercase">
      {{ experience.period }}
    </div>
    <div class="col-span-4">
      <NuxtLink
        :href="experience.link"
        class="inline-flex items-center gap-2 leading-tight text-neutral-100"
      >
        <h3>{{ experience.title }}</h3> <UIcon
          class="inline-block"
          name="lucide:external-link"
        />
      </NuxtLink>
      <p class="text-neutral-400 mt-4 leading-relaxed text-sm">
        {{ experience.description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <div
          v-for="technology in experience.technologies"
          :key="technology"
          class="text-secondary-500 bg-secondary-500/10 rounded-l-full rounded-r-full py-1.5 px-2.5 text-xs"
          v-text="technology"
        />
      </div>
    </div>
  </div>
</template>
