import { LoginForm } from "../../components/login-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/API.services";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = form.get("username") as string;
    const password = form.get("password") as string;

    login(username, password, (success, token) => {
      if (success) {
        console.log(token);
        localStorage.setItem("TokenLogin", token);
        navigate("/");
      } else {
        alert("Login gagal. Cek username/password");
      }
    });
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center text-2xl text-hijau-tua">
              <img
                src="/images/logo1.png"
                alt="logo"
                style={{ width: "36px" }}
              />
            </div>
            Zoeeell Lib
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="/images/loginbg.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
