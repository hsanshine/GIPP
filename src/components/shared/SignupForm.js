import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Button, Select, DatePicker, Switch } from "antd";

import "./SignUpForm.css";

const SignupForm = () => {
  const { Option } = Select;
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push("/dashboard");
  };

  return (
    <div className="signup-div">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
        className="signup-form"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Please input a matching password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            name="gender"
            //   onChange={}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item label="I am a Pastor">
          <Switch name="isPastor" />
        </Form.Item>

        <Form.Item>
          <div className="form-actions">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>
            <span>Or </span> <Link to="/login">Log In</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
