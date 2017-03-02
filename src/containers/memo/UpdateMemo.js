import { connect } from 'react-redux';
import { editMemo } from '../../actions/memo/MemoActionCreator';
import Memo from '../../components/memo/Memo';

const mapStateToProps = state => {
  return {
    memo: state.memo.text,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { onUpdateMemo: editMemo })(Memo);
