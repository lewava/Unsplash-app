<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <div class="gallery" v-else>
      <div>
        <img
          @click="page--"
          class="arrow left"
          src="@/assets/left-arrow.png"
          alt="left-arrow"
        />
      </div>
      <div class="container">
        <div
          class="picture-container"
          v-for="picture in pictures"
          :key="picture.id"
          @click="lightbox"
        >
          <img class="pictures" :src="picture.urls.full" alt="picture" />
        </div>
      </div>
      <div>
        <img
          @click="page++"
          class="arrow right"
          src="@/assets/right-arrow.png"
          alt="right-arrow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as API from "@/api";

export default {
  name: "Gallery",
  props: ["data"],
  data() {
    return {
      pictures: null,
      page: 1,
      loading: true,
    };
  },
  async created() {
    this.pictures = await API.getPictures(this.data, this.page);
    this.loading = false;
  },
  async updated() {
    this.pictures = await API.getPictures(this.data, this.page);
  },
  methods: {
    lightbox(event) {
      this.$store.dispatch("setUrl", event.target.src);
      this.$router.push("/lightbox");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 34px;
  margin-top: 80px;
}
.gallery {
  display: flex;
  align-items: center;
}
.container {
  display: grid;
  grid-template-columns: repeat(5, 230px);
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
}
.pictures {
  width: 230px;
  height: 230px;
  border: 2px solid rgb(39, 39, 39);
  border-radius: 10px;
  cursor: pointer;
}
.arrow {
  width: 70px;
  cursor: pointer;
}
.left {
  margin-right: 40px;
}
.right {
  margin-left: 40px;
}
</style>
