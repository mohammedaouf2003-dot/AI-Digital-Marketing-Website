import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  /** `wide` for full instrument layouts, `content` for reading measures. */
  width?: "content" | "wide";
  className?: string;
};

export function Container({
  children,
  width = "wide",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-gutter",
        width === "wide" ? "max-w-wide" : "max-w-content",
        className,
      )}
    >
      {children}
    </div>
  );
}
