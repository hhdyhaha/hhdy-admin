<template>
  <div class="h-full">
    <el-container class="h-full">
      <el-aside width="20%" class="bg-blue-100">
        <div class="w-full h-[60px] bg-amber-500 flex justify-center items-center">
          侧边栏
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
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px !important;
}
</style>