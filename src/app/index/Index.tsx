import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-100 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-emerald-800 flex items-center gap-2"
          >
            Zoeeell Lib
          </Link>

          <div>
            <Button
              className="cursor-pointer px-6 py-4 rounded-2xl bg-emerald-800"
              onClick={() => navigate("/login")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Main content (flex-grow agar ambil ruang sisa) */}
      <main className="flex-grow flex items-center justify-center">
        <div>
          <img src="/images/logo1.png" alt="logo-library" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-hijau-tua mb-4">
            Welcome to Zoeeell Lib
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Discover a world of knowledge and inspiration at Zoeeell Library
          </p>
          <Button
            className="cursor-pointer px-6 py-4 rounded-2xl bg-emerald-800"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-emerald-800">
        <div className="text-center text-emerald-100">
          <p>&copy; 2023 Library Zoeelll</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
