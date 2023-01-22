import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Edit from "./edit";
import ProjectList from "./list";
import ProjectView from "./view";

export default () => {
  const user = useSelector((state) => state.Auth.user);

  return (
    <Switch>
      {user.role === "ADMIN" ? <Route path="/project/edit/:id" component={Edit} /> : <Route path="/project/edit/:id" component={ProjectList} />}
      <Route path="/project/:id" component={ProjectView} />
      <Route path="/" component={ProjectList} />
    </Switch>
  );
};
