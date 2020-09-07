<!--
查看对我发起招聘的项目及相关信息
​ 接口：/getEmpbyId √
​ 参数：userid
​ 返回值:List
​ 备注：返回对当前用户发起招聘申请的应聘信息（recruit_info）及申请状态
-->
<template>
<div id="message">
  <Tag color="gold">我的消息</Tag>
  <Tag color="cyan">对我发起招聘的项目</Tag>
  <Mymessage_card v-for="(item,index) in this.list" :key="index"
                  :rtitle="item.rec_Title"
                  :rec_id="item.rec_ID"
                  :accepted="item.accepted">
    <p slot="salary">salary:{{item.rec_Salary}}</p>
    <p slot="location">location:{{item.rec_Location}}</p>
    <p slot="cate">职位:{{item.rec_Cate}}</p>
    <p slot="desc">{{item.rec_Desc}}</p>
    <p slot="experience">经验：{{item.rec_Experience}}</p>
    <p slot="education">教育：{{item.rec_Education}}</p>
  </Mymessage_card>
</div>
</template>

<script>
  import axios from 'axios'
  import Mymessage_card from "./cpn/Mymessage_card";
    export default {
        name: "Mymessage",
      data(){
          return{
            list:[]
          }
      },
      components:{
          Mymessage_card
      },
      created() {
          axios.get('/apis/getEmpbyId',{
            params:{
              userid:localStorage.getItem('user_ID')
            },
            headers:{
              Authorization:'Bearer '+localStorage.getItem('token')
            }
          }).then(
            res => {
              console.log(res);
              this.list=res.data
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
#message{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
