export default function HowItWorks() {
    const steps = [
      {
        number: '1',
        title: 'Sign Up',
        description: 'Create your free account in minutes to start browsing our curated marketplace.'
      },
      {
        number: '2',
        title: 'Browse Products',
        description: 'Explore categories and discover sellers offering unique products in your area.'
      },
      {
        number: '3',
        title: 'Start Shopping',
        description: 'Purchase directly from sellers with secure checkout and local delivery options.'
      }
    ];
  
    return (
      <section className="bg-gray-50 dark:bg-black py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-semibold dark:text-white text-center mb-12">How It Works: 3 Simple Steps</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-5 font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl dark:text-white font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-white text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }