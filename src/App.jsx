import React from "react";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import { Route, Switch } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute>
            <Route exact path='/friends'>
              <FriendsList />
            </Route>
            <Route exact path='/friends/add'>
              <AddFriend />
            </Route>
            <Route exact path='/'>
              <FriendsList />
            </Route>
          </PrivateRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
