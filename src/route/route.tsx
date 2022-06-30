/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:26:02
 * @FilePath     : \myroom-client\src\route\route.tsx
 * @Description  : 路由配置
 */

import React from 'react';
import { Navigate, RouteObject } from 'react-router';
import { NotFound } from 'components/NotFound';

// 由于React.lazy只支持默认导出，所以需要增加一层导出转换
const Activity = React.lazy(() => import('../pages/Activity'));
const Detail = React.lazy(() => import('../pages/Detail'));
const List = React.lazy(() => import('../pages/List'));
const Layout = React.lazy(() => import('../pages/Layout'));

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/list',
        element: <List />,
      },
      {
        path: 'activity',
        element: <Activity />,
      },
      {
        path: 'detail/:id',
        element: <Detail />,
      },
      {
        path: '',
        element: <Navigate to="./activity" />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
