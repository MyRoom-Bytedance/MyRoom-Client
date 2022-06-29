import ExecuteError from 'util/executeError';
import request from './axios';

export type Home = {
  id?: number;

  listing_name?: string;

  first_upload_at?: string;

  pricing?: string;

  squaremeter?: string;

  downpayment?: string;

  floor?: string;

  total_floor?: string;

  dict_house_id?: string;

  room_structure?: string;

  ladder_ration?: string;

  heating_type?: string;

  house_duration?: string;

  property_right?: string;

  mortgage?: string;

  usage_area?: string;

  floor_level?: string;

  facing_type?: string;

  decoration_type?: string;

  building_type?: string;

  built_year?: string;

  city_name?: string;

  city_code?: string;

  neighborhood_name?: string;

  neighborhood_source_code?: string;

  floor_plan_room?: string;

  floor_plan_hall?: string;

  floor_plan_bath?: string;

  floor_plan_kitchen?: string;

  house_type?: string;

  layout_type?: string;

  last_publish_time?: string;

  ownership?: string;

  right_property?: string;

  property_management_type?: string;

  elevator?: string;

  house_status?: string;

  online_house_status?: string;

  created_at?: string;

  updated_at?: string;

  data_source_id?: string;

  offline_code?: string;

  source_code?: string;

  start_version?: string;

  last_version?: string;

  crawl_id?: string;

  task_id?: string;

  house_card?: string;

  online_neighborhood_id?: string;

  online_city_id?: string;

  online_district_id?: string;

  online_area_id?: string;

  property_only?: string;

  property_certificate_period?: string;
};

/**
 * 注意request接收泛型参数，表示ServerResJSON.data的类型，当接口无返回data时，可以省略，这会让data类型为undefined
 * request第二个参数接收自定义的错误提示函数，若不传则使用默认的Toast.show
 * @param data 请求数据，类型可以就地定义
 */
export const getHomeById = (id: number) => {
  return request<Home>({
    url: '/home/',
    method: 'GET',
    params: {
      id,
    },
  });
};
