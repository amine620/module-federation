
import { Route, Redirect } from "react-router-dom";
import React, { ReactElement } from "react"



interface IProps{
    component:ReactElement,
    role:string,
    path:string
}
export default function PrivateRoute({ component: Component,role, ...rest }:IProps) {
  const scope=['admin',"super-admin"]
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return scope?.includes(role) ? <Component/> : <Redirect to={"/"} />;
      }}
    />
  );
}
