import { Routes, Route } from "react-router-dom";
import Layout from "./app/layout/Layout";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./app/login/Login";
import Register from "./app/register/Register";
import Profile from "./app/profile";
import ProtectedHome from "./routes/ProtectedHome";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="books" element={<h1>Manajemen Buku</h1>} />
        <Route path="users" element={<h1>Manajemen Pengguna</h1>} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Route Index */}
      <Route path="/" element={<ProtectedHome />} />

      {/* Route App */}
      <Route element={<Layout />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
