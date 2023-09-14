import Author from "@/components/Author";
import Categories from "@/components/Categories";
import Comments from "@/components/Comments";
import CommentsForm from "@/components/CommentsForm";
import PostDetail from "@/components/PostDetail";
import PostWidget from "@/components/PostWidget";
import { getPostDetails } from "@/services";
import { useRouter } from "next/router";

const Post = async () => {
  const router = useRouter();

  const post = await getPostDetails(router.query.id);
  console.log("🚀 ~ file: [id].jsx:14 ~ Post ~ post:", post);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {/* <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments /> slug={post.slug} */}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {/* <PostWidget
              slug={post.slug}
              categories={post.categories.map((c) => s.slug)}
            /> */}
            {/* <Categories /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
