<template>
    <div>
        <form @submit.prevent="submit">
            <input type="text" v-model="form.title">

            <textarea v-model="form.description"></textarea>

            <button class="btn btn-primary" type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    mounted() {
        this.position = this.$route.params.position
        this.form.title = this.$root.animes[this.position].title
        this.form.description = this.$root.animes[this.position].description
    },
    data() {
        return {
            position: 0,
            form: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        submit: function () {
            this.$root.animes[this.position].title = this.form.title
            this.$root.animes[this.position].description = this.form.description
        }
    },
}
</script>