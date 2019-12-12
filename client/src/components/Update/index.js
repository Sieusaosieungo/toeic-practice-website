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
  Spin,
  message,
  Avatar,
  Upload,
} from 'antd';
import { services } from '../../services';
import { SIGN_IN } from '../../constants/ActionTypes';
import { connect } from 'react-redux';
import './index.scss';
import config from '../../utils/config';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      loading: false,
      newPassword: null,
      oldPassword: null,
      avatar: this.props.user.data.results.user.avatar || null,
      loadAvatar: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    services
      .getUser(this.props.accessToken)
      .then(res => {
        console.log(res);
        var data = res.data.results.user;
        this.setState({
          email: data.email,
          avatar: data.avatar,
          name: data.name,
          gender: data.gender,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({ loading: false });
        throw err;
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const objectQuery = {};
    objectQuery.oldPassword = this.state.oldPassword;
    objectQuery.newPassword = this.state.newPassword;
    objectQuery.name = this.state.name;
    objectQuery.gender = this.state.gender;
    objectQuery.avatar = this.state.avatar;
    this.setState({ loading: true });
    services
      .updateUser(objectQuery)
      .then(res => {
        const { dispatch } = this.props;
        dispatch({ type: SIGN_IN, data: res });
        this.setState({ loading: false });
        message.success('Thay đổi thông tin thành công');
      })
      .catch(err => {
        this.setState({ loading: false });
        message.error('Thay đổi thất bại');
        throw err;
      });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Hai mật khẩu không nhất quán!');
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

  onChange = e => {
    this.setState({ loading: true });

    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    services
      .uploadAvatar(formData)
      .then(res => {
        console.log(res);
        const { dispatch } = this.props;

        dispatch({ type: SIGN_IN, data: res });
        this.setState({
          loading: false,
          avatar: res.data.results.user.avatar,
        });
        message.success('Cập nhật ảnh thành công');
        // window.location.reload();
      })
      .catch(err => {
        this.setState({ loading: false });
        message.error('Cập nhật ảnh thất bại');
        throw err;
      });
  };

  render() {
    console.log(this.state.loadAvatar);
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
      <Spin spinning={this.state.loading} tip="Loading...">
        <Row>
          <Col
            span={8}
            style={{
              borderRight: '1px solid rgb(238, 238, 238)',
              paddingRight: '20px',
            }}
          >
            <div
              style={{
                width: '100%',
                paddingTop: '100%',
                borderRadius: '50%',
                position: 'relative',
              }}
            >
              <Avatar
                src={
                  (this.state.avatar &&
                    `${config.API_URL}` + this.state.avatar) ||
                  'https://cdn.eva.vn/upload/4-2019/images/2019-11-06/sinh-ra-trong-gia-dinh-viet-nhung-co-be-nay-lai-mang-ve-dep-tay-la-ky-untitled-19-1573053449-116-width600height750.jpg'
                }
                // width="100%"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div style={{ marginTop: '3em', textAlign: 'center' }}>
              <label className="upload-btn-wrapper">
                <input
                  type="file"
                  required
                  onChange={this.onChange}
                  name="productAttachImages"
                />
                <span>Chọn ảnh</span>
              </label>
            </div>
          </Col>
          <Col span={16}>
            <Form
              {...formItemLayout}
              onSubmit={this.handleSubmit}
              style={{ margin: '0 auto', marginLeft: '-20px' }}
            >
              <Form.Item label="E-mail">
                <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                  <Input value={this.state.email} disabled />
                </Col>
              </Form.Item>
              <Form.Item label="Mật khẩu cũ">
                <Col xs={24} sm={24} md={24} lg={20} xl={20}>
                  <Input.Password
                    value={this.state.oldPassword}
                    onChange={e =>
                      this.setState({ oldPassword: e.target.value })
                    }
                  />
                </Col>
              </Form.Item>
              <Form.Item label="Mật khẩu mới">
                <Col xs={24} sm={24} md={24} xl={20} lg={20}>
                  <Input.Password
                    value={this.state.newPassword}
                    onChange={e =>
                      this.setState({ newPassword: e.target.value })
                    }
                  />
                </Col>
              </Form.Item>
              <Form.Item label="Tên">
                <Col xs={24} sm={24} md={24} xl={20} lg={20}>
                  <Input
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Col>
              </Form.Item>
              <Form.Item label="Giới tính">
                {getFieldDecorator('gender', {
                  initialValue: this.state.gender,
                  rules: [
                    { required: true, message: 'Vui lòng chọn giới tính!' },
                  ],
                })(
                  <Select
                    className="ant-col"
                    style={{ width: '83.33%' }}
                    placeholder="Please select gender..."
                    onChange={e => {
                      console.log(e);
                      this.setState({ gender: e });
                    }}
                  >
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Cập nhật
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create({ name: 'update' })(UpdateForm));
