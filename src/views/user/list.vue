<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="phone" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column label="studentNum" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.studentNum }}
        </template>
      </el-table-column>
      <el-table-column label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.role | statusFilter">{{ roleSwitch(scope.row.role) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="status" label="status" width="200">
        <template slot-scope="scope">
          <span>{{ statusSwitch(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <!-- <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button> -->
          <el-button type="text" size="small" @click="modify(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserList } from '@/api/user'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  computed: {
    roleSwitch() {
      return function(role) {
        if (role === 0) { return '普通用户' }
        if (role === 1) { return '管理员' }
        if (role === 2) { return '超级管理员' }
      }
    },
    statusSwitch() {
      return function(status) {
        if (status === 0) { return '停用' }
        if (status === 1) { return '启用' }
        if (status === -1) { return '黑名单' }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getUserList().then(response => {
        this.list = response.data.list
        this.listLoading = false
      })
    },
    modify(userId) {
      this.$router.push({ path: '/user/modify', query: { userId: userId }})
    }
  }
}
</script>
