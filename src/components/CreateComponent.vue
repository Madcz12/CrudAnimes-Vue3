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
    data() {
        return {
            form: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        submit: function () {
            this.$root.animes.push({
                id: this.$root.animes.length,
                title: this.form.title,
                description: this.form.description,
            })

            // fetch en caso de que sea una API 

            /*          esto es para editar:   this.$root.animes[this.position].title = this.form.title
                        this.$root.animes[this.position].description = this.form.description */
        }
    },
}
</script>