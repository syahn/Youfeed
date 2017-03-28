import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from '../Todo';
import MemoBox from '../Memo';
import Calculator from '../Calculator';
import Pomodoro from '../Pomodoro';
import RandomQuote from '../RandomQuote';
import Widget from './Widget';

const propTypes = {
  widgets: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired
};

const Box = styled.div`
  position: fixed;
  width: 310px;
`;

function WidgetBox({ widgets, onMove }) {
  const widgetMapTable = {
    todo: <Todo />,
    memo: <MemoBox />,
    calculator: <Calculator />,
    pomodoro: <Pomodoro />,
    randomquote: <RandomQuote />
  };

  const widgetList = widgets.map(widget => (
    {
      widget: widgetMapTable[widget.type],
      id: widget.id,
      type: 'widget'
    })
  );

  return (
    <div>
      <Box>
        <ul>
          {widgetList.map(item => (
            <Widget
              key={item.id}
              id={item.id}
              list={widgets}
              element={item.widget}
              onMove={onMove}
              type={item.type}
            />
          ))}
        </ul>
      </Box>
    </div>
  );
}

WidgetBox.propTypes = propTypes;

export default WidgetBox;
