import Button from "./Button";

export default function Header() {
  return (
    <div className="absolute flex w-full justify-between p-3 bg-nav">
      <div className="flex gap-3">
        <p className="font-bold text-3xl text-white">LOGO</p>
        <p className="font-bold text-white">ACME</p>
      </div>
      <div className="flex gap-3">
        <Button onClick={""}>All images</Button>
        <Button onClick={""}>button 2</Button>
        <Button onClick={""}>button 3</Button>
      </div>
      <div className="flex gap-3">
        <Button onClick={""}>Login</Button>
        <Button onClick={""}>Sign up</Button>
      </div>
    </div>
  );
}
