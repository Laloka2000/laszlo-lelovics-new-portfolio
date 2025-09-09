<template>
   <section class="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-8">Contact Me</h1>

    <form class="w-full max-w-md bg-white shadow p-6 rounded space-y-4">
      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input type="text" placeholder="Your Name" class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input type="email" placeholder="your@email.com" class="w-full border p-2 rounded" />
      </div>

      <div>
        <label class="block mb-1 font-medium">Message</label>
        <textarea rows="5" placeholder="Your message..." class="w-full border p-2 rounded"></textarea>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue"

const form = reactive({
  name: "",
  email: "",
  message: ""
})

function handleSubmit() {
  alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)
  
  // Reset form
  form.name = ""
  form.email = ""
  form.message = ""
}
</script>
