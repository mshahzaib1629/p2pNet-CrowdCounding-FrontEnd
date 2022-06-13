import { Breadcrumb, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { NavLink, withRouter, Route, Routes } from "react-router-dom";
import PredictionPage from "../pages/predictionPage";
import InfoPage from "../pages/infoPage";
import WebHeader from "./header";
import navList from "../utils/navigations";
const { Content, Footer } = Layout;

function WebLayout() {
  return (
    <Layout>
      <WebHeader />
      <Content
        className="site-layout-background"
        style={{
          padding: "24px 50px",
          marginTop: 64,
        }}
      >
        <Routes>
          {navList.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Developed with ❤️ in Lahore, Pakistan
      </Footer>
    </Layout>
  );
}

export default WebLayout;
