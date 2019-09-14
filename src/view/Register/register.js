import React, { Component } from "react"
import { Form, Input, Tooltip, Icon, Row, Col, Checkbox, Button } from 'antd'
import './register.css'
import '../../common/common.css'
import { Link } from 'react-router-dom'


const leftTop = {
  paddingLeft: '20px'
}
const leftStyle = {
  float: 'left'
}
const rightStyle = {
  float: 'right'
}

class WrappedNormalLoginForm extends Component {
  state = {
    size: 'large',
    autoCompleteResult: [],
    confirmDirty: false
  }
  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render () {
    const { size } = this.state
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    }
    return (
      <div className="login-box">
        <Row>
          <Col span={6} style={leftTop}>
            <Link to='/'>
              <Button.Group size={size}>
                <Button type="primary">
                  <Icon type="left" />
                  Backward
                </Button>
              </Button.Group>
            </Link>
          </Col>
          <Col span={12}>
            <p className="title-p">Register</p>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="name">
                {getFieldDecorator('username', {
                  rules: [
                    {
                      type: 'name',
                      message: 'The input is not valid username!',
                    },
                    {
                      required: true,
                      message: 'Please input your username',
                    },
                  ],
                })(
                  <Input
                    placeholder="Name"
                  />
                )}
              </Form.Item>
              <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: this.validateToNextPassword,
                    },
                  ],
                })(
                  <Input.Password
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ],
                })(<Input.Password onBlur={this.handleConfirmBlur} />)}
              </Form.Item>
              <Form.Item
                label={
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('nickname', {
                  rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(<Input />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox style={leftStyle}>
                    I have read the <a href="/">agreement</a>
                  </Checkbox>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" style={leftStyle}>
                  Register
                </Button>
                <Button type="primary" htmlType="submit" style={rightStyle}>
                  Clear Infor
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    )
  }
}
const LoginIndex = Form.create({ name: 'normal_login' })(WrappedNormalLoginForm)
export default LoginIndex;