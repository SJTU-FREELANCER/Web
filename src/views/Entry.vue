<template>

     <div class="center">
       <v-button type="primary" size="large" id="login">登录</v-button>
       <v-button type="primary" size="large" id="register">注册</v-button>
     </div>

</template>

<script>
    export default {
        name: "Entry",
      methods:{

      }
    }
</script>

<style scoped>
  .center{
   display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  #id{
    margin: 20%;
  }
</style>
