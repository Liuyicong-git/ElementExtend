<template>
  <div class="adapt-container">
    <div class="adapt-container__box">
      <slot name="stable"></slot>
    </div>
    <div class="adapt-container__box box-auto">
      <slot name="dymic"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "adapt-container",
};
</script>

