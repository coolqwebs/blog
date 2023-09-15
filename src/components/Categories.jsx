import { getCategories } from "@/services";
import Link from "next/link";
import Loader from "./Loader";
import { useRouter } from "next/router";

const Categories = async () => {
  const categories = await getCategories();

  const router = useRouter();
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   getCategories().then((res) => {
  //     setCategories(res);
  //   });
  // }, []);

  if (router.isFallback) {
    return <Loader />;
  }

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
