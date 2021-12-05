import "./App.css";
import Nav from "./component/Nav";
import Adduser from "./component/pages/Adduser";
import Home from "./component/pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
      </Routes>
    </div>
  );
}

export default App;
