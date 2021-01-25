<template>
  <div class="test" style="">
    <adapt-container>
      <template v-slot:stable>
        123wewew
      </template>
      <template v-slot:dymic>
        567ewccc
      </template>
    </adapt-container>
  </div>
</template>

<style lang="scss" >
body {
  margin: 0 !important;
  padding: 0 !important;
}
.test {
  height: 100vh;
  border: 1px solid gray;
  box-sizing: border-box;
}
</style>