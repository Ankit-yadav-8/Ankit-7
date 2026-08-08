import React from 'react';

interface AlternatingCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  metadata: { icon: React.ReactNode; text: string }[];
  buttonText: string;
  onClick: () => void;
  reverse?: boolean;
}

export default function AlternatingCard({
  image,
  category,
  title,
  description,
  metadata,
  buttonText,
  onClick,
  reverse = false,
}: AlternatingCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row bg-card rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-border/50 cursor-pointer ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
      onClick={onClick}
    >
      {/* Image Section (48%) */}
      <div className="w-full md:w-[48%] relative h-64 md:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Section (52%) */}
      <div className="w-full md:w-[52%] p-8 md:p-12 flex flex-col justify-center bg-card">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground mb-8">
          {metadata.map((meta, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="text-primary">{meta.icon}</span>
              {meta.text}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <button className="flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:text-green-700 transition-colors">
            {buttonText}
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
