import "./App.css";
import RoutesSet from "./RoutesSet";
//import Feed from "./Feed";
//import Header from "./Header";
//import RoutesSet from "./RoutesSet";
//import Login from "./Login";
//import Sidebar from "./Sidebar";

//import { useStateContext } from "./StateProvider";

function App() {
  //const user = null;
  // const [user] = useContext(loginContext);
  //const [{ user }, dispatch] = useStateContext();
  return (
    <div className="app">
      <RoutesSet />
    </div>
  );
}

export default App;
