import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WidgetBox from '../../components/widgets/WidgetBox';
import { moveWidget } from '../../actions/widget/WidgetActionCreator';

/**
 * WidgetBox gets current sequence of widgets and gives to WidgetBox components.
 */

const mapStateToProps = state => ({
  widgets: state.widgets
});

const mapDispatchToProps = dispatch => ({
  onMove(from, to) {
    dispatch(moveWidget(from, to));
  }
});

const ControlWidget = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetBox);

export default DragDropContext(HTML5Backend)(ControlWidget);
