import request from './axios';

type HomeListRequset = {
  offset: number;
  size: number;
};

export const getHomeList = (params: HomeListRequset) => {
  return request<Array<Home>>({
    url: '/home/list',
    method: 'GET',
    params,
  });
};

export const getHomeById = (id: number) => {
  return request<Home>({
    url: `/home/details`,
    method: 'GET',
    params: { id },
  });
}