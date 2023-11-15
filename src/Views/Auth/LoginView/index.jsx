import React, { useEffect, useState } from "react";
import { Button, TextField } from "../../../Components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useSignInMutation } from "../../../Services/AuthService";

import useToken from "../../../Hooks/UseToken";
import { Checkbox } from "@material-tailwind/react";
import { Constant } from "../../../Constant";

export default function LoginView() {
  const navigate = useNavigate();

  const [signIn, { error, isLoading }] = useSignInMutation();

  const { setToken, token } = useToken();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [passwordInput, setPasswordInput] = useState("password");

  useEffect(() => {
    const checkAuthenticate = () => {
      if (token) {
        navigate("/");
      }
    };
    checkAuthenticate();
  }, [token]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn({ loginState });

      if (res.data.status) {
        localStorage.setItem(Constant.TRAVEL_AGENT_ID, res.data.user._id);
        setToken(res.data.token);
      } else {
        toast.error(res.data.data);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handleShowPassword = () => {
    if (passwordInput === "password") {
      setPasswordInput("text");
    } else {
      setPasswordInput("password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center lg:to-gray-900 sm:bg-white sm:p-2 ">
      <div className="grid lg:grid-cols-2 bg-white sm:grid-rows-1 rounded-lg overflow-hidden lg:h-[60%] sm:h-[90%] min-w-[80%] shadow-2xl">
        <div className="bg-cover bg-[url('https://cdn.create.vista.com/api/media/small/97690648/stock-photo-maya-bay-phi-phi-island')] px-2">
          {/* <p className="text-2xl text-center">
            Travel is only thing you buy that make you richer
          </p> */}
          <div className="text-center mt-8">
            <p className="text-white text-4xl antialiased font-DancingScript">
              Vacation4You
            </p>
            <p className="text-white antialiased text-sm">
              Travel is only purchase that enriches you in ways beyond material
              wealth
            </p>
          </div>
        </div>
        <div className="lg:p-10 sm:p-5">
          <div className="text-center">
            <p className="lg:text-5xl sm:text-3xl font-bold antialiased text-light-blue-400 ">
              Welcome!
            </p>
            <p className="text-sm text-gray-500 antialiased">
              Login with Email
            </p>
          </div>
          <form
            action="/dashboard"
            className="flex flex-col gap-4 lg:p-12"
            onSubmit={onSubmit}
          >
            <TextField
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={loginState.email}
              required
              onChange={(e) =>
                setLoginState({ ...loginState, email: e.target.value })
              }
            />
            <TextField
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={passwordInput}
              secured
              onClick={handleShowPassword}
              minLength={6}
              value={loginState.password}
              required
              onChange={(e) =>
                setLoginState({ ...loginState, password: e.target.value })
              }
            />

            <div className="flex items-center justify-between">
              <Checkbox label={<p className="text-sm">Remember me</p>} />
              <a className="text-sm " href="">
                Forgot password?
              </a>
            </div>

            <Button type="submit" title="Login" loading={isLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-3 lg:bg-white lg:p-10 rounded-lg">
        <p className="lg:text-4xl sm:text-2xl font-semibold">Vacation4You!</p>
        <p className="text-sm font-thin text-gray-700">
          Login to Explore A World Of Savings
        </p>
        <form
          action="/dashboard"
          className="flex flex-col gap-4 mt-4"
          onSubmit={onSubmit}
        >
          <TextField
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            value={loginState.email}
            onChange={(e) =>
              setLoginState({ ...loginState, email: e.target.value })
            }
          />
          <TextField
            label="Password"
            name="password"
            placeholder="*********"
            type="password"
            minLength={6}
            maxLength={12}
            value={loginState.password}
            onChange={(e) =>
              setLoginState({ ...loginState, password: e.target.value })
            }
          />

          <Button type="submit" title="Login" loading={isLoading} />
          <p className="text-sm font-normal">
            Don't you have a account?{" "}
            <span className="text-cyan-700">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </form>
      </div> */
}
