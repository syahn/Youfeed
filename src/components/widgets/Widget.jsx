import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { compose } from 'redux';
import C from '../../constants';


const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

const widgetSource = {
  beginDrag(props) {
    return {
      id: props.id,
      type: props.type
    };
  }
};

const widgetTarget = {
  hover(targetProps, monitor) {
    const { onMove } = targetProps;
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if(sourceId !== targetId) {
      onMove(sourceProps.id, targetProps.id);
    }
  },
};

function collectDrag(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function collectDrop(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}


function Widget({
  id,
  element,
  connectDragSource,
  connectDropTarget,
  isDragging
}) {
  return compose(connectDragSource, connectDropTarget)(
    <li
      key={id}
      style={{
        opacity: isDragging ? 0.3 : 1
      }}
    >
      {element}
    </li>
  );
}

Widget.propTypes = propTypes;

export default compose(DragSource(C.WIDGET, widgetSource, collectDrag),
                       DropTarget(C.WIDGET, widgetTarget, collectDrop))(Widget);
