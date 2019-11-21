import React from 'react';
import { Form, Icon, Input, Button, Checkbox , Spin} from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import {services} from '../../services'
import {SIGN_IN} from '../../constants/ActionTypes'
import { connect } from 'react-redux';
import toastr from '../../common/toastr'

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({loading : true})
        services.login(values.email, values.password)
          .then(
            res => { 
              console.log(res);
              const {dispatch} = this.props;
              dispatch({type : SIGN_IN, data : res})
              this.setState({loading : false})
              toastr.success("Đăng nhập thành công")
            }
          )
          .catch(err => {
            console.log(1)
            this.setState({loading : false})
            toastr.error("Đăng nhập thất bại")
            throw err;
          })
      }
    });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;

    return (
      <Spin spinning={this.state.loading} tip="Loading...">
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ margin: '0 auto auto auto' }}
      >
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Lưu mật khẩu</Checkbox>)}
          <Link className="login-form-forgot" to="">
            Quên mật khẩu
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Đăng nhập
          </Button>
          hoặc <Link to="/register">Đăng ký!</Link>
        </Form.Item>
      </Form>
      </Spin>
    );
  }
}

const mapStateToProps = ({ user, auth }) => {
  return {
    user,
    accessTokenStore: auth.accessToken,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'normal_login' })(NormalLoginForm));
