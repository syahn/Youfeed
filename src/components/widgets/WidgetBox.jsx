/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Todo from '../todos/AppTodo';
import Weather from '../weather/ViewWeather';
import MemoBox from '../memo/MemoBox';
import Calculator from '../calculator';
import Pomodoro from '../pomodoro';
import PhotoFrame from '../photoframe/PhotoFrame';
import Widget from './Widget';

const propTypes = {
};

const defaultProps = {
};

const Box = styled.div`
  width: 310px;
`;

function WidgetBox({ widgets, onMove }) {
  const widgetMapTable = {
    todo: <Todo />,
    weather: <Weather />,
    photo: <PhotoFrame />,
    memo: <MemoBox />,
    calculator: <Calculator />,
    pomodoro: <Pomodoro />
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
WidgetBox.defaultProps = defaultProps;

export default WidgetBox;
