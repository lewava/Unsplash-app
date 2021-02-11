<template>
  <div class="home">
      <Title />
      <Search @searchData="getData"/>
      <Gallery v-if="data.length" :data="data"/>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Search from "../components/Search.vue";
import Gallery from '../components/Gallery.vue';

export default {
  name: "Home",
  components: { Title, Search, Gallery },
  data() {
    return {
      data: '',
    }
  },
  methods: {
    getData(value) {
      this.data = value;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
