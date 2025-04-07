import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hijau-tua text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-hijau">About</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-hijau">Contact</h3>
            <ul className="space-y-2 text-sm text-putih">
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 text-hijau">Contact</h3>
            <ul className="space-y-2 text-sm text-putih">
              <li>
                <Link
                  to="/koleksi-buku"
                  className="text-gray-300 hover:text-white"
                >
                  Koleksi Buku
                </Link>
              </li>
              <li>
                <Link
                  to="/koleksi-buku"
                  className="text-gray-300 hover:text-white"
                >
                  Koleksi Buku
                </Link>
              </li>
              <li>
                <Link
                  to="/koleksi-buku"
                  className="text-gray-300 hover:text-white"
                >
                  Koleksi Buku
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-hijau">Contact</h3>
            <ul className="space-y-2 text-putih">
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
              <li>
                <Link to="/koleksi-buku">Koleksi Buku</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-hijau text-sm">&copy; 2023 Library Zoeelll</p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link to="/" className="text-hijau hover:text-white">
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link to="/" className="text-hijau hover:text-white">
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link to="/" className="text-hijau hover:text-white">
              <YouTubeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
