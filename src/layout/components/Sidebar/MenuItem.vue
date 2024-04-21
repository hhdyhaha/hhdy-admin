<template>
  <template v-if="item.children">
    <el-sub-menu :index="item.path">
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem v-for="subChild in item.children" :key="subChild.path" :item="subChild" />
    </el-sub-menu>
  </template>
  <template v-else>
    <el-menu-item :index="item.path">
      <i :class="item.meta.icon"></i>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>
<script setup lang="ts">
const props = defineProps(["item"])

console.log('props', props.item)
</script>
<style scoped lang="scss">

</style>