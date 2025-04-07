import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./app/layout/Layout";
import LayoutAdmin from "./admin/layout/LayoutAdmin";
import Dashboard from "./admin/pages/Dashboard";
import Login from "./app/loginpages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Rute Umum */}
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Beranda</h1>} />
          <Route path="/book" element={<h1>Produk</h1>} />
          <Route path="/about" element={<h1>Tentang Kami</h1>} />
        </Route>

        {/* Rute Admin */}
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
