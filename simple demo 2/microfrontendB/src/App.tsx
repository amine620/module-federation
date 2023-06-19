import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Route, Redirect } from "container/react-router-dom";
import { Provider } from "container/react-redux";
import Predeclaration from "./components/Predeclaration";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <Route exact  path="/sinmat/predeclaration" component={Predeclaration} />
    <Route path="*">
      <Redirect to={"/sinmat/predeclaration"} />
    </Route>
  </Provider>
);
export default App;
// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
