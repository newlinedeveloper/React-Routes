import React from "react";
import Nav from "./components/Nav";
import CoverPicture from "./components/CoverPicture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import { ContextProvider } from "./components/Context";
import { CssBaseline } from "@material-ui/core";
import Login from "./components/Login";
import Users from "./components/Users";
import AddUser from "./components/UserAdd";
import ViewUser from "./components/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ContextProvider>
        <div className="App">
          <Nav />
          <CoverPicture />
          <main>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={AddUser} />
              <Route path="/view" component={ViewUser} />
              <Route path="/" component={Main} />
            </Switch>
          </main>
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
