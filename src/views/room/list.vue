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
      <el-table-column label="roomNumber" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.roomNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column label="seats" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.seats }}
        </template>
      </el-table-column>
      <el-table-column label="seatsCount" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.seatsCount }}
        </template>
      </el-table-column>
      <el-table-column label="seatsAvailable" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.seatsAvailable }}
        </template>
      </el-table-column>
      <el-table-column label="seatsUnavailabe" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.seatsUnavailabe }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ statusSwitch(scope.row.status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row.id)">查看</el-button>
          <!-- <el-button type="text" size="small" @click="modify(scope.row.id)">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getRoomList } from '@/api/room'

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
    statusSwitch() {
      return function(status) {
        if (status === 0) { return '待用' }
        if (status === 1) { return '启用' }
        if (status === -1) { return '维护' }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getRoomList().then(response => {
        this.list = response.data.list
        this.listLoading = false
      })
    },
    handleClick(roomId) {
      this.$router.push({ path: '/room/info', query: { roomId: roomId }})
    }
  }
}
</script>
