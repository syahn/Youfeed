import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/todo/TodoActionCreators';
import Link from '../../components/todos/Link';

// FilterLink gets the current visibility filter and renders a Link.
// filter: string is the visibility filter it represents.

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
