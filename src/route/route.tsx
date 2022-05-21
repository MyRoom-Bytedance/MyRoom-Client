/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:26:02
 * @FilePath     : \myroom-client\src\route\route.tsx
 * @Description  : 路由配置
 */

import React from "react";
import { Navigate, RouteObject } from "react-router";
import { NotFound } from "components/NotFound";
import { LoginRedirect } from "components/LoginRedirect";

// 由于React.lazy只支持默认导出，所以需要增加一层导出转换
const Login = React.lazy(() => import('./PageLogin'));
const Activity = React.lazy(() => import('./PageActivity'));
const Detail = React.lazy(() => import('./PageDetail'));

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'client/',
                children: [
                    {
                        path: 'activity/:id',
                        element: <Activity />
                    },
                    {
                        path: 'detail/:id',
                        element: <Detail />
                    },
                    {
                        path: '',
                        element: <Navigate to="./activity/test" />
                    },
                    {
                        path: '*',
                        element: <NotFound />
                    }
                ]
            },
            {
                path: '',
                element: <LoginRedirect />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]