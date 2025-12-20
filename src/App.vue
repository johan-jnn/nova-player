<script setup>
import { useHead } from "@vueuse/head";
import Aside from "./components/Aside.vue";
import Explorer from "./components/Explorer.vue";
import Player from "./components/Player.vue";

useHead({
  title: `${import.meta.env.VITE_APP_NAME}`,
});
</script>

<template>
  <div
    class="h-screen w-screen bg-white bg-linear-to-br from-primary/50 to-secondary/60 flex items-center justify-center p-8"
  >
    <div
      id="app"
      class="layer aspect-1920/1080 w-full grid gap-4 grid-rows-[90%_10%] max-w-[80vw] max-h-[90vh]"
    >
      <div class="flex gap-2">
        <Aside />
        <Explorer />
      </div>
      <Player />
    </div>
  </div>
</template>
