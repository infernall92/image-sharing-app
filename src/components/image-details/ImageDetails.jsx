import Button from "../button/Button";
import { Link, useNavigate, useParams } from "react-router";
import { useDeleteImage, useGetImage } from "../../api/imageApi";
import useAuth from "../../hooks/useAuth";

export default function ImageDetails() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const { image } = useGetImage(imageId);
  const { deleteImage } = useDeleteImage();
  const { email, userId } = useAuth();

  const handleDeleteImage = async () => {
    const confirmed = confirm(`Deleting image ${image.title}. Proceed ?`);

    if (confirmed) {
      deleteImage(imageId);

      navigate("/images");
      console.log(`Image with title ${image.title} deleted successfully !`);
    } else {
      return;
    }
  };

  const isOwner = userId === image._ownerId;

  return (
    <section id="image-details" className="text-[#006A71]">
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center font-extrabold text-3xl m-3 text-[#006A71]">
            Image Details
          </h1>
          {/* IMAGE HERE */}
          <img src={image.url} className="max-w-[600px]" />
          <div className="flex gap-3">
            <span className="font-bold">Title:</span>
            <p className="">{image.title}</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold">Description:</span>
            <p className="">{image.description}</p>
          </div>
          <div className="flex gap-3">
            <span className="text-sm font-thin">Uploaded by:</span>
            <p className="text-sm">{image._ownerId}</p>
          </div>
        </div>
        {isOwner && (
          <div className="flex gap-5">
            <Link to={`/images/${imageId}/edit`}>
              <Button onClick={() => {}}>Edit</Button>
            </Link>
            <Button onClick={handleDeleteImage}>Delete</Button>
          </div>
        )}
      </div>
    </section>
  );
}
