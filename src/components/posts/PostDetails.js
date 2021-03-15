import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../../actions';

const PostDetails = (props) => {
  
  useEffect(()=>{
    props.fetchPost(props.match.params.id);
  },[]);


  if(!props.post){
    return null;
  }
  else {
    return (
      <>
      <button onClick={()=>props.deletePost(props.match.params.id)} className="ui button negative deletebutton">Delete Post</button>
        <div className="details">
          <h1>{props.post.title}</h1>
          <h3>{props.post.content}</h3>
        </div>
      </>
      );
    }
}

const mapStateToProps = (state,ownProps) => {
  return {post:state.posts[ownProps.match.params.id]};
}
 
export default connect(mapStateToProps,{fetchPost,deletePost})(PostDetails);