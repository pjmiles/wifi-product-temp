<template>
    <button
      class="border font-medium rounded-full px-5 py-2.5 w-full md:w-auto text-center hover:bg-black hover:text-white transition"
      @click="handleClick"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true,
      },
    },
    methods: {
      handleClick() {
        this.$emit("click");
      },
    },
  };
  </script>
  