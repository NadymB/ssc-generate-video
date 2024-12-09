"use client"; // Add this directive to mark the component as a Client Component
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { Toaster } from "react-hot-toast";
import { login, loadProfile } from "@/redux/actions/authenAction";
import { useDispatch } from "react-redux";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { authToken, login } = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  // useEffect(() => {
  //   console.log("call day ne");
  //   // console.log("authToken - test:", authToken);
  //   // console.log("hehe:", authToken);
  //   // let token = localStorage.getItem("authToken");
  //   if (authToken) {
  //     // console.log('token vip:', token)

  //     // console.log("hehe:", authToken);
  //     router.push("/"); // Redirect to home or any other protected page
  //   }

  //   console.log("authToken from useAuth:", authToken);
  // }, [authToken]);

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      // Check if username and password are provided
      if (!username || !password) {
        toast.error("Please enter both username and password!");
        return; // Exit the function if fields are empty
      }
      console.log("authToken from useAuth:", username, password);

      dispatch(
        login({
          username: username,
          password: password,
        })
      );
      dispatch(loadProfile());
    },
    [dispatch, username, password]
  );

  // const handleLogin = async (e) => {
  //   console.log(username, password);
  //   const authToken = await login(username, password);
  //   if (authToken) {
  //     // useEffect(() => {
  //     window.location.reload();
  //     // }, [])
  //     // Redirect to the page the user was trying to access or to a default page
  //     // const destination = "/";
  //     // router.push(destination);
  //     // console.log("--authToken:", authToken);
  //   } else {
  //     // Handle login failure (e.g., display an error message)
  //     toast.error("Tài khoản hoặc mật khẩu không đúng!");
  //     console.log("login failed!");
  //   }
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     username,
  //     password,
  //   };

  //   try {
  //     const response = await loginUserApi(data);
  //     // toast.success("Đăng nhập thành công");
  //     let token = response?.data?.data?.token;
  //     localStorage.setItem("authTokens", token);
  //     console.log("Login successful:", token);
  //     // Handle successful login (e.g., redirect or show success message)
  //     router.push("/"); // Redirect to home or any other protected page
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     // Handle login failure (e.g., show error message)
  //   }
  // };

  return (
    <>
      <Toaster position="top-center" />

      <div className="techwave_fn_sign">
        <div className="sign__content">
          <h1 className="logo">Designed by Frenify</h1>
          <form className="login" onSubmit={handleLogin}>
            <div className="form__content">
              <div className="form__title">Đăng Nhập</div>
              <div className="form__username">
                <label htmlFor="user_login">Tài khoản</label>
                <input
                  type="text"
                  className="input"
                  id="user_login"
                  autoCapitalize="off"
                  autoComplete="username"
                  aria-describedby="login-message"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form__pass">
                <div className="pass_lab">
                  <label htmlFor="user_password">Mật khẩu</label>
                  {/* <Link href="#">Forget Password?</Link> */}
                </div>
                <input
                  type="password"
                  id="user_password"
                  autoComplete="current-password"
                  spellCheck="false"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form__submit">
                <label className="fn__submit">
                  <input
                    type="submit"
                    name="submit"
                    value="Sign In"
                    onClick={handleLogin}
                  />
                </label>
              </div>
              {/* <div className="form__alternative">
                <div className="fn__lined_text">
                  <div className="line" />
                  <div className="text">Or</div>
                  <div className="line" />
                </div>
              </div> */}
            </div>
          </form>
          {/* <div className="sign__desc">
            <p>
              Not a member? <Link href="/sign-up">Sign Up</Link>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
