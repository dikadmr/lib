import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/layout/Layout";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Pages from "./app/pages";
import Profile from "./app/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Pages />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<h1>Manajemen Buku</h1>} />
          <Route path="users" element={<h1>Manajemen Pengguna</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
