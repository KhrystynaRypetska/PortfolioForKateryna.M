<template>
    <div class="contact container">
            <p class="contact__title">
                {{title}}
            </p>
            <p class="contact__title__item">
                <a href="#">{{gmail}}</a>
            </p>
            <p class="contact__title__item">
                <a href="#">{{instagram}}</a>
            </p>
            <p class="contact__title__item">
                <a href="#">{{behance}}</a>
            </p>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                title: 'Contact',
                instagram: 'instagram',
                gmail: 'katerina.molyavka@gmail.com',
                behance: 'behance'

            }
        }
    }
</script>

<style scoped>

</style>