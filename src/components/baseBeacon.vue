<script setup>
import { onMounted, ref, watch } from "vue";
import dataList from "../dataList.js";

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
  hoverAnimation();
});

//data
const title = ref("Welcome to Beacon");
var isShow = ref(false);

//func
const hoverAnimation = () => {
  let boxs = document.querySelectorAll(".list-item");
  boxs.forEach((item) => {
    console.log("item", item);
    let spanBox;
    let inTime, outTime;
    let canIn = true;
    item.addEventListener("mouseenter", (e) => {
      console.log(1);
      if (canIn) {
        inTime = new Date().getTime();
        spanBox = document.createElement("span");
        item.appendChild(spanBox);
        let keyFramesIn = `@keyframes in {
      0% {
        
      }
      100% {
        width: 1200px;
        height: 1200px;
      }
    }`;
        let top = e.clientY - e.target.offsetTop;
        let left = e.clientX - e.target.offsetLeft;
        spanBox.style.top = top + "px";
        spanBox.style.left = left + "px";
        spanBox.style.position = "absolute";
        spanBox.style.width = 0 + "px";
        spanBox.style.height = 0 + "px";
        spanBox.style.transform = "translate(-50%, -50%)";
        spanBox.style.cursor = "pointer";
        spanBox.style["background-color"] = "#916968";
        spanBox.style["border-radius"] = "50%";
        spanBox.animate(
          [
            {
              width: 0,
              height: 0,
            },
            {
              width: 1200 + "px",
              height: 1200 + "px",
            },
          ],
          {
            duration: 100,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
        canIn = false;
      }
    });
    item.addEventListener("mouseleave", (e) => {
      console.log(2);
      outTime = new Date().getTime();
      let passTime = outTime - inTime;
      if (passTime < 500) {
        setTimeout(animationOut, 500 - passTime);
      } else {
        animationOut();
      }
      function animationOut() {
        let top = e.clientY - e.target.offsetTop;
        let left = e.clientX - e.target.offsetLeft;
        spanBox.style.top = top + "px";
        spanBox.style.left = left + "px";
        spanBox.animate(
          [
            {
              width: 1200 + "px",
              height: 1200 + "px",
            },
            {
              width: 0,
              height: 0,
            },
          ],
          {
            duration: 100,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
        canIn = true;
        if (canIn) {
          item.removeChild(spanBox);
        }
      }
      
      /* item.removeChild(spanBox);
      spanBox = null; */
    });
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
@keyframes in {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 1200px;
    height: 1200px;
  }
}
@keyframes out {
  0% {
    width: 1200px;
    height: 1200px;
  }
  100% {
    width: 0;
    height: 0;
  }
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
    position: relative;
    @include flexRow();
    justify-content: center;
    width: 366px;
    height: 196px;
    border-radius: 20px;
    margin-bottom: 30px;
    background-color: #252529;
    font-size: 24px;
    overflow: hidden;

    a {
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
