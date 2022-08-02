import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-center border-b h-20 p-5">
        <Link to="/about">About</Link>{" "}<Link to="/persons">Persons</Link>
      </nav>
        <Outlet />
    </div>
  );
}

export default App;
