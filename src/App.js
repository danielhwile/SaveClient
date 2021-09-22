import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route exact path="/create">
            <CreatePost />
          </Route>
          <Route path="/user/:id">
            <PostsList />
          </Route>
          <Route path="/post/:id">
            <PostAndComments/>
          </Route>
      </div>
      </Router>
  );
}

export default App;
