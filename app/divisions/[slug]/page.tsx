import { EnergyShowcase, SolarShowcase } from "@/components/EnergyShowcase"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { divisions } from "@/lib/site-data"
export function generateStaticParams(){return divisions.map(d=>({slug:d.slug}))}
export default async function DivisionPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const d=divisions.find(x=>x.slug===slug);if(!d)notFound();return <main><PageHero back="/divisions" eyebrow={`Division ${d.number}`} title={d.title.toUpperCase()} intro={d.short}/><section className="section light service-detail"><div><p className="eyebrow">Core capabilities</p><h2>BUILT AROUND<br/><em>THE REQUIREMENT.</em></h2></div><div>{d.details.map(x=><article key={x}><Check/><h3>{x}</h3><p>Planned, specified and delivered with coordinated project oversight from the Markaz team.</p></article>)}</div></section>{slug==="solar"&&<SolarShowcase/>}{slug==="batteries"&&<EnergyShowcase/>}<section className="detail-cta dark"><span>DIV{d.number}</span><div><p className="eyebrow">Discuss this capability</p><h2>BRING US THE<br/><em>PROJECT BRIEF.</em></h2><Link className="button" href="/contact">Start a conversation <ArrowUpRight/></Link></div></section></main>}
