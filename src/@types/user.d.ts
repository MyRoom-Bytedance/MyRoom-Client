/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:17:19
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:18:31
 * @FilePath     : \myroom-client\src\@types\user.d.ts
 * @Description  : 用户对象的类型定义
 */

/**
 * 用户基础信息
 */
type UserBaseInfo = {
    autoLogin?: boolean,  // 自动登录功能使用
    token?: string,
    uid: string,
    nickname: string,
    avatar: string,
}

/**
 * 用户敏感信息
 */
type UserSensitiveInfo = {
    username: string,
    password: string,
}

/**
 * 完整用户信息
 */
type FullUserInfo = UserBaseInfo & UserSensitiveInfo;