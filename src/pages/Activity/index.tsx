/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:08:50
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:12:39
 * @FilePath     : \myroom-client\src\pages\Activity\index.tsx
 * @Description  : 活动页，根据路由传入的id从服务器获取低代码产物，并通过低代码编辑器解析生成
 */

import React, { useEffect } from 'react';
import { getActiveProject } from '../../service/project';
import GenernateProject from './GenernateProject';

type Project = {
  id: number;
  name: string;
  global?: any;
  components: any[];
  [key: string]: any;
};

export default React.memo(() => {
  const [project, setProject] = React.useState<Project | null>(null);
  const getProject = async () => {
    const res = await getActiveProject();
    setProject(JSON.parse(res.data.content));
  }
  useEffect(() => {
    getProject();
  }, []);

  return (
    project === null ? <div>loading</div> : (
      <GenernateProject data={project} />
    )
  );
});
