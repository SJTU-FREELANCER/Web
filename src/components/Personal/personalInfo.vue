<!--
个人中心-个人信息
从localStorage中读取信息
-->
<template>
  <div id="info">
    <v-card title="基本信息" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
      <p>姓名：{{name}}</p>
      <p>电话：{{phone}}</p>
      <p>邮箱：{{email}}</p>
      <div slot="extra" v-show="isShow">
        <v-button type="primary" >编辑</v-button>
      </div>
    </v-card>
  <!--  <v-card title="招聘信息" >
      <p>平均分：</p>
      <p>已招聘人数：</p>
    </v-card>
    <v-card title="求职信息" >
      <p>平均分：</p>
      <p>已求职工作数量：</p>
    </v-card>-->
  </div>
</template>
<script>
  export default {
    name:'personalInfo',
    data: function() {
      return {
        isShow:false,
        name:localStorage.getItem('userName'),
        phone:localStorage.getItem('phone'),
        email:localStorage.getItem('email')
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>
<style scoped>
#info{
margin-right: 200px;
  margin-left: 200px;
  margin-bottom: 50px;
}
</style>
