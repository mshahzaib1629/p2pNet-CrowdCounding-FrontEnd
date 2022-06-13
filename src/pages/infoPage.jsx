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
    title: "Authors",
    description: "Qingyu Song, Changan Wang, Zhengkai Jiang, Yabiao Wang, Ying Tai, Chengjie Wang, Jilin Li, Feiyue Huang, Yang Wu",
  },
  {
    key: "2",
    title: "Transfer Learning Model",
    description: "VGG16",
  },
  {
    key: "3",
    title: "Evaluation Measure",
    description: "Density Normalized Average Precision (nAP)",
  },
  {
    key: "4",
    title: "Datasets Used",
    description: "ShanghaiTech, UCF CC 50, UCF-QNRF and NWPU-Crowd",
  },
  {
    key: "5",
    title: "Hyper Parameters",
    description: `stride = 8, number of reference points = 4, for point regression γ = 100, 
    weight term τ during the matching = 5e-2, in loss function, λ1 = 0.5, 
    and λ2 = 2e-4, Adam algorithm with a fixed learning rate = 1e-4, learning rate 1e-5 `,
  },
  {
    key: "6",
    title: "Tools Used",
    description: "Python, PyTorch",
  },
];

const columns2 = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 280
  },
  {
    title: "Registraion no.",
    dataIndex: "registraionNo",
    key: "registraionNo",
    
  },
];

const data2 = [
  {
    name: 'Ammar',
    registraionNo: 'SP21-PCS-004'
  },
  {
    name: 'M. Shahzaib Minhas',
    registraionNo: 'FA21-RCS-027'
  }
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
      <Table columns={columns} dataSource={data} />
      <h4>Presented By</h4>
      <Table columns={columns2} dataSource={data2} />
    </div>
  );
}

export default InfoPage;
