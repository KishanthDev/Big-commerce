import React from "react";
import Image from "next/image";

interface BlogPostCardProps {
  image?: string;
  date: string;
  author: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  image,
  date,
  author,
  category,
  title,
  excerpt,
  link,
}) => {
  return (
    <article className="bg-white dark:bg-gray-300 rounded-lg shadow-sm mb-8 overflow-hidden">
      <div className="h-60 bg-gray-200 text-primary dark:bg-gray-500 flex items-center justify-center relative">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          "[Blog Post Image]"
        )}
      </div>

      <div className="p-6">
        <div className="flex gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">📆 {date}</span>
          <span className="flex items-center">👤 {author}</span>
          <span className="flex items-center">📂 {category}</span>
        </div>
        <h2 className="text-2xl dark:text-black  font-semibold mb-4">
          <a href={link} className="hover:text-blue-600 transition-colors">
            {title}
          </a>
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">{excerpt}</p>
        <a
          href={link}
          className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700 transition-colors"
        >
          Read More →
        </a>
      </div>
    </article>
  );
};

export default BlogPostCard;
