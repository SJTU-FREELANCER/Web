<template>
  <div>
    <router-view v-if="isRouterShow"></router-view>
  </div>
</template>
<script>
  import Menu from './components/Menu'
  import Login from "./components/Login"
  import Resume from "./components/Personal/alterResume";
  import MyResume from "./components/MyResume"
  import Register from "./components/Register";
  import personalInfo from "./components/Personal/personalInfo";

  export default {
    name: 'App',
    data() {
      return {
        isRouterShow: true
      }
    },
    components: {
      Register,
      MyResume,
      Menu,
      Login,
      Resume,
      personalInfo
    },
    methods: {
      async reload () {
        this.isRouterShow = false
        await this.$nextTick()
        this.isRouterShow = true
      }
    },
    provide () {
      return {
        reload: this.reload
      }
    }
  }

</script>

<style>
  @import "./css/base.css";
</style>
