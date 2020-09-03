import request from '@/utils/request'

// 查询物业保修类型列表
export function listType(query) {
  return request({
    url: '/property/type/list',
    method: 'get',
    params: query
  })
}

// 查询物业保修类型详细
export function getType(id) {
  return request({
    url: '/property/type/' + id,
    method: 'get'
  })
}

// 新增物业保修类型
export function addType(data) {
  return request({
    url: '/property/type',
    method: 'post',
    data: data
  })
}

// 修改物业保修类型
export function updateType(data) {
  return request({
    url: '/property/type/edit',
    method: 'post',
    data: data
  })
}

// 删除物业保修类型
export function delType(id) {
  return request({
    url: '/property/type/' + id,
    method: 'delete'
  })
}

// 导出物业保修类型
export function exportType(query) {
  return request({
    url: '/property/type/export',
    method: 'get',
    params: query
  })
}