import Button from "../button/Button";
import { Link } from "react-router";

export default function ImageCatalogItem({ _id, url, title }) {
  return (
    <div className="">
      <img src={url} className="max-w-56 my-2 rounded-2xl" />
      <h2 className="text-lg font-bold my-2">{title}</h2>
      <Link to={`/images/${_id}/details`}>
        <Button onClick={() => {}}>Details</Button>
      </Link>
    </div>
  );
}
