import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import React,{Suspense} from "react";
import "./index.scss";
import { store } from "sinat/store";
import { useStore } from "sinat/hooks";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { MicroFrontEnds } from "./MicroFrontEnds";
import PrivateRoute from "./PrivateRoute";
const App = () => {
  const { counter, increment } = useStore();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: container</div>
      <div>count: {counter}</div>
      <div>
        <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded my-4"
          onClick={increment}
        >
          increment
        </button>
      </div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div>
            <Link
              to={"/sinat/predeclaration"}
              className="bg-indigo-800 text-white font-bold py-2 px-4 rounded mx-2 my-2"
            >
              microfrontend A
            </Link>
            <Link
              to={"/sinmat/predeclaration"}
              className="bg-indigo-800 text-white font-bold py-2 px-4 rounded mx-2 my-2"
            >
              microfrontend B
            </Link>
            <Link
              to={"/mfe1"}
              className="bg-indigo-800 text-white font-bold py-2 px-4 rounded mx-2 my-2"
            >
              microfrontend C
            </Link>
          </div>
          <Switch>
            {MicroFrontEnds?.map(({ Microfrontend, path, role }, key) => (
              <PrivateRoute
                role={role}
                path={path}
                key={key}
                // render={() => React.lazy(() => Microfrontend)}
                component={Microfrontend}
              />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};
const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("app")
// );
