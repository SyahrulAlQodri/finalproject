import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animation from "../../utils/aos";
import { useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    Animation();
  }, []);
  const handleRegister = async (data) => {
    const res = await auth("register", data);
    if (res?.status === 200) {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      toast.success("Register Success");
    } else {
      toast.error(res.response.data.message);
    }
    return res;
  };

  return (
<main className="flex items-center justify-center min-h-screen register_page">
      <div className="absolute inset-0 bg-blue-500"></div>
      <div className="w-full mx-5 my-5 lg:w-1/3 md:w-1/2 login_form"
        data-aos="fade-down">
        <div className="w-full">
          <RegisterForm onSubmit={handleRegister} />
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-decoration-none">
            <button className="px-4 py-2 text-white bg-blue-500 rounded">
              Home
            </button>
          </Link>
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