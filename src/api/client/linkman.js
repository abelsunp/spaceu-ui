import request from '@/utils/request'

// 查询签约方联系人列表
export function listLinkman(query) {
  return request({
    url: '/client/linkman/list',
    method: 'get',
    params: query
  })
}

// 查询签约方联系人详细
export function getLinkman(id) {
  return request({
    url: '/client/linkman/' + id,
    method: 'get'
  })
}

// 新增签约方联系人
export function addLinkman(data) {
  return request({
    url: '/client/linkman',
    method: 'post',
    data: data
  })
}

// 修改签约方联系人
export function updateLinkman(data) {
  return request({
    url: '/client/linkman/edit',
    method: 'post',
    data: data
  })
}

// 删除签约方联系人
export function delLinkman(id) {
  return request({
    url: '/client/linkman/' + id,
    method: 'delete'
  })
}

// 导出签约方联系人
export function exportLinkman(query) {
  return request({
    url: '/client/linkman/export',
    method: 'get',
    params: query
  })
}