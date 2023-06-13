import React from 'react'
import ReactDOM from "react-dom";
import "./index.scss";
import SinAtMicroFrontend from "nav/navMicrofrontEnd";
import {store} from "nav/store"
import { useStore } from "nav/hooks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
const App = () => {
  const { counter, increment } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: container</div>
      <div>count: {counter}</div>
      <div>
        <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          increment
        </button>
      </div>
<Router>
      <Switch>
        <Route path="/" component={SinAtMicroFrontend} />
      </Switch>
  </Router>
      {/* <SinAtMicroFrontend /> */}
    </div>
  );
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
