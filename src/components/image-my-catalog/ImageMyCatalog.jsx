import ImageCatalogItem from "../image-catalog-item/ImageCatalogItem";
import { useAllImages } from "../../api/imageApi";
import useAuth from "../../hooks/useAuth";

export default function ImageMyCatalog() {
  const { userId } = useAuth();
  const { images } = useAllImages();

  console.log(images);

  const myImages = images.filter((img) => img._ownerId === userId);

  return (
    <section id="image-catalog" className="">
      <h1 className="text-center font-extrabold text-3xl m-3 text-[#006A71]">
        MY IMAGES
      </h1>
      {/* if images missing in catalog render this below */}
      {!images ? (
        <div>NO IMAGES ADDED YET</div>
      ) : (
        <div className="flex text-center items-center justify-center gap-5">
          {myImages.map((image) => (
            <ImageCatalogItem key={image._id} {...image} />
          ))}
        </div>
      )}
    </section>
  );
}
