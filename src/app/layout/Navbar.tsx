import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Search,
  LogIn,
  ChevronDown,
  LogOut,
  User,
  UserPlus,
} from "lucide-react";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [searching, setSearching] = useState("");
  const [kategori, setKategori] = useState("kategori");

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const navigate = useNavigate();
  const username = localStorage.getItem("lib_username");

  const { loggedIn, setLoggedIn } = useAuth();

  const handleSearch = () => {
    console.log("pencarian:", searching, "kategori:", kategori);
  };

  useEffect(() => {
    const token = localStorage.getItem("TokenLogin");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("TokenLogin");
    setLoggedIn(false);
    navigate("/");
    console.log("logout");
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-hijau-tua flex items-center gap-2"
        >
          <img src="/images/logo1.png" alt="logo" style={{ width: "36px" }} />
          Zoeeell Lib
        </Link>

        {/* Search bar - hanya di desktop */}
        <div className="hidden md:flex flex-1 justify-center ml-5">
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
            <Button onClick={handleSearch} className="px-3 bg-emerald-800">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop: Login / Logout */}
        <div className="hidden md:flex space-x-2">
          {loggedIn ? (
            <div className="flex items-center space-x-5">
              <div className="flex items-center ">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center">
                    <Button variant="link">{username}</Button>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Button
                          variant="ghost"
                          onClick={() => navigate("/profile")}
                        >
                          <User className="mr-1" /> Profile
                        </Button>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Button variant="ghost" onClick={handleLogout}>
                          <LogOut className="mr-1" /> Logout
                        </Button>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">
                  <LogIn className="mr-1" /> Login
                </Link>
              </Button>
              <Button asChild className="bg-emerald-800">
                <Link to="/register">
                  <UserPlus className="mr-1" /> Register
                </Link>
              </Button>
            </>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Search className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {loggedIn ? (
                <div>
                  <DropdownMenuLabel>{username}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Button variant="ghost">
                      <User className="mr-1" /> Profile
                    </Button>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button variant="ghost" onClick={handleLogout}>
                      <LogOut className="mr-1" /> Logout
                    </Button>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </div>
              ) : (
                <div>
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
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {showMobileSearch && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <ChevronDown className="w-5 h-5" />
                  <span className="ml-2">{kategori}</span>
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
              className="flex-1 text-sm"
            />
            <Button onClick={handleSearch} className="bg-emerald-800 px-3">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
