<template>
  <v-card id="card" title="我的简历" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <p>姓名：</p>
    <p>性别：</p>
    <p>生日：</p>
    <p>电话：</p>
    <p>邮箱：</p>
    <p>个人经历：</p>
    <p>教育：</p>
    <div slot="extra" v-show="isShow">
      <v-button type="primary" @click="changeResume">编辑</v-button>
      <v-button type="danger">删除</v-button>
    </div>
  </v-card>
</template>
<script>


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
         root.template='<Resume.vue>'*/
      },
      changeResume() {
        this.$router.replace('resume')
      }
    },
    //组件创建完之后请求数据
    created() {


    },

  }
</script>

<style scoped>
  #card {
    margin-right: 200px;
    margin-left: 200px;
  }
</style>
