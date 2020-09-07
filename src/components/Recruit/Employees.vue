<!--
查看某用户主动招聘的人
查看某用户主动招聘的人
应该是包括所有招聘的人？？？
​ 接口：/getMyEmployees √
​ 参数：Integer rec_id
​ 返回值：List
-->
<template>
  <div id="employees">
    <Tag color="orange" size="large">我主动招聘的人</Tag>
    <v-collapse @change="onChange" v-model="activeIndex">
      <v-panel  v-for="(item,index) in this.rec"  :header="item.rec_title" :index="index.toString()"
                :key="index"

      >
        <employee_card v-for="(i,index) in employees[index]"
                            :key="index" :userid="i.user_ID"
                       :rec_id="item.rec_id"
                       :accepted="i.accepted"
        >
          <p slot="name">姓名：{{i.name}}</p>
          <p slot="gender">性别：{{i.gender?'female':'male'}}</p>
          <p slot="birth">生日：{{i.birth}} </p>
          <p slot="experience">个人经历：{{i.experience}}</p>
          <p slot="education">教育： {{i.education}}</p>
        </employee_card>
      </v-panel>
    </v-collapse>

  </div>
</template>

<script>
  import employee_card from "./cpn/employee_card";
  import axios from 'axios'
    export default {
    data(){
      return{
        activeIndex:[],
        rec:[],
        employees:[]
      }
    },
        name: "Employees",
      components:{
          employee_card
      },
      created() {
        axios.get('/apis/getRecbyId', {
          params: {
            userid: localStorage.getItem('user_ID')
          },
          headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
          }
        }).then(
          /* res => {console.log(res)}*/
          res => {
            console.log(res.data)
            //保存招聘信息的id和title
            let index
            for (let index = 0; index < res.data.length; index++) {
              this.rec.push({
                rec_id: res.data[index].rec_ID,
                rec_title: res.data[index].rec_Title
              })
            }

            for(let i=0;i<this.rec.length;i++)
            {
              axios.get('/apis/getMyEmployees',{
                params:{
                  rec_id:this.rec[i].rec_id
                },
                headers:{
                  Authorization:'Bearer '+localStorage.getItem('token')
                }
              }).then(
                res => {
                  console.log(res);
                  this.employees[i]=res.data
                }
              ).catch(
                err => {
                  console.log(err);
                }
              )
            }
          }).catch(
            err => {
              console.log(err);
            }
        )
          },
      methods:{
        onChange(index, status) {
          console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
      },
      watch: {
        activeIndex(val){
          console.log(val);
        }
      }
    }
</script>

<style scoped>
#employees{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
