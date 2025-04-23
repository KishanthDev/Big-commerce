export default function ResultsSection() {
    const stats = [
      { number: "85%", label: "Average increase in store visits" },
      { number: "63%", label: "Boost in product views" },
      { number: "47%", label: "Growth in monthly sales" },
    ];
  
    const testimonials = [
      {
        text: `"Our banner ads generated more traffic in one month than we'd seen in the previous quarter. The ROI has been incredible for our small business."`,
        author: "Jane Davis",
        company: "Woodland Crafts",
        avatar: "JD",
      },
      {
        text: `"Being featured as a spotlight store increased our customer base by 40%. The exposure to new buyers has transformed our business."`,
        author: "Michael Rodriguez",
        company: "Modern Threads",
        avatar: "MR",
      },
      {
        text: `"Sponsored listings have been a game changer. Our products now reach buyers who might never have found us otherwise."`,
        author: "Sarah Lin",
        company: "Tech Innovations",
        avatar: "SL",
      },
    ];
  
    return (
      <section className="bg-white dark:bg-black py-20">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
            Results Our Advertisers See
          </h2>
  
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
  
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-800 dark:text-gray-200 mb-6 text-sm">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  