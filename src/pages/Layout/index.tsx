import React from 'react';
import { useNavigate, Outlet } from 'react-router';
import { Tabs } from 'antd-mobile';
const Tab = Tabs.Tab;

export default React.memo(() => {
  const navigator = useNavigate();
  return <>
    <div
      style={{
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          paddingBottom: '45px',
        }}
      >
        <Outlet />
      </div>
      <div
        style={{
          width: '100%',
          height: 45,
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#fff',
        }}
      >
        <Tabs onChange={(key) => navigator(key)} >
          <Tab title="活动" key="activity" />
          <Tab title="房源" key="list" />
        </Tabs>
      </div>
    </div>
  </>;
});
