import { getRecentPosts, getSimilarPosts } from "@/services";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostWidget = async ({ categories, slug }) => {
  const postsList = slug
    ? await getSimilarPosts(categories, slug)
    : await getRecentPosts();

  // const [postsList, setPostsList] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((res) => {
  //       setPostsList(res);
  //     });
  //   } else {
  //     getRecentPosts().then((res) => {
  //       setPostsList(res);
  //     });
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recents Posts"}
      </h3>
      {postsList?.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.id}>
          <div className="w-16 flex-none">
            <Image
              alt={post.title}
              src={post.image.url}
              height="60"
              width="60"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.id}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
