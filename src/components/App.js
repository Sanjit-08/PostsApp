import React from 'react';
import '../App.css';
import history from '../history';
import { Router,Route,Switch } from 'react-router-dom';
import PostList from './posts/PostList';
import PostDetails from './posts/PostDetails';
import PostCreate from './posts/PostCreate';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={PostList}/>
                    <Route path="/posts/new" component={PostCreate}/>
                    <Route path="/posts/:id" component={PostDetails}/>
                </Switch>
            </Router>
        </div>
     );
}
 
export default App;