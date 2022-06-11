import { Space, Table, Tag } from "antd";
import React from "react";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
];
const data = [
  {
    key: "1",
    title: "John Brown",
    description: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    title: "Jim Green",
    description: "London No. 1 Lake Park",
  },
  {
    key: "3",
    title: "Joe Black",
    description: "Sidney No. 1 Lake Park",
  },
];

function InfoPage() {
  return (
    <div
    // className="site-layout-background"
    // style={{
    //   padding: 24,
    //   minHeight: 380,
    // }}
    >
      <h1>P2P Net - Crowd Counting </h1>
      <h4>Following is the breif description of our selected paper</h4>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
}

export default InfoPage;
