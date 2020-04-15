<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">自习室情况: </div>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          自习室数量: {{ rep.roomsCount }}
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          座位数量: {{ rep.seatsCount }}
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          一共可用座位数量: {{ rep.availableSeats }}
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          已使用座位数量: {{ rep.unAvailableSeats }}
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getRoomRep } from '@/api/room'

export default {
  name: 'Dashboard',
  data() {
    return {
      rep: {
        availableSeats: 49,
        roomsCount: 3,
        seatsCount: 49,
        unAvailableSeats: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    getRoomRep().then(res => {
      const { data } = res
      this.rep = data
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
