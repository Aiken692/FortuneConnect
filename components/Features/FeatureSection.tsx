import React from 'react'
import Feature from './Feature';

const FeatureSection = () => {
    const features = [
        {
          title: "Seamless Connectivity",
          description: "Seamless business connectivity and streamlined operations.",
          svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-1.19-6.56-3.66L6.35 17h-.01c.73-1.56 2.24-2.67 4.01-2.96V9.28c-.73-.2-1.42-.73-1.89-1.48C7.77 6.89 7.94 5.94 8.5 5.32c.52-.58 1.28-.8 2.01-.58 1.11.34 1.95 1.45 1.95 2.62v5.64c.88.48 1.58 1.3 1.91 2.28h-.03c-.28 2.39-2.23 4.12-4.83 3.88V19.93z",
        },
        {
          title: "Data Analytics",
          description: "Advanced analytics to empower data-driven decisions.",
          svgPath: "M12 2a10 10 0 00-10 10 9.96 9.96 0 001.8 5.74l.16.2-1.32 4.72c-.13.49.32.92.82.82l4.72-1.32.2.16A9.96 9.96 0 0012 22a10 10 0 000-20zm-1 14h-1v-2h2v-2h-2v-2h1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1zm4-1h-1.5V13H15v2z",
        },
        {
          title: "Robust Security",
          description: "Robust security for all your transactions and data.",
          svgPath: "M19.43 12.98l-.14-.3A7.904 7.904 0 0016 7.39V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v2.39c-1.58.36-3 1.13-4.29 2.21-.38-.27-.88-.44-1.41-.44-.93 0-1.69.72-1.86 1.61L3.1 18.98c-.12.58.26 1.02.79 1.02h12.22c.53 0 .91-.44.79-1.02l-1.31-5.8c-.07-.25-.26-.44-.51-.48l-.65-.13zm-7.68 4.52h-2v-1h2v1zm0-3h-2v-4h2v4z",
        }
    ];
      
  return (
    <div>
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto text-center">
                <h3 className="text-2xl text-red-900 font-bold mb-8">Our Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Feature key={index} title={feature.title} description={feature.description} svgPath={feature.svgPath} />
                ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeatureSection