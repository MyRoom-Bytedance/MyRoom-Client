import React from 'react';
import { useNavigate, Outlet } from 'react-router';
import { Tabs } from 'antd-mobile';
const Tab = Tabs.Tab;

export default React.memo(() => {
  const navigator = useNavigate();
  return <>
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Outlet />
      <Tabs onChange={(key) => navigator(key)}>
        <Tab title="活动" key="activity" />
        <Tab title="房源" key="list" />
      </Tabs>
    </div>
  </>;
});
