import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Todo from '../Todo';
import MemoBox from '../Memo';
import Calculator from '../Calculator';
import Pomodoro from '../Pomodoro';
import RandomQuote from '../RandomQuote';
import Widget from './Widget';
// import { BackTop } from 'antd';

const propTypes = {
  widgets: PropTypes.array.isRequired,
  onMove: PropTypes.func.isRequired
};

const Box = styled.div`
  width: 310px;
  margin-left: 10px;

  @media only screen and (max-width: 1120px) {
    display: none;
  }
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
        {/* <BackTop
          visibilityHeight='600'
        /> */}
      </ul>
    </Box>
  );
}

WidgetBox.propTypes = propTypes;

export default WidgetBox;
