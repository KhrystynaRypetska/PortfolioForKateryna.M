<template>
    <header class="header">
        <div class="container">
           <div class="header__wrap">
               <div class="logo">
                   <router-link class="header__text logo"
                   to="/"
                   >
                       {{logo}}
                   </router-link>
               </div>
               <div class="info">
                  <router-link class="header__text"
                  to="/info"
                  >
                      {{info}}
                  </router-link>
               </div>
           </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                logo: 'Kateryna Moliavka',
                info: 'Info'
            }
        }
    }
</script>

<style scoped>

</style>