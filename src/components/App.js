import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import NotFound from './404/NotFound';
import Login from './auth/Login';
import Register from './auth/Register';
import Header from './header/Header';
import AddPost from './posts/AddPost';
import DeletePost from './posts/DeletePost';
import EditPost from './posts/EditPost';
import ListPosts from './posts/ListPosts';
import ShowPost from './posts/ShowPost';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={ListPosts} />
          <Route path="/posts/new" exact component={AddPost} />
          <Route path="/posts/edit/:id" exact component={EditPost} />
          <Route
            path="/posts/delete/:id"
            exact
            component={DeletePost}
          />
          <Route path="/posts/:id" exact component={ShowPost} />

          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
