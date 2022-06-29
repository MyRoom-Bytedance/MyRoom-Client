/**
 * @Author       : TagBug 1242135295@qq.com
 * @Date         : 2022-05-21 17:37:14
 * @LastEditors  : TagBug 1242135295@qq.com
 * @LastEditTime : 2022-05-21 18:27:03
 * @FilePath     : \myroom-client\src\redux\userSlice.ts
 * @Description  : 用户状态
 */

import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type UserState = {
  userCache: UserBaseInfo | null;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: 'user',
  initialState: {
    userCache: null,
  },
  reducers: {
    setUserCache: (state, action) => {
      if (state.userCache === null) {
        state.userCache = action.payload;
      } else {
        state.userCache = { ...state.userCache, ...action.payload };
      }
    },
    updateUserCacheToken: (state, action) => {
      if (state.userCache) {
        state.userCache.token = action.payload;
      }
    },
  },
});

export const { setUserCache, updateUserCacheToken } = userSlice.actions;
export const userReducer = persistReducer(
  {
    key: 'userCache',
    storage: storage,
  },
  userSlice.reducer
);
