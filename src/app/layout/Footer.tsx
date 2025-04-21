import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-2 text-emerald-100">
              About
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-emerald-100">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-100">
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
            <h3 className="text-lg font-bold mb-3 text-emerald-100">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-100">
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
            <h3 className="text-lg font-bold mb-3 text-emerald-100">Contact</h3>
            <ul className="space-y-2 text-gray-100">
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
          <p className="text-emerald-100 text-sm">
            &copy; 2023 Library Zoeelll
          </p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            {/** Instagram */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://www.instagram.com/mzullfikri/"
                  target="blank"
                  type="button"
                >
                  <InstagramIcon className="w-5 h-5 text-gray-100" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-full">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/images/ig.jpg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@mzulfikri</h4>
                    <p className="text-sm">Muhammad Zulfikri</p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/** Facebook */}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://www.facebook.com/Pikri123098?locale=id_ID"
                  target="blank"
                  type="button"
                >
                  <FacebookIcon className="w-5 h-5 text-gray-100" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-full">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/images/fb.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      Muhammad Zul Fikri
                    </h4>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/** Youtube*/}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://www.youtube.com/@muhammadzulfikri3484"
                  target="blank"
                  type="button"
                >
                  <YouTubeIcon className="w-5 h-5 text-gray-100" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/images/yt.jpg" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      Muhammad Zul Fikri
                    </h4>
                    <p className="text-sm">
                      JANGAN LUPA SUBSCRIBE CHANNEL ZHYEX JANGAN LUPA COMENT ,
                      LIKE , SUBSCRIBE
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
