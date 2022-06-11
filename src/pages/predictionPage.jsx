import { Upload, message, Button, Row, Col, Image, Spin } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";
const { Dragger } = Upload;

function PredictionPage() {
  const [inputImage, setInputImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getCrowdCount() {
    try {
      message.info("Scanning your image...");
      setIsLoading(true);
      const formData = new FormData();
      formData.append("imageFile", inputImage);
      const apiEndPoint = "http://192.168.1.10:5000/predict";
      const result = await axios.post(apiEndPoint, formData, {
        enctype: "multipart/form-data",
      });
      setIsLoading(false);
      console.log("result: ", result);
      setOutput(result.data);
    } catch (error) {
      console.log("error: ", error);
      message.error("Oh no! something went wrong");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log("inputImage", inputImage);
  }, [inputImage]);

  const draggerProps = {
    name: "file",
    multiple: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    accept: ".jpg, .jpeg, .png",
    height: 350,
    maxCount: 1,
    onChange(info) {
      setInputImage(info.file.originFileObj);
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const leftSpan = () => {
    return (
      <Col span={output ? 12 : 24} style={{ padding: "0 3.5px 0 0" }}>
        <h4>Drop the crowd image to count no. of people in it.</h4>
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            You can only upload single file at once
          </p>
        </Dragger>
        <br />
        <Button
          type="primary"
          onClick={getCrowdCount}
          disabled={isLoading || !inputImage}
        >
          Count People &nbsp; {isLoading ? <Spin size="small" /> : ""}
        </Button>
        &nbsp;
        <Button
          type="default"
          disabled={!inputImage && !output}
          onClick={() => {
            setInputImage(null);
            setOutput(null);
            setIsLoading(false);
          }}
        >
          Reset Results
        </Button>
      </Col>
    );
  };

  const rightSpan = () => {
    return (
      <Col
        span={12}
        style={{ padding: "0 0 0 3.5px", display: output ? "block" : "none" }}
      >
        <h4>Model Prediction</h4>
        <Image
          width={"100%"}
          height={350}
          src={output ? output.image_url : "error"}
        />
        <br /> <br />
        <h2>People Found: {output ? output.head_count : "[error]"}</h2>
      </Col>
    );
  };

  return (
    <div>
      <h1>P2P Net - Crowd Counting </h1>
      <Row>
        {leftSpan()}
        {rightSpan()}
      </Row>
    </div>
  );
}

export default PredictionPage;
