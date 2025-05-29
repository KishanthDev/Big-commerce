import { Metadata } from "next";
import { notFound } from "next/navigation";
import { slugify } from "@/app/lib/slugify";
import SubcategoryPage from "./SubcategoryPage";
import fallback from "@/data/fallback.json";
import { Category } from "@/types/cat";

// Define the expected params type
interface PageParams {
  categorySlug: string;
}

// Pre-generates static paths for all subcategory pages
export async function generateStaticParams(): Promise<PageParams[]> {
  const categories = fallback as unknown as Category[];
  return categories.map((category) => ({
    categorySlug: slugify(category.categoryName),
  }));
}

// Generates metadata for each page
export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>; // Use Promise<PageParams>
}): Promise<Metadata> {
  const { categorySlug } = await params; // Await the params
  const categories = fallback as unknown as Category[];
  const foundCategory = categories.find(
    (cat) => slugify(cat.categoryName) === categorySlug
  );

  return {
    title: foundCategory
      ? `${foundCategory.categoryName} Subcategories`
      : "Category Not Found",
    description: foundCategory
      ? `Browse ${foundCategory.categoryName} subcategories and services`
      : "Category not found",
  };
}

// Renders the subcategory page based on slug
export default async function Page({
  params,
}: {
  params: Promise<PageParams>; // Use Promise<PageParams>
}) {
  const { categorySlug } = await params; // Await the params
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