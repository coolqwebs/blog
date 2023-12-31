import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 -top-14 w-full grid place-items-center">
        <Image
          src={author.photo.url}
          height="100"
          width="100"
          alt={author.name}
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-3xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};
export default Author;
