/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:08:50
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:12:39
 * @FilePath     : \myroom-client\src\pages\Activity\index.tsx
 * @Description  : 活动页，根据路由传入的id从服务器获取低代码产物，并通过低代码编辑器解析生成
 */

import React from "react";
import { useParams } from "react-router";

export const Activity = React.memo(() => {
    const { id } = useParams<{ id: string }>();

    return <>活动页：{id}</>
});