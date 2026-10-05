import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export function PageHero({ eyebrow, title, intro, back }: { eyebrow: string, title: string, intro: string, back?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid">
        <div>
          {back && <Link className="back-link" href={back}><ArrowLeft size={16}/> Back</Link>}
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div><p>{intro}</p><Link className="text-link" href="/contact">Start a project <ArrowUpRight size={18}/></Link></div>
      </div>
    </section>
  )
}
