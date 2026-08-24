import Image from "next/image"
import { Wrap } from "@/components/rd/ui"

/**
 * Banner for internal pages. Same gradient mesh and grain as the homepage hero,
 * but over the existing still rather than the video — these pages don't need to
 * carry the weight of a loop, and the still is already an optimised asset.
 */
export function PageHero({
  eyebrow,
  title,
  sub,
  image = "/hero.webp",
}: {
  eyebrow?: string
  title: string
  sub?: string
  image?: string
}) {
  return (
    <section className="rd-grain relative isolate -mt-[68px] flex min-h-[300px] items-end overflow-hidden sm:min-h-[360px]">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_58%]"
      />
      <div className="rd-mesh absolute inset-0 -z-10" />

      <Wrap className="relative z-10 w-full pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="max-w-[46rem]">
          {eyebrow ? (
            <p className="mb-3 font-display text-[0.66rem] font-bold uppercase tracking-[0.3em] text-foam sm:text-[0.72rem] sm:tracking-[0.34em]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
            {title}
          </h1>
          {sub ? (
            <p className="mt-4 max-w-[52ch] text-[0.97rem] leading-relaxed text-white/75 sm:text-[1.02rem]">{sub}</p>
          ) : null}
        </div>
      </Wrap>
    </section>
  )
}
