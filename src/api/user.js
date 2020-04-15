import request from '@/utils/request'

export function login({ username, password }) {
  return request({
    url: '/user/login',
    method: 'post',
    params: {
      username,
      password
    }
  })
}

export function createUser(user) {
  return request({
    url: '/user',
    method: 'post',
    data: user
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function getUserList() {
  return request({
    url: '/user',
    method: 'get'
  })
}

export function getUser(userId) {
  return request({
    url: '/user/' + userId,
    method: 'get'
  })
}

export function modifyUser(user) {
  return request({
    url: '/user',
    method: 'put',
    data: user
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
