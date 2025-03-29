export default function Login() {
  return (
    <section id="login" className="mt-10 flex justify-center h-screen">
      <form
        id="login"
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
              className="text-[#F2EFE7] bg-[#48A6A7] rounded-xl hover:bg-[#006A71] p-3"
            />
            <p className="text-[#006A71]">
              You don't have an account ? Click{" "}
              <span>
                <a href="/register" className="font-bold">
                  here
                </a>
              </span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
