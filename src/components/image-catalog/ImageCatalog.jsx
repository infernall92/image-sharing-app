import { useEffect, useState } from "react";
import imageService from "../../services/imageService";

export default function ImageCatalog() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    imageService.getAll().then(setImages);
  }, []);

  console.log(images);

  return (
    <section id="image-catalog" className="">
      <div>ALL IMAGES HERE</div>
      {/* if images missing in catalog render this below */}
      {!images ? (
        <div>NO IMAGES ADDED YET</div>
      ) : (
        images.map((image) => (
          <div key={image._id} className="max-w-56">
            <p>{image.title}</p>
            <img src={image.url} />
          </div>
        ))
      )}
    </section>
  );
}
