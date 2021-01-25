<template>
    <div class="catalog">
        <CustomSelect
            :selected="selected"
            :options="options"
            @select="sortByCategories"
        />
        <div class="catalog__wrapper">
            <CatalogItem
              v-for="item in filteredItems"
              :key="item.id"
              :item_data="item"
              @addToPage="addToPage"
            />
        </div>
        <Author/>
        <Contact/>
    </div>
</template>

<script>
    import CatalogItem from './CatalogItem'
    import {mapActions, mapGetters} from 'vuex'
    import CustomSelect from './CustomSelect'
    import Author from './Author'
    import Contact from './Contact'
    export default {
        name: 'Catalog',
        components: {
            Contact,
            Author,
            CatalogItem,
            CustomSelect,
        },
        props:{},
        data() {
            return {
                options:[
                    {
                        name: 'show alleeee',
                        value: 'ALL',
                        isActive: false
                    },
                    {
                        name: 'vector',
                        value: 'vector',
                        isActive: false
                    },
                    {
                        name: 'ink',
                        value: 'ink',
                        isActive: false
                    },
                    {
                        name: 'paper',
                        value: 'paper',
                        isActive: false
                    },
                    {
                        name: 'animations',
                        value: 'animations',
                        isActive: false
                    },
                ],
                selected: '',
                sortedItems: []
            }
        },

        computed: {
            ...mapGetters([
                'ITEMS',
                'PAGE',
            ]),

            filteredItems() {
                if(this.sortedItems.length) {
                    return this.sortedItems
                } else {
                   return  this.ITEMS
                }
            },
        },

        methods: {
            ...mapActions([
                'GET_ITEMS_FROM_API',
                'ADD_TO_PAGE',

            ]),

            sortByCategories(option) {
                this.sortedItems = []
                this.selected = option.name
                let vm = this;

                this.ITEMS.map(function (item) {

                    if (item.option === option.name) {
                        vm.sortedItems.push(item);
                    }
                })
            },
            addToPage(data){
              this.ADD_TO_PAGE(data)
            },
        },
        mounted() {
            this.GET_ITEMS_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log('Data arrived!')
                }
            })
        }
    }
</script>

<style scoped>

</style>