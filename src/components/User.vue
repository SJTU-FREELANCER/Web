<template>
  <div>
    <Menu></Menu>
    <router-view></router-view>
  </div>

</template>

<script>
  import Menu from "./Menu";
    export default {
        name: "User",
      data(){
          return{
            userdata:{

            }
          }
      },
      computed:{
          userId(){
            return this.$route.params.userId
          }
      },
      components:{
          Menu
      }
    }
</script>

<style scoped>

</style>
