/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:26:08
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 19:21:51
 * @FilePath     : \myroom-client\src\index.tsx
 * @Description  : 入口
 */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { FallbackLoading } from './components/FallbackLoading';
import { routeConfig } from './route/route';
const Index = () => {
  return <Suspense fallback={<FallbackLoading />}>{useRoutes(routeConfig)}</Suspense>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  </React.StrictMode>
);
