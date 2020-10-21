import request from '@/utils/request'

// 查询会议室预定列表
export function listOrder(query) {
  return request({
    url: '/share/order/list',
    method: 'get',
    params: query
  })
}

// 查询会议室预定详细
export function getOrder(id) {
  return request({
    url: '/share/order/' + id,
    method: 'get'
  })
}

// 新增会议室预定
export function addOrder(data) {
  return request({
    url: '/share/order',
    method: 'post',
    data: data
  })
}

// 修改会议室预定
export function updateOrder(data) {
  return request({
    url: '/share/order/edit',
    method: 'post',
    data: data
  })
}

// 删除会议室预定
export function delOrder(id) {
  return request({
    url: '/share/order/' + id,
    method: 'delete'
  })
}

// 导出会议室预定
export function exportOrder(query) {
  return request({
    url: '/share/order/export',
    method: 'get',
    params: query
  })
}