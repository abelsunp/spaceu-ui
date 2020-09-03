import request from '@/utils/request'

// 查询物业保修列表
export function listProperty(query) {
  return request({
    url: '/property/property/list',
    method: 'get',
    params: query
  })
}

// 查询物业保修详细
export function getProperty(id) {
  return request({
    url: '/property/property/' + id,
    method: 'get'
  })
}

// 新增物业保修
export function addProperty(data) {
  return request({
    url: '/property/property',
    method: 'post',
    data: data
  })
}

// 修改物业保修
export function updateProperty(data) {
  return request({
    url: '/property/property/edit',
    method: 'post',
    data: data
  })
}

// 删除物业保修
export function delProperty(id) {
  return request({
    url: '/property/property/' + id,
    method: 'delete'
  })
}

// 导出物业保修
export function exportProperty(query) {
  return request({
    url: '/property/property/export',
    method: 'get',
    params: query
  })
}
