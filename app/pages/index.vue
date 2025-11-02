<script setup lang="ts">
const experiences = [
  {
    period: '2022 - present',
    title: 'Senior Full Stack Developer - Check24',
    link: 'https://www.check24.es',
    description: 'asdasdasd',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'PHP', 'Symfony', 'MySQL', 'Debian', 'Vitest', 'PhpUnit']
  }

]
</script>

<template>
  <div class="container max-w-6xl px-4 mx-auto py-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="space-y-4">
        <h1 class="text-5xl font-bold">
          Camilo
        </h1>
        <h2 class="font-medium text-xl">
          Full Stack Developer
        </h2>
        <p class="mt-4 text-neutral-400">
          I build robust and user friendly <br> applications.
        </p>
      </div>
      <div class="leading-7 text-neutral-400 space-y-4">
        <p>
          I'm a full stack developer with an inclination towards frontend development. I like crafting beautiful and functional user interfaces. Pixel perfect designs are my passion and I really enjoy bringing them to life.
        </p>
        <p>
          I like solving challenges and complex problems, I enjoy backend development too and I'm always trying to create efficient and scalable solutions.
        </p>
        <p>
          Infrastructure services are part of my daily work, I'm a fan of Docker and Linux systems and lately I've been exploring the usage of Kubernetes for container orchestration.
        </p>
        <p>
          Currently I'm a Senior Full Stack Developer at <ProseLink href="https://www.check24.es">
            Check24
          </ProseLink>. Check24 is changing the car insurance market in Spain, and my main responsibilities are building and improving the Customer Area facing services and the Backoffice functionalities that allow our agents give the best in class service to our customers.
        </p>
        <p>
          In the past, I've had the opportunity to work with amazing companies and teams, where the main focus was the delivery of <strong class="font-medium text-neutral-100">high value </strong> software solutions that could help our <strong class="font-medium text-neutral-100">customers </strong> in a significant way
        </p>

        <div class="mt-28" />
        <ExperienceItem
          v-for="experience in experiences"
          :key="experience.title"
          :experience="experience"
        />
      </div>
    </div>
  </div>
</template>
