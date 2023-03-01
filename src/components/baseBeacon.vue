<script setup>
import { onMounted, ref, watch } from "vue";
import dataList from "../dataList.js";
import hoverAnimation from '../utils/hoverAnimation.js'

//hooks
defineProps({
  msg: String,
});

watch(
  () => {
    return [...dataList];
  },
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    console.log(newValue.length % 3);
    if (newValue.length % 3 === 2) {
      isShow = true;
      console.log(isShow);
    }
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  setHover();
});

//data
const title = ref("Welcome to Beacon");
var isShow = ref(false);

//func
const setHover = () => {
  let boxs = document.querySelectorAll(".list-item");
  boxs.forEach((item) => {
    let hoverAni = new hoverAnimation(item);
    /* hoverAni.setStyle('red'); */
    hoverAni.create();
  });
};
</script>

<template>
  <div><span class="title">{{ title }}</span></div>
  <ul class="link-list">
    <li class="list-item" v-for="(item, index) in dataList" :key="index">
      <a :href="item.link" target="_blank">{{ item.name }}</a>
    </li>
    <li class="list-item space-box"></li>
  </ul>
</template>

<style scoped lang="scss">
$baseColor: aquamarine;
@mixin flexCol {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@mixin flexRow {
  display: flex;
  align-items: center;
}
@mixin baseHover {
  cursor: pointer;
  color: $baseColor;
}

.title {
  font-weight: bold;
  font-size: 3.2rem;
}
.title:hover {
  @include baseHover();
}
.link-list {
  @include flexRow();
  justify-content: space-between;
  flex-wrap: wrap;
  .list-item {
    @include flexRow();
    justify-content: center;
    width: 366px;
    height: 196px;
    border-radius: 20px;
    margin-bottom: 30px;
    background-color: #252529;
    font-size: 24px;

    a {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 196px;
      z-index: 999;
    }
    a:hover {
      color: #ffffff;
      cursor: pointer;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 500px;
    background-color: #916968;
  }

  /* .list-item:hover {
    @include baseHover();
    a {
      @include baseHover();
    }
  } */
  .space-box {
    opacity: 0;
  }
}
</style>
