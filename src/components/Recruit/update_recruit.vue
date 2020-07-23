<!--
修改招聘信息
能不能重复使用之前的组件？
不能将之前招聘信息的信息填上去
-->
<template>
  <div id="new_recruit">
    <h2 style="text-align: center">修改招聘信息</h2>
    <Form :model="formItem" :label-width="80">
      <Row>
        <Col span="12">
          <FormItem label="Title">
            <Input v-model="formItem.title" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Schedule">
            <Input v-model="formItem.schedule" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="Salary">
            <Input v-model="formItem.salary" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Location">
            <Input v-model="formItem.location" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="Cate">
            <Input v-model="formItem.cate" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Quote">
            <Input v-model="formItem.quote" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Desc">
        <Input v-model="formItem.desc" placeholder="Enter something..."></Input>
      </FormItem>

      <Row>
        <Col span="12">
          <FormItem label="Experience">
            <Input v-model="formItem.experience" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Education">
            <Input v-model="formItem.education" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>

  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        formItem: {
          salary: '',
          location:'',
          title:'',
          schedule:'',
          cate:'',
          quote:'',
          desc:'',
          experience:'',
          education:''

        }
      }
    },
/*  props:{
    formItem:{
      salary: '',
      location:'',
      title:'',
      schedule:'',
      cate:'',
      quote:'',
      desc:'',
      experience:'',
      education:''
    }
  },*/
    methods:{
      //修改招聘信息
      //rec_id从vuex里找
      handleSubmit(){
        let tmp=this.formItem
        axios.get('/apis/update_rec',{
          params:{
            rec_ID:this.$store.state.rec_on_changing.rec_ID,
            user_ID:this.GLOBAL.user_ID,
            rec_Salary:tmp.salary,
            rec_Location:tmp.location,
            rec_TimeSchedule:tmp.schedule,
            rec_Title:tmp.title,
            rec_Cate:tmp.cate,
            rec_Enrolled:'2',
            rec_Quota:tmp.quote,
            rec_Desc:tmp.desc,
            rec_Experience:tmp.experience,
            rec_Education:tmp.education
          }
        }).then(
          res => {
            console.log(res);
            this.$router.replace('my_recruit_info')
          }

        ).catch(
          err => {
            console.log(err);
          }
        )

      }
    }
  }
</script>
<style scoped>
  #new_recruit{
    margin-right: 200px;
    margin-left: 200px;
  }

</style>
