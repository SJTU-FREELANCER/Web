<template>
  <div id="home">
    <filterInput @filter="filterApp"></filterInput>

    <R_card v-for="(item,index) in this.list" :key="index">
    <p slot="name">姓名：{{item.name}}</p>
      <p slot="gender">性别：{{item.gender?'female':'male'}}</p>
      <p slot="birth">生日：{{item.birth}} </p>
      <p slot="experience">个人经历：{{item.experience}}</p>
      <p slot="education">教育： {{item.education}}</p>
    </R_card>
    <v-pagination id="page" show-quick-jumper :total="500"></v-pagination>


  </div>

</template>

<script>
  import filterInput from "./filterInput";
  import R_card from "./R_card";
  import axios from 'axios'
  export default {
    data: function() {
      return {
        isShow:false,
        list:[]
      }
    },
    components:{
      R_card,
      filterInput
    },
    methods: {
 filterApp(){
   let tmp=this.$children[0].formItem
   axios.get('/apis/filt_applications',{
     params:{
       experience:tmp.experience,
       education:tmp.education
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
      axios.get('/apis/get_applicants').then(
        res => {
          this.list=res.data
        }
      ).catch(
        err => {
          console.log(err)
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
