<script lang="ts" setup>
defineProps<{
  experience: {
    period: string
    title: string
    link: string
    links?: {
      label: string
      href: string
    }[]
    description: string
    technologies: string[]
  }
}>()
</script>

<template>
  <NuxtLink
    :href="experience.link"
    class="grid lg:grid-cols-5 hover:opacity-100! gap-4 group dark:hover:bg-neutral-100/5 hover:bg-neutral-900/5 cursor-pointer border border-transparent dark:hover:border-neutral-700/50 hover:border-neutral-300/50 rounded p-4"
  >
    <div class="col-span-1 text-xs pt-1 uppercase">
      {{ experience.period }}
    </div>
    <div
      class="col-span-4 gap-2 leading-tight dark:text-neutral-100 text-neutral-900"
    >
      <div>
        <div class="flex items-center gap-1 group-hover:group-[&:not(:has(a:hover))]:text-primary-500 transition-colors duration-100">
          <h3>{{ experience.title }}</h3> <UIcon
            class="inline-block pl-4 pb-4 group-hover:group-[&:not(:has(a:hover))]:translate-x-1 group-hover:group-[&:not(:has(a:hover))]:-translate-y-1 transition-transform duration-300"
            name="lucide:arrow-up-right"
          />
        </div>
        <p class="text-neutral-400 mt-4 leading-relaxed text-sm">
          {{ experience.description }}
        </p>
        <div
          v-if="experience.links"
          class="flex flex-wrap gap-2 mt-2"
        >
          <NuxtLink
            v-for="link in experience.links"
            :key="link.label"
            :href="link.href"
            class="hover:text-primary-500 transition-colors duration-100"
            @click.stop
          >
            <UIcon
              name="lucide:link"
              class="text-xs"
            />
            <span class="text-sm pl-1">
              {{ link.label }}
            </span>
          </NuxtLink>
        </div>
        <div class="flex flex-wrap gap-2 mt-4">
          <UBadge
            v-for="technology in experience.technologies"
            :key="technology"
            :label="technology"
            variant="soft"
            size="md"
            class="font-medium rounded-full px-2"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
