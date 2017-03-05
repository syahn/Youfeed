import React, { Component } from 'react';
import styled from 'styled-components';
import { behanceConfig } from '../../config';

const propTypes = {

};
const defaultProps = {

};

const FeedItem = styled.div`
  width: 500px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  background: #fff;
`;

class Behance extends Component {


    constructor(props) {
      super(props);
      this.state = {
        list: [],
        items: []
      };
    }
    componentWillMount() {
      this.getHN();
    }

    getHN = () => {

      fetch(`https://crossorigin.me/https://www.behance.net/v2/projects?api_key=${behanceConfig.key}`)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState( {
            list: json.projects
          });
        });

    }


    render() {
      const { list } = this.state;

      return(
        <div>
          {list.map(item => (
            <FeedItem>
              <img src={item.covers[115]} alt="cover" />
            </FeedItem>
          ))}
        </div>
      );
    }
}

Behance.propTypes = propTypes;
Behance.defaultProps = defaultProps;

export default Behance;
