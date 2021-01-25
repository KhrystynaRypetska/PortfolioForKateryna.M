<template>
    <div class="page-item__wrap">
        <div class="page-item">
            <div class="page-item__wrapper">
                <p class="page-item__title">{{post.name}}</p>
                <div
                        class="page-item__img"
                        v-if="post.image"
                >
                    <img :src=" require('../assets/img/'+ post.image) " alt="img">
                </div>
                <div class="page-item__text">
                    <p class="page-item__text__description">
                        {{post.description}}
                    </p>
                    <p class="page-item__text__data">
                        {{post.data}}
                    </p>
                </div>
            </div>
            <div
                    class="page-item__img"
                    v-for="image in post.images"
                    :key="image.id"
            >
                <img :src=" require('../assets/img/'+image.src) " alt="img">
            </div>
        </div>
        <Author/>
        <Contact/>
    </div>

</template>

<script>

    import * as axios from 'axios'
    import Author from './Author'
    import Contact from './Contact'

    export default {
        name: 'PageItem',
        components: {
            Contact,
            Author

        },
       data() {
            return {
                post: {}
            }
       },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        mounted() {
        },
        methods: {
            fetchData() {
                if(!this.$route.params.id) return

                axios.get(`http://localhost:3000/items/${this.$route.params.id}`)
                .then((resp) => {
                    this.post = resp.data
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        }



    }
</script>

<style scoped>

</style>