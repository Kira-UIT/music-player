import {
  HomeOutlined,
  FundOutlined,
  CompassOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  GiftOutlined,
  HeartOutlined,
  TeamOutlined,
  StarOutlined,
} from "@ant-design/icons";

const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};

export const siderItems = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Trends", "2", <FundOutlined />),
  getItem("Feed", "3", <CompassOutlined />),
  getItem("New and Notable", "4", <AppstoreOutlined />),
  getItem("Release Calendar", "5", <CalendarOutlined />),
  getItem("Events", "6", <GiftOutlined />),
  getItem("Favorite Songs", "7", <HeartOutlined />),
  getItem("Artist", "8", <TeamOutlined />),
  getItem("Album", "9", <StarOutlined />),
];

export const shortcuts = [
  "Chill Hits",
  "Hop",
  "Accoustic",
  "Indie Pop",
  "Piano Blues",
  "Jazz"
]
