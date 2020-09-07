<template>
  <div id="admin">



    <Row>
      <Col span="8">
        <Input search enter-button placeholder="Enter" v-model="userid" @click="serach"/>
      </Col>
      <Col span="8">
        <Button type="success" @click="yes">切换状态</Button>
      </Col>

      <Col span="8">
        <Button type="primary" @click="exit">退出账号</Button>
      </Col>
    </Row>
 <!--   <v-card title="基本信息" id="card">
      <p>姓名：{{name}}</p>
      <p>电话：{{phone}}</p>
      <p>邮箱：{{email}}</p>
    </v-card>-->

  </div>

</template>

<script>
  import axios from 'axios'
    export default {
        name: "adminView",
      data:function(){
          return {
            userid:'',
          /*  name:'',
            phone:'',
            email:''*/
          }
      },
      components:{

      },
      methods:{
       search(){

},
        yes(){
         axios.get('/apis/change_state',{
           params:{
             userid:this.userid
           },
           headers:{
             Authorization:'Bearer '+localStorage.getItem('token')
           }
         }).then(
           res => {
             console.log(res)
           }
         ).catch(
           err => {
             console.log(err);
           }
         )
        },
        exit(){
         this.$router.push('/login')
        }
      }
    }
</script>

<style scoped>
  #admin {
    display: flow;
    position: absolute;
    top: 30%;
    left: 30%;
text-align: center;
  }
  #card{

  }
</style>
