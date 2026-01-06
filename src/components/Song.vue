<script setup lang="ts">
import { Song } from "@/utils/library";
import { usePlayer } from "@/utils/player";
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

const { song } = defineProps<{
  song: Song;
}>();
const player = usePlayer();
let loaded = ref<boolean>();
onMounted(async () => {
  await song.loadMetadatas();
  loaded.value = true;
});

function play() {
  // Insérer le son au player (voir la définition de l'interface `player`)
}
</script>

<template>
  <div
    class="p-2 rounded-md bg-primary/20 grid grid-rows-[1fr_auto] gap-2 w-full h-full justify-center"
    v-if="loaded"
  >
    <img
      :src="Song.pictureUrl(song.metadata.common.picture?.[0])"
      alt="cover"
      class="aspect-square rounded-md w-full"
    />
    <div class="grid grid-cols-[1fr_auto]">
      <div class="grid">
        <h3>{{ song.metadata.common.title }}</h3>
        <p class="italic">{{ song.metadata.common.artist }}</p>
      </div>
      <div class="flex items-center justify-end h-full gap-1">
        <button
          class="cursor-pointer aspect-square grid place-content-center h-full"
          aria-label="Listen this song"
          title="add to queue"
          type="button"
          v-if="player.next_song?.url !== song.url"
          @click="player.queue.unshift(song)"
        >
          <Icon icon="pixel:playlist" />
        </button>
        <button
          class="cursor-pointer aspect-square grid place-content-center h-full bg-secondary/20 rounded-full"
          aria-label="Listen this song"
          title="play"
          type="button"
          @click="play()"
        >
          <Icon icon="pixel:play" />
        </button>
      </div>
    </div>
  </div>
</template>
