import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Icon, Button, message } from 'antd';
import styled from 'styled-components';
import { requestSubscription } from '../../actions/feed/RssListActionCreator';

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  position: relative;
  display: inline-block;
  height: 28px;
  width: 172px;
  padding: 4px 7px;
  height: 28px;
  cursor: text;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.66);
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  -webkit-transition: all .3s;
  transition: all .3s;
  outline: none;
`;

const Button_ = styled(Button)`
  padding-bottom: 1px;
  margin-left: 8px;
`;

const Plus = styled.span`
  display: ${props => props.loading ? 'none' : 'block'};
`;

const propTypes = {
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isSucceed: PropTypes.bool.isRequired,
  onRequest: PropTypes.func.isRequired,
};

class FeedSubscript extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
      isSucceed: this.props.isSucceed
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onRequest, auth } = this.props;
    onRequest(auth, this.input.value);
  }

  componentWillReceiveProps(nextProps) {
    const { isSucceed, loading } = this.props;
    this.setState({
      loading: nextProps.loading,
    });
    if(isSucceed !== nextProps.isSucceed && nextProps.isSucceed === true) {
      this.setState({
        loading: nextProps.loading,
        isSucceed: nextProps.isSucceed
      });
      message.success('Subscription succeeded!');
    }
    if(loading === true && nextProps.isSucceed === false) {
      message.error("Subscription failed");
    }
  }

  render() {
    return(
      <Form
        onSubmit={this.handleSubmit}
      >
        <Input
          addonBefore={<Icon type="link" />}
          defaultValue={'https://'}
          innerRef={ node => this.input = node }
        />
        <Button_
          type="primary"
          shape="circle"
          htmlType="submit"
          loading={this.state.loading}
        >
          <Plus loading={this.state.loading}>+</Plus>
        </Button_>
      </Form>
    );
  }
}

FeedSubscript.propTypes = propTypes;

export default connect(
  state => ({
    auth: state.auth,
    loading: state.ui.newSubscription.loading,
    isSucceed: state.ui.newSubscription.succeed,
  }), {
    onRequest: requestSubscription
  }
)(FeedSubscript);
