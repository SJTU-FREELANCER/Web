
<template>
  <div>
  <Form :model="formItem" :label-width="80">
    <FormItem label="Experience">
    <Input v-model="formItem.experience" placeholder="Enter something..." />
  </FormItem>
        <FormItem label="Education">
          <Input v-model="formItem.education" placeholder="Enter something..."></Input>
        </FormItem>

<FormItem>
  <Button type="primary" icon="ios-search" @click="filter">Filter</Button>
</FormItem>

  </Form>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        formItem: {
          education:'',
          experience: '',
        }
      }
    },
    methods:{
      filter(){
       this.$emit('filter')
      }
    },
    created() {

    }
  }
</script>


<style scoped>

</style>
