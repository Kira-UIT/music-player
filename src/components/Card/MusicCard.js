import React from "react";
import { Button, Space, Typography } from "antd";
import "./style.css";

const { Title, Text } = Typography;
const MusicCard = () => {
  return (
    <div
      className="music-card"
      style={{
        backgroundImage: `url("https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2019/02/SOC085-Top-10-Cinematic-Music-Tracks.jpg")`,
      }}
    >
      <div className="music-card-content">
        <div className="overlay"></div>
        <div className="music-card-content__left">
          <Title level={4} style={{ color: "#fff" }}>
            Artist
          </Title>
          <Title level={1} style={{ fontWeight: "700" }}>
            On Top Of The World
          </Title>
          <Space direction="horizontal" size="small">
            <Button type="primary" shape="round" size="large">
              PLAY
            </Button>
            <Button shape="round" size="large">
              FOLLOW
            </Button>
          </Space>
        </div>
        <div className="music-card-content__right">
          <Title level={5} style={{ color: "#fff" }}>
            Monthly Listener
          </Title>
          <Text strong style={{color: "#fff"}}>32.092</Text>
        </div>
      </div>
      {/* <img
        src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3"
        alt=""
        className="music-card__img"
      /> */}
    </div>
  );
};

export default MusicCard;
