import ImageCatalogItem from "../image-catalog-item/ImageCatalogItem";
import { useImages } from "../../api/imageApi";

export default function ImageCatalog() {
  const { images } = useImages();

  console.log(images);

  return (
    <section id="image-catalog" className="">
      <div>ALL IMAGES HERE</div>
      {/* if images missing in catalog render this below */}
      {!images ? (
        <div>NO IMAGES ADDED YET</div>
      ) : (
        <div className="flex text-center items-center justify-center gap-5">
          {images.map((image) => (
            <ImageCatalogItem key={image._id} {...image} />
          ))}
        </div>
      )}
    </section>
  );
}
