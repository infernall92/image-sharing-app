import Button from "../button/Button";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Header() {
  const { email } = useSelector((state) => state.auth);
  const nickname = email.split("@")[0];
  const capitalizedNickname =
    nickname.charAt(0).toUpperCase() + nickname.slice(1);
  return (
    <div className="flex w-full justify-between p-3 bg-nav">
      <Link to="/" className="flex gap-3">
        <p className="font-bold text-3xl text-white">LOGO</p>
        <p className="font-bold text-white">ACME</p>
      </Link>
      <div className="flex gap-3">
        <Link to="/images">
          <Button onClick={""}>All images</Button>
        </Link>
        {/* <Link to="">
          <Button onClick={""}>button 2</Button>
        </Link>
        <Link to="">
          <Button onClick={""}>button 3</Button>
        </Link> */}
      </div>
      <div className="flex gap-3">
        {email ? (
          <div id="user" className="flex gap-3">
            <Link to="/my-images">
              <Button onClick={() => {}}>My Images</Button>
            </Link>
            <Link to="/upload">
              <Button onClick={() => {}}>Upload</Button>
            </Link>
            <Link to="/logout">
              <Button onClick={() => {}}>Logout</Button>
            </Link>
            <span className="text-lg text-white  flex justify-center items-center font-bold">
              {capitalizedNickname}
            </span>
          </div>
        ) : (
          <div id="guest" className="flex gap-3">
            <Link to="/login">
              <Button onClick={() => {}}>Login</Button>
            </Link>
            <Link to="/register">
              <Button onClick={() => {}}>Sign up</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
