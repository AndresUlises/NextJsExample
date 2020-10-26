import React from "react";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const layout = {
  style: {
    padding : 10,    
  },
};

const Wrapper = ({ children }) => {
  return (
    <Layout>
      <Header></Header>
      <Content {...layout}>{children}</Content>
      <Footer></Footer>
    </Layout>
  );
};

export default Wrapper;
