import { getCategoryPost } from "@/services";
import PostCard from "@/components/PostCard";
import Categories from "@/components/Categories";
import Image from "next/image";

const CategoryPost = async ({ params }) => {
  const posts = await getCategoryPost(params.slug);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {!posts.length ? (
            <div
              style={{ textWrap: "balance" }}
              className="bg-white shadow-lg rounded-lg p-8 lg:p-12 pb-12 mb-8 flex flex-col items-center"
            >
              <Image
                src="/no-posts.jpg"
                width="500"
                height="500"
                alt="no-posts"
              />
              <h2 className="text-3xl text-gray-700">
                Sorry, there are no posts yet
              </h2>
            </div>
          ) : (
            posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;
