import React, { useEffect, useState } from "react";
import { Card } from "antd-mobile";
import { getHomeById } from "service/home";
import { useNavigate } from "react-router";

enum COMPONENT_TYPE {
  Text = 'Text',
  Image = 'Image',
  HouseCard = 'HouseCard',
  Background = 'BackGround',
  Text_Droped = 'Text_Droped',
  Image_Droped = 'Image_Droped',
  HouseCard_Droped = 'HouseCard_Droped',
};

function Text({ component }: any) {
  const style = component.props;
  return (
    <span
      key={component.id}
      style={{
        ...style,
        position: "absolute",
      }}
    >
      {component.props.innerText}
    </span>
  );
}

function Image({ component }: any) {
  const style = component.props;
  return (
    <img
      key={component.id}
      src={component.props.src}
      style={{
        ...style,
        position: "absolute",
      }}
      alt="图片加载失败"
    />
  );
}

type Home = {
  id: number;
  image: string;
  listing_name: string;
  pricing: number;
  floor_plan_room: number;
  floor_plan_hall: number;
  squaremeter: number;
  total_floor: number;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

function HomeCardContent({ id }: { id: number }) {
  const [home, setHome] = useState<Home | null>(null);
  const navigate = useNavigate();

  const getHome = async () => {
    const res = await getHomeById(id);
    setHome(res.data);
  }

  useEffect(() => {
    getHome();
    // eslint-disable-next-line
  }, [id]);

  return (
    home === null ? <div>加载中...</div> : (
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
    )
  );

}


function HomeCard({
  props,
  id,
  type
}: {
  props: any,
  id: number,
  type: COMPONENT_TYPE
}) {
  return (
    props.homeId === null ? (
      <div
        style={{ position: "absolute", top: props.top, left: props.left, }} 
      >未指定房源id</div>
    ) : (
      <div
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          width: props.width,
          height: props.height,
        }}
      >
        <HomeCardContent id={props.homeId} />
      </div>
    )
  );
}

type Project = {
  id: number;
  name: string;
  global?: any;
  components: any[];
  [key: string]: any;
};

export default function GenernateProject({ data }: { data: Project }) {
  // console.log("genernateProject", data);
  return (
    <div
      style={{
        height: "calc(100vh - 45px)",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        backgroundColor: data.global?.backgroundColor || "#fff",
      }}
    >
      {data.components.map((component) => {
        if (component.type === COMPONENT_TYPE.Text || component.type === COMPONENT_TYPE.Text_Droped) {
          return <Text component={component} key={component.id} />;
        } else if (component.type === COMPONENT_TYPE.Image || component.type === COMPONENT_TYPE.Image_Droped) {
          return <Image component={component} key={component.id} />;
        } else if (component.type === COMPONENT_TYPE.HouseCard || component.type === COMPONENT_TYPE.HouseCard_Droped) {
          return (
            <HomeCard
              key={component.id}
              props={component.props}
              id={component.id}
              type={component.type}
            />
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
}
