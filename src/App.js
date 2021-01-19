import React, { useEffect } from "react";
import "./App.css"
import Home from "./Components/Home/Home.js"
import Art from "./Components/Art/Art.js"

import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom'
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
const App = () => {

  return (
    <Router>
      <Switch>
        <ScrollToTop>
          <Route exact path="/" component={Home} />
          <Route path="/art" component={Art} />
        </ScrollToTop>
      </Switch>
    </Router>
  );
}

export default App;
