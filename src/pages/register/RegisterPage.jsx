import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../component/Fragments/RegisterForm/RegisterForm";
import useAuth from "../../hooks/useAuth";
// import "./RegisterPage.css";
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
<main className="flex items-center justify-center min-h-screen text-white bg-blue-500">
      <div className="absolute inset-0 bg-blue-500 animation-background"></div>
      <div className="relative z-10 flex flex-col items-center max-w-sm p-4 mx-auto space-y-4 bg-white rounded shadow-lg">
        <div className="w-full">
          <RegisterForm onSubmit={handleRegister} />
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-decoration-none">
            <button className="px-4 py-2 text-white bg-orange-500 rounded">
              Continue as Guest
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