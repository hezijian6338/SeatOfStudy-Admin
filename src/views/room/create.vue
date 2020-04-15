<template>
  <div class="app-container">
    <el-form ref="form" :model="room" label-width="120px">
      <el-form-item label="Activity roomNum">
        <el-input v-model="room.roomNum" />
      </el-form-item>
      <el-form-item label="Activity row">
        <el-input v-model="room.row" />
      </el-form-item>
      <el-form-item label="Activity col">
        <el-input v-model="room.col" />
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Confirm</el-button>
    </el-form>
  </div>
</template>

<script>
import { createRoom } from '@/api/room'

export default {
  data() {
    return {
      room: {
        roomNum: '',
        col: 0,
        row: 0
      }
    }
  },
  methods: {
    onSubmit() {
      // this.$message('submit!')
      createRoom(this.room).then(res => {
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

