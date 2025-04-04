import React from "react";
import {
  Alert,
  Spin,
  Card,
  Col,
  Form,
  Input,
  Row,
  Typography,
  Button,
} from "antd";
import { Link } from "react-router-dom";
import loginimg from "../assets/login.jpg";
import useLogin from "../hooks/useLogin";
import SignInwithGoogle from "../Pages/SignInwithGoogle";
const Login = () => {

  const {error, loading ,loginUser} = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
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
      <Card className="w-[65vw] max-w-[1200px] max-h-screen p-4 rounded-lg bg-white border border-white/20 shadow-lg text-black flex flex-col items-center">
        <Row className="flex flex-wrap items-center" gutter={[40, 0]}>
          <Col
            xs={0}
            lg={12}
            className="w-1/2 flex items-center overflow-hidden"
          >
            <img src={loginimg} className="auth-img" alt="Register" />
          </Col>
          <Col xs={24} lg={12} className="w-1/2 text-center">
            <Typography.Title level={3} className="title">
              Sign in
            </Typography.Title>
            <Typography.Text type="secondary" className="slogan">
              Unlock your world
            </Typography.Text>

            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
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
                  {loading ? <Spin /> : "Sign in"}
                </Button>
              </Form.Item>

              <Form.Item className="signin-link">
                <Typography.Text>
                  Don't have an account?&nbsp;
                  <Link to="/register">
                    <Button type="link" className="btn-link">
                      Create an Account
                    </Button>
                  </Link>
                  <SignInwithGoogle />
                </Typography.Text>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
