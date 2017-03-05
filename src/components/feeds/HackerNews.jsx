import React, { Component  } from 'react';
import styled from 'styled-components';

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

class HackerNews extends Component {

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

    fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json
        });
        this.fetchItem();
      });

      // listPost.forEach(list => {
      //   fetch(`https://hacker-news.firebaseio.com/v0/item/${list}.json?print=pretty`)
      //   .then(item => console.log(item));
      // });
      // .then(lists => lists.map(list =>
      //
      // .then(item => console.log(item.json()))));
  }

  fetchItem = () => {
    const { list } = this.state;
    for ( let i=0; i<10; i++){
      fetch(`https://hacker-news.firebaseio.com/v0/item/${list[i]}.json?print=pretty`)
        .then(response => response.json())
        .then(json => this.setState(prevState => ({
          items: prevState.items.concat(json)
        })));
  }}

  render() {
    const { items } = this.state;

    if(items.length > 0){
      console.log(items);
    }
    return(
      <div>
        {items.map(item => (
          <FeedItem>
            <p>{item.title}</p>
            <a href={item.url} target="_blank">Link</a>
            <a href={`https://news.ycombinator.com/item?id=${item.id}`} target="_blank">HN Link</a>
          </FeedItem>
        ))}
      </div>
    );
  }
}

HackerNews.propTypes = propTypes;
HackerNews.defaultProps = defaultProps;

export default HackerNews;
