<template>
  <v-card id="card" title=" " @mouseleave.native="changeShow" @mouseenter.native="changeShow">
    <slot name="name"></slot>
    <slot name="gender"></slot>
    <slot name="birth"></slot>
    <Divider />
    <slot name="experience"></slot>
    <slot name="education"></slot>
    <div slot="extra" v-show="isShow">
      <v-button type="primary" >招聘</v-button>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "employee_card",
    data: function() {
      return {
        isShow:false
      }
    },
    methods: {
      changeShow() {
        this.isShow = !this.isShow;
      },
    }
  }
</script>

<style scoped>

</style>
