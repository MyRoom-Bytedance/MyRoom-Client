/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 18:13:47
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:14:49
 * @FilePath     : \myroom-client\src\pages\Detail\index.tsx
 * @Description  : 房源详情页，需要设计组件和样式
 */

import { Grid, Toast, Divider } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import ExecuteError from 'util/executeError';
import { LeftOutline } from 'antd-mobile-icons';
import { getHomeById } from '../../service/home';
const GridItem = Grid.Item;

export default React.memo(() => {
  const { id } = useParams<{ id: string }>();
  const [home, setHome] = useState<Home | null>(null);
  const navigate = useNavigate();

  const getInfo = async () => {
    try {
      const res: Home = (await getHomeById(Number(id))).data;
      console.log(res);
      setHome(res);
    } catch (e) {
      Toast.show((e as ExecuteError).message);
    }
  };

  useEffect(() => {
    getInfo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>
    {home?
      <>
        <Grid columns={1} style={{ display: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              padding: 3,
              backgroundColor: '#ddd',
              borderRadius: '50%',
            }}
            onClick={() => navigate(-1)}
          >
            <LeftOutline fontSize={24} />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              width: '100%',
              backgroundColor: '#eee',
            }}
          >
            <img src={home.image} alt="暂无房源图片" style={{ height: 200 }} />
          </div>
        </Grid>
        <Grid columns={1} style={{ padding: '0 10px', marginTop: 10 }}>
          <Grid columns={1}>
            <h2 style={{ margin: '5px 0' }}>{home.listing_name}</h2>
          </Grid>
          <Grid columns={2}>
            <GridItem style={{ marginTop: 10, fontSize: 18 }}><span>售价： {home.pricing} 万元</span></GridItem>
            <GridItem style={{ marginTop: 10, fontSize: 18 }}><span>户型： {home.floor_plan_room} 室 {home.floor_plan_hall} 厅</span></GridItem>
            <GridItem style={{ marginTop: 10, fontSize: 18 }}><span>面积： {home.squaremeter} 平方米</span></GridItem>
            <GridItem style={{ marginTop: 10, fontSize: 18 }}><span>楼层： {home.total_floor} 层</span></GridItem> 
          </Grid>
        </Grid>
        <Divider />
        <Grid columns={1} style={{ padding: '0 10px' }}>
          <Grid columns={1}>
            <h2>小区介绍</h2>
          </Grid>
          <Grid columns={1}>
            <p style={{ fontSize: 16 }}>
              {home.description}
            </p>
          </Grid>
        </Grid>
        {/* <Divider />
        <Grid columns={1} style={{ padding: '0 10px' }}>
          <Grid columns={1}>
            <h2>业主点评</h2>
          </Grid>
          <Grid columns={1}>
            <GridItem>业主点评1</GridItem>
            <GridItem>业主点评2</GridItem>
            <GridItem>业主点评3</GridItem>
            <GridItem>业主点评4</GridItem>
          </Grid>
        </Grid> */}
      </>:
      <><h1>loading...</h1></>
    }
  </>
});
