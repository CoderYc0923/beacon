<script setup>
//hooks


onMounted(() => {
  
});

//data
const router = useRouter();
const title = ref("Welcome to BeaconTest");

//func
const toHome = () => {
    router.push('/')
}

</script>

<template>
  <div><span class="title" @click="toHome">{{ title }}</span></div>
  <div>
    
  </div>
</template>

<style scoped lang="scss">
$baseColor: aquamarine;
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
</style>
