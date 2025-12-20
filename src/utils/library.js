import { parseWebStream } from "music-metadata";
import { defineStore } from "pinia";

const files = import.meta.glob('$/library/**/*.{mp3,ogg}');

export class Song {
  /**
   * @type {import("music-metadata").IAudioMetadata|null}
   */
  __metadata = null;
  /**
   * @type {HTMLAudioElement|null}
   */
  __audio = null;
  url;
  constructor(url) {
    this.url = url;
  }
  
  /**
   * If the song has been fully loaded
   * @type {bool}
   */
  get loaded() {
    return this.__metadata && this.__audio;
  }

  
  get metadata() {
    return this.__metadata;
  }
  get audio() {
    return this.__audio;
  }

  async loadMetadatas() {
    const file = await fetch(this.url);
    this.__metadata = await parseWebStream(
      file.body,
      {
        mimeType: file.headers.get('Content-Type'),
        size: parseInt(file.headers.get('Content-Length'))
      }
    );

    return this;
  }
  loadAudio() {
    this.__audio = new Audio(this.url);
    this.__audio.load();
    return this;
  }

  /**
   * Generate a new objectUrl from IPicture
   * @param {import("music-metadata").IPicture} picture 
   * @returns 
   */
  static pictureUrl(picture) {
    return `data:${picture.format};base64,${picture.data.toBase64()}`;
  }
}

export const useLibrary = defineStore('library', {
  state: () => {
    return {
      available: Object.entries(files).map(([p, g]) => new Song(p.replace(/^\/?public/, ""), g))
    };
  },

  actions: {
    insert_queue_from(song, player, auto_play = false, reset_played = true) {
      const queue = [...this.available].sort((a, b) => {
        if(a.url === song.url)
          return -1;
        if(b.url === song.url)
          return 1;

        return Math.random() - 0.5;
      });
      if(reset_played)
        player.played =  [];

      player.queue = queue;
      if(auto_play)
        player.next();

      return queue;
    }
  }
});