import styled from 'styled-components';
import { Link } from 'react-router';
import { Tag, Spin } from 'antd';

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

  img {
    width: 100%;
  }
`;

export const PostHeader = styled.span`
  display: flex;
  align-items: flex-start;
  margin-bottom: 6px;

  a {
    font-size: 20px;
    font-weight: 600;
    color: #495057;
  }

  img {
    width: 24px;
  }
`;

export const OriginalLink = styled.a`
  color: #868e96;

  &:hover {
    text-decoration: underline;
    color: #868e96;
  }
`;

export const TagBox = styled.div`
  text-align: right;
`;

export const Category = styled(Tag)`
  margin: 4px 0;
`;

export const Link_ = styled(Link)`
  display: flex !important;
  align-items: center;
`;

export const CenterSpin = styled(Spin)`
  position: relative !important;
  left: 45%;
  top: 60px;
`;
