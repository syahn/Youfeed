import React from 'react';
import FilterLink from '../../containers/todos/FilterLink';
import styled from 'styled-components';

const FooterSelector = styled.p`
  margin-top: 12px;
  font-size: 12px;
`;

// Footer is where we let the user change currently visible todos.

const Footer = () => (
  <FooterSelector>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </FooterSelector>
);

export default Footer;
