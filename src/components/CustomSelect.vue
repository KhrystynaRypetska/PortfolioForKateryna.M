<template>
    <div class="select">
        <div
                class="select__options"
        >
            <p
                    :class="[ 'select__options__text', { active: option.isActive }]"
                    v-for="option in options"
                    :key="option.value"
                    @click="selectOptions(option, options)"

            >
                {{ option.name }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CustomSelect',
        props: {
            options: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
                isActive: localStorage.getItem('isActive') || null,
            }
        },
        methods: {
            selectOptions(option, options) {
                this.$emit('select', option)

                options.map(item => {
                    item.isActive = false
                })

                option.isActive = true

            },

        },
        computed: {

        }
    }
</script>

<style scoped>

</style>