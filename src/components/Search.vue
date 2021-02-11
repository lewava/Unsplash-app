<template>
  <div>
    <div class="input-container">
      <img src="@/assets/search.png" alt="icon" />
      <input type="text" placeholder="Search word..." @keyup.enter="search"  v-model="value"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    search() {
      this.$emit("searchData", this.value)
    }
  }
};
</script>

<style scoped>
.input-container {
  border: 1px solid #ddd;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
}
img {
  width: 25px;
  margin-left: 5px;
  margin-right: 5px;
}
input {
  width: 600px;
  outline: none;
  border: none;
}
</style>