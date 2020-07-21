<!--
新增招聘信息
-->
<template>
  <div id="new_recruit">
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
    methods:{
      handleSubmit(){
        axios.get('/apis/create_job',{
          params:{
            userid:this.GLOBAL.user_ID,
            salary: this.formItem.salary,
            location:this.formItem.location,
            title:this.formItem.title,
            schedule:this.formItem.schedule,
            cate:this.formItem.cate,
            quota:this.formItem.quote,
            desc:this.formItem.desc,
            exp:this.formItem.experience,
            edu:this.formItem.education
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
