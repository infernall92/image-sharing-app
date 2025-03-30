import { useEffect } from "react";
import imageService from "../../services/imageService";

export default function ImageCatalog() {
  useEffect(() => {
    imageService.getAll().then((result) => console.log(result));
  }, []);
  return (
    <section id="image-catalog" className="">
      <div>ALL IMAGES HERE</div>
      {/* if images missing in catalog render this below */}
      <div>NO IMAGES ADDED YET</div>
    </section>
  );
}
