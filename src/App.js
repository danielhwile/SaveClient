import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// local imports
import Header from './components/Header';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';
import PostAndComments from "./components/PostAndComments";

function App() {
  return (
    <Router>
      <Header />
      <div>
          <Switch>
          <Route exact path={'/'}>
            <PostsList />
          </Route>
          <Route exact path={'/create'}>
            <CreatePost />
          </Route>
          <Route path={'/user/:id'}>
            <PostsList />
          </Route>
          <Route path={'/post/:id'}>
            <PostAndComments/>
          </Route>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
