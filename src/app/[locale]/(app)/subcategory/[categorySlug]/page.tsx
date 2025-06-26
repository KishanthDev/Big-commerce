import { notFound } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import SubcategoryPage from "./SubcategoryPage";
import fallback from "@/data/fallback.json";
import { Category } from "@/types/cat";

// Define the expected structure for params - includes locale
interface PageParams {
  locale: string;
  categorySlug: string;
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { categorySlug, locale } = await params;
  
  const categories = fallback as unknown as Category[];

  const foundCategory = categories.find(
    (cat) => slugify(cat.categoryName) === categorySlug
  );

  if (!foundCategory) {
    notFound();
  }
  console.log(locale);
  

  return (
    <SubcategoryPage
      categorySlug={categorySlug}
      initialCategory={foundCategory}
    />
  );
}