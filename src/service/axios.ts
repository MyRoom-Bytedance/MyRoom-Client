/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 17:52:55
 * @FilePath     : \myroom-client\src\service\axios.ts
 * @Description  : 这里是二次封装的axios，请勿直接调用，参照./apiExample.ts
 */

import { Toast } from 'antd-mobile';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import ExecuteError from 'util/executeError';

// 设置全局axios默认值
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;
axios.defaults.baseURL = 'http://127.0.0.1:8000';

const responseInterceptor = (resp: AxiosResponse<any, any>) => {
  // 请求状态不是200，直接抛出异常
  if (resp.status !== 200) {
    throw new Error(resp.statusText);
  }
  return resp;
};

/**
 * 对axios的二次封装
 * @param option axios请求参数
 * @param errShower 错误信息回显函数，用于给用户显示错误，默认使用Toast.show
 * @throws 当业务不成功时抛出异常，errShower并不能捕获异常
 */
export default function request<T = Object>(
  option: AxiosRequestConfig<Object>,
  errShower: (msg: string) => unknown = Toast.show
) {
  // 新建一个axios实例
  const instance = axios.create();
  // 设置拦截器
  instance.interceptors.response.use(responseInterceptor);
  // 执行请求并对返回结果二次处理
  return instance(option)
    .then((resp) => resp.data)
    .then((data) => {
      let resJson = data as ServerResJSON<T>;
      // 业务处理结果不为200则抛出异常，注意200为数字类型
      if (resJson.status !== 200) {
        throw new ExecuteError(resJson.msg, resJson);
      }
      return resJson;
    })
    .catch((err) => {
      // 其他异常同一化为ExecuteError，并在控制台警告
      if (!(err instanceof ExecuteError)) {
        console.warn(err);
        errShower?.call(null, '网络拥堵，请稍后再试');
        throw new ExecuteError('网络拥堵，请稍后再试');
      }
      errShower?.call(null, err.message);
      throw err;
    });
}
