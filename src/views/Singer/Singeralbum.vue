<template>
  <div class="sialbum">
    <ul>
      <li
        v-for="(sia, index) in sialbum"
        :key="index"
        @click="gotoalbum(sia.id)"
      >
        <a>
          <img :src="sia.picUrl" />
          <div>
            <p>{{ sia.name }}</p>
            <p>{{ sia.size }}首</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.sialbum {
  padding: 10px;
  li {
    margin: 10px 0;
    a {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        width: 30%;
        border-radius: 10px;
      }
      div {
        margin-left: 20px;
        p {
          text-align: left;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "Singeralbum",
  data() {
    return {
      id: 0,
      sialbum: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    //   console.log(this.id);
    this.axios.get(`/artist/album?id=${this.id}`).then((data) => {
      console.log(data);
      this.sialbum = data.data.hotAlbums;
      console.log(this.sialbum);
    });
  },
  methods: {
    gotoalbum(id) {
      this.$router.push({
        path: `/albumdetail/${id}`,
      });
    },
  },
};
</script>