<script setup>
import { Song } from "@/utils/library";
import { usePlayer } from "@/utils/player";
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const player = usePlayer();
const timer = computed({
  get: () => player.time,
  set: (time) =>
    player.playing?.audio && (player.playing.audio.currentTime = time),
});
</script>

<template>
  <div v-if="player.playing" class="player">
    <div class="h-full grid grid-rows-1 grid-cols-[auto_1fr] gap-4">
      <img
        :src="Song.pictureUrl(player.playing.metadata.common.picture[0])"
        alt="Song's cover"
        class="h-full aspect-square"
      />
      <div>
        <h2 class="font-heading">{{ player.playing.metadata.common.title }}</h2>
        <p class="text-sm italic">
          {{ player.playing.metadata.common.artist }}
        </p>
      </div>
    </div>
    <form
      method="dialog"
      class="grid grid-rows-[70%_30%] h-full items-center content-center gap-1"
    >
      <div class="h-full flex items-center justify-center gap-4">
        <button
          type="button"
          class="text-primary aspect-square h-[50%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Play the previous song"
          :disabled="!player.previous_song"
          @click="player.previous()"
        >
          <Icon icon="pixel:arrow-alt-circle-left" height="100%" />
        </button>
        <button
          class="p-2 bg-primary aspect-square h-full grid place-content-center rounded-full cursor-pointer"
          @click="
            player.status === 'playing' ? player.pause() : player.resume()
          "
          aria-label="Pause or resume the player"
        >
          <Icon icon="pixel:play-solid" v-if="player.status === 'paused'" />
          <Icon icon="pixel:pause-solid" v-else />
        </button>
        <button
          type="button"
          class="text-primary aspect-square h-[50%] cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Play the next song"
          :disabled="!player.next_song"
          @click="player.next()"
        >
          <Icon icon="pixel:arrow-alt-circle-right" height="100%" />
        </button>
      </div>
      <div class="h-full grid items-center w-full">
        <input
          type="range"
          v-model="timer"
          step="1"
          :max="player.playing.audio.duration"
          aria-label="Current playing song"
        />
      </div>
    </form>
    <div class="flex items-end h-full justify-end pr-2">
      <p v-if="player.next_song">
        A suivre: {{ player.next_song.metadata.common.title }} par
        {{ player.next_song.metadata.common.artist }}
      </p>
    </div>
  </div>
  <div v-else class="layer h-full grid place-content-center">
    <p>Nothing is currently playing. Select a song to begin</p>
  </div>
</template>

<style>
.player {
  /** Rendre le style du player un chouille plus joli */
}
</style>
