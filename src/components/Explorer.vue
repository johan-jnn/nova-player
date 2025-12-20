<script setup>
import { useLibrary } from "@/utils/library";
import { ref } from "vue";
import Song from "./Song.vue";

const library = useLibrary();
const query = ref("");
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
      <li
        v-for="song in library.available.filter(
          (song) =>
            !song.metadata ||
            song.metadata.common.title
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            song.metadata.common.artist
              .toLowerCase()
              .includes(query.toLowerCase())
        )"
        class="h-fit"
      >
        <Song :song />
      </li>
    </ul>
  </div>
</template>
