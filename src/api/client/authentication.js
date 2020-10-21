import request from '@/utils/request'

// 查询注册人企业认证列表
export function listAuthentication(query) {
  return request({
    url: '/client/authentication/list',
    method: 'get',
    params: query
  })
}

// 查询注册人企业认证详细
export function getAuthentication(id) {
  return request({
    url: '/client/authentication/' + id,
    method: 'get'
  })
}

// 新增注册人企业认证
export function addAuthentication(data) {
  return request({
    url: '/client/authentication',
    method: 'post',
    data: data
  })
}

// 修改注册人企业认证
export function updateAuthentication(data) {
  return request({
    url: '/client/authentication/edit',
    method: 'post',
    data: data
  })
}

// 删除注册人企业认证
export function delAuthentication(id) {
  return request({
    url: '/client/authentication/' + id,
    method: 'delete'
  })
}

// 导出注册人企业认证
export function exportAuthentication(query) {
  return request({
    url: '/client/authentication/export',
    method: 'get',
    params: query
  })
}