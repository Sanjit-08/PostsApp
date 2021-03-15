import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../../actions';

const PostList = (props) => {
  useEffect(()=>{
    
    props.fetchPosts();

  },[]);

  console.log(props.posts);

  const renderPosts= () => {
    return props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <Link to={`/posts/${post.id}`} className="header">{post.title}</Link>
            <div className="description">{post.content}</div>
          </div>
        </div>
      )
    })
  }
    return (
        <div>
          <Link to="/posts/new" className="ui primary button add">Add a Post</Link>
          <h3 className="postsheading">Posts</h3>
          <div className="ui  middle aligned divided animated list">
            {renderPosts()}
          </div>
        </div>
      );
}

const mapStateToProps = (state) => {
  return {posts:Object.values(state.posts)};
}
 
export default connect(mapStateToProps,{fetchPosts})(PostList);