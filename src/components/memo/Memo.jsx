import React, { PropTypes, Component } from "react";
import { Input } from "antd";
import styled from "styled-components";

const propTypes = {
  memo: PropTypes.string,
  onUpdateMemo: PropTypes.func
};

const MemoInput = styled(Input)`
  background: beige !important;
`;


class Memo extends Component {
  constructor(props) {
    super(props);
    if (props.auth.uid) {
      const persistedState = JSON.parse(loadState(props.auth.uid));
      this.state = { memo: persistedState.memo };
    } else {
      this.state = { memo: "" };
    }
  }

  type = value => {
    this.setState({ memo: value });
    if (this.props.auth.uid) {
      let data = JSON.stringify({
        memo: value
      });
      saveState(`${this.props.auth.uid}/memo`, data);
    }
  };

  render() {
    const { memo } = this.state;
    return (
      <MemoInput
        type="textarea"
        rows={8}
        value={memo}
        spellCheck="false"
        onChange={e => this.type(e.target.value)}
      />
    );
  }
}

const loadState = uid => {
  try {
    const serializedState = localStorage.getItem(uid);
    if (serializedState === null) {
      return "";
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (uid, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(uid, serializedState);
  } catch (err) {
    return undefined; 
  }
};


Memo.propTypes = propTypes;

export default Memo;
