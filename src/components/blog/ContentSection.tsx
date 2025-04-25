import React from "react";
import BlogPostCard from "./BlogPostCard";
import contactData from "../../../data/content_section_data.json";
import Image from "next/image";

const ContentSection = () => {
  const { blogPosts, categories, featuredPosts } = contactData;
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                link={post.link}
              />
            ))}
          </div>

          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold text-primary mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex text-primary justify-between items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {category.name}
                      <span className="bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full px-2 py-0.5 text-xs font-medium">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary pb-3 border-b border-gray-200 dark:border-gray-700">
                Popular Articles
              </h3>
              <div className="space-y-4">
                {featuredPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${index < featuredPosts.length - 1 ? "pb-4 border-b border-gray-100 dark:border-gray-700" : ""}`}
                  >
                    <div className="w-14 h-14 bg-gray-200 dark:bg-gray-600 rounded flex-shrink-0 flex items-center justify-center text-gray-400 dark:text-gray-300">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        "Pic"
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium">
                        <a
                          href={post.link}
                          className="hover:text-blue-600 text-primary dark:hover:text-blue-400 transition-colors"
                        >
                          {post.title}
                        </a>
                      </h4>
                      <div className="text-xs text-primary mt-1">
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
