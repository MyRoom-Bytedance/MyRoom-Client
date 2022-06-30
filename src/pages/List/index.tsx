import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getHomeList } from 'service/home';
import { Card } from 'antd-mobile';

function HomeCard({ home }: { home: Home }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        padding: '0 10px',
        marginBottom: '10px',
      }}
    >
      <Card title={home.listing_name} onClick={() => navigate(`/detail/${home.id}`)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <img src={home.image} style={{ height: '100px' }} alt="暂无图片" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <span>售价： {home.pricing} 万元</span>
            <span>面积： {home.squaremeter} 平方米</span>
            <span>户型： {home.floor_plan_room} 室 {home.floor_plan_hall} 厅</span>
            <span>楼层： {home.total_floor} 层</span>
          </div>
          <div></div>
        </div>
      </Card>
    </div>
  );
}

export default React.memo(() => {
  const [homeList, setHomeList] = useState<Array<Home>>([]);

  const getHome = async () => {
    const res = await getHomeList({
      offset: 0,
      size: 0,
    });
    setHomeList(res.data);
  }

  useEffect(() => {
    getHome();
  }, []);

  return <>
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eee',
      }}
    >
      { homeList.map((item) => <HomeCard home={item} key={item.id} />) }
    </div>
  </>;
});
