<!--
新增招聘信息
-->
<template>
  <div id="new_recruit">
    <Form :model="formItem" :label-width="80">
      <Row>
        <Col span="12">
          <FormItem label="Title" id="title">
            <Input v-model="formItem.title" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Schedule" id="schedule">
            <Input v-model="formItem.schedule" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="Salary" id="salary">
            <Input v-model="formItem.salary" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Location" id="location">
            <Input v-model="formItem.location" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col span="12">
          <FormItem label="Cate" id="cate">
            <Input v-model="formItem.cate" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Quote" id="quote">
            <Input v-model="formItem.quote" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Desc" id="desc">
        <Input v-model="formItem.desc" placeholder="Enter something..."></Input>
      </FormItem>

      <Row>
        <Col span="12">
          <FormItem label="Experience" id="experience">
            <Input v-model="formItem.experience" placeholder="Enter something..."></Input>
          </FormItem>

        </Col>
        <Col span="12">
          <FormItem label="Education" id="education">
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
    inject: ['reload'],
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
    methods:{
      handleSubmit(){
        axios.get('/apis/create_job',{
          params:{
            userid:localStorage.getItem('user_ID'),
            salary: this.formItem.salary,
            location:this.formItem.location,
            title:this.formItem.title,
            schedule:this.formItem.schedule,
            cate:this.formItem.cate,
            quota:this.formItem.quote,
            desc:this.formItem.desc,
            exp:this.formItem.experience,
            edu:this.formItem.education
          },
          headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
          }
        }).then(
          res => {
            console.log(res);
          }
        ).catch(
          err => {
            console.log(err);
          }
        )
        this.$router.replace('my_recruit_info')
 /*       this.reload()*/
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
