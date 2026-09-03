import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "phosphor" | "outline-light" | "outline-dark";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2.5 " +
  "rounded-sm font-medium tracking-tight " +
  "transition-[background-color,color,border-color,transform] duration-fast " +
  "ease-out-quint active:translate-y-px " +
  "disabled:pointer-events-none disabled:opacity-55";

const variants: Record<Variant, string> = {
  phosphor:
    "bg-phosphor text-ink-900 hover:bg-phosphor-deep hover:text-ink-900",
  "outline-light":
    "border border-steel-300/45 text-porcelain hover:border-phosphor hover:text-phosphor",
  "outline-dark":
    "border border-ink-800/20 text-ink-800 hover:border-ink-800 hover:bg-ink-800 hover:text-porcelain",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-6 py-3.5 text-base sm:px-7",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Trailing arrow that nudges on hover. */
  arrow?: boolean;
};

function Inner({ children, arrow }: { children: React.ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-fast ease-out-quint group-hover:translate-x-1"
        >
          →
        </span>
      ) : null}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "phosphor",
  size = "md",
  className,
  arrow,
  ...rest
}: CommonProps & { href: string } & React.ComponentPropsWithoutRef<"a">) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternal = href.startsWith("#") || href.startsWith("/");

  if (!isInternal) {
    return (
      <a href={href} className={classes} {...rest}>
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "phosphor",
  size = "md",
  className,
  arrow,
  ...rest
}: CommonProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
