<template>
  <v-card title="Card title" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
    <div slot="extra" v-show="isShow">
      <v-button type="primary">编辑</v-button>
      <v-button type="danger">删除</v-button>
    </div>
  </v-card>
</template>
<script>
  export default {
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow(){
        this.isShow = !this.isShow;
      },
    }
  }
</script>
<style scoped>

</style>
