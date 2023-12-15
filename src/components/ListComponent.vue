<template>
    <div>
        <div v-if="loading">
            <p>Cargando...</p>
        </div>
        <div v-else>
            <h1>LISTADO</h1>
            <router-link :to="{ name: 'create' }">Crear</router-link>
            <ul>
                <li v-for="(a, key) in $root.animes" :key="a">
                    <router-link :to="{ name: 'detail', params: { anime: JSON.stringify(a) } }">
                        {{ a.title }}</router-link>
                    -
                    <router-link :to="{ name: 'edit', params: { position: key } }">Editar</router-link>

                    <button @click="remove(key)">Eliminar</button>

                </li>
            </ul>
        </div>

    </div>
</template>

<script>

/* import { getAnime } from '../helpers/animes' */

export default {
    data() {
        return {
            animes: [],
            loading: true,
        }
    },
    async mounted() {
        await this.$root.getAnime()
        this.loading = false
        console.log(this.$root.animes[1].title)
    },
    methods: {
        remove: function (index) {
            // aqui habria que llamar a DELETE de la API REST
            this.$root.animes.splice(index, 1)
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;

}

li {
    margin: 10px 0;
}

li a {
    color: green;
    font-weight: bold;
    text-decoration: none;
}
</style>