import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-br from-blue-500/40 dark:from-blue-700/30 via-transparent to-transparent text-white py-12 md:py-16 lg:py-28">
                <div className="max-w-6xl mx-auto px-5 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        We're Here to Help
                    </h1>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto opacity-90 mb-6">
                        Need assistance or have questions about MarketHub? Our support team is ready to help you succeed.
                    </p>
                </div>
            </section>
    );
};

export default HeroSection;
