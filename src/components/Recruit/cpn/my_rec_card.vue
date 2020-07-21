<template>
  <v-card id="card" :title="this.rtitle" @mouseleave.native="changeShow"
          @mouseenter.native="changeShow">
    <slot name="salary"></slot>
    <slot name="location"></slot>
    <slot name="cate"></slot>
    <Divider/>
    <slot name="desc"></slot>
    <Divider/>
    <slot name="experience"></slot>
    <slot name="education"></slot>

    <div slot="extra" v-show="isShow">
      <v-button type="primary" @click="change">修改</v-button>
      <v-button type="danger" @click="delete_rec">删除</v-button>
    </div>
  </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      },
      //修改我的招聘信息
      change(){

      },
      //删除我的招聘信息
      delete_rec(){
        console.log('?');
      axios.get('/apis/delete_rec',{
        params:{
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
  #card{

  }
</style>
