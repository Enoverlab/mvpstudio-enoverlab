import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/projectupload");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <section className="pt-[100px] min-h-screen flex flex-col bg-gradient-to-br from-[rgb(227,236,254)] via-[#f7eafd] to-[#d5d0e9]">
      <Navbar />
      <div className="flex flex-1 items-center justify-center py-10">
        <div className="bg-white/90 rounded-2xl shadow-xl max-w-md w-full px-8 py-10 mx-4 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 mb-4">
            <img src="/logo1.png" alt="Logo" className='scale-30 md:scale-50' />
            <h2 className="text-2xl font-bold text-[#2563eb]">Sign In</h2>
            <p className="text-sm text-[#595C63] text-center">
              Welcome back! Please log into MVP Studio.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#222]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-[#e3ecfe] rounded-lg px-4 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-[#2563eb]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[#222]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="border border-[#e3ecfe] rounded-lg px-4 py-2 w-full text-sm outline-none focus:ring-2 focus:ring-[#2563eb]"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2 text-xs text-[#2563eb] hover:underline"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-xs text-center">{error}</div>
            )}
            <button
                                      type="submit"
                                      className="bg-[#2563eb] text-white rounded-lg py-3 font-semibold text-base hover:bg-[#1051FF] transition" disabled={isAuthenticating}
                                    >{isAuthenticating ? "Authenticating..." : "Login"}<span className="inline-block"></span>
                                    </button>
          </form>
          <div className="flex flex-col items-center mt-4 gap-2">
            <a href="#" className="text-xs text-[#2563eb] hover:underline">
              Forgot password?
            </a>
            <span className="text-xs text-[#595C63]">
              Don't have an account? <a href="#" className="text-[#2563eb] hover:underline">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Login;