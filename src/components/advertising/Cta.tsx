export default function CTA() {
  return (
    <section className="bg-blue-600 dark:bg-blue-700 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Advertise Your Store
          </h2>
          <p className="text-lg md:text-xl">
            Join hundreds of successful sellers who have boosted their
            visibility and sales with MarketHub advertising. Our team is ready
            to help you create an effective campaign.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-md shadow hover:bg-gray-100 transition">
            Get Started Today <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
