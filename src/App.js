import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = null;
  return (
    //BEM convention names

    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="feed">
              <Feed />
            </div>
            <div className="widgets"></div>
            {/*Widgets*/}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
