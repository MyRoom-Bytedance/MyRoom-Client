/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 19:46:43
 * @FilePath     : \myroom-client\src\components\NotFound.tsx
 * @Description  : 路由不匹配时的失败占位
 */

import React from 'react';
import { useNavigate } from 'react-router';
import { Button, ErrorBlock } from 'antd-mobile';

/**
 * 路由不匹配时的失败占位
 */
export const NotFound = React.memo(() => {
  const navigate = useNavigate();

  return (
    <ErrorBlock status="empty" title="404" description="你来到了无人区">
      <Button size="small" color="primary" onClick={() => navigate(-1)}>
        返回
      </Button>
    </ErrorBlock>
  );
});
