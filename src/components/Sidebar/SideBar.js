import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { siderItems } from "../../constants/constants";

const { Sider } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={siderItems}
      />
    </Sider>
  );
};

export default Sidebar;
