<template>
  <v-card id="card" title="我的简历" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <p>姓名：{{result.name}}</p>
    <p>性别：{{result.gender?'男':'女'}}</p>
    <p>生日：{{result.birth}}</p>
    <p>个人经历：{{result.experience}}</p>
    <p>教育：{{result.education}}</p>
    <div slot="extra" v-show="isShow">
      <v-button type="primary" @click="changeResume">编辑</v-button>
      <v-button type="danger">删除</v-button>
    </div>
  </v-card>
</template>
<script>
import axios from 'axios'

  export default {
    data() {
      return {
        isShow: false,
        result: null
      }
    },
    methods: {
      changeShow() {
        this.isShow = !this.isShow;
      },
      newClick: function () {
        this.$router.push('/new_apply')
        /* console.log(this)
         root.template='<alterResume.vue>'*/
      },
      changeResume() {
        this.$router.replace('resume')
      }
    },
    //组件创建完之后请求数据
    created() {
axios.get('/apis/getResumebyId',{
  params:{
    userid:localStorage.getItem('user_ID')
  },
  headers:{
    Authorization:'Bearer '+localStorage.getItem('token')
  }
}).then(
  res => {
    this.result=res.data
    console.log(res);
  }
).catch(
  err => {
    console.log(err);
  }
)

    },

  }
</script>

<style scoped>
  #card {
    margin-right: 200px;
    margin-left: 200px;
  }
</style>
