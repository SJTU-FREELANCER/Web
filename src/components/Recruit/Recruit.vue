<!--
我要招聘的页面
-->
<template>
  <div id="home">
    <filterInput @filter="filterApp"></filterInput>

    <R_card v-for="(item,index) in this.list" :key="index"
    :userid="item.user_ID">
    <p slot="name">姓名：{{item.name}}</p>
      <p slot="gender">性别：{{item.gender?'female':'male'}}</p>
      <p slot="birth">生日：{{item.birth}} </p>
      <p slot="experience">个人经历：{{item.experience}}</p>
      <p slot="education">教育： {{item.education}}</p>
    </R_card>



  </div>

</template>

<script>
  import filterInput from "./cpn/filterInput";
  import R_card from "./cpn/R_card";
  import axios from 'axios'
  export default {
    data: function() {
      return {
        isShow:false,
        list:[],
        Info:{
          page:0,
          list:[]
        }
      }
    },
    components:{
      R_card,
      filterInput
    },
    methods: {
 filterApp(){
   let tmp=this.$children[0].formItem
   axios.get('/apis/filt_applicants',{
     params:{
       experience:tmp.experience,
       education:tmp.education
     },
     headers:{
       Authorization:'Bearer '+localStorage.getItem('token')
     }
   }).then(
     res => {
       this.list=res.data
     }
   ).catch(
     err => {
       console.log(err);
     }
   )
 }
    },
    created() {
      axios.get('/apis/get_applicants',{
        headers:{
        Authorization:'Bearer '+localStorage.getItem('token')
      }
      }).then(
        res => {
          this.list=res.data
        }
      ).catch(
        err => {
          console.log(err)
        }
      )

      //先把我发布的的所有招聘信息取出来放在全局变量
      axios.get('/apis/getRecbyId',{
        params:{
          userid:localStorage.getItem('user_ID')
        },
        headers:{
          Authorization:'Bearer '+localStorage.getItem('token')
        }
      }).then(
        res => {
          this.GLOBAL.myRecInfo=res.data
        }
      ).catch(
        err => {
          console.log(err);
        }
      )
    }
  }
</script>

<style scoped>
  #home{
    margin-right: 200px;
    margin-left: 200px;

  }
  #search{
    margin-bottom: 50px;
  }
  #page{
    margin-top: 50px;
  }
</style>
