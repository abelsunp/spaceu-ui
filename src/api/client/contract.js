import request from '@/utils/request'

// 查询签约方合同列表
export function listContract(query) {
  return request({
    url: '/client/contract/list',
    method: 'get',
    params: query
  })
}

// 查询签约方合同详细
export function getContract(id) {
  return request({
    url: '/client/contract/' + id,
    method: 'get'
  })
}

// 新增签约方合同
export function addContract(data) {
  return request({
    url: '/client/contract',
    method: 'post',
    data: data
  })
}

// 修改签约方合同
export function updateContract(data) {
  return request({
    url: '/client/contract/edit',
    method: 'post',
    data: data
  })
}

// 删除签约方合同
export function delContract(id) {
  return request({
    url: '/client/contract/' + id,
    method: 'delete'
  })
}

// 导出签约方合同
export function exportContract(query) {
  return request({
    url: '/client/contract/export',
    method: 'get',
    params: query
  })
}