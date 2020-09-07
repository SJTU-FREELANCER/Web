<!--
展示我的招聘信息
-->
<template>
<div id="recruit">
  <my_rec_card v-for="(item,index) in this.mylist" :key="index" :rtitle="item.rec_Title"
  :rec_id="item.rec_ID">
    <p slot="salary">salary:{{item.rec_salary}}</p>
    <p slot="location">location:{{item.rec_Location}}</p>
    <p slot="cate">职位:{{item.rec_Cate}}</p>
    <p slot="desc">{{item.rec_Desc}}</p>
    <p slot="experience">经验：{{item.rec_Experience}}</p>
    <p slot="education">教育：{{item.rec_Education}}</p>
  </my_rec_card>
</div>
</template>

<script>
  import axios from 'axios'
  import my_rec_card from "./cpn/my_rec_card";
    export default {
        name: "myRecruitInfo",
      data(){
          return{
            mylist:[]
          }
      },
      components:{
          my_rec_card
      },
      created() {
          axios.get('/apis/getRecbyId',{
            params:{
              userid:localStorage.getItem('user_ID')
            },
            headers:{
              Authorization:'Bearer '+localStorage.getItem('token')
            }
          }).then(
            res => {
              this.mylist=res.data
              console.log(res)
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
#recruit{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
