import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin, message, Table } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import { services } from '../../services';
import { SIGN_IN } from '../../constants/ActionTypes';
import { connect } from 'react-redux';
// import toastr from '../../common/toastr'

class RecentWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data : [],
    };
  }
  componentDidMount() {
    if(this.props.user.data != null) {
      var dataWord = [];
      this.props.user.data.results.user.tenRecentWords.map(function(data, i) {
        var object = {};
        object.key = i + 1;
        object.stt = i + 1;
        object.newWord = data.newWord;
        object.meaning = data.meaning;
        dataWord.push(object);
      })
      this.setState({data : dataWord})
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        services
          .login(values.email, values.password)
          .then(res => {
            // console.log(res);
            const { dispatch } = this.props;
            console.log(res.data)
            dispatch({ type: SIGN_IN, data: res, accessToken : res.data.results.token });
            this.props.login(res);
            this.setState({ loading: false });
            // toastr.success("Đăng nhập thành công")
          })
          .catch(err => {
            console.log(1);
            this.setState({ loading: false });
            message.error('Đăng nhập thất bại');
            // toastr.error("Đăng nhập thất bại")
            throw err;
          });
      }
    });
  };

  render() {
    const columns = [
      {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        render: name => <b>{name}</b>,
      },
      {
        title: 'Từ mới',
        dataIndex: 'newWord',
        key: 'newWord',
      },
      {
        title: 'Nghĩa',
        dataIndex: 'meaning',
        key: 'meaning',
      },
    ];
    console.log(this.props.user.data);
    const { getFieldDecorator } = this.props.form;

    return (
      <Spin spinning={this.state.loading} tip="Loading...">
        <Table columns={columns} dataSource={this.state.data} pagination={false}/>
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
)(Form.create({ name: 'normal_login' })(RecentWord));
