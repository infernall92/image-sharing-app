// import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import request from "../utils/request";
import { useEffect } from "react";
import { clearUser } from "../features/auth/authSlice";

const baseUrl = "http://localhost:3030/users";

export const useLogin = () => {
  const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, { email, password });

    return result;
  };

  return {
    login,
  };
};

export const useRegister = () => {
  const register = (email, password) =>
    request.post(`${baseUrl}/register`, { email, password });

  return {
    register,
  };
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) return;

    const options = {
      headers: {
        "X-Authorization": accessToken,
      },
    };
    request.get(`${baseUrl}/logout`, null, options).then(dispatch(clearUser()));
  }, [accessToken, dispatch]);

  return {
    isLoggedOut: !!accessToken,
  };
};
