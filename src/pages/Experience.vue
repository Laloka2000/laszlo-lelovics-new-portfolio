<template>
  <section class="min-h-[calc(80vh-12rem)]  bg-gray-50 dark:bg-gray-900 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Title -->
      <h2 class="text-4xl font-bold text-center text-white mb-12">{{ $t("experience.title") }}</h2>
      <div class="flex flex-col space-y-10">
        <!-- Work Experience -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-2xl font-semibold text-white">{{ $t("experience.jobTitle") }}</h3>
          <p class="text-sm text-gray-400 py-2">{{ $t("experience.company") }} | {{ $t("experience.workPeriod") }}</p>
          <ul class="mt-2 text-gray-300 list-disc list-inside space-y-1">
            <li>{{ $t("experience.jobDescription1") }}</li>
            <li>{{ $t("experience.jobDescription2") }}</li>
            <li>{{ $t("experience.jobDescription3") }}</li>
            <li>{{ $t("experience.jobDescription4") }}</li>
          </ul>
        </div>

        <!-- Studies -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 py-4">
          <h3 class="text-2xl font-semibold text-white py-2">{{ $t("experience.educationTitle") }}</h3>
          <p class="text-sm text-gray-400">{{ $t("experience.educationPeriod") }} | {{ $t("experience.educationInstitution") }} </p>
          <p class="mt-3">
            {{ $t("experience.educationDescription2") }}
            {{ $t("experience.educationDescription3") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
