import request from '@/utils/request'

// 查询新闻信息列表
export function listDetail(query) {
  return request({
    url: '/news/detail/list',
    method: 'get',
    params: query
  })
}

// 查询新闻信息详细
export function getDetail(id) {
  return request({
    url: '/news/detail/' + id,
    method: 'get'
  })
}

// 新增新闻信息
export function addDetail(data) {
  return request({
    url: '/news/detail',
    method: 'post',
    data: data
  })
}

// 修改新闻信息
export function updateDetail(data) {
  return request({
    url: '/news/detail/edit',
    method: 'post',
    data: data
  })
}

// 删除新闻信息
export function delDetail(id) {
  return request({
    url: '/news/detail/' + id,
    method: 'delete'
  })
}

// 导出新闻信息
export function exportDetail(query) {
  return request({
    url: '/news/detail/export',
    method: 'get',
    params: query
  })
}