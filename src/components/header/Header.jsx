import Button from "../button/Button";
import { Link } from "react-router";

export default function Header() {
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
        {/* ----------logged in user---------- */}
        <div id="user" className="flex gap-3">
          <Link to="/upload">
            <Button onClick={""}>Upload</Button>
          </Link>
          <Link to="/logout">
            <Button onClick={""}>Logout</Button>
          </Link>
        </div>
        {/* ----------guest user---------- */}
        <div id="guest" className="flex gap-3">
          <Link to="/login">
            <Button onClick={""}>Login</Button>
          </Link>
          <Link to="/register">
            <Button onClick={""}>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
