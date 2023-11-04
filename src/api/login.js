import request from '../utils/request'



/**
 * 后面的每次请求都是需要携带token的
 */
export const userlogin= (userVO) => {
  return request({
    url: "api/sysAuth/login",
    method: 'post',
    data: userVO
  })
}

