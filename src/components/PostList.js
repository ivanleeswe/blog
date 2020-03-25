import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render () {
    return <div className="ui relaxed divvided list">{this.renderList()}</div>;
  }
}
//anytime we want to get data from redux side to react, need mapstatetoprops func to connect

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);