import { Layout, Menu, Button, Modal, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import navList from "../utils/navigations";
import { useEffect, useState } from "react";

const { Header } = Layout;

function WebHeader() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hostValue, setHostValue] = useState(null);
  const getHost = () => localStorage.getItem("host");

  useEffect(()=> {
    setHostValue(getHost());
  }, [])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    const ip = document.getElementById("ip").value;
    const port = document.getElementById("port").value;
    const host = ip + ":" + port;
    localStorage.setItem("host", host);
    setHostValue(host);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal
        title="Server Configuration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Set IP Address</p>
        <Row>
          <Col span={15}>
            <Input type="text" placeholder="192.168.1.2" id="ip" />
          </Col>
          <Col span={8} style={{ padding: "0 0 0 3px" }}>
            <Input type="text" placeholder="5000" id="port" />
          </Col>
        </Row>
      </Modal>
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
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {navList.map((nav) => (
            <Menu.Item key={nav.path}>
              {<Link to={nav.path}>{nav.title}</Link>}
            </Menu.Item>
          ))}
          <Menu.Item style={{ marginLeft: "auto", backgroundColor: "none" }}>
            {getHost() ? (
              <>
                {hostValue}
                &nbsp;&nbsp;
                <Button
                  type="default"
                  size="small"
                  onClick={() => {
                    console.log("button clicked");
                    localStorage.removeItem("host");
                    setHostValue(null);
                  }}
                >
                  Reset
                </Button>
              </>
            ) : (
              <Button type="primary" onClick={showModal}>
                Set Host
              </Button>
            )}
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
}

export default WebHeader;
