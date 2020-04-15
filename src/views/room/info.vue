<template>
  <div class="main-contain">
    <div v-for="(row, index) of list" :key="index" class="row">
      <el-tag v-for="(col, index1) of splitSeat(row)" :key="index1" class="col" size="medium" :type="col === '1' ? 'danger' : 'success'">{{ seatStatus(col) }}</el-tag>
    </div>
  </div>
</template>

<script>
import { getRoom } from '@/api/room'

export default {
  data() {
    return {
      roomId: '',
      room: {},
      list: []
    }
  },
  computed: {
    splitSeat() {
      return function(row) {
        return row.replace(' ', '').split('')
      }
    },
    seatStatus() {
      return function(status) {
        return status === '1' ? '在座' : '空座'
      }
    }
  },
  mounted() {
    this.roomId = this.$route.query.roomId
    this.fetchData()
  },
  methods: {
    fetchData() {
      // this.listLoading = true
      getRoom({ roomId: this.roomId }).then(response => {
        this.room = response.data
        const { seats } = this.room
        console.log(seats)
        this.list = seats.replace(' ', '').replace('[', '').replace(']', '').split(',')
        console.log(this.list)
      })
    }
  }
}
</script>

<style scoped>
.main-contain {
  margin: 0 auto;
  width: 70vw;
}

.row {
  margin: 10px;
}

.col {
  margin: 20px;
}
</style>
