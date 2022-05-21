/** 
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:13:47
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:14:49
 * @FilePath     : \myroom-client\src\pages\Detail\index.tsx
 * @Description  : 房源详情页，需要设计组件和样式
 */

import React from "react";
import { useParams } from "react-router";

export const Detail = React.memo(() => {
    const { id } = useParams<{ id: string }>();

    return <>房源详情页：{id}</>
});