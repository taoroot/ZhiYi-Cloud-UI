import request from '@/utils/request'
import { getToken } from '@/utils/auth'

var Authorization = 'BASIC ' + btoa('mall-admin:secret')

export function login(data, params) {
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    headers: {
      Authorization: Authorization
    },
    data: data,
    params: params
  })
}

export function getInfo() {
  return request({
    url: '/auth/oauth/check_token',
    method: 'get',
    params: {
      token: getToken()
    },
    headers: {
      Authorization: Authorization
    }
  })
}

export function loginPhone(params) {
  return request({
    url: '/login/phone',
    method: 'post',
    params
  })
}

export function getUserSocial() {
  return request({
    url: '/upms/user_socials',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/mall/logout',
    method: 'post'
  })
}

export function getUserProfile() {
  return request({
    url: '/upms/user_info',
    method: 'get'
  })
}

export function unbindUserSocial(id) {
  return request({
    url: `/upms/user_social/${id}`,
    method: 'delete'
  })
}

export function updateUser(data) {
  return request({
    url: `/upms/user_info`,
    method: 'put',
    data
  })
}

export function resetPassword(data) {
  return request({
    url: `/upms/user_password`,
    method: 'put',
    data
  })
}

export function getSms(data) {
  return request({
    url: `/upms/user_password`,
    method: 'put',
    data
  })
}
