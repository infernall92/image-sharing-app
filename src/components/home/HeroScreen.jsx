import { useSelector } from "react-redux";

export default function HeroScreen() {
  const { email } = useSelector((state) => state.auth);
  const nickname = email.split("@")[0];
  const capitalizedNickname =
    nickname.charAt(0).toUpperCase() + nickname.slice(1);
  return (
    <div className="text-[#006A71] flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-5xl font-bold">
        {`Hello ${email ? capitalizedNickname : "stranger"}`} !
      </h1>
      <p className="text-2xl font-thin">Came to share some images?</p>
      {email === "" && (
        <p className="text-xl font-thin">Please log in to do so</p>
      )}
    </div>
  );
}
