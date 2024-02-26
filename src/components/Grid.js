import { cn } from "@/lib/utils";

export const Grid = ({
  component: Component = "div",
  gap = "gap-6",
  items,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        gap,
        className
      )}
    >
      {items && items.map((item, index) => <Component key={index} {...item} />)}
      {children}
    </div>
  );
};
