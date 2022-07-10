import React from "react";
import {
  Input,
  Typography,
  Col,
  Row,
  Tooltip,
  Button,
  Space,
  Carousel,
  Table,
} from "antd";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { shortcuts } from "../constants/constants";
import { MusicCard } from "../components";
const { Search } = Input;
const { Title } = Typography;

const HomePage = () => {
  const test = [1, 2, 3, 4, 5];
  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "ARTIST",
      dataIndex: "artist",
      key: "artist",
    },
    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "ALBUM",
      dataIndex: "album",
      key: "album",
    },
  ];
  const dataSource = [
    {
      id: "1",
      title: "Priority",
      artist: "Mos Def",
      time: "1:25",
      album: "The Ecstatic",
    },
    {
      id: "2",
      title: "Time Is Ticking Out",
      artist: "The Cranberries",
      time: "2:59",
      album: "Wake Up And Smell",
    },
    {
      id: "3",
      title: "One Minute more",
      artist: "Capital Cities",
      time: "3:23",
      album: "In A Tidal Wave",
    },
  ];
  return (
    <Row gutter={18}>
      <Col span={18}>
        <Search
          size="large"
          placeholder="Search for artist, songs, and ..."
          prefix={<SearchOutlined />}
        />
        <Title level={5}>What's hot? 🔥</Title>
        <Space
          direction="horizontal"
          align="center"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Title level={4}>Trending</Title>
          <Button>
            More <RightOutlined />
          </Button>
        </Space>
        <Carousel dots autoplay>
          {test.map((item, index) => (
            <MusicCard key={index} />
          ))}
        </Carousel>
        <Space
          direction="horizontal"
          align="center"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Title level={4}>My Playlist</Title>
          <Button>Show All</Button>
        </Space>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Col>
      <Col span={6}>
        <Title level={4}>Shortcuts</Title>
        <Space size="small" wrap>
          {shortcuts.map((shortcut) => (
            <Tooltip key={shortcut}>
              <Button>{shortcut}</Button>
            </Tooltip>
          ))}
        </Space>
      </Col>
    </Row>
  );
};

export default HomePage;
