import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/todo/TodoActionCreators';
import Link from './Link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.ui.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
