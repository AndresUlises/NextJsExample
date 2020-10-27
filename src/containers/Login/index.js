import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Typography, Space } from "antd";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);

  const changeState = (changed, all) => {
    setUsername(all.username);
    setPassword(all.password);
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
        onValuesChange={changeState}
      >
        <Form.Item
          label="Nombre de Usuario"
          name="username"
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Mantener iniciada la sesión</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Ingresar
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefaultL;
                router.push("/register");
              }}
              htmlType="button"
            >
              Registrarse
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
