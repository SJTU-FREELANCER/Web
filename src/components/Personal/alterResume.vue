<!--
编辑我的简历
每个人只有一个简历
-->
<template>
  <div id="apply">
  <Form :model="formItem" :label-width="100">
    <FormItem label="真实姓名">
      <Input v-model="formItem.name" placeholder="Enter something..." style="width: 450px"></Input>
    </FormItem>

    <FormItem label="性别">
      <RadioGroup v-model="formItem.radio">
        <Radio label="male">Male</Radio>
        <Radio label="female">Female</Radio>
      </RadioGroup>
    </FormItem>
   <!-- <FormItem label="出生日期">
    <DatePicker type="date" placeholder="Select date" v-model="formItem.birth">

    </DatePicker>
  </FormItem>-->
     <FormItem label="出生日期">
   <Input type="date" placeholder="Select date" v-model="formItem.birth">
   </Input>

 </FormItem>
    <FormItem label="Experience">
      <RadioGroup v-model="formItem.experience">
        <Radio label="1">1年</Radio>
        <Radio label="2">2年</Radio>
        <Radio label="3">3年</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="Education">
      <RadioGroup v-model="formItem.education">
        <Radio label="no limit">不限</Radio>
        <Radio label="high school">高中以下</Radio>
        <Radio label="junior college">大专</Radio>
        <Radio label="graduate">本科</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem id="button">
      <Button type="primary" @click="handelSubmit">Submit</Button>
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
          name: '',
          select: '',
          radio: '',
          experience:'',
          education:'',
          birth:''
        }
      }
    },
    methods:{
      handelSubmit(){
        let tmp=this.formItem
        let gender=false
        /*let birth=tmp.birth.toString().substr(0,10)*/
        if(this.formItem.radio=='male') gender=true
        axios.get('/apis/alter_resume',{
          params:{
            user_id:this.GLOBAL.user_ID,
            name:tmp.name,
            gender:gender,
            birth:tmp.birth,
            experience:tmp.experience,
            education:tmp.education
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
  #date{
    text-align: center;
  }
#apply{
  margin-right: 200px;
  margin-left: 200px;
}
  #button{
    text-align: center;
  }
</style>
