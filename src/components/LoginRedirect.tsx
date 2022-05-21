/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:17:12
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 19:20:31
 * @FilePath     : \myroom-client\src\components\LoginRedirect.tsx
 * @Description  : 登录检查
 */

import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "redux/store";

/**
 * 检查登录状态
 */
export const LoginRedirect = () => {
    // TODO: 这里检查逻辑比较简单，日后修改
    let userCache = useSelector<RootState>(state => state.user.userCache);
    console.log({ userCache: userCache })

    return <Navigate to={userCache ? '/client' : '/login'} />
}