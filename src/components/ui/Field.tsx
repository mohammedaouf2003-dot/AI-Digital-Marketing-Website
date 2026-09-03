import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-sm border bg-porcelain-raised px-4 py-3 text-[0.9375rem] " +
  "text-ink-900 placeholder:text-steel-300 " +
  "transition-[border-color,box-shadow] duration-fast " +
  "focus:border-ink-800 focus:outline-none focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-phosphor " +
  "disabled:opacity-60";

/** Shared label + error scaffolding so every control is labelled the same way. */
export function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
  className,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 font-mono text-[0.6875rem] tracking-[0.16em] text-steel-700 uppercase"
      >
        {label}
        {optional ? (
          <span className="text-steel-300 normal-case">Optional</span>
        ) : null}
      </label>

      {children}

      {hint && !error ? (
        <p id={`${id}-hint`} className="text-[0.8125rem] text-steel-500">
          {hint}
        </p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-start gap-1.5 text-[0.8125rem] font-medium text-alert"
        >
          <span aria-hidden="true">↳</span>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function inputClasses(hasError?: boolean) {
  // The error border uses `alert` rather than `phosphor`: a UI boundary needs
  // 3:1 against its background, which the bright phosphor does not reach.
  return cn(controlBase, hasError ? "border-alert" : "border-ink-800/18");
}
