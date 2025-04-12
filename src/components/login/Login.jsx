import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { login } = useLogin();

  const loginHandler = async (_, formData) => {
    const values = Object.fromEntries(formData);

    const authData = await login(values.email, values.password);

    dispatch(
      setUser({
        _id: authData._id,
        email: authData.email,
        username: authData.username,
        accessToken: authData.accessToken,
      })
    );

    navigate("/");
  };

  const [_, loginAction, isPending] = useActionState(loginHandler, {
    email: "",
    password: "",
  });

  return (
    <section id="login" className="mt-10 flex justify-center h-screen">
      <form
        id="login"
        action={loginAction}
        className="bg-[#9ACBD0] w-1/3 h-2/3 flex flex-col p-10 justify-center items-center rounded-3xl"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold text-[#006A71] text-center">
            Login
          </h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#006A71]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#006A71]">
              Password:
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            />
            <input
              type="submit"
              value="Login"
              disabled={isPending}
              className="text-[#F2EFE7] bg-[#48A6A7] rounded-xl hover:bg-[#006A71] p-3"
            />
            <p className="text-[#006A71]">
              You don't have an account ? Click{" "}
              <span>
                <Link to="/register" className="font-bold">
                  here
                </Link>
              </span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
