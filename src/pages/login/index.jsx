import React, { useEffect, useState } from 'react';
import './index.less'
import { Form, Input, Button, message,Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import request from '@/api'
import { useNavigate } from 'react-router-dom'
import { passwordEncryption } from "@/utils/passwordEncryption";
import logo from "@/assets/images/logo.png"
import Three from "@/components/Three"
const Login = () => {
  const navigate = useNavigate()
  // 登录按钮loading
  const [loading, setLoading] = useState(false)  
  const title = window._CONFIG.ROOT_APP_NAME
  const [submitLoginName, setSubmitLoginName] = useState('登录')
  // 确认登录

  const onFinish = async (userInfo) => {
    setLoading(true)
    setSubmitLoginName('正在登录...')
    // 真实登录
    userInfo.password = passwordEncryption(userInfo.password) //密码加密
    const res = await request.getLogin(userInfo) //登录接口
    setLoading(false)
    if (res?.data?.code == 200) {
    //  存储用户信息 角色信息
      localStorage.setItem('Autn-Token', res.data.result.token)
      localStorage.setItem('userInfo', JSON.stringify(res.data.result.userInfo))
      localStorage.setItem('roleInfo', JSON.stringify(res.data.result.roleInfo))
      navigate('/dashboard/analysis')
      message.success('登录成功！', 0.3)
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('Autn-Token')
    if (token) navigate('/dashboard/analysis')
  });
  
  // 记住密码
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


  return (
    <div className="login">
      <Three />

      <section className="login-content">
        <div className="haed">
          <img src={logo} alt="" className='logoImg' />
          <h2>
            {title}
          </h2>
        </div>
        <div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: '请输入用户名!' },
                { min: 3, message: '最少长度为3位' },
                { max: 12, message: '最大长度为12位' },
                { pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成' },
              ]}
            >
              <Input size="large" placeholder="用户名" prefix={<UserOutlined className="site-form-item-icon" />} allowClear />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, whitespace: false, message: '请输入登录密码!' },
                { min: 6, message: '最少长度为6位' },
                { max: 12, message: '最大长度为12位' },
                { pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成' },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码" size="large"

              />
            </Form.Item>
			 
			 <Checkbox onChange={onChange}>记住密码</Checkbox>
			  
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                {submitLoginName}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>

      <Author />
    </div>
  );

}

function Author() {
  return (
    <div className="author">
      <p> Ant Big Data monitoring system © 2022 <a href="https://gitee.com/jiangsihan/React-admin" target="_blank">React-Ant-Admin@v1.0.5</a></p>

      <p>技术支持：<a href="https://jiangsihan.cn/" target="_blank">前端江太公</a> @  江子辰 <a href="mailto:18307106535@163.com"> Send email to ZiChen_Jiang</a> 初始账号及密码：admin 123456</p>
    </div>
  )
}

export default Login
