<template>
    <div class="author container">
        <p class="author__text">
            {{author}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Author',
        data () {
            return {
                author: 'Kateryna Moliavka is an illustrator and graphic designer.',
            }
        }
    }
</script>

<style scoped>

</style>