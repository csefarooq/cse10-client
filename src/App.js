import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends/Friends';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFriend from './components/AddFriend/AddFriend';
import NotFound from './components/NotFound/NotFound';
import MangeFriend from './components/ManageFriend/MangeFriend';
import UpdateStudentData from './components/UpdatStudentData/UpdateStudentData';
function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/">
           <Friends/>
         </Route>
          <Route path="/addFriend">
           <AddFriend/>
         </Route>
         <Route path="/manageFriend">
           <MangeFriend/>
         </Route>
         <Route path="/updateStudentData">
           <UpdateStudentData/>
         </Route>
         <Route path="*">
           <NotFound/>
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
