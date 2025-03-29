import Button from "../button/Button";

export default function ImageDetails() {
  return (
    <section id="image-details" className="">
      <div className="">
        <div>
          <h1 className="">Image Details</h1>
          {/* IMAGE HERE */}
          <span className="">Title:</span>
          <p className="">fetched title</p>
          <span className="">Description:</span>
          <p className="">fetched description</p>
        </div>
        {/* for owners add buttons edit and delete */}
        <div>
          <Button onClick={""}>Edit</Button>
          <Button onClick={""}>Delete</Button>
        </div>
      </div>
    </section>
  );
}
