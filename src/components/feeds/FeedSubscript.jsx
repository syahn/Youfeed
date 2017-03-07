import React, { Component } from 'react';
import { Icon, Button } from 'antd';
import querystring from 'querystring';
import styled from 'styled-components';
import { superfeedrConfig } from '../../config';

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
  height: 28px;
  margin-left: 4px;
  padding-top: 0;
  padding-left: 13px;
  padding-right: 12px;
`;

const propTypes = {

};
const defaultProps = {

};



class FeedSubscript extends Component {
  requestSubscription = (urlAdded) => {
    const { login, token } = superfeedrConfig;
    const { auth } = this.props;
    let url = "https://push.superfeedr.com/?";
    const query = {
      'hub.mode': 'subscribe',
      'hub.topic': `${urlAdded}`,
      'format': 'json',
      'authorization': btoa([login, token].join(':')),
      'hub.callback': `https://youfeed.space/${auth.uid}`
    };
    url = url + querystring.stringify(query);
    fetch(url, {
      method: 'POST',

    })
    .then(res => res.text())
    .then(json => console.log('h',json));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.requestSubscription(this.input.value);
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
          htmlType="submit"
        >
          +
        </Button_>
      </Form>
    );
  }
}

FeedSubscript.propTypes = propTypes;
FeedSubscript.defaultProps = defaultProps;

export default FeedSubscript;
