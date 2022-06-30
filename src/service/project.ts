import request from './axios';

export const getActiveProject = () => {
  return request<Project>({
    url: `/project/active`,
    method: 'GET',
  });
}