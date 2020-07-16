<template>
  <div >
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
  import test from "./components/test";

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
   Register,
    MyResume,
    Menu,
    Login,
    Resume,
    personalInfo,
    test
  },
  methods:{

    }
  }

</script>

<style>
  @import "./css/base.css";
</style>
