import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { insights } from "@/lib/site-data"
export const metadata={title:"Insights"}
export default function InsightsPage(){return <main><PageHero eyebrow="Insights" title="KNOWLEDGE BEHIND THE WORK." intro="Practical thinking across energy, construction and enterprise technology from the fields in which Markaz operates."/><section className="section light insight-archive">{insights.map(i=><article key={i.slug}><span>{i.number}</span><div><small>{i.category} · {i.date}</small><h2>{i.title}</h2><p>Planning considerations, commercial context and practical guidance for decision-makers.</p></div><ArrowUpRight/></article>)}</section></main>}
