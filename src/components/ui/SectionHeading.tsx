type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-taupe">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-display text-4xl font-medium leading-[1.15] text-ink text-balance sm:text-5xl">
        {title}
      </Tag>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-taupe sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
