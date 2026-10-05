import Link from "next/link"
import { PageHero } from "@/components/PageHero"
import { divisions } from "@/lib/site-data"
import { ArrowUpRight } from "lucide-react"
export const metadata = { title: "Divisions" }
export default function DivisionsPage(){return <main><PageHero eyebrow="11 Specialized Divisions" title="ONE ENTERPRISE. MULTIPLE CAPABILITIES." intro="From physical infrastructure to digital systems, every Markaz division is built around specialist execution and coordinated accountability."/><section className="section light all-divisions">{divisions.map(d=><Link href={`/divisions/${d.slug}`} key={d.slug}><span>DIV{d.number}</span><div><h2>{d.title}</h2><p>{d.short}</p></div><ArrowUpRight/></Link>)}</section></main>}
