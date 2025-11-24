<script setup lang="ts">
import * as z from 'zod'

const form = useTemplateRef('form')

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please provide a valid email address'),
  message: z.string().min(1, 'Please enter a message').max(1000, 'Try to keep it short and concise')
})

const toast = useToast()

const state = ref({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  state.value = {
    name: '',
    email: '',
    message: ''
  }
  form.value?.clear()
  toast.add({
    title: 'Message sent',
    description: 'Thank you for your message! I will get back to you as soon as possible.',
    color: 'primary'
  })
}
</script>

<template>
  <div
    class="group has-focus:dark:bg-neutral-100/5 has-focus:bg-neutral-900/5 border border-transparent has-focus:dark:border-neutral-700/50 has-focus:border-neutral-300/50 rounded lg:px-4 py-4 transition-all duration-100"
  >
    <UForm
      ref="form"
      :state="state"
      :schema="schema"
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
        >
          Say Hi!
        </UButton>
      </div>
    </UForm>
  </div>
</template>
