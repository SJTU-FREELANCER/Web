<!--
修改招聘状态：
​ 接口：/update_employ_info √
​ 参数：Integer user_id Integer rec_id Integer accepted
​ 返回值：void
​ 备注：一般在被招聘者同意/拒绝招聘申请时进行修改
-->
<template>
  <v-card id="card" title=" " @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <Tag color="orange" v-if="accepted==0">审核中</Tag>
    <Tag color="green" v-if="accepted==1">已录用</Tag>
    <Tag color="red" v-if="accepted==2">拒绝</Tag>


    <slot name="name"></slot>
    <slot name="gender"></slot>
    <slot name="birth"></slot>
    <Divider />
    <slot name="experience"></slot>
    <slot name="education"></slot>
    <div slot="extra" v-show="isShow">
      <v-button type="primary" @click="add">招聘</v-button>
    </div>
  </v-card>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "employee_card",
    inject: ['reload'],
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow() {
        this.isShow = !this.isShow;
      },
      add(){
axios.get('/apis/update_employ_info',{
  params:{
    user_id:this.userid,
    rec_id:this.rec_id,
    accepted:1
  },
  headers:{
    Authorization:'Bearer '+localStorage.getItem('token')
  }
}).then(
  res => {
    console.log(res);
    this.reload()
  }
).catch(
  err => {
    console.log(err);
  }
)
      }
    },
    props:['key','userid','rec_id','accepted']
  }
</script>

<style scoped>

</style>
