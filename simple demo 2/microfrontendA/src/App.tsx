import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Route, Redirect,Link } from "container/react-router-dom";
import { store } from "./store";
import { Provider } from "container/react-redux";
// import Predeclaration from "./components/Predeclaration";
// import Details from "./components/Details";
const Predeclaration = React.lazy(() => import("./components/Predeclaration"));
const Details = React.lazy(() => import("./components/Details"));

const App = () => (
  <>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/sinat/predeclaration" component={Predeclaration} />
        <Route exact path="/sinat/details" component={Details} />
        <div>
          <Link to={"/sinat/details"}>details</Link>
          <br />
          <Link to={"/sinat/predeclaration"}>predeclaration</Link>
        </div>
        <Route path="*">
        <Redirect to={"/sinat/predeclaration"} />
      </Route>
      </Suspense>
    </Provider>
  </>
);
export default App;
// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
