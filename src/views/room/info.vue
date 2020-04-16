<template>
  <div class="main-contain">
    <div v-for="(row, index) of list" :key="index" class="row">
      <el-tag v-for="(col, index1) of splitSeat(row)" :key="index1" class="col" size="medium" :type="col === '1' ? 'danger' : 'success'" @click="showLink(index, index1)">{{ seatStatus(col) }}</el-tag>
    </div>
    <qriously :value="link" :size="200" />
    <span>{{ link }}</span>
  </div>
</template>

<script>
import { getRoom } from '@/api/room'

export default {
  data() {
    return {
      roomId: '',
      room: {},
      list: [],
      link: ''
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
        console.log(this.room)
        this.list = seats.replace(' ', '').replace('[', '').replace(']', '').split(',')
        console.log(this.list)
      })
    },
    showLink(row, col) {
      this.$message('二维码已经修改并且展示~')
      this.link = 'http://localhost:8080?roomNumber=' + this.room.roomNumber + '&row=' + row + '&col=' + col
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
