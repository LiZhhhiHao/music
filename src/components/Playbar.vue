<template>
  <div class="palybar">
    <!-- 播放条 -->
    <audio :src="{}"></audio>
    <a class="last">
      <svg
        t="1614508029430"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="655"
        width="20"
        height="20"
      >
        <path
          d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z"
          p-id="656"
        ></path>
      </svg>
    </a>
    <a class="play">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
        width="38"
        height="38"
      >
        <path
          d="m36.4 24.6c0 0 1.4 1.4 0 2.8-1.4 1.4-12.2 7-12.2 7s-5.2 3.6-5.2-.1c0-2.9 0-16.8 0-16.8s0-3.5 5.2 0l12.2 7.1"
        ></path>
        <path
          d="m26 2c13.2 0 24 10.8 24 24 0 13.2-10.8 24-24 24-13.2 0-24-10.8-24-24 0-13.2 10.8-24 24-24m0-2c-14.4 0-26 11.6-26 26 0 14.4 11.6 26 26 26 14.4 0 26-11.6 26-26 0-14.4-11.6-26-26-26z"
        ></path>
      </svg>
    </a>
    <a class="next">
      <svg
        t="1614508029430"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="655"
        width="20"
        height="20"
      >
        <path
          d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z"
          p-id="656"
        ></path>
      </svg>
    </a>
    <p class="playname">name</p>
    <a class="playsonglist">
      <i></i>
      <i></i>
      <i></i>
    </a>
  </div>
</template>
<style lang="less">
.palybar {
  width: 100%;
  height: 6%;
  position: fixed;
  bottom: 0;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .next {
    svg {
      transform: rotate(180deg);
      transform-origin: center;
    }
  }
  .playname {
    width: 60%;
  }
  .playsonglist {
    width: 10%;
    i {
      //   width: 10px;
      display: block;
      width: 60%;
      border: 1px solid #fff;
      margin-bottom: 2px;
      &:first-of-type {
        transform: rotate(45deg);
        transform-origin: center;
      }
      &:nth-of-type(2) {
        display: none;
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg);
        transform-origin: center;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
};
</script>