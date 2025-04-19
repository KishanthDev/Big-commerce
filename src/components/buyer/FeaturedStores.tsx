export default function FeaturedStores() {
  const stores = [
    {
      name: "Woodland Crafts",
      description:
        "Handcrafted wooden home accessories made from sustainable materials.",
      rating: "4.9 (128 reviews)",
      location: "Portland, OR",
    },
    {
      name: "Modern Threads",
      description:
        "Minimalist clothing with a focus on quality fabrics and ethical production.",
      rating: "4.7 (93 reviews)",
      location: "Austin, TX",
    },
    {
      name: "Tech Innovations",
      description:
        "Unique tech accessories and gadgets for the modern lifestyle.",
      rating: "4.8 (215 reviews)",
      location: "San Francisco, CA",
    },
  ];

  return (
    <section className="dark:bg-black py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-semibold dark:text-white text-center mb-12">
          Featured Stores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
            >
              <div className="bg-gray-200 dark:bg-gray-500 h-48 flex items-center justify-center text-gray-500">
                <span className="dark:text-gray-900">Store Preview</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{store.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {store.description}
                </p>
                <div className="flex justify-between text-gray-500 text-xs">
                  <span>⭐ {store.rating}</span>
                  <span>🏠 {store.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
