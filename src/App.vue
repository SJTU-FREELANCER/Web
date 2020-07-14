<template>
  <div>
<!-- <router-view></router-view>-->
    <!--<Login></Login>-->
<Menu></Menu>
    <router-view></router-view>
    <!--<Entry></Entry>-->
<!--<Resume></Resume>-->
  </div>
</template>
<script>
  import Menu from './components/Menu'
  import Login from "./components/Login"
  import Resume from "./components/Resume";
  import Entry from "./views/Entry";
  import MyResume from "./components/MyResume"
  import Register from "./components/Register";
  import personalInfo from "./components/Personal/personalInfo";
export default {
  name: 'App',
  components:{
   Register,
    MyResume,
    Entry,
    'Menu':Menu,
    'Login':Login,
    Resume,
    personalInfo
  }
}
</script>

<style>
  @import "./css/base.css";
</style>
