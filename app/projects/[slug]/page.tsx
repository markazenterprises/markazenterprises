import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { projects } from "@/lib/site-data"
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(x=>x.slug===slug);if(!p)notFound();return <main><PageHero back="/projects" eyebrow={p.category} title={p.title.toUpperCase()} intro={p.copy}/><section className="project-metric dark"><span>Measured outcome</span><strong>{p.metric}</strong></section><section className="section light case-grid"><div><p className="eyebrow">Project approach</p><h2>FROM CHALLENGE<br/><em>TO WORKING SYSTEM.</em></h2></div><div>{["Discovery and site requirements","Coordinated technical planning","Controlled implementation","Testing, handover and support"].map(x=><p key={x}><Check/> {x}</p>)}<p className="case-note">Detailed client-sensitive project information can be added after approval.</p><Link className="button" href="/contact">Discuss a similar project <ArrowUpRight/></Link></div></section></main>}
