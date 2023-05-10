import React, { useEffect, useState, useRef } from 'react';
import './index.less'
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import request from '@/api'
import { useNavigate } from 'react-router-dom'
import { passwordEncryption } from "@/utils/passwordEncryption";
import { encrypt, decrypt } from "@/utils/aes";
import logo from "@/assets/images/logo-react.png"
import Three from "@/components/Three"
import loginBg from "@/assets/images/login-bg.jpg"
import { setCookies, getCookies, removeCookies } from '@/utils/cookies'
import GraphicCode from '@/components/GraphicCode';

import getMenu from "@/routes/routerConfig";
//用于获取状态
import store from "@/redux/store";

const Login = () => {
  const navigate = useNavigate()
  // 登录按钮loading
  let [loading, setLoading] = useState(false)
  let title = window._CONFIG.ROOT_APP_NAME
  let [submitLoginName, setSubmitLoginName] = useState('登录')
  let [form] = Form.useForm();
  let [checked, setChecked] = useState(false);
  let GraphicCodeRef = useRef(null)
  // 确认登录
  const onFinish = async (userInfo) => {
    setLoading(true)
    setSubmitLoginName('正在登录...')
    // 真实登录
    userInfo.password = passwordEncryption(userInfo.password) //密码加密
    request.getLogin(userInfo).then(res => {
      if (res?.data?.code == 200) {

        //  存储用户信息 角色信息
        localStorage.setItem('Autn-Token', res.data.result.token)
        localStorage.setItem('userInfo', JSON.stringify(res.data.result.userInfo))
        localStorage.setItem('roleInfo', JSON.stringify(res.data.result.roleInfo))
        getMenu().then(res => {
          localStorage.setItem('menuList', JSON.stringify(res))
          //通知reducer页面数据变化了
          store.dispatch({
            type: 'reload',
            data: true
          })
          setTimeout(() => {
            navigate('/dashboard/analysis')
          }, 1000);
        })

      }
      setLoading(false)
      setSubmitLoginName('登录')
    })

  };

  useEffect(() => {
    const token = localStorage.getItem('Autn-Token')
    if (token) navigate('/dashboard/analysis')
    const loginChecked = getCookies('loginChecked')
    if (loginChecked) {
      let { checked, password, username } = JSON.parse(decrypt(loginChecked))
      setChecked(checked)
      form.setFieldsValue({
        username, password
      })
    }
  }, [checked]);

  // 记住密码
  const onChange = async (e) => {
    const loginChecked = getCookies('loginChecked')
    if (loginChecked) {
      setChecked(false)
      removeCookies("loginChecked", 7)
    } else {
      let values = await form.validateFields();
      values.checked = e.target.checked
      setChecked(e.target.checked)
      setCookies('loginChecked', encrypt(JSON.stringify(values)), 7) //7天有效期
    }
  };

  // 验证码校验
  const validateInputCode = async (rule, value) => {
    if (value) {
      let verify = await GraphicCodeRef.current.verify(value)
      if (!verify) throw new Error("验证码错误！")
    }
  }
  return (
    <div className="login" style={{ backgroundImage: `url(${loginBg})` }}>
      <Three />
      <div className="login-content-box">
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
              form={form}
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
                  { pattern: /^[0-9a-zA-Z@~!#$%^&*`_]{1,}$/, message: '必须为数字，字母，特殊符号组成' },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码" size="large"

                />
              </Form.Item>
              <Form.Item name="inputCode"
                rules={[
                  { required: true, message: '请输入验证码!' },
                  { validator: validateInputCode, }
                ]}>
                <Row justify="space-between">
                  <Col style={{ width: "270px" }}>
                    <Input size="large" placeholder="验证码" prefix={<SafetyCertificateOutlined className="site-form-item-icon" />} />
                  </Col>
                  <Col>
                    <GraphicCode ref={GraphicCodeRef} />
                  </Col>
                </Row>
              </Form.Item>
              <Checkbox onChange={onChange} checked={checked} >记住密码</Checkbox>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={loading} disabled={loading}>
                  {submitLoginName}
                </Button>
              </Form.Item>
            </Form>
          </div>

        </section>
      </div>
      {/* <Author /> */}
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
