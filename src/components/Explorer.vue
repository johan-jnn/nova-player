<script setup>
import { useLibrary } from "@/utils/library";
import { ref } from "vue";
import Song from "./Song.vue";

const { available } = useLibrary();
const query = ref("");

/**
 * Retourne uniquement les musiques qui valide la chaine de caractères données
 * @param {string} query La query entrée
 */
function filtered(query) {
  const found = [];

  for (const song of available) {
    if (!song.metadata) {
      found.push(song);
      continue;
    }
    //console.log(song.metadata.common.title);
    //console.log(query);
    song.metadata.common.title.includes(query);
    const a = song.metadata.common.title.includes(query);

    if (a === true) found.push(song);
  }

  return found;
}
</script>

<template>
  <div class="layer grid grid-rows-[auto_1fr] gap-2 w-full">
    <header class="flex justify-between items-center">
      <h2>Explore les musiques</h2>
      <input
        class="outline-none bg-secondary/15 p-2 rounded-md"
        type="text"
        v-model="query"
        placeholder="Rechercher"
      />
    </header>
    <ul class="w-full overflow-y-scroll">
      <li v-for="song in filtered(query)" :key="song.url" class="h-fit">
        <Song :song />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  gap: 30px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  max-height: 75vh;
  padding-right: 10px;
}
</style>
