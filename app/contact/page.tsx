import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/PageHero"
import { ProjectForm } from "@/components/Interactive"
import { contact } from "@/lib/site-data"
export const metadata={title:"Contact"}
export default function ContactPage(){return <main><PageHero eyebrow="Get In Touch" title="LET'S BUILD WHAT'S NEXT." intro="Bring us a single project, a multi-division requirement or an early-stage brief. The first conversation is about understanding the right path."/><section className="contact-info dark"><a href="tel:+923343660833"><Phone/><span>Primary WhatsApp</span><strong>{contact.phone1}</strong></a><a href={`mailto:${contact.email}`}><Mail/><span>Email</span><strong>{contact.email}</strong></a><div><MapPin/><span>Head office</span><strong>{contact.address}</strong></div></section><section className="section light form-section"><div><p className="eyebrow">Project consultation</p><h2>TELL US<br/><em>WHAT YOU NEED.</em></h2><p>Monday–Saturday · 9:00 AM–6:00 PM PKT</p></div><ProjectForm/></section></main>}
