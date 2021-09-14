<template>
  <div>
    <Sltrack :item="tracks"> </Sltrack>
  </div>
</template>
<style lang="less">
</style>
<script>
import Sltrack from "../../components/Sltrack.vue";
export default {
  name: "Singersong",
  data() {
    return {
      id: 0,
      tracks: [],
    };
  },
  components: {
    Sltrack,
  },
  created() {
    this.id = this.$route.params.id;
    this.axios.get(`artists?id=${this.id}`).then((data) => {
      //  console.log(data);
      this.tracks = data.data.hotSongs;
    //   console.log(this.tracks);
    });
  },
};
</script>