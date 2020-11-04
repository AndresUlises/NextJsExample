import React from "react";
import { Form, Input, Button } from "antd";
import { Typography, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLoginAction } from "../../redux/actions/login";

const { Title } = Typography;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const loginSelector = useSelector((state) => state.login);
  console.log(loginSelector);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(setLoginAction(values));
  };

  return (
    <>
      <Title style={{ textAlign: "center" }}>Ingresar</Title>
      <Form
        {...layout}
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor introduzca su nombre de usuario!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor introduzca su contraseña!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
