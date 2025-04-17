import { LoginForm } from "@/components/login-form";
import { useNavigate } from "react-router-dom";
import { login } from "@/services/API.services";

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
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
