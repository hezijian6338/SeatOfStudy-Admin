<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity studentNum">
        <el-input v-model="form.studentNum" />
      </el-form-item>
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="Activity role">
        <el-select v-model="form.role" placeholder="please select your role">
          <el-option label="普通用户" value="0" />
          <el-option label="管理员" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity status">
        <el-select v-model="form.status" placeholder="please select your role">
          <el-option label="启用" value="1" />
          <el-option label="停用" value="0" />
          <el-option label="黑名单" value="-1" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Confirm</el-button>
        <!-- <el-button @click="onCancel">Cancel</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUser, modifyUser } from '@/api/user'

export default {
  data() {
    return {
      userId: '',
      form: {
        name: '',
        phone: '',
        role: 0,
        status: 0,
        studentNum: ''
      }
    }
  },
  mounted() {
    this.userId = this.$route.query.userId
    this.fetchData()
  },
  methods: {
    fetchData() {
      // this.listLoading = true
      getUser(this.userId).then(response => {
        this.form = response.data
        // this.listLoading = false
      })
    },
    onSubmit() {
      // this.$message('submit!')
      modifyUser(this.form).then(res => {
        const { message } = res
        this.$message(message)
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

