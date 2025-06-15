type HeadingProps = {
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
};

const Heading = ({ title, subtitle, size = "lg" }: HeadingProps) => {
  const titleClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  return (
    <div className="text-center mb-8">
      <h2 className={`font-bold text-white ${titleClasses[size]} mb-2`}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
    </div>
  );
};

export default Heading;