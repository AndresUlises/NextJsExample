import React from "react";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";
const { Header, Footer, Content } = Layout;

const headerLayout = {
  theme: "dark",
  mode: "horizontal",
  style: {
    float: "right",
  },
};

const layout = {
  style: {
    padding: 10,
  },
};

const footerLayout = {
  style: {
    textAlign: "center",
    position: "sticky",
    bottom: 0,
  },
};

const Wrapper = ({ children }) => {
  const router = useRouter();

  const navigation = (e) => {
    e.preventDefault;
    switch (e.key) {
      case "1":
        return router.push("/login");
      case "2":
        return router.push("/register");
      default:
        return router.push("/");
    }
  };
  return (
    <Layout>
      <Header>
        <Menu {...headerLayout}>
          <Menu.Item key="1" onClick={navigation}>
            Ingresar
          </Menu.Item>
          <Menu.Item key="2" onClick={navigation}>
            Registrarse
          </Menu.Item>
        </Menu>
      </Header>
      <Content {...layout}>{children}</Content>
      <Footer {...footerLayout}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Wrapper;
