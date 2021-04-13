import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cases from "./Components/NumberOfCases/index.js"

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Cases/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
