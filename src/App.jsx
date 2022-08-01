import './App.css';
import * as utils from './util/util';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {baseRouterPaths, loggedRouterPaths, unloggedRouterPaths} from './router/routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div className="app-wrapper">
            <RenderRouterViews/>
        </div>
      </div>
    </Router>
  );
}

function RenderRouterViews() {
  const routesToRender = baseRouterPaths.concat(utils.isLoggedUser() ? loggedRouterPaths : unloggedRouterPaths);
  return <Routes>
            {routesToRender.map(({id, path, view}) => <Route key={id} path={path} element={view} />)}
          </Routes>
}

export default App;
