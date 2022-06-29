/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 17:37:44
 * @FilePath     : \myroom-client\src\@types\global.d.ts
 * @Description  : 全局通用类型
 */

/**
 * 服务端返回JSON
 */
type ServerResJSON<T = undefined> = {
  status: Number; // 状态码
  msg: string; // 提示信息
  data: T; // 自定义携带数据（可选），默认为Object类型
};
