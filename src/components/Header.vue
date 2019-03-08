<template>
  <div id="header">
    <router-link to="/user">
      <i class="fa fa-user fa-fw" aria-hidden="true"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="less" scoped>
@import "../style/main.less";

#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  .h(44);
  background: linear-gradient(to right, #fec35d, #ff704e, #fd4324) !important;
  a{
    color: #fff;
    display: block;
    .fs(24px);
    .lh(44);
    .h(44);
    .w(44);
    float: right;
  }
  .fa-user {
    color: #fff;
    display: block;
    .fs(24px);
    .lh(44);
    height:100%;
    width:100%;
  }
}
</style>
