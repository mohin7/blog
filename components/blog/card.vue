<script lang="ts" setup>
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  provider: string
  tags: Array<string>
  published: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/nuxt-blog/no-image_cyyits.png',
  alt: 'no-alt',
  ogImage: '/nuxt-blog/no-image_cyyits.png',
  provider: 'cloudinary',
  tags: () => [],
  published: false,
})
</script>

<template>
  <!-- <article class="group border m-2 overflow-hidden rounded-2xl shadow-lg text-zinc-700">
    <NuxtLink :to="path">
      <NuxtImg
        :provider="provider"
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.05] transition-all duration-500"
        :src="image"
        :alt="alt"
      />
      <div class="p-5">
        <div class="text-black text-sm pt-4 pb-2">
          <div class="flex items-center">
            <LogoDate />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2 class="text-2xl font-semibold text-black pb-1 group-hover:text-sky-700">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-3">
          {{ description }}
        </p>
        <div class="flex group-hover:underline text-sky-700 items-center pt-2">
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </article> -->

  <article class="single-blog transition-all overflow-hidden mb-4">
    <!-- thumbnail  -->
    <NuxtLink :to="path" class="mb-4 block">
      <NuxtImg :provider="provider" class="" :src="image" :alt="alt" />
    </NuxtLink>
    <!-- thumbnail  -->

    <!-- date and tag  -->
    <div class="flex justify-between text-sm flex-wrap">
      <div class="flex items-center gap-1 flex-wrap">
        <LogoDate />
        {{ date }}
      </div>
      <!-- <div class="flex items-center gap-1 flex-wrap">
        <LogoTag />
        <template v-for="tag in tags" :key="tag">
          <span>{{ tag }}</span>
        </template>
      </div> -->
    </div>
    <!-- date and tag  -->

    <div class="py-2">
      <!-- title  -->
      <h1 class="text-xl font-bold mb-2">
        <NuxtLink :to="path">{{ title }}</NuxtLink>
      </h1>
      <!-- title  -->

      <!-- description  -->
      <p class="text-base mb-4 text-gray-400 h-12 text-ellipsis overflow-hidden ...">
        {{ description }}
      </p>
      <!-- description  -->

      <div class="flex group-hover:underline text-sky-700 items-center text-sm">
        <NuxtLink :to="path" class="flex items-center"
          >Read More <span><LogoArrow /></span
        ></NuxtLink>
      </div>
    </div>
  </article>
</template>
<style lang="scss"></style>
