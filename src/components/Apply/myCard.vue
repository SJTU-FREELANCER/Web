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
      <v-button type="primary" @click="app">申请</v-button>
      <v-button type="danger">详情</v-button>
    </div>
  </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    data: function () {
      return {
        isShow: false
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
