import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddUser from "./components/addings/AddUser";

import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
