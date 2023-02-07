import "./App.css";
import Users from "./Components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/users/:userid" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
