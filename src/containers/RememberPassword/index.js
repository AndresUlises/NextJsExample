import React from "react";
import { Form, Input, Button, Typography, Space } from "antd";
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

const RememberPassword = () => {
  const router = useRouter();

  return (
    <div>
      <Title style={{ textAlign: "center" }}>Recordar Contraseña</Title>
      <Title style={{ textAlign: "center" }} level={4}>
        Ingrese su correo para recuperar la contraseña
      </Title>
      <Form
        {...layout}
        name="rememberPassword"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Introduzca un correo valido",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary">Enviar</Button>
            <Button onClick={() => router.back()}>Regresar</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RememberPassword;
