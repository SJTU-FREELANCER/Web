<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Menu from './components/Menu'
  import Login from "./components/Login"
  import Resume from "./components/Personal/Resume";
  import MyResume from "./components/MyResume"
  import Register from "./components/Register";
  import personalInfo from "./components/Personal/personalInfo";

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      Register,
      MyResume,
      Menu,
      Login,
      Resume,
      personalInfo
    },
    methods: {}
  }

</script>

<style>
  @import "./css/base.css";
</style>
