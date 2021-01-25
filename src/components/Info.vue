<template>
    <div class="info">
            <p class="info__title">
                {{title}}
            </p>
            <div class="info__wrap">
                <div class="info__wrap__text">
                    <p class="info__description">
                        {{INFO.text}}
                    </p>
                    <Contact/>
                </div>
                <div
                        class="info__wrap__img"
                        v-if="INFO.img"
                >
                    <img :src=" require(`../assets/img/` + INFO.img) " alt="img">

                </div>
            </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Contact from './Contact'
    export default {
        name: 'Info',
        components: {Contact},
        data() {
            return {
                title: 'Information',
            }
        },
        computed: {
            ...mapGetters([
                'INFO'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_INFO_FROM_API'
            ]),
            
        },
        mounted() {
            this.GET_INFO_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log('Info Data arrived')
                }
            })
        },


    }
</script>

<style scoped>

</style>

