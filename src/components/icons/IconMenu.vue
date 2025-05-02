<script setup lang="ts">
const props = withDefaults(defineProps<{ size?: number }>(), {
  size: 32,
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Material Symbols Light by Google - https://github.com/google/material-design-icons/blob/master/LICENSE -->
    <path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" />
  </svg>
</template>
