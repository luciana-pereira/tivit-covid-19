import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
//import AdministrativePanel from './Components/Admin/Painel'
import UserRegister from "./Components/User/User";
import PanelLogo from './Pages/PanelControl'


export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={PanelLogo} />
      <Route path="/dashboard" exact component={Home} />
      <Route path="/user/register" exact component={UserRegister} />

    </Switch>
  </BrowserRouter>
  );
}

export default App;
