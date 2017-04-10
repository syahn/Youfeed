import styled from 'styled-components';
import { Link } from 'react-router';
import { Tag, Spin, Icon, BackTop } from 'antd';

export const Card = styled.div`
  position: relative;
  bottom: 4px;
  width: 310px;
  border: 1px solid;
  padding: 16px 12px 12px 12px;
  margin-bottom: 6px;
  border-radius: 3px;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  background: #e9ecef;
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

export const PostCard = styled.div`
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
    margin: ${props => props.logo ? '3px 10px 0 0' : '0px'};
    width: ${props => props.logo ? '24px' : '0px'};
  }
`;

export const PostTitle = styled.div`

`;

export const PostContent = styled.div`

`;

export const OriginalLink = styled.a`
  color: #868e96;

  &:hover {
    text-decoration: underline;
    color: #868e96;
  }
`;

export const LinkContainer = styled.div`
  text-align: right;
`;

export const TagBox = styled.div`
`;

export const ScoreTag = styled(Tag)`
  margin: 4px 8px 0 0 !important;

  i {
    margin-right: 4px;
  }
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

export const Icon_ = styled(Icon)`
  i {
    margin-right: 3px;
  }
`;

export const BackTop_ = styled(BackTop)`
  right: 8% !important;
`;
