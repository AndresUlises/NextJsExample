import React from "react";
import { Form, Input, DatePicker, Button, notification } from "antd";
import { Typography, Space } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterAction } from "../../redux/actions/register";

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

  const registerSelector = useSelector((state) => state.register);
  console.log(registerSelector);

  const dispatch = useDispatch();

  const { form } = Form.useForm();

  const notify = (values) => {
    notification["success"]({
      message: "Registro exitoso",
      description: `Bienvenido ${values.name} ${values.lastname}`,
    });
  };

  const onFinish = (values) => {
    dispatch(setRegisterAction(values));
    notify(values);
  };

  return (
    <>
      <Title style={{ textAlign: "center" }}>Registrarse</Title>
      <Form {...layout} form={form} name="register" onFinish={onFinish}>
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
