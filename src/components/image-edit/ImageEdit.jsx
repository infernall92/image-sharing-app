import { useNavigate, useParams } from "react-router";
import { useEditImage, useGetImage } from "../../api/imageApi";

export default function ImageEdit() {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const { image } = useGetImage(imageId);
  const { edit } = useEditImage();

  const formAction = async (formData) => {
    const imageData = Object.fromEntries(formData);

    await edit(imageId, imageData);

    navigate(`/images/${imageId}/details`);
  };
  return (
    <section id="edit-page" className="mt-10 flex justify-center h-screen">
      <form
        id="edit"
        action={formAction}
        className="bg-[#9ACBD0] w-1/3 h-2/3 flex flex-col p-10 justify-center items-center rounded-3xl"
      >
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-lg font-bold text-[#006A71] text-center">
            Edit Image
          </h1>
          <label htmlFor="title" className="text-[#006A71]">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter new image title..."
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            defaultValue={image.title}
          />
          <label htmlFor="url" className="text-[#006A71]">
            Image url
          </label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Place new image url here..."
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
            defaultValue={image.url}
          />
          <label htmlFor="description" className="text-[#006A71]">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3 resize-none h-20 w-full"
            placeholder="New short description here..."
            defaultValue={image.description}
          />
          <button
            type="submit"
            className="text-[#F2EFE7] bg-[#48A6A7] rounded-xl hover:bg-[#006A71] p-3"
          >
            Edit
          </button>
        </div>
      </form>
    </section>
  );
}
