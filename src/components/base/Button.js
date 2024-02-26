import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export function Button({
  href,
  icon,
  leading,
  label,
  size = "base",
  color = "dark",
  block = false,
  onClick,
  className,
}) {
  const iconClass = cn(
    { "size-5": size === "base" },
    { "size-4": size === "small" }
  );
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex gap-2 items-center rounded-full leading-none hover:scale-95 duration-200 ease-in-out",
        {
          "text-sm px-6 py-4": size === "base",
          "text-sm px-4 py-2": size === "small",
        },
        {
          "bg-primary-500 text-primary-50 hover:bg-primary-600":
            color === "primary",
          "bg-base-800 text-base-50 hover:bg-base-950 dark:invert":
            color === "dark",
          "bg-base-200 text-base-600 hover:bg-white dark:invert":
            color === "light",
          "bg-white text-base-600 hover:bg-base-200": color === "white",
          "bg-transparent text-base-600 ": color === "transparent",
        },
        { "w-full justify-center": block },
        className
      )}
    >
      {leading && icon && <Icon icon={icon} className={iconClass} />}
      {label}
      {!leading && icon && <Icon icon={icon} className={iconClass} />}
    </Tag>
  );
}
