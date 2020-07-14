<template>
  <Form id="form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90">
    <FormItem label="用户名" prop="name">
      <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
    </FormItem>
    <FormItem label="Password" prop="password">
      <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
    </FormItem>
    <FormItem label="Phone" prop="phone">
      <Input v-model="formValidate.phone" placeholder="Enter your phone number"></Input>
    </FormItem>
    <FormItem label="E-mail" prop="mail">
      <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
    </FormItem>
<FormItem>
  <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
  <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
</FormItem>
  </Form>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          password:'',
          phone:'',
          mail: '',
          gender: '',
         /* role:''*/
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          password:[
            {
              required: true, message: 'The password cannot be empty', trigger: 'blur'
            }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          phone:[
            {required:true,message:'phone number cannot be empty',trigger:'blur'}
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ]
          /*role:[
            { required: true, message: 'Please select role', trigger: 'change' }
          ]*/
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style scoped>
#form{
  margin-right: 200px;
  margin-left: 200px;
}
</style>
