<template>
  <div id="apply">
    <app_filter @filterclick="filterRec"></app_filter>
    <!--向card中直接传入一个对象-->
    <myCard v-for="(item,index) in this.list" :key="index" :rtitle="item.rec_Title"
            :rec_id="item.rec_ID">
      <p slot="salary">salary:{{item.rec_salary}}</p>
      <p slot="location">location:{{item.rec_Location}}</p>
      <p slot="cate">职位:{{item.rec_Cate}}</p>
      <p slot="desc">{{item.rec_Desc}}</p>
      <p slot="experience">经验：{{item.rec_Experience}}</p>
      <p slot="education">教育：{{item.rec_Education}}</p>
    </myCard>
   <!-- <Page :total="150" @on-change="change()"/>-->
    <Button type="primary" @click="change">More</Button>
  </div>
</template>

<script>
  import myCard from "./cpn/myCard";
  import app_filter from "./cpn/app_filter";
  import axios from 'axios'

  export default {
    name: "ApplyInfo",
    data() {
      return {
        list: [],
        current:0
      }
    },
    components: {
      myCard, app_filter
    },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
    created() {
      /*axios.get('/apis/get_jobs').then(
        res => {
          /!*this.GLOBAL.jobs_list=res*!/
          console.log(res)
          this.list = res.data


        }
      ).catch(
        err => {
          console.log(err)
        }
      )*/
      axios.get('/apis/get_jobs_page',{
        params:{
          page:0
        }
      }).then(
        res => {

          console.log(res)
          this.list=this.list.concat(res.data)
          console.log(this.list)

        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
    methods: {
      change(){
        this.current++
        axios.get('/apis/get_jobs_page',{
          params:{
            page:this.current
          }
        }).then(
          res => {

            console.log(res)
            this.list=this.list.concat(res.data)
            console.log(this.list)

          }
        ).catch(
          err => {
            console.log(err)
          }
        )
      },
      filterRec() {
        let tmp=this.$children[0].formItem
        console.log('?')
        axios.get('/apis/filt_jobs',
          {
            params: {
              salary:tmp.salary,
              cate:tmp.cate,
              location:tmp.location,
              title:tmp.title,
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
            console.log(err)
          }
        )

      }
    }
  }
</script>

<style scoped>
  #apply {
    margin-right: 200px;
    margin-left: 200px;

  }
</style>
