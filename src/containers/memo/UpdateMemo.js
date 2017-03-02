import { connect } from 'react-redux';
import { editMemo } from '../../actions/memo/MemoActionCreator';
import Memo from '../../components/memo/Memo';

const mapStateToProps = state => ({ memo: state.memo.text });

export default connect(mapStateToProps, { onUpdateMemo: editMemo })(Memo);
