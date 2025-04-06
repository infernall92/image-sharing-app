import { Link, useNavigate } from "react-router";
import { useLogin, useRegister } from "../../api/authApi";

export default function Register() {
  const { register } = useRegister();
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleRegisterUser = async (formData) => {
    const { email, password } = Object.fromEntries(formData);

    const confirmPassword = formData.get("confirm-password");

    if (confirmPassword !== password) {
      console.log("Password missmatch");
      return;
    }

    const authData = await register(email, password);

    login(authData.email, authData.password);

    navigate("/");
  };

  return (
    <section id="register" className="mt-10 flex justify-center h-screen">
      <form
        id="register"
        action={handleRegisterUser}
        className="bg-[#9ACBD0] w-1/3 h-2/3 flex flex-col p-10 justify-center items-center rounded-3xl"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-bold text-[#006A71] text-center">
            Register
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
              id="register-password"
              name="password"
              className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#006A71]">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            />
            <input
              type="submit"
              value="Sign Up"
              className="text-[#F2EFE7] bg-[#48A6A7] rounded-xl hover:bg-[#006A71] p-3"
            />
            <p className="text-[#006A71]">
              You already have an account ? Click{" "}
              <span>
                <Link to="/login" className="font-bold">
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
