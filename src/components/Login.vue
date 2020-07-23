<!--
登录界面
-->
<template>
  <div>
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
        <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
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
    name: "Login",
    data() {
      return {
        formInline: {
          user: '',
          password: '',
          error: false
        },
        ruleInline: {
          user: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
          ]
        },
        userId: ''
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

        axios.get('/apis/login', {
          params:
            {
              username: this.formInline.user,
              password: this.formInline.password
            }
        }).then(
          res => {
            console.log(res)
            let status = res.data.status
            //error
            if (status == 0) {
              this.error = true
            }
            //admin
            else {
              if (status == 2) {
                this.error = false
                this.userId = res.data.user.user_ID
              }
              //user
              else if (status == 1) {
                this.error = false
                this.userId = res.data.user.user_ID

              }

              //存入全局变量
              this.GLOBAL.email = res.data.user.email
              this.GLOBAL.password = res.data.user.password
              this.GLOBAL.phone = res.data.user.phone
              this.GLOBAL.role = res.data.user.role
              this.GLOBAL.user_ID = res.data.user.user_ID
              this.GLOBAL.user_Name = res.data.user.user_Name
              this.$router.replace('/user/' + this.userId + '/home')
            }
          }
        ).catch(
          err => {
            console.log(err)
          })

      },
      handleRegister() {
        this.$router.replace('/register')
      }
    }
  }
</script>
<style scoped>
  #login {
    display: flow;
    position: absolute;
    top: 50%;
    left: 30%;

  }
</style>
