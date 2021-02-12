<template>
  <div class="lightbox">
    <div class="top">
      <img @click="back" class="close" src="@/assets/close.png" alt="cross" />
    </div>
    <img class="picture" :src="getUrl" alt="picture" />
  </div>
</template>

<script>
export default {
  computed: {
    getUrl() {
      return this.$store.state.url;
    },
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.lightbox {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.close {
  width: 50px;
  cursor: pointer;
  margin: 15px 15px 50px 0;
}
.picture {
  width: 500px;
  height: 500px;
  border: 4px solid black;
}
</style>
