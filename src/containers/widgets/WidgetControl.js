import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WidgetBox from '../../components/widgets/WidgetBox';
import { moveWidget } from '../../actions/widget/WidgetActionCreator';

/**
 * WidgetBox gets current sequence of widgets and gives to WidgetBox components.
 */


const ControlWidget = connect(
  state => ({ widgets: state.widgets }), { onMove: moveWidget })(WidgetBox);

export default DragDropContext(HTML5Backend)(ControlWidget);
