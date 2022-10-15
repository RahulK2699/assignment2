import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AllDetail from "./Pages/AllDetail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/:id" element={<AllDetail />} />
      </Routes>
    </div>
  );
}

export default App;
