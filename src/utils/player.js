import { defineStore } from "pinia";
import { Song } from "./library";

export const usePlayer = defineStore("player", {
  state: () => ({
    /**
     * @type {null|Song}
     */
    playing: null,
    status: "idle",
    /**
     * @type {Song[]}
     */
    queue: [],
    /**
     * @type {Song[]}
     */
    played: [],
    __time: 0,
    __audioEvents: {
      pause() {
        this.status = "paused";
      },
      playing() {
        this.status = "playing";
      },
      timeupdate() {
        this.__time = this.playing?.audio.currentTime ?? 0;
      },
      ended() {
        this.next();
      }
    },
  }),

  getters: {
    isPaused() {
      return this.playing?.audio?.paused ?? false;
    },
    time() {
      return this.__time;
    },
    /**
     * The next song that will be played
     * @returns {Song|undefined}
     */
    next_song() {
      return this.queue[0]
    },
    /**
     * The previous song that just has been played
     * @returns {Song|undefined}
     */
    previous_song() {
      // -2 because the -1 is the current playing song
      return this.played.at(-2)
    }
  },

  actions: {
    /**
     * Play the given soung in the player
     * @param {Song} song
     */
    play(song) {
      this.eject();

      this.playing = song.loadAudio();
      for (const event in this.__audioEvents) {
        this.playing.audio.addEventListener(
          event,
          this.__audioEvents[event].bind(this)
        );
      }

      this.played.push(song);
      this.playing.audio.play();
    },
    /**
     * Pause the player
     */
    pause() {
      if (this.playing) this.playing.audio.pause();
    },
    /**
     * Resume the player
     */
    resume() {
      if (this.playing) this.playing.audio.play();
    },

    /**
     * Eject the disk to leave the player empty
     */
    eject() {
      if (!this.playing) return;

      this.playing.audio.pause();
      this.status = "idle";
      this.__time = 0;
      for (const event in this.__audioEvents) {
        this.playing.audio.removeEventListener(
          event,
          this.__audioEvents[event]
        );
      }
      this.playing = null;
    },

    /**
     * Insert the next song in queue into the player
     */
    next() {
      let song;
      if(song = this.next_song) {
        this.queue = this.queue.slice(1);
        this.play(song);
      }
    },

    /**
     * Insert the previous played track into the player
     */
    previous() {
      let song;
      if(song  = this.previous_song) {
        if(this.playing) {
          this.queue = [
            this.playing,
            ...this.queue
          ]
        }

        this.played = this.played.slice(0, -2);
        this.play(song);
      }
    }
  },
});
