<!--
展示所有人的招聘信息
-->
<template>
  <v-card id="card" :title="this.rtitle" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <slot name="salary"></slot>
    <slot name="location"></slot>
    <slot name="cate"></slot>
    <Divider/>
    <slot name="desc"></slot>
    <Divider/>
    <slot name="experience"></slot>
    <slot name="education"></slot>


    <div slot="extra" v-show="isShow">
      <v-button type="primary" @click="app" :disabled="disabled">申请</v-button>
     <!-- <v-button type="danger" @click="delete_app">删除</v-button>-->
    </div>
  </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        isShow: false,
        disabled:false
      }
    },
    methods: {
      changeShow() {
        this.isShow = !this.isShow;
      },
      //申请工作
      app(){
        axios.get('/apis/add_apply_info',{
          params:{
            user_id:this.GLOBAL.user_ID,
            rec_id:this.rec_id
          }
        }).then(
          res => {
            console.log(res);

          }
        ).catch(
          err => {
            console.log(err);
          }
        )
        this.disabled=true
      },
      //取消求职申请
      delete_app(){
        axios.get('/apis/delete_apply_info',{
          params:{
            user_id:this.GLOBAL.user_ID,
            rec_id:this.rec_id
          }
        })
      }

    },
    created() {

    },
    props:['key','rtitle','rec_id']
  }
</script>
<style>
  #card {

  }
</style>
