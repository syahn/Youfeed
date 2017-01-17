import React, { Component, PropTypes } from 'react';



const Test = React.createClass({
  getInitialState() {
    return {
      ModalText: 'Content of the modal dialog',
      visible: false,
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  },
  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal title="Title of the modal dialog"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="Ok"
          cancelText="Cancel"
          footer=<h1>hello</h1>
          closable=true
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  },
});


class AuthContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>AuthContainer</div>
    );
  }
}

AuthContainer.propTypes = propTypes;
AuthContainer.defaultProps = defaultProps;

export default AuthContainer;
