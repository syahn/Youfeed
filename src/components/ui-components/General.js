import styled from 'styled-components';
import { Tag } from 'antd';

export const Card = styled.div`
  width: 310px;
  border: 1px solid;
  padding: 12px;
  margin-bottom: 11px;
  border-radius: 3px;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  background: #fff;
`;

export const FeedCard = styled.div`
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  background: #fff;
`;

export const TagBox = styled.div`
  text-align: right;
`;

export const Category = styled(Tag)`
  margin: 3px 0;
`;
