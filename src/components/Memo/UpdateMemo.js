import { connect } from "react-redux";
import Memo from "./Memo";

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(Memo);
