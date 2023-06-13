import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {BrwoserRouter as Router,Route,Switch} from 'container/react-router-dom'
import { store } from "./store";
import { Provider } from "container/react-redux";
import Predeclaration from "./components/Predeclaration";

const App = () => (
  <Provider store={store}>
    {/* <Router>
      <Switch>
        <Route path='/sinat/predec' component={Predeclaration} />
      </Switch>
    </Router> */}
    <Predeclaration/>
  </Provider>
);
export default App;
ReactDOM.render(
  <App />,
  document.getElementById("app")
);
