import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM convention names
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/*Stories*/}
        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
