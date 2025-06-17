import clsx from "clsx";

type HeadingProps = {
  title: string;
  subtitle?: string;
  color?: "white" | "cyan" | "blue" | "gray"; // limitato a valori Tailwind-validi
  size?: "xs" | "sm" | "md" | "lg";
};

const Heading = ({ title, subtitle, color = "white", size = "lg" }: HeadingProps) => {
  const titleSizes = {
    xs: "text-lg",
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  const colorClasses = {
    white: "text-white",
    cyan: "text-cyan-400",
    blue: "text-blue-800",
    gray: "text-gray-300",
  };

  return (
    <div className="text-center mb-8">
      <h2
        className={clsx(
          "font-bold leading-tight text-balance mb-2",
          titleSizes[size],
          colorClasses[color]
        )}
      >
        {title}
      </h2>
      {subtitle && <p className="text-lg text-gray-400">{subtitle}</p>}
    </div>
  );
};

export default Heading;
