<template>
  <div class="Toplist">
    <Loading v-if="toplist.length == 0"></Loading>
    <ul class="tl_sl" v-if="toplist.length != 0">
      <Album v-for="sl in toplist" :key="sl.id" :item="{ sl, num: 1 }"></Album>
    </ul>
  </div>
</template>

<style lang="less">
.Toplist {
  padding-top: 30px;
  ul.tl_sl {
    // display: flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      flex: 20%;
      margin-bottom: 10px;
    }
  }
}
</style>
<script>
import Album from "../components/Album";
import Loading from "../components/Loading";
export default {
  name: "Toplist",
  data() {
    return {
      toplist: [],
    };
  },
  components: {
    Album,
    Loading,
  },
  created() {
    this.axios.get("toplist/detail").then((data) => {
      this.toplist = data.data.list;
      // console.log(data.data);
      // console.log(this.songlists);
    });
  },
};
</script>
