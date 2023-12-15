<template>
    <div>
        <img :src="anime.image" :alt="anime.title" width="240px" height="240px">
        <h2>{{ anime.title }}</h2>
        <p>{{ anime.description }}</p>
    </div>
</template>

<script>
export default {
    async mounted() {
        /* await this.$root.getAnime() */
        // ejemplo por si tengo una API REST 
        this.$root.animes[1].title = "JJK"
    },
    data() {
        return {
            anime: JSON.parse(this.$route.params.anime)
        }
    },
}
</script>

<style lang="scss" scoped></style>