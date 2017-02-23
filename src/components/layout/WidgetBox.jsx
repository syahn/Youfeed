/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import Todo from '../todos/AppTodo';
import Weather from '../weather/ViewWeather';
import Widget from './Widget';

const propTypes = {
};

const defaultProps = {
};

const Box = styled.div`
  width: 310px;
  padding: 12px;
`;

function WidgetBox({ widgets, onMove }) {
  const widgetTable = {
    todo: <Todo />,
    weather: <Weather />,
  };
  const widgetList = widgets.map((widget) => (
    {
      widget: widgetTable[widget.type],
      id: widget.id,
      type: 'widget'
    })
  );

  return (
    <div>
      <Box>
        <ul>
          {widgetList.map( item => (
            <Widget
              key={item.id}
              id={item.id}
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
