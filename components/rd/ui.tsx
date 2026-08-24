import type { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------
   Small HeroUI-flavoured primitives, hand-rolled.
   Same vocabulary (solid / bordered / flat / ghost, flat chips, cards
   with a distinct footer row) without taking the dependency.
   ------------------------------------------------------------------ */

type ButtonVariant = "solid" | "bordered" | "flat" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold no-underline transition-[background-color,border-color,box-shadow,transform] duration-200 active:translate-y-px rd-focus"

const buttonVariants: Record<ButtonVariant, string> = {
  solid: "bg-sun text-abyss shadow-sun hover:bg-sun-dim",
  bordered: "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  flat: "bg-deep/[0.07] text-deep hover:bg-deep/[0.13]",
  ghost: "text-white/80 hover:text-white",
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.94rem]",
  lg: "px-7 py-4 text-base",
}

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
  external,
  ...rest
}: {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  external?: boolean
} & Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const classes = cn(buttonBase, buttonVariants[variant], buttonSizes[size], className)

  // tel: / mailto: / off-site links get a plain anchor
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}

type ChipTone = "sun" | "ocean" | "slate" | "outline"

const chipTones: Record<ChipTone, string> = {
  sun: "bg-sun/15 text-sun border-sun/25",
  ocean: "bg-ocean/10 text-[#0a5f77] border-ocean/20",
  slate: "bg-slate2/10 text-[#4a5a67] border-slate2/[0.18]",
  outline: "bg-white/[0.06] text-white/80 border-white/15",
}

export function Chip({
  children,
  tone = "ocean",
  className,
}: {
  children: ReactNode
  tone?: ChipTone
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold leading-none",
        chipTones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-card transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("text-[0.72rem] font-semibold uppercase tracking-[0.18em]", className)}>{children}</div>
  )
}

/** Section heading. Asymmetric by default — title left, supporting copy right —
 *  which is what breaks the centred-everything rhythm of the old page. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
  tone?: "light" | "dark"
}) {
  return (
    <div className="mb-9 flex flex-wrap items-end sm:mb-12 justify-between gap-x-10 gap-y-4">
      <div className="max-w-2xl">
        {eyebrow ? (
          <Eyebrow className={cn("mb-3", tone === "dark" ? "text-foam" : "text-ocean")}>{eyebrow}</Eyebrow>
        ) : null}
        <h2
          className={cn(
            "font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-extrabold leading-[1.05] tracking-[-0.03em]",
            tone === "dark" ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
      </div>
      {children ? (
        <p className={cn("max-w-[46ch] text-[0.98rem]", tone === "dark" ? "text-white/70" : "text-slate2")}>
          {children}
        </p>
      ) : null}
    </div>
  )
}

export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  // NB: don't reach for w-[min(1240px,100%-3rem)] here. Tailwind emits that
  // verbatim and `100%-3rem` is invalid CSS (calc math needs whitespace around
  // the minus), so the whole declaration gets dropped and the container goes
  // full-bleed. Explicit max-width + padding is unambiguous.
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>{children}</div>
}
