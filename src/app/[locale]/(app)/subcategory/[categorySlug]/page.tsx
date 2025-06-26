import { notFound } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import SubcategoryPage from "./SubcategoryPage";
import fallback from "@/data/fallback.json";
import { Category } from "@/types/cat";

// Define the expected structure for params
interface PageParams {
  categorySlug: string;
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categorySlug } = await params;

  const categories = fallback as unknown as Category[];

  const foundCategory = categories.find(
    (cat) => slugify(cat.categoryName) === categorySlug
  );

  if (!foundCategory) notFound();

  return (
    <SubcategoryPage
      categorySlug={categorySlug}
      initialCategory={foundCategory}
    />
  );
}
