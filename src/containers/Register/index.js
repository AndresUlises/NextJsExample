import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, Button, notification } from "antd";
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

const Register = () => {
  const router = useRouter();
  const [state, setState] = useState({ name: {}, lastname: {}, email: {} });
  let description;

  useEffect(() => {
    description = `Bienvenido ${state.name.name} ${state.lastname.lastname}, 
    tu cuenta fue registrada con éxito Email: ${state.email.email}`;
  });

  const notify = () => {
    notification["success"]({
      message: "Registro exitoso",
      description: description,
    });
  };

  const changeState = (changed) => {
    setState({
      ...state,
      [Object.keys(changed)]: changed,
    });
    console.log(state);
  };

  return (
    <>
      <Title style={{ textAlign: "center" }}>Registrarse</Title>
      <Form
        {...layout}
        name="register"
        initialValues={{
          remember: true,
        }}
        onValuesChange={changeState}
        onFinish={notify}
      >
        <Form.Item
          label="Nombres"
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor introduzca su nombre!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Apellidos"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Por favor introduzca su apellido!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item label="Fecha de Nacimiento" name="birthday">
          <DatePicker format="YYYY/MM/DD" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault;
                router.push("/login");
              }}
              htmlType="button"
            >
              Ingresar
            </Button>
            <Button
              type="dashed"
              onClick={(e) => {
                e.preventDefault;
                router.push("/terminos-condiciones");
              }}
            >
              Terminos y Condiciones
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default Register;
