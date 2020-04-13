import React from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

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
            <div className="description" style={{lineHeight: '1'}}>
              <h2 style={{lineHeight: '1'}}>{post.title}</h2>
              <p style={{lineHeight: '1'}}>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      )
    })
  }

  render () {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
//anytime we want to get data from redux side to react, need mapstatetoprops func to connect

const mapStateToProps = (state) => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);