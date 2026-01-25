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
  <div id="color"
    class="h-screen w-screen from-primary/50 to-secondary/60 flex items-center justify-center"
  >
    <div id="app" class="layer">
      <div class="flex gap-2">
        <Aside />
        <Explorer />
      </div>
      <Player />
    </div>
  </div>
</template>
<style scoped>
.layer {
  margin: 50px;
  max-height: 100vh;
}

#color{
  background-color: var(--color-tercary);
}

</style>
