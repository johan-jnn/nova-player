<script setup>
const NAV = {
  "Explorer": "#explorer",
  "Mes favoris": "#favorite",
  "Mes playlists": "#playlists"
};
</script>

<template>
  <aside class="grid grid-rows-[auto_1fr] gap-y-8 text-nowrap">
    <h1 class="font-heading text-2xl">{{ APP_NAME }}</h1>
    <nav class="w-full">
      <ul class="grid gap-2 w-full">
        <li v-for="[label, url] in Object.entries(NAV)" class="hover:bg-primary/20 w-full p-2 rounded-md pr-8">
          <a :href="url">{{ label }}</a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside{
  padding-top: 50px;
}
</style>
