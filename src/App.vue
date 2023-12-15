<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { getAnime } from './helpers/animes'
export default {
  async mounted() {
    /* this.animes = await getAnime() */
  },
  methods: {
    getAnime: async function () {
      if (this.animes.length == 0)
        this.animes = await getAnime();
      return this.animes
    }
  },
  data() {
    return {
      animes: [

      ]
    }
  },
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
