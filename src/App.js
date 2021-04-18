import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cases from "./Components/NumberOfCases/index.js"
import AdministrativePanel from './Components/admin/painel'


export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={AdministrativePanel} />
      <Route path="/dashboard" exact component={Home} />
      <Cases/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
