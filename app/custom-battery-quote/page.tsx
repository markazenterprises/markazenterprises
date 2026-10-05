import { PageHero } from "@/components/PageHero"
import { ProjectForm } from "@/components/Interactive"
export const metadata={title:"Custom Battery Quote"}
export default function BatteryQuote(){return <main><PageHero eyebrow="Custom Energy Storage" title="SPECIFY THE SYSTEM. WE'LL ENGINEER THE PACK." intro="Share the electrical, physical and communication requirements for a tailored LiFePO4 battery configuration."/><section className="section light form-section"><div><p className="eyebrow">Technical brief</p><h2>VOLTAGE.<br/>CAPACITY.<br/><em>APPLICATION.</em></h2><p>Standard target turnaround for a technical BOQ and pricing response is within 24 hours.</p></div><ProjectForm kind="battery"/></section></main>}
