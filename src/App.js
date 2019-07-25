import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import { connect } from 'react-redux'
import './app.scss'
import MyButton from './component/button/index';
import ListItems from './listItems/index';
import { fetchPosts } from './actions/index';

const tempArr = [{
  fName: 'Amit',
  lName: 'Kumar',
  email: 'amit123@gmail.com',
  age: 24,
  onlineSttaus: true,
}]

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }


  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render" tempArr={tempArr} />
          <MyButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (
                  <ListItems key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
