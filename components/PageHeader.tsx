/*
 * PageHeader Component - Reusable page header template
 * Provides consistent styling for page titles and subtitles with adaptive sizing
 */

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  spacing?: 'compact' | 'default' | 'loose';
}

export default function PageHeader({ 
  title, 
  subtitle, 
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  spacing = 'default'
}: PageHeaderProps) {
  // Adaptive spacing based on content and spacing prop
  const getContainerSpacing = () => {
    if (spacing === 'compact') return 'mb-4';
    if (spacing === 'loose') return 'mb-12';
    return 'mb-8'; // default
  };

  const getGapSpacing = () => {
    // Gap between title and subtitle when both exist
    if (spacing === 'compact') return 'gap-1';
    return 'gap-0'; // default and loose use same gap
  };

  return (
    <div className={`flex flex-col ${getGapSpacing()} ${getContainerSpacing()} ${className}`}>
      <h1 className={`text-4xl font-bold leading-[1.2] text-gray-900 m-0 ${titleClassName}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`text-gray-600 m-0 ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}