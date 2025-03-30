import { useNavigate } from "react-router";
import imageService from "../../services/imageService";

export default function ImageUpload() {
  const navigate = useNavigate();

  const submitAction = async (formData) => {
    const imageData = Object.fromEntries(formData);

    await imageService.upload(imageData);

    navigate("/catalog");
  };

  return (
    <section id="upload-page" className="mt-10 flex justify-center h-screen">
      <form
        id="upload"
        action={submitAction}
        className="bg-[#9ACBD0] w-1/3 h-2/3 flex flex-col p-10 justify-center items-center rounded-3xl"
      >
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-lg font-bold text-[#006A71] text-center">
            Upload Image
          </h1>
          <label htmlFor="title" className="text-[#006A71]">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter image title..."
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
          />
          <label htmlFor="url" className="text-[#006A71]">
            Image url
          </label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Place image url here..."
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3"
          />
          <label htmlFor="description" className="text-[#006A71]">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="bg-[#F2EFE7] border border-[#006A71] rounded-xl p-3 resize-none h-20 w-full"
            placeholder="Short description here..."
          />
          <button
            type="submit"
            className="text-[#F2EFE7] bg-[#48A6A7] rounded-xl hover:bg-[#006A71] p-3"
          >
            Upload
          </button>
        </div>
      </form>
    </section>
  );
}
