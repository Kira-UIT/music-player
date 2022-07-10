import "./App.css";
import { BackTop, Layout } from "antd";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";

const { Content } = Layout;
function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Layout
        style={{
          padding: "24px 24px 24px",
        }}
      >
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <BackTop>
            <div>Up</div>
          </BackTop>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
