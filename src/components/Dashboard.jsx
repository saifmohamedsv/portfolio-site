import React, { useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  InfoCircleOutlined,
  PlusOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import Overview from "./Overview";
import ProjectOverview from "./ProjectOverview";
import AddProject from "./AddProject";

import "../style/dash.scss";

const { Header, Content } = Layout;
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const { param } = useParams();
  console.log(param);
  return (
    <Layout className="layout">
      <Header className="sider-menu">
        <Menu
          className="sider-menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[param]}
        >
          <Menu.Item key="overview" icon={<InfoCircleOutlined />}>
            <Link to="/admin/overview">All Projects</Link>
          </Menu.Item>
          <Menu.Item key="add" icon={<PlusOutlined />}>
            <Link to="/admin/add">Add</Link>
          </Menu.Item>
          <Menu.Item key="back" icon={<LogoutOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Switch>
        <Route path="/admin/overview">
          <Content
            style={{
              padding: "24px",
            }}
          >
            <div className="site-layout-content">
              <Overview />
            </div>
          </Content>
        </Route>
        <Route path="/admin/add">
          <Content
            style={{
              padding: "24px",
            }}
          >
            <div className="site-layout-content">
              <AddProject />
            </div>
          </Content>
        </Route>
        <Route path="/admin/project/:id">
          <Content
            style={{
              padding: "24px",
            }}
          >
            <div className="site-layout-content">
              <ProjectOverview />
            </div>
          </Content>
        </Route>
      </Switch>
    </Layout>
  );
}

export default Dashboard;
