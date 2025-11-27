<script setup lang="ts">
const form = useTemplateRef('form')

const toast = useToast()
const loading = ref(false)

const state = ref({
  name: '',
  email: '',
  message: ''
})

async function handleSubmit() {
  loading.value = true
  const response = await $fetch.raw('/api/contact', {
    method: 'POST',
    body: state.value
  })

  const isOk = response.ok

  toast.add({
    title: isOk ? 'Message sent' : 'Error sending message',
    description: isOk ? 'Thank you for your message! I will get back to you as soon as possible.' : 'Something went wrong. Please try again later.',
    color: isOk ? 'primary' : 'error'
  })

  state.value = {
    name: '',
    email: '',
    message: ''
  }

  form.value?.clear()

  loading.value = true
}
</script>

<template>
  <div
    class="group has-focus:dark:bg-neutral-100/5 has-focus:bg-neutral-900/5 border border-transparent has-focus:dark:border-neutral-700/50 has-focus:border-neutral-300/50 rounded lg:px-4 py-4 transition-all duration-100"
  >
    <UForm
      ref="form"
      :state="state"
      :schema="contactSchema"
      class="grid grid-cols-1 md:grid-cols-2 gap-4"
      @submit="handleSubmit"
    >
      <UFormField
        class="col-span-2 md:col-span-1"
        name="name"
      >
        <UInput
          v-model="state.name"
          class="w-full"
          placeholder="Your name"
        />
      </UFormField>
      <UFormField
        class="col-span-2 md:col-span-1"
        name="email"
      >
        <UInput
          v-model="state.email"
          class="w-full"
          type="email"
          placeholder="Your email"
        />
      </UFormField>
      <UFormField
        name="message"
        class="col-span-2"
      >
        <UTextarea
          v-model="state.message"
          class="w-full"
          placeholder="Your message"
        />
      </UFormField>

      <div class="col-span-2 flex justify-end">
        <UButton
          type="submit"
          variant="soft"
          :loading
        >
          Say Hi!
        </UButton>
      </div>
    </UForm>
  </div>
</template>
