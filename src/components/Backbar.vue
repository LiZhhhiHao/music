<template>
  <div class="backbar">
    <a class="back" @click="goback">
      <svg
        t="1613835183597"
        class="icon"
        viewBox="0 0 1159 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2149"
        width="30"
        height="30"
      >
        <path
          d="M512 0L0 512l512 512L660.54321 874.403292 403.489712 617.349794h756.411523v-210.699588H403.489712l257.053498-258.106996L512 0z"
          p-id="2150"
        ></path>
      </svg>
    </a>
    <a class="home" @click="gohome">
      <svg t="1614178686891" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2180" width="30" height="30"><path d="M886.976 387.904l-362.666667-256a21.354667 21.354667 0 0 0-24.618666 0l-362.666667 256A21.376 21.376 0 0 0 128 405.333333v469.333334a21.333333 21.333333 0 0 0 21.333333 21.333333h234.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V618.666667h213.333334v256a21.333333 21.333333 0 0 0 21.333333 21.333333h234.666667a21.333333 21.333333 0 0 0 21.333333-21.333333V405.333333a21.376 21.376 0 0 0-9.024-17.429333z" fill="#646464" p-id="2181"></path></svg>
    </a>
  </div>
</template>
<style lang="less">
.backbar{
  width: 100%;
  text-align: left;
}
     .back {
    margin: 10px 20px;
    display: inline-block;
    svg {
      z-index: 99;
      path {
        fill: rgba(13, 233, 167, 0.787);
      }
    }
  }
     .home {
    float: right;
    margin: 10px 20px;
    display: inline-block;
    svg {
      z-index: 99;
      path {
        fill: rgba(13, 233, 167, 0.787);
      }
    }
  }
</style>
<script>
export default {
     methods: {
    goback() {
      this.$router.back();
    },
    gohome() {
      this.$router.push({
        path:`/`,

      });
    },
  },
}
</script>