// import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function App () {
  return (
    <>
    <div>
      <Navbar/>
      <Outlet/>
    </div>
    </>
  );
}

export default App;