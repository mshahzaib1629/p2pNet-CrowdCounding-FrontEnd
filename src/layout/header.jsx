import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import navList from "../utils/navigations";

const { Header } = Layout;

function WebHeader() {
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/" + window.location.pathname.split("/")[1]]}
      >
        {navList.map((nav) => (
          <Menu.Item key={nav.path}>
            {<Link to={nav.path}>{nav.title}</Link>}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
}

export default WebHeader;
