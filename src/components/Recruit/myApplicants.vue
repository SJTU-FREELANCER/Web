<!--
我的应聘者
​ 接口：/getMyApplicants √
​ 参数：Integer rec_id
​ 返回值： List
​ 备注：返回申请了rec_id对应招聘信息的应聘者简历
-->
<template>
  <div id="my_applicants">
    <Tag color="orange" size="large">我的应聘者</Tag>
    <v-collapse @change="onChange" v-model="activeIndex">
      <v-panel  v-for="(item,index) in rec"  :header="item.rec_title" :index="index.toString()"
      :key="index"
      >
      <my_applicants_card v-for="(i,index) in employees[index]"
      :key="index"
      >
        <p slot="name">姓名：{{i.name}}</p>
        <p slot="gender">性别：{{i.gender?'female':'male'}}</p>
        <p slot="birth">生日：{{i.birth}} </p>
        <p slot="experience">个人经历：{{i.experience}}</p>
        <p slot="education">教育： {{i.education}}</p>
      </my_applicants_card>
      </v-panel>

    </v-collapse>
  </div>

</template>

<script>
  import axios from 'axios'
  import my_applicants_card from "./cpn/my_applicants_card";
    export default {
        name: "myApplicants",
      data(){
        return {
          activeIndex:['1'],
          rec:[],
          employees:[]
        }
      },
      components:{
          my_applicants_card
      },
      created() {
        //先得到所有招聘信息的rec_id
        axios.get('/apis/getRecbyId', {
          params: {
            userid: this.GLOBAL.user_ID
          }
        }).then(
         /* res => {console.log(res)}*/
          res => {
            console.log(res.data)
            //保存招聘信息的id和title
            let index
            for (let index=0;index<res.data.length;index++) {
              this.rec.push({
                rec_id: res.data[index].rec_ID,
                rec_title: res.data[index].rec_Title
              })
            }


            //通过折叠板展示,要多次请求
            for(let i=0;i<this.rec.length;i++)
            {
              axios.get('/apis/getMyApplicants',{
                params:{
                  rec_id:this.rec[i].rec_id
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

          }
      ).catch(
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
#my_applicants{
  margin-left: 200px;
  margin-right: 200px;
}
</style>
