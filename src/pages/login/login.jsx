import React, {Component} from 'react'
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd'
import './login.less'
import logo from './images/logo.png'

const Item = Form.Item // 不能写在import之前


/*
登陆的路由组件
 */
class Login extends Component {

  handleSubmit = (event) => {

    // 阻止事件的默认行为
    event.preventDefault()

    // 得到form对象
    const form = this.props.form
    // 获取表单项的输入数据
    const values = form.getFieldsValue()
    console.log('handleSubmit()', values)
  }

  render () {

    // 得到具强大功能的form对象
    const form = this.props.form
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo"/>
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                getFieldDecorator('username', {})(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )
              }
            </Item>
            <Form.Item>
              {
                getFieldDecorator('password', {})(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )
              }

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

/*
1. 高阶函数

2. 高阶组件

 */
/*
包装Form组件生成一个新的组件: Form(Login)
新组件会向Form组件传递一个强大的对象属性: form
 */
const WrapLogin = Form.create()(Login)
export default WrapLogin
/*
1. 前台表单验证
2. 收集表单输入数据
 */