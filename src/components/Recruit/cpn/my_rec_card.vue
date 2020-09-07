<!--
展示我的招聘信息的卡片
-->

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
      <v-button type="primary" @click.native="change">修改</v-button>
      <v-button type="danger" @click.native="delete_rec">删除</v-button>
    </div>
  </v-card>
</template>
<script>
  import axios from 'axios'
  export default {
    inject: ['reload'],
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      },
      //修改我的招聘信息,直接跳转吗？怎么把rec原先的数据传过去：rec_ID
      change(){
        //将数据保存到vuex,但是怎么获取slot中的数据？
        let tmp=this.$store.state.rec_on_changing
        tmp.rec_ID=this.rec_id
        //跳转
        this.$router.replace('update_recruit')
      },
      //删除我的招聘信息
      delete_rec(){
        console.log('删除招聘信息')
      axios.get('/apis/delete_rec',{
        params:{
          rec_id:this.rec_id
        },
        headers:{
          Authorization:'Bearer '+localStorage.getItem('token')
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
     this.reload()
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
