import React, { Component } from 'react';
import styled from 'styled-components';
import { dribbleConfig } from '../../config';

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

class Dribble extends Component {

      constructor(props) {
        super(props);
        this.state = {
          list: [],
        };
      }
      componentWillMount() {
        this.getHN();
      }

      getHN = () => {

        fetch(`https://api.dribbble.com/v1/shots?access_token=${dribbleConfig.accessToken}`)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            this.setState({
              list: json
            });
          });

      }


      render() {
        const { list } = this.state;

        return(
          <div>
            {list.map(item => (
              <FeedItem>
                <p>{item.title}</p>
                <img src={item.images.teaser} target="_blank" />
                <a href={item.html_url}>Link</a>
              </FeedItem>
            ))}
          </div>
        );
      }
}

Dribble.propTypes = propTypes;
Dribble.defaultProps = defaultProps;

export default Dribble;
