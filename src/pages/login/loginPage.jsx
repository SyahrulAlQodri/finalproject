import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../component/Fragments/LoginForm/LoginForm";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Animation from "../../utils/aos";

export default function LoginPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    Animation();
  }, []);

  const handleLogin = async (data) => {
    const res = await auth("login", data);
    if (res.status === 200) {
      setTimeout(() => {
        navigate("/dashboard/user");
      }, 1500);
      toast.success(res.data.message);
    } else {
      toast.error(res.response.data.message);
    }

    return res;
  };

  return (
    <main class="h-screen flex justify-center items-center login_page">
    <div class="row flex justify-center">
      <div
        class="lg:w-1/3 md:w-1/2 w-full mx-5 my-5 login_form"
        data-aos="fade-down"
      >
        <LoginForm onSubmit={handleLogin} />
      </div>
      <div
        class="lg:w-2/3 md:w-1/2 w-full mx-5 my-5 text-white hidden md:block"
        data-aos="fade-up"
      >
        <h1 class="text-shadow text-3xl font-bold text-black justify-center text-center">
          Welcome Back
        </h1>
        <div class="flex gap-3 justify-center text-center">
          <h2 class="font-bold">Or</h2>
          <Link to="/" class="text-decoration-none">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
    <ToastContainer
      position="top-center"
      theme="light"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </main>
  );
}
