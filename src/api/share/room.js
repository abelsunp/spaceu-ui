import request from '@/utils/request'

// 查询共享会议室列表
export function listRoom(query) {
  return request({
    url: '/share/room/list',
    method: 'get',
    params: query
  })
}

// 查询共享会议室详细
export function getRoom(id) {
  return request({
    url: '/share/room/' + id,
    method: 'get'
  })
}

// 新增共享会议室
export function addRoom(data) {
  return request({
    url: '/share/room',
    method: 'post',
    data: data
  })
}

// 修改共享会议室
export function updateRoom(data) {
  return request({
    url: '/share/room/edit',
    method: 'post',
    data: data
  })
}

// 删除共享会议室
export function delRoom(id) {
  return request({
    url: '/share/room/' + id,
    method: 'delete'
  })
}

// 导出共享会议室
export function exportRoom(query) {
  return request({
    url: '/share/room/export',
    method: 'get',
    params: query
  })
}