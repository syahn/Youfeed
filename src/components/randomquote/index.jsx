import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Spin } from 'antd';
import { Card } from '../General';
import WidgetHeader from '../Widgets/WidgetHeader';

const BlockQuote = styled.blockquote`
  background: #fff;
  border-left: 10px solid #ccc;
  border-radius: 4px;
  margin: 7px 2px;
  padding: 0.5em 10px;
`;

const Footer = styled.footer`
  text-align: right;
  margin: 6px 0;
`;

const IsFetching = styled(Spin)`
  position: relative;
  left: 45%;
`;

const propTypes = {
  mode: PropTypes.string
};

class RandomQuote extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
    };
  }

  componentWillMount() {
    const { mode } = this.props;
    const urlProgramming = 'https://quotes.stormconsultancy.co.uk/quotes/random.json&callback=?';
    const urlDesign = 'https://quotesondesign.com/wp-json/posts';

    let url = (mode === 'Programming') ? urlProgramming : urlDesign;
    this.getJson(url).then(e => {
      let data = (mode === 'Programming') ? e : e['0'];
      return this.setState({
        quote: data.quote || ReactHtmlParser(data.content),
        author: data.author || data.title
      });
    });
  }

  getJson = url => fetch(url).then(response => response.json());

  render() {
    const { quote, author } = this.state;
    const { mode } = this.props;

    let modeName = (mode) ? `Random Quote: ${mode}` : '';

    const conditionalRender = quote
      ?
      <BlockQuote>
        {quote}
        <Footer>{`- ${author}`}</Footer>
      </BlockQuote>
      :
      <IsFetching />;

    return(
      <div>
        <WidgetHeader
          name={modeName}
          icon="solution"
        />
        <Card>
          { conditionalRender }
        </Card>
      </div>
    );
  }
}

RandomQuote.propTypes = propTypes;

export default connect(
  state => ({
    mode: state.taste.interest
  })
)(RandomQuote);
