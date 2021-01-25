<template>
    <div
            class="catalog-item"
            @click="addToPage"
          >
        <div class="catalog-item__img">
            <img :src="require('../assets/img/'+item_data.image)" alt="img">
            <div class="catalog-item__name">
                <router-link
                        :to="{
                         name:'page',
                         params: {
                            id: item_data.id
                        }}"
                >
                    {{item_data.name}}
                </router-link>
            </div>
        </div>

    </div>
</template>
<!--item_data: item_data-->
<script>
    export default {
        name: 'Catalog-Item',
        props: {
          item_data: {
              type: Object,
              default() {
                  return {}
              }
          }
        },
        data() {
            return {}
        },
        computed: {
        },
        methods: {
           addToPage() {
               this.$emit('addToPage', this.page_data);
           }
        }
    }
</script>

<style scoped>

</style>