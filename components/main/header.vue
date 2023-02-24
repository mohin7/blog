<script setup lang="ts">
let isDark = ref(false)
</script>

<template>
  <div class="py-5 border-b text-zinc-700">
    <div class="flex container max-w-5xl justify-between mx-auto items-baseline">
      <ul class="flex items-baseline space-x-5">
        <li class="brand-logo">
          <NuxtLink to="/" class="text-3xl text-black font-bold"> Mohin's Daily Blog</NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3">
        <li>
          <NuxtLink to="/categories"> Categories </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs"> Archive </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="https://github.com/mohin7" aria-label="About me">
            <Icon size="1.2em" class="cursor-pointer" name="emojione:boy-dark-skin-tone" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
.brand-logo {
  font-family: 'Sacramento', cursive;
}
</style>
