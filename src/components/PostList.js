import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostList extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        post list
      </div>
    )
  }
};

const mapStateToProps =(state) => {
  console.log(state)
  return state;
}



export default connect(mapStateToProps, {fetchPosts}) (PostList);