import React from 'react';
import { useNavigate, Outlet } from 'react-router';

export default React.memo(() => {
  return <>
    <div>
      111
      <Outlet />
    </div>
  </>;
});
