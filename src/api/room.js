import request from '@/utils/request'

export function createRoom({ roomNum, row, col }) {
  return request({
    url: '/seat/room/' + roomNum + '/' + row + '/' + col,
    method: 'post'
  })
}

export function getRoomList() {
  return request({
    url: '/seat',
    method: 'get'
  })
}

export function getRoom({ roomId }) {
  return request({
    url: '/seat/' + roomId,
    method: 'get'
  })
}

export function getRoomRep() {
  return request({
    url: '/seat/report',
    method: 'post'
  })
}
