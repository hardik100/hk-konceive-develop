import { Route, Switch } from "react-router-dom";
import StudentDetail from "./components/studentDetail";
import StudentsListing from "./components/studentsListing";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <StudentsListing />
        </Route>
        <Route exact path="/studentDetail/:id" components={StudentDetail}>
          <StudentDetail />
        </Route>
      </Switch>
    </div>
  );
}
