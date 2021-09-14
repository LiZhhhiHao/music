<template>
  <div class="simi">
    <h3>喜欢这首歌的人也听</h3>
    <ul>
      <li v-for="(simisongs, index) in item" :key="index" @click.stop="searchout(simisongs.id,3)">
        <img :src="`${simisongs.album.blurPicUrl}`" class="simipic" />
        <div>
          <p>{{ simisongs.name }}</p>
          <p>{{ simisongs.artists[0].name }}- {{ simisongs.album.name }}</p>
        </div>
        <div class="simigo" >
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
.simi {
  width: 100%;
  //   height: 380px;
  h3 {
    text-align: left;
    margin: 3vw 4vw;
  }
  li {
    width: 100%;
    display: flex;
    padding: 5px 8px;
    border-bottom: 1px solid #ccc;
    align-items: center;
    .simipic {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    p {
      width: 260px;
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
    .simigo{
        width: 39px;
        svg {
          path {
            fill: #888;
          }
        }
    }
  }
}
</style>
<script>
export default {
  props: ["item"],
  methods: {
      searchout(id,num){
       this.$router.push({
        // name:"Searchresult",
        path:`/searchresult/${id}`,
        params:{id:id,num:num},
      })
    }
  },
};
</script>