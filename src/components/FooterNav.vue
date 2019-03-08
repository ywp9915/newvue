<template>
  <div id="footer-nav">
    <!-- <ul> -->
    <!-- <li> -->
    <router-link to="/" tag="div" exact-active-class="active" exact>
      <i class="fa fa-home" aria-hidden="true"></i>
      <span class="tab-label">首页</span>
    </router-link>
    <!-- </li>
            <li> -->
    <router-link to="/user/order" tag="div" exact-active-class="active">
      <i class="fa fa-bars" aria-hidden="true"></i>
      <span class="tab-label">订单</span>
    </router-link>
    <!-- </li>
            <li> -->
    <router-link to="/user" tag="div" exact-active-class="active">
      <i class="fa fa-user" aria-hidden="true"></i>
      <span class="tab-label">我的</span>
    </router-link>
    <!-- </li> -->
    <!-- </ul> -->
  </div>
</template>

<script>
export default {
  name: "FooterNav",
  data() {
    return {
      list: [
        { link: "/", name: "首页", icon: "fa fa-universit" },
        { link: "/user/order", name: "订单", icon: "fa fa-bars" },
        { link: "/user", name: "我的", icon: "fa fa-user" }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
@import "../style/main.less";
#footer-nav {
  display: flex;
  flex-flow: column;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  .bottom(0);
  .left(0);
  .right(0);
  .h(50);
  box-sizing: border-box;
  border-top: 1px solid #e7e7e7;
  div {
    flex: 1;
    align-self: center;
    .h(50);
    color: #929292;
    .pd-top(5);
    i {
      display: block;
      .fs(20px);
      text-align: center;
      .mg(0, 0, 3, 0);
    }
    span {
      display: block;
      .fs(13px);
      text-align: center;
    }
  }
  .active {
    color: #fd3412 !important;
  }
}

</style>
