import React from "react";
import {Alert, Spin,  Card, Col, Form, Input, Row, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import registerimg from "../assets/register.jpg";
import useSignup from "../hooks/useSignup.jsx";
import SignInwithGoogle from "../Pages/SignInwithGoogle.jsx";



const Register = () => {
  const {loading,error, registerUser} =useSignup();
  const handleRegister = (values) => {
    registerUser(values);
    // console.log(values);
  };

  return (
    <div
      className="flex justify-center items-center h-screen text-white bg-cover bg-center"
      style={{
        backdropFilter: "blur(10px)",
        backgroundImage:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgb(0,187,255))",
      }}
    >
      <Card className="w-[65vw] max-w-[1200px] max-h-screen  p-4 rounded-lg bg-white border border-white/20 shadow-lg text-black flex flex-col items-center">
        <Row className="flex flex-wrap items-center" gutter={[40, 0]}>
          <Col xs={24} lg={12} className="w-1/2 text-center">
            <Typography.Title level={1} className="title">
              Create an Account
            </Typography.Title>
            <Typography.Text type="secondary" className="slogan">
              Join for exclusive access
            </Typography.Text>

            <Form
              layout="vertical"
              onFinish={handleRegister}
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  { required: true, message: "Please input your full name" },
                ]}
              >
                <Input size="large" placeholder="Enter your Full Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <Input.Password size="large" placeholder="Password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="passwordConfirm"
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <Input.Password size="large" placeholder="Confirm Password" />
              </Form.Item>

              {error && (
                <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                />
              )}

              <Form.Item>
                <Button
                  type={`${loading ? "" : "primary"}`}
                  htmlType="submit"
                  size="large"
                  className="btn"
                >
                  {loading ? <Spin /> : "Create Account"}
                </Button>
              </Form.Item>

              <Form.Item className="signin-link">
                <Typography.Text>
                  Already have an account?&nbsp;
                  <Link to="/login">
                    <Button type="link" className="btn-link">
                      Sign In
                    </Button>
                  </Link>
                </Typography.Text>
                <SignInwithGoogle />
              </Form.Item>
            </Form>
          </Col>

          <Col
            xs={0}
            lg={12}
            className="w-1/2 flex items-center overflow-hidden"
          >
            <img src={registerimg} className="auth-img" alt="Register" />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Register;


