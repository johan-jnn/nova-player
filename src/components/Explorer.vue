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
    found.push(song);
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
    <ul
      class="grid grid-cols-4 gap-8 justify-between w-full overflow-y-scroll h-full"
    >
      <li v-for="song in filtered(query)" :key="song.url" class="h-fit">
        <Song :song />
      </li>
    </ul>
  </div>
</template>
