import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input";
import {
  Search,
  LogIn,
  UserPlus,
  Menu,
  ChevronDown,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";

const Navbar = () => {
  const [searching, setSearching] = useState("");
  const [kategori, setKategori] = useState("bottom");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("pencarian:", searching);
  };

  useEffect(() => {
    const token = localStorage.getItem("TokenLogin");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
    console.log("logout");
  };

  return (
    <nav className="w-full bg-putih shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-hijau-tua flex items-center gap-2"
        >
          <img src="/images/logo1.png" alt="logo" style={{ width: "36px" }} />
          Zoeeell Lib
        </Link>

        <div className="flex-1 flex justify-center mx-auto ml-5">
          <div className="flex items-center space-x-2 w-full max-w-md">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  <ChevronDown className="w-5 h-5" />
                  <span className="hidden md:inline">Kategori</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Kategori Buku</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={kategori}
                  onValueChange={setKategori}
                >
                  <DropdownMenuRadioItem value="fiksi">
                    Fiksi
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nonfiksi">
                    Non Fiksi
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="majalah">
                    Majalah
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="referensi">
                    Referensi
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="jurnal">
                    Jurnal
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Input
              type="text"
              placeholder="Cari buku"
              value={searching}
              onChange={(e) => setSearching(e.target.value)}
              className="w-48 sm:w-64 md:w-80 lg:w-96 px-3 py-1 text-sm"
            />
            <Button onClick={handleSearch} className="px-3 bg-hijau-tua">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="hidden md:flex space-x-2">
          {loggedIn ? (
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-1" /> Logout
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">
                  <LogIn className="mr-1" /> Login
                </Link>
              </Button>
              <Button asChild className="bg-hijau-tua">
                <Link to="/register">
                  <UserPlus className="mr-1" /> Register
                </Link>
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Menu className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2">
              <DropdownMenuItem>
                <Link to="/login" className="flex items-center w-full">
                  <LogIn className="mr-2" /> Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/register" className="flex items-center w-full">
                  <UserPlus className="mr-2" /> Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
