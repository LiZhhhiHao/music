<template>
  <div class="track">
    <h3 class="smtitle">歌曲列表</h3>
    <ul>
      <li v-for="(s, index) in item" :key="index" @click="getid(s.id)">
        <span>{{ index + 1 }}</span>
        <div>
          <p>{{ s.name }}</p>
          <p>{{ s.ar[0].name }}-{{ s.al.name }}</p>
        </div>
        <div class="simigo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <path
              d="m36.4 24.6c0 0 1.4 1.4 0 2.8-1.4 1.4-12.2 7-12.2 7s-5.2 3.6-5.2-.1c0-2.9 0-16.8 0-16.8s0-3.5 5.2 0l12.2 7.1"
            ></path>
            <path
              d="m26 2c13.2 0 24 10.8 24 24 0 13.2-10.8 24-24 24-13.2 0-24-10.8-24-24 0-13.2 10.8-24 24-24m0-2c-14.4 0-26 11.6-26 26 0 14.4 11.6 26 26 26 14.4 0 26-11.6 26-26 0-14.4-11.6-26-26-26z"
            ></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.track {
  .smtitle {
    background-color: #eeeff0;
    color: #666;
    font-size: 12px;
    padding: 5px 10px;
  }
  ul {
    li {
      width: 100%;
      display: flex;
      padding: 5px 8px;
      padding-left: 0px;
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      align-items: center;
      span {
        //   display: block;'
        width: 38px;
        text-align: center;
      }
      p {
        width: 280px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
        &:nth-of-type(2) {
          font-size: 12px;
          color: #999;
        }
      }
      .simigo {
        width: 39px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 20px;
          height: 20px;
          path {
            fill: #888;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  props: ["item"],
  data() {
    return {};
  },
  created() {
    // this.axios.get(`/song/detail?ids=${id}`)
  },
  methods: {
    getid(id) {
    //   console.log(id);
      this.$router.push({
        // name:"Searchresult",
        path: `/searchresult/${id}`,
        params: { id: id },
      });
    },
  },
};
</script>