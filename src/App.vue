<script setup lang="ts">
import { RouterView } from 'vue-router'
import {setupPermission} from "@/plugins/permission";
setupPermission()
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">

</style>
