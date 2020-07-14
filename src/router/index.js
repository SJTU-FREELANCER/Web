import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login"
import Recruit from "../components/RecruitInfo";
import Apply from "../components/Resume";
import home from "../components/Home/home";
import Profile from "../components/Profile";
import ApplyHome from "../components/Personal/ResumeDisplay";
import personalInfo from "../components/Personal/personalInfo";
import ResumeDisplay from "../components/Personal/ResumeDisplay";
import view from "../views/view";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path:'view',
      component:view
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/recruit',
      component:Recruit
    },
    {
      path:'/apply',
      component:ApplyHome
    },
    {
      path:'/new_apply',
      component:Apply
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/personalInfo',
      component:personalInfo
    },
    {
      path:'/resumeDisplay',
      component:ResumeDisplay
    },
    {
      path:'/home',
      component:home
    }

  ],
  mode:'history'
})
