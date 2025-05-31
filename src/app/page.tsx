"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/stores/useCategoryStore";

export default function Home() {
  const { loading, error, fetchCategories, categories } = useCategoryStore();
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories.length, fetchCategories]);

  useEffect(() => {
    if (!loading && categories.length > 0) {
      router.push("/home");
    }
  }, [loading, categories, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories.</p>;

  return null;
}
