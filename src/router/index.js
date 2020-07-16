import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login"
import Recruit from "../components/Recruit/RecruitInfo";
import Apply from "../components/Personal/Resume";
import home from "../components/Home/home";
import Profile from "../components/Profile";
import Register from "../components/Register";
import ApplyHome from "../components/Personal/ResumeDisplay";
import personalInfo from "../components/Personal/personalInfo";
import ResumeDisplay from "../components/Personal/ResumeDisplay";
import Resume from "../components/Personal/Resume";
import User from "../components/User";
import RecruitInfo from "../components/Recruit/RecruitInfo";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
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
      path:'/register',
      component:Register
    },
   /* {
      path:'/user/:userId/personalInfo',
      component:personalInfo
    },
    {
      path:'/user/:userId/resumeDisplay',
      component:ResumeDisplay
    },
    {
      path:'/user/:userId/home',
      component:home
    },
    {
      path:'/user/:userId/resume',
      component:Resume
    },*/
    {
      path:'/user/:userId',
      component:User,
      meta: {
        title: '用户'
      },
      children:[
        {
          path:'personalInfo',
          component:personalInfo
        },
        {
          path:'resumeDisplay',
          component:ResumeDisplay
        },
        {
          path:'home',
          component:home
        },
        {
          path:'resume',
          component:Resume
        },
        {
          path:'recruitInfo',
          component:RecruitInfo
        }
      ]
    }

  ],
  mode:'history'
})
