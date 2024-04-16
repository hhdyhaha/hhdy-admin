<template>
  <div class="h-full">
    <el-container class="h-full">
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="w-full h-[60px] bg-amber-500 flex justify-center items-center">
          侧边栏
        </div>
        <div class="h-[calc(100%-90px)] bg-amber-800">
          <Sidebar></Sidebar>
        </div>
        <div class="w-full h-[30px] flex items-center pl-2.5 cursor-pointer" @click="isFold">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="点击折叠"
              placement="right"
              v-if="isCollapse===false"
          >
            <el-icon><Fold/></el-icon>

          </el-tooltip>
          <el-tooltip
              class="box-item"
              effect="dark"
              content="点击展开"
              placement="right"
              v-else
          >
            <el-icon><Expand/></el-icon>
          </el-tooltip>

        </div>
      </el-aside>
      <el-container class="w-4/5">
        <el-header class="flex justify-start items-center bg-blue-50">
          <div class="w-1/2 h-full bg-blue-300 flex items-center">
            首页
          </div>
          <div class="w-1/2 h-full bg-amber-500 flex justify-end items-center">
            用户名
          </div>
        </el-header>
        <el-main class="w-full h-full bg-blue-200">
          <div class="bg-amber-100">
            Hello world!
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Fold, Expand} from '@element-plus/icons-vue'
import Sidebar from './components/Sidebar/index.vue'

const isCollapse = ref<boolean>(false)
const isFold = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px !important;
}
</style>