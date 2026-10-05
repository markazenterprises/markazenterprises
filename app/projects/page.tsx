import Image from "next/image"
import { workPhotos } from "@/lib/work-photos"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { projects } from "@/lib/site-data"
export const metadata={title:"Projects"}
export default function ProjectsPage(){return <main><PageHero eyebrow="Selected Work" title="PROJECTS THAT SHOW THE SCALE OF WHAT WE DO." intro="A cross-section of energy, construction, interior, software, security and analytics work delivered by Markaz divisions."/><section className="section light project-archive">{projects.map((p,i)=><Link href={`/projects/${p.slug}`} key={p.slug}><div className="project-art work-photo"><Image unoptimized src={workPhotos[i].src} alt={workPhotos[i].alt} fill sizes="(max-width:1000px) 90vw, 45vw"/><span>{p.number}</span></div><small>{p.category}</small><h2>{p.title}</h2><strong>{p.metric}</strong><ArrowUpRight/></Link>)}</section><p className="project-photo-note photo-credits">Illustrative project photography from Unsplash.</p></main>}
