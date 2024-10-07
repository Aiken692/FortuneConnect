import React from 'react'

interface FeatureProps {
    title: string;
    description: string;
    svgPath: string;
  }
  
  const Feature = ({ title, description, svgPath }: FeatureProps) => (
    <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <svg className="w-12 h-12 text-red-800 mx-auto animate-bounce" fill="currentColor" viewBox="0 0 24 24" aria-label={title}>
          <path d={svgPath} />
        </svg>
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
  
  export default Feature;