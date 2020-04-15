/**
 * Created by PanJiaChen on 16/11/18.
 */

// import { getAdminUsers } from '@/api/user'

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['140202011034']
  // getAdminUsers().then(res => {
  //   const { data } = res
  //   // console.log(data)
  //   data.forEach(user => {
  //     valid_map.push(user.studentNum)
  //   })
  // })
  // console.log(valid_map)

  // const valid_map = list
  return valid_map.indexOf(str.trim()) >= 0
}
