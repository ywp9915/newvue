<template> </template>

<script>
export default {
  name: "Switch",
  mounted: function() {
    this.$store.commit("setUniacid", this.$route.params.uniacid);
    let goto = "/";
    if (this.$route.params.path) {
      goto = "/" + this.$route.params.path.replace("-", "/");
    }
    this.$router.replace(goto);
  }
};
</script>

<style scoped></style>
