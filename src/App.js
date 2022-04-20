import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import NewUser from "./pages/NewUser";
import UpdateUser from "./pages/UpdateUser";
import AssignmentPreview from './components/AssignmentPreview';  

function App() {

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/editCollectors/:CollectorID"  component={UpdateUser} />
          <Route path="/assignmentPreview"  component={AssignmentPreview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
