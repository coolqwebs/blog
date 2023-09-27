import { getComments } from "@/services";
import moment from "moment";
import parse from "html-react-parser";

const Comments = async ({ slug }) => {
  const comments = await getComments(slug);
  console.log("🚀 ~ file: Comments.jsx:7 ~ Comments ~ comments:", comments);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-b border-gray-100 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <div className="whitespace-pre-line text-gry-600 w-full">
                {parse(comment.content)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Comments;
