import React from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import {services} from '../../services'
import {SIGN_IN} from '../../constants/ActionTypes'
import { connect } from 'react-redux';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.setState({loading : true})
        services.signup(values)
          .then(
            res => { 
              console.log(res);
              const {dispatch} = this.props;
              dispatch({type : SIGN_IN, data : res})
              this.setState({loading : false})
              // toastr.success("Đăng nhập thành công")
            }
          )
          .catch(err => {
            console.log(1)
            this.setState({loading : false})
            // toastr.error("Đăng nhập thất bại")
            throw err;
          })
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`,
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
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
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form
        {...formItemLayout}
        onSubmit={this.handleSubmit}
        style={{ margin: '0 auto' }}
      >
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(
            <Col xs={24} sm={24} md={24} lg={20} xl={20}>
              <Input />
            </Col>,
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
            <Col xs={24} sm={24} md={24} lg={20} xl={20}>
              <Input.Password className="abcdef" />
            </Col>,
          )}
        </Form.Item>
        <Form.Item label="Confirm" hasFeedback>
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
          })(
            <Col xs={24} sm={24} md={24} xl={20} lg={20}>
              <Input.Password onBlur={this.handleConfirmBlur} />
            </Col>,
          )}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Name&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your name!',
                whitespace: true,
              },
            ],
          })(
            <Col xs={24} sm={24} md={24} xl={20} lg={20}>
              <Input />
            </Col>,
          )}
        </Form.Item>
        <Form.Item label="Gender" hasFeedback>
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select className="ant-col" style={{width : "83.33%"}} placeholder="Please select gender...">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              Tôi đồng ý với <a href="">chính sách</a> của MHHD
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({ name: 'register' })(RegistrationForm));
