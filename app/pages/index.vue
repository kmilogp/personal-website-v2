<script setup lang="ts">
const { x, y } = useMouse()
const { x: scrollX, y: scrollY } = useScroll(window)

const experiences = [
  {
    period: '2022 - present',
    title: 'Senior Full Stack Developer - Check24',
    link: 'https://www.check24.es',
    links: [
      {
        label: 'Customer Area',
        href: 'https://areaclientes.check24.es'
      }
    ],
    description: 'Build and maintain critical services for customers and agents. Working closely with Product and Stakeholders to deliver feature-rich solutions in the fastest possible time. Scalability and software quality are a must since the development team is in a constant growth.',
    technologies: ['Vue', 'TypeScript', 'PHP', 'Symfony', 'MySQL', 'Debian', 'Vitest', 'PhpUnit']
  },
  {
    period: '2020 - 2022',
    title: 'Frontend Developer - Devitall',
    link: 'https://www.archesenglish.com',
    links: [
      {
        label: 'Arches',
        href: 'https://www.archesenglish.com'
      },
      {
        label: 'RecargaYa',
        href: 'https://portal.recargayallc.com'
      },
      {
        label: 'Charter',
        href: 'https://check.just2air.com'
      }
    ],
    description: 'Built all kind of web applications and services, from flight booking systems and international topup portals, to food delivery platforms and CRM systems. Created responsive and accessible user interfaces. Used PWA technologies for delivering native-like experiences to our customers. Reusability and maintainability allowed to deliver multiple projects at the same time, while keeping codebases clean and simple and user interfaces pixel-perfect.',
    technologies: ['Vue', 'JavaScript', 'Nuxt', 'Vuetify', 'Django', 'Python', 'PostgreSQL', 'Docker']
  },
  {
    period: '2019 - 2020',
    title: 'Junior Frontend Developer - One Broker Services',
    link: 'https://prime-telecomservices.com',
    description: 'Worked on the backoffice solution for the printing system of the company. Learned principles about delivery quality and attention to details and testing.',
    technologies: ['Vue', 'JavaScript', 'Vuetify', 'SCSS', 'Git', 'Gitlab CI/CD']
  }

]
</script>

<template>
  <div class="relative min-h-svh selection:bg-primary-900 selection:text-primary-50 ">
    <div
      class="hidden md:block size-[400px] dark:bg-blue-800/30 bg-blue-300/30 blur-[150px] rounded-full fixed transform -translate-x-1/2 -translate-y-1/2 -z-1"
      :style="{ top: `${y - scrollY}px`, left: `${x - scrollX}px` }"
    />
    <div class="md:flex gap-4 justify-between container max-w-7xl mx-auto relative">
      <div class="w-full md:w-[48%] md:h-svh md:sticky top-0 self-start inline-flex flex-col justify-between py-10 md:py-24 space-y-4 px-4">
        <div class="space-y-4">
          <h1 class="text-5xl font-bold">
            Camilo G. P.
          </h1>
          <h2 class="font-medium text-xl">
            Full Stack Developer
          </h2>
          <p class="mt-4 dark:text-neutral-400 text-neutral-900">
            I build user-friendly applications <br class="hidden md:block"> and robust backend solutions.
          </p>
        </div>

        <div class="text-neutral-400 dark:text-neutral-500 md:pb-[30vh] space-y-4 hidden md:block">
          <NavigationLink
            v-for="target in ['about', 'experience', 'contact']"
            :key="target"
            :target="target"
          />
        </div>

        <div class="flex text-xl gap-4">
          <NuxtLink
            href="https://github.com/kmilogp8496"
            target="_blank"
          >
            <UIcon name="lucide:github" />
          </NuxtLink>
          <NuxtLink
            href="www.linkedin.com/in/camilo-gonzález-pérez-fullstack"
            target="_blank"
          >
            <UIcon name="lucide:linkedin" />
          </NuxtLink>
        </div>
      </div>

      <div class="leading-7 text-neutral-400 md:max-w-md lg:max-w-2xl md:py-24 space-y-10 md:space-y-16 lg:space-y-28 relative">
        <div>
          <LandingHeader
            id="about"
            title="About me"
          />
          <div
            class="px-4 space-y-4 relative"
          >
            <p>
              I'm a full stack developer with an inclination towards frontend development. I like crafting beautiful and functional user interfaces. Pixel-perfect designs are my passion and I really enjoy bringing them to life.
            </p>
            <p>
              I like solving challenges and complex problems. I enjoy backend development too, and I'm always trying to create efficient and scalable solutions.
            </p>
            <p>
              Infrastructure services are part of my daily work. I'm a fan of Docker and Linux systems, and lately I've been exploring the usage of Kubernetes for container orchestration.
            </p>
            <p>
              Currently I'm a Senior Full Stack Developer at <ProseLink href="https://www.check24.es">
                Check24
              </ProseLink>. Check24 is changing the car insurance market in Spain, and my main responsibilities are building and improving the Customer Area facing services and the Backoffice functionalities that allow our agents to give the best-in-class service to our customers.
            </p>
            <p>
              In the past, I've had the opportunity to work with amazing companies and teams, where the main focus was the delivery of <strong class="font-medium text-neutral-900 dark:text-neutral-100">high value </strong> software solutions that could help our <strong class="font-medium text-neutral-900 dark:text-neutral-100">customers </strong> in a significant way.
            </p>
          </div>
        </div>
        <div>
          <LandingHeader
            id="experience"
            title="Experience"
          />
          <div
            class="group/parent space-y-4 relative"
          >
            <ExperienceItem
              v-for="experience in experiences"
              :key="experience.title"
              class="group-hover/parent:opacity-50 transition-opacity duration-200"
              :experience="experience"
            />
          </div>
        </div>
        <div class="relative">
          <LandingHeader
            id="contact"
            title="Get in touch"
          />
          <LandingContact class="px-4" />
        </div>
      </div>
    </div>
  </div>
</template>
