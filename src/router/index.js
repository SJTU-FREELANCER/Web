import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login"
import Recruit from "../components/Recruit/Recruit";
import home from "../components/Home/home";
import Register from "../components/Register";
import ApplyHome from "../components/Personal/myResume";
import personalInfo from "../components/Personal/personalInfo";
import ResumeDisplay from "../components/Personal/myResume";
import Resume from "../components/Personal/alterResume";
import User from "../components/User";
import ApplyInfo from "../components/Apply/Apply";
import RecruitInfo from "../components/Recruit/Recruit";
import myRecruitInfo from "../components/Recruit/myRecruitInfo";
import new_recruit from "../components/Recruit/new_recruit";
import update_recruit from "../components/Recruit/update_recruit";

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
      path: '/recruit',
      component: Recruit
    },
    {
      path: '/apply',
      component: ApplyHome
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user/:userId',
      component: User,
      meta: {
        title: '用户'
      },
      children: [
        {
          path: 'personalInfo',
          component: personalInfo
        },
        {
          path: 'resumeDisplay',
          component: ResumeDisplay
        },
        {
          path: 'home',
          component: home
        },
        {
          path: 'resume',
          component: Resume
        },
        {
          path: 'recruitInfo',
          component: RecruitInfo
        },
        {
          path: 'applyInfo',
          component: ApplyInfo
        },
        {
          path:'my_recruit_info',
          component:myRecruitInfo
        },
        {
          path:'new_recruit',
          component:new_recruit
        },{
        path:'update_recruit',
          component:update_recruit
        }
      ]
    }

  ],
  mode: 'history'
})
