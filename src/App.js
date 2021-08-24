import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SettingView from './components/settingView/SettingView';
import Home from './page/home/Home';
import Menu from './page/menu/Menu';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/setting" component={SettingView} />
          <Route path="/menu/camera"><Menu type={"camera"} /></Route>
          <Route path="/menu/access"><Menu type={"access"} /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;