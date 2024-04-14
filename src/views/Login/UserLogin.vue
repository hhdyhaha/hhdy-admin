<template>
  <div class="w-full h-full flex justify-center items-center  bg-[url('../assets/bgpic.jpeg')] bg-cover">
    <div class="w-1/2 h-1/2 flex justify-center items-center flex-wrap">
      <div class="w-full h-1/6 bg-blue-50 flex justify-center items-center">
        hhdy
      </div>
      <div class="w-full h-4/6 bg-blue-100 flex justify-center items-center">
        <el-form ref="formRef" :model="form" :rules="rules" label-width="auto" style="max-width: 600px">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" :prefix-icon="User"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="form.password" type="password" placeholder="请输入密码" show-password :prefix-icon="Lock"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="w-full h-1/6 flex justify-center items-center bg-blue-200">
        <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
import {User, Lock} from '@element-plus/icons-vue'
import type {FormInstance, FormRules} from 'element-plus'
import {useRouter} from 'vue-router'
import {loginApi} from "@/api/login";
import type {LoginData} from "@/api/login/types";

const router = useRouter();

interface RuleForm {
  username: string
  password: string
}

const formRef = ref<FormInstance>()
const form = reactive<RuleForm>({
  username: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
    {min: 3, max: 5, message: '用户名为3到5位', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 16, message: '密码为8到16位', trigger: 'blur'},
  ],
})


const onSubmit = async (formRef: FormInstance | undefined) => {
  if (!formRef) return
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log('form.username!', typeof form.username)
      const params = {
        username: form.username,
        password: form.password
      }
      login(params)
      console.log('登录成功')
      // router.push({
      //   name: 'home'
      // })
    } else {
      console.log('错误提交!', fields)
    }
  })
}

// 登录
const login = async (data: LoginData) => {
  await loginApi(data).then((res) => {
    console.log('res',res)
    if(res.status===200){
      const data = res.data.data
      console.log('data',data)
      if(data.accessToken){
        localStorage.setItem('accessToken',data.accessToken)
        router.push({
          name: 'home'
        })
      }
    }

  }).catch((err) => {
    console.log('err',err)
  })
}

</script>

<style scoped lang="scss">

</style>