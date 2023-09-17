import { getCategories } from "@/services";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories?.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.id}>
          <span className="block cursor-pointer pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
