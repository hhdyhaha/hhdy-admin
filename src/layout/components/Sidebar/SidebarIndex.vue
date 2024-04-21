<template>
  <el-menu :default-active="activeIndex" class="menu" mode="vertical" @select="handleSelect">
    <template v-for="item in menuData" :key="item.path">
      <template v-if="item.children">
        <MenuItem :item="item" :key="item.path" />
      </template>
      <template v-else>
        <el-menu-item :index="item.path">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import {usePermissionStore} from "@/stores/modules/permission"
import {storeToRefs} from 'pinia'
import {ref} from "vue";
import MenuItem from './MenuItem.vue';

// 获取路由数据
const permissionStore = usePermissionStore()
const {routes} = storeToRefs(permissionStore)

const menuData = routes.value
const activeIndex = ref('/system/user'); // 默认选中的菜单项
const handleSelect = (index: string) => {
  activeIndex.value = index
}
</script>

<style scoped lang="scss">

</style>