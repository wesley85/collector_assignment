import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import NewUser from "./pages/newUser/NewUser";
import DeleteUser from "./pages/deleteUser/DeleteUser";
import UpdateUser from "./pages/updateUser/UpdateUser";

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
          <Route path="/deleteUser">
            <DeleteUser />
          </Route>
          <Route path="/editCollectors/:CollectorID"  component={UpdateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
