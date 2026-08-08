import React, { useState } from 'react';

interface AlternatingCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  // Make metadata labels optional so we can support both simple and detailed views
  metadata: { icon: React.ReactNode; text: string; label?: string }[];
  buttonText: string;
  onClick?: () => void;
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleActionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // If onClick is provided, use it (for navigation), otherwise toggle expansion
    if (onClick) {
      onClick();
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row bg-card rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-border/50 ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Image Section (48%) */}
      <div className="w-full md:w-[48%] relative h-64 md:h-auto overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Section (52%) */}
      <div className="w-full md:w-[52%] p-8 md:p-12 flex flex-col bg-card relative">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>
        
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Animated Container for Details/Metadata */}
        <div className="relative flex-grow min-h-[180px]">
          {/* Collapsed State */}
          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ${
              isExpanded ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
            }`}
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
              {description}
            </p>

            {/* 2x2 Grid for Metadata (if labels are provided, use rich style, else simple style) */}
            {metadata.length > 0 && metadata[0].label ? (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {metadata.map((meta, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-xl p-3 flex gap-3 items-start border border-border/30">
                    <div className="mt-0.5 text-primary">
                      {meta.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                        {meta.label}
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        {meta.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground mb-8">
                {metadata.map((meta, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span className="text-primary">{meta.icon}</span>
                    {meta.text}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Expanded State */}
          <div 
            className={`absolute top-0 left-0 w-full transition-all duration-500 ${
              isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <div className="max-h-[220px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 z-10">
          <button 
            onClick={handleActionClick}
            className="flex items-center gap-2 text-primary font-semibold text-sm group/btn hover:text-green-700 transition-colors"
          >
            {isExpanded ? 'Show Less' : buttonText}
            <span className={`transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover/btn:translate-x-1'}`}>
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
