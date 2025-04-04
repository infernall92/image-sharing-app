import { useEffect, useState } from "react";
import Button from "../button/Button";
import { useParams } from "react-router";
import imageService from "../../services/imageService";

export default function ImageDetails() {
  const [image, setImage] = useState({});
  const { imageId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await imageService.getImage(imageId);
      setImage(result);
    })();
  }, [imageId]);
  image;

  return (
    <section id="image-details" className="text-[#006A71]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center font-extrabold text-3xl m-3 text-[#006A71]">
            Image Details
          </h1>
          {/* IMAGE HERE */}
          <img src={image.url} />
          <div className="flex gap-3">
            <span className="font-bold">Title:</span>
            <p className="">{image.title}</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Description:</span>
            <p className="">{image.description}</p>
          </div>
        </div>
        {/* for owners add buttons edit and delete */}
        <div className="flex gap-5">
          <Button onClick={() => {}}>Edit</Button>
          <Button onClick={() => {}}>Delete</Button>
        </div>
      </div>
    </section>
  );
}
