<template>
<div class="main">
  <div class="linkBox">
    <!--登录用户信息-->
    <el-popover width="300">
      <!--用户头像-->
      <template #reference>
        <el-link :underline="false">
          <img src="@/assets/default_avatar.png" style="width: 40px; border-radius: 50px">
          <span>Admin</span>
        </el-link>
      </template>
      <!--用户头像-->

      <!--用户信息-->
      <template #default>
        <div style="display: flex; gap: 16px;flex-direction: column">
          <div class="info-card">
            <img src="@/assets/default_avatar.png">
            <p>用户名：Admin</p>
            <p>Email: 111111@qq.com</p>
            <p>注册时间: 2024-8-30</p>
          </div>
          <div class="info-card-desc" style="margin: 0;">
            <div style="float: left; width: 75px; padding: 10px;border-right: 1px;text-align: center">
              <p>待定内容</p>
            </div>
          </div>
        </div>
      </template>
      <!--用户信息-->
    </el-popover>
    <!--登录用户信息-->

    <!--退出系统-->
    <el-popconfirm confirm-button-text="确认" cancel-button-text="取消" :icon="SwitchButton"
    icon-color="#30bcd7" title="确认退出系统吗？">
      <template #reference>
        <el-link :underline="false">
          <el-icon>
            <SwitchButton/>
          </el-icon>
        </el-link>
      </template>
    </el-popconfirm>
    <!--退出系统-->
  </div>
</div>
</template>

<script setup lang="ts">
import {SwitchButton} from "@element-plus/icons-vue";
</script>

<style scoped>

</style>