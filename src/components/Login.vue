<!--
登录界面
-->
<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline id="login">
      <FormItem prop="user" id="username"  >
        <Input   type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password" id="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button id="log"  type="primary" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleRegister">Register</Button>
      </FormItem>
<FormItem>
  <Checkbox v-model="admin">以管理员身份登录</Checkbox>
</FormItem>

    </Form>




  </div>
</template>
<script>

  import axios from 'axios'

  export default {
    name: "Login",
    data() {
      return {
        formInline: {
          user: '',
          password: '',
          error: false,
        },
        admin:false,
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

        axios.post('/apis/login', {

  username: this.formInline.user,
  password: this.formInline.password
}
        ).then(
          res => {
            console.log(res)
            if(res.data.msg=="登陆成功"){
              this.GLOBAL.token=res.data.token
              this.GLOBAL.userName=res.data.username
              localStorage.setItem('token',res.data.token)
              axios.get(
                '/apis/getUserbyUsername',{
                  params:{
                    username:this.GLOBAL.userName
                  },
                headers:{
                  Authorization:'Bearer '+this.GLOBAL.token
                }
                }
              ).then(
                res => {
                  console.log(res)
                  //存在localStorage中
                  localStorage.setItem('userName',res.data.userName)
                  localStorage.setItem('email',res.data.email)
                  localStorage.setItem('phone',res.data.phone)
                  localStorage.setItem('role',res.data.role)
                  localStorage.setItem('user_ID',res.data.user_ID)

                  //跳转
                 /* this.$router.replace('/user/'+res.data.user_ID)*/
                  if(this.admin==false) this.$router.push('/user');
                  else if(this.admin==true) this.$router.push('/admin')

                }
              ).catch(
                err => {
                  console.log(err)
                }
              )
              /*this.$router.replace('/user')*/
            }
            else if(res.data.msg=="登录失败")
            {

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
