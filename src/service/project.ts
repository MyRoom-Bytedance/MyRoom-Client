import request from './axios';

export const getActiveProject = (id: number) => {
  return request<Project>({
    url: `/project/details/${id}`,
    method: 'GET',
  });
}