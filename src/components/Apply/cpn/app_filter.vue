<template>
  <div>
    <Form :model="formItem" :label-width="80">
      <Row>
        <Col span="12">
          <FormItem label="Salary">
            <Input v-model="formItem.salary" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="Cate">
            <Input v-model="formItem.cate" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <FormItem label="Location">
            <Input v-model="formItem.location" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="Title">
            <Input v-model="formItem.title" placeholder="Enter something..."></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="Education">
        <Input v-model="formItem.education" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="Experience">
        <Input v-model="formItem.experience" maxlength="1000" show-word-limit type="textarea" placeholder="Enter something..." />
      </FormItem>

      <FormItem>
        <Button type="primary" icon="ios-search" @click="filter">Filter</Button>
      </FormItem>

    </Form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formItem: {
          salary: '',
          cate: '',
          location: '',
          title: '',
          education: '',
          experience: '',
        }
      }
    },
    created() {

    },
    methods:{
      filter(){
       this.$emit('filterclick')
      }
    }
  }
</script>


<style scoped>

</style>
