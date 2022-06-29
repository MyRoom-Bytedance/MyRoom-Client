/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:13:47
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:14:49
 * @FilePath     : \myroom-client\src\pages\Detail\index.tsx
 * @Description  : 房源详情页，需要设计组件和样式
 */

import { Grid, Toast } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ExecuteError from 'util/executeError';
import type { Home } from '../../service/home';
import { getHomeById } from '../../service/home';
const GridItem = Grid.Item;

export default React.memo(() => {
  const { id } = useParams<{ id: string }>();
  const [home, setHome] = useState<Home>({});
  const getInfo = async (id: number) => {
    try {
      const res: Home = (await getHomeById(id)).data;
      console.log(res);
      setHome(res);
    } catch (e) {
      Toast.show((e as ExecuteError).message);
    }
  };
  useEffect(() => {
    getInfo(Number(id));
  }, []);

  return (
    <>
      <Grid columns={1}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}
        >
          <span>我是房源图片</span>
        </div>
      </Grid>
      <Grid columns={1} style={{ padding: '0 10px', marginTop: 10 }}>
        <Grid columns={1}>
          <h3 style={{ margin: '5px 0' }}>{home.listing_name}</h3>
        </Grid>
        <Grid columns={2}>
          <GridItem>售价：{Number(home.pricing) / 1e6} 万</GridItem>
          <GridItem>挂牌：{home.first_upload_at?.substring(0, 10)}</GridItem>
          <GridItem>
            房型：{home.floor_plan_room} 室 {home.floor_plan_hall} 厅
          </GridItem>
          <GridItem>装修：精装修</GridItem>
          <GridItem>面积：{Number(home.squaremeter) / 100} 平方米</GridItem>
          <GridItem>楼型：{home.total_floor} 层</GridItem>
          <GridItem>朝向：南侧</GridItem>
          <GridItem>年代：{home.first_upload_at?.substring(0, 4)}</GridItem>
        </Grid>
      </Grid>
      <Grid columns={1} style={{ padding: '0 10px', marginTop: 10 }}>
        <Grid columns={1}>
          <h3 style={{ margin: '5px 0' }}>小区介绍</h3>
        </Grid>
        <Grid columns={1}>
          <p style={{ margin: '5px 0' }}>
            我是小区介绍我是小区介绍我是小区介绍我是小区介绍我是小区介绍我是小区介绍我是小区介绍
          </p>
        </Grid>
      </Grid>
      <Grid columns={1} style={{ padding: '0 10px', marginTop: 10 }}>
        <Grid columns={1}>
          <h3 style={{ margin: '5px 0' }}>业主点评</h3>
        </Grid>
        <Grid columns={1}>
          <GridItem>业主点评1</GridItem>
          <GridItem>业主点评2</GridItem>
          <GridItem>业主点评3</GridItem>
          <GridItem>业主点评4</GridItem>
        </Grid>
      </Grid>
    </>
  );
});
