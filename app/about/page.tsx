import { PageHero } from "@/components/PageHero"
import { Building2, Compass, ShieldCheck } from "lucide-react"

export const metadata = { title: "About" }
export default function AboutPage() {
  return <main><PageHero eyebrow="About Markaz" title="BUILT IN KARACHI. EXPANDED THROUGH CAPABILITY." intro="Markaz Enterprises began in 2014 and evolved from a construction-focused organization into an integrated enterprise spanning infrastructure, energy and technology." />
    <section className="section light editorial-grid"><div><p className="eyebrow">Our story</p><h2>ONE STRUCTURE.<br/><em>SPECIALIZED TEAMS.</em></h2></div><div className="prose"><p>Businesses and property owners often coordinate separate vendors for construction, electrical systems, security, technology and energy. Markaz was built to connect those disciplines through one accountable delivery structure.</p><p>Each division contributes specialist depth while project leadership maintains a shared standard for planning, communication, quality and handover.</p></div></section>
    <section className="about-cards dark"><article><Building2/><span>Mission</span><h3>Deliver integrated solutions with strong execution, accountability and long-term value.</h3></article><article><Compass/><span>Vision</span><h3>Become a trusted one-stop enterprise solutions partner across Pakistan.</h3></article><article><ShieldCheck/><span>Standard</span><h3>Build quality into planning, materials, execution, testing and handover.</h3></article></section>
    <section className="section values light"><div className="section-heading"><div><p className="eyebrow">What guides the work</p><h2>VALUES WITH<br/><em>OPERATIONAL WEIGHT.</em></h2></div></div><div className="value-rows">{["Quality first","Customer commitment","Innovation","Integrity","Sustainability","Results-oriented"].map((v,i)=><div key={v}><span>0{i+1}</span><strong>{v}</strong></div>)}</div></section>
  </main>
}
