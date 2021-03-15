import posts from '../apis/posts';
import history from '../history';

const API_KEY='?key=sk1234'; // any random key

export const fetchPosts = () =>async dispatch => {

    const response=await posts.get(`/posts${API_KEY}`);

    dispatch({type:'FETCH_POSTS',payload:response.data});
}

export const fetchPost = (id) => async dispatch =>{

    const response=await posts.get(`/posts/${id}${API_KEY}`);

    dispatch({type:'FETCH_POST',payload:response.data});
}

export const createPost = (formValues) => async dispatch => {

    const response=await posts.post(`/posts${API_KEY}`,formValues);

    dispatch({type:'CREATE_POST',payload:response.data});

    history.push('/');
}

export const deletePost = (id) => async dispatch => {

    await posts.delete(`/posts/${id}${API_KEY}`);

    dispatch({type:'DELETE_POST',payload:id});

    history.push('/');
}