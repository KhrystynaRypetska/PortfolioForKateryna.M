<template>
    <div class="main-wrapper">
        <Header/>
        <main class="main">
            <div class="container">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </main>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Header from './Header'

    export default {
        name: 'Main-wrapper',
        components: {
            Header,
        },
        props: {},
        data() {
            return{
                title: 'Main wrapper'
            }
        },
        computed: {
            ...mapGetters([
                'PAGE',

            ])
        },
        methods: {},
        watch: {},
        mounted() {}
    }
</script>