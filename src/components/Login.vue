<template>
  <div >
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="login">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')" >Signin</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleRegister">Register</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  import {request} from "../network/request";
  import axios from 'axios'
  export default {
    name:"Login",
    data () {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        },
        userId:'aaa'
      }
    },
    methods: {
      handleSubmit(name) {
        /*this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })*/
    /* request({
       url:'/login',
       params:{
         username:this.formInline.user,
         password:this.formInline.password
       }
     }).then(
       res => {
         console.log(res)
       }
     ).catch(
       err => {
         console.log(err)
       }
     )*/
    axios.get('/apis/login',{
      username:this.formInline.user,
      password:this.formInline.password
    }).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
          console.log(err)
      })
 /*      this.$router.replace('/user/'+this.userId+'/home')*/
      },
      handleRegister(){
        this.$router.replace('/register')
      }
    }
  }
</script>
<style scoped>
  #login{
    display: flow;
    position: absolute;
    top: 50%;
    left: 30%;

  }
</style>
