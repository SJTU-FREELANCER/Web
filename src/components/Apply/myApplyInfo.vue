<!--
展示我的求职申请信息
-->
<template>
  <div id="apply">
    <my_app_card v-for="(item,index) in this.mylist" :key="index" :rtitle="item.rec_Title"
                 :rec_id="item.rec_ID">
      <p slot="salary">salary:{{item.rec_Salary}}</p>
      <p slot="location">location:{{item.rec_Location}}</p>
      <p slot="cate">职位:{{item.rec_Cate}}</p>
      <p slot="desc">{{item.rec_Desc}}</p>
      <p slot="experience">经验：{{item.rec_Experience}}</p>
      <p slot="education">教育：{{item.rec_Education}}</p>
    </my_app_card>
  </div>

</template>

<script>
  import axios from 'axios'
  import my_app_card from "./cpn/my_app_card";
  //查看我的求职申请
    export default {
        name: "myApplyInfo",
      data(){
          return {
            mylist:[]
          }
      },
      components:{
          my_app_card
      },
      created() {
          axios.get('/apis/getAppbyId',{
            params:{
              userid:localStorage.getItem('user_ID')
            },
            headers:{
              Authorization:'Bearer '+localStorage.getItem('token')
            }
          }).then(
            res => {
              this.mylist=res.data

            }
          ).catch(
            err => {
              console.log(err);
            }
          )
      }
    }
</script>

<style  scoped>
  #apply{
    margin-left: 200px;
    margin-right: 200px;

  }
</style>
