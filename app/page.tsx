import { workPhotos } from "@/lib/work-photos"
import { EnergyShowcase, SolarShowcase } from "@/components/EnergyShowcase"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown, ArrowRight, ArrowUpRight, BatteryCharging, SunMedium } from "lucide-react"
import { DivisionExplorer, FAQ } from "@/components/Interactive"
import { insights, projects } from "@/lib/site-data"

export default function Home() {
  return <main>
    <section className="hero">
      <Image className="hero-image" src="/images/markaz-hero.png" alt="Commercial solar, modern construction and industrial energy storage" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-topline"><span>Integrated enterprise solutions</span><span>Pakistan · Est. 2014</span></div>
        <h1><span>BUILDING.</span><span>POWERING.</span><span className="outline">CONNECTING.</span><span>WHAT COMES NEXT.</span></h1>
        <div className="hero-bottom">
          <p>One accountable enterprise for construction, renewable energy, lithium storage, technology and infrastructure.</p>
          <div><Link className="button" href="/divisions">Explore capabilities <ArrowUpRight size={18}/></Link><Link className="button button-ghost" href="/contact">Start a project</Link></div>
        </div>
      </div>
      <a className="scroll-cue" href="#intro" aria-label="Scroll to introduction"><ArrowDown /></a>
    </section>

    <section className="intro section light" id="intro">
      <div className="section-index">01 / POSITIONING</div>
      <div className="intro-grid">
        <p className="eyebrow">One enterprise. Multiple capabilities.</p>
        <div><h2>Complex projects.<br/><em>One accountable partner.</em></h2><p className="large-copy">Markaz brings construction, energy, technology and infrastructure together under one coordinated delivery structure.</p></div>
      </div>
      <div className="three-pillars">
        <article><span>01</span><h3>Integrated delivery</h3><p>From planning and engineering to execution and support.</p></article>
        <article><span>02</span><h3>Specialized expertise</h3><p>Dedicated divisions for physical, digital and energy systems.</p></article>
        <article><span>03</span><h3>One point of accountability</h3><p>Multiple capabilities, coordinated through one enterprise.</p></article>
      </div>
    </section>

    <section className="section dark divisions-section">
      <div className="section-index">02 / CAPABILITIES</div>
      <div className="section-heading"><div><p className="eyebrow">11 specialized divisions</p><h2>ONE COMPANY.<br/>ELEVEN WAYS<br/><em>TO MOVE FORWARD.</em></h2></div><p>Specialized teams addressing the built environment, energy infrastructure, technology systems and business growth.</p></div>
      <DivisionExplorer />
    </section>

    <section className="energy section">
      <div className="section-index">03 / ENERGY INFRASTRUCTURE</div>
      <div className="energy-head"><p className="eyebrow">Designed around real demand</p><h2>POWER THAT WORKS<br/><em>BEYOND THE GRID.</em></h2></div>
      <div className="energy-grid">
        <article><Image unoptimized className="energy-photo" src="/images/solar-array.jpg" alt="Solar panel array" width={612} height={408}/><SunMedium/><span>DIV10</span><h3>Solar energy systems</h3><p>Commercial, industrial and residential systems—from generation and net metering to monitoring and long-term maintenance.</p><ul><li>On-grid & hybrid</li><li>Tier-1 hardware</li><li>Net-metering support</li><li>Remote monitoring</li></ul><Link href="/divisions/solar">Explore solar <ArrowUpRight/></Link></article>
        <article><Image unoptimized className="energy-photo" src="/images/inverter-installation.jpg" alt="Wall-mounted inverter and battery installation" width={800} height={600}/><BatteryCharging/><span>DIV11</span><h3>Lithium energy storage</h3><p>Custom LiFePO4 storage built with Grade-A cells, intelligent protection and closed-loop inverter communication.</p><ul><li>EVE prismatic cells</li><li>Active-balancing BMS</li><li>CAN / RS485</li><li>Custom enclosures</li></ul><Link href="/divisions/batteries">Explore batteries <ArrowUpRight/></Link></article>
      </div>
      <div className="brand-strip"><span>LONGi</span><span>JA SOLAR</span><span>HUAWEI</span><span>VICTRON</span><span>GROWATT</span><span>DEYE</span><span>EVE</span></div>
    </section>

    <section className="stats dark">
      {[["10+","Years of experience"],["500+","Projects delivered"],["98%","Client satisfaction"],["11","Specialized divisions"],["PK","Nationwide delivery"]].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}
    </section>

    <section className="section projects light">
      <div className="section-index">04 / SELECTED WORK</div>
      <div className="section-heading"><div><p className="eyebrow">Proof through delivery</p><h2>THE WORK<br/><em>SPEAKS FIRST.</em></h2></div><Link className="text-link" href="/projects">View all projects <ArrowUpRight/></Link></div>
      <div className="project-list">
        {projects.slice(0,4).map((project,i)=><Link href={`/projects/${project.slug}`} className="project-row" key={project.slug}><span className="project-no">{project.number}</span><div className="project-art work-photo"><Image unoptimized src={workPhotos[i].src} alt={workPhotos[i].alt} fill sizes="(max-width: 1000px) 90vw, 25vw"/><span>{project.category}</span></div><div><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.copy}</p><strong>{project.metric}</strong></div><ArrowUpRight className="project-arrow"/></Link>)}
      </div>
      <p className="photo-credits">Illustrative project photography from Unsplash.</p>
    </section>

    <div className="marquee" aria-hidden="true"><div>CONSTRUCTION ✦ ENERGY ✦ TECHNOLOGY ✦ INFRASTRUCTURE ✦ SECURITY ✦ INTERIORS ✦ ANALYTICS ✦ CONSTRUCTION ✦ ENERGY ✦ TECHNOLOGY ✦ INFRASTRUCTURE ✦&nbsp;</div></div>

    <section className="section process">
      <div className="section-index">05 / OUR PROCESS</div>
      <div className="process-grid">
        <div className="process-title"><p className="eyebrow">Structured delivery</p><h2>FROM IDEA<br/><em>TO HANDOVER.</em></h2><p>A transparent, five-stage process keeps scope, quality and accountability connected.</p></div>
        <div className="process-steps">
          {[["01","Discovery","Objectives, site conditions, technical needs and commercial expectations."],["02","Planning","Engineering, design, material selection and coordinated execution planning."],["03","Execution","Specialist teams deliver while maintaining scope and timeline control."],["04","Quality assurance","Material verification, execution monitoring and technical testing."],["05","Handover & support","Documentation, commissioning, training and ongoing support."]].map(([n,t,c])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{c}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="product-feature dark">
      <div className="product-copy"><p className="eyebrow">Energy storage products</p><h2>ENGINEERED FOR<br/><em>DEPENDABLE POWER.</em></h2><p>Complete battery systems, Grade-A cells, smart BMS hardware, displays, terminals and industrial enclosures.</p><div><Link className="button" href="/products">View catalogue <ArrowUpRight/></Link><Link className="text-link light-link" href="/custom-battery-quote">Request custom pack <ArrowUpRight/></Link></div></div>
      <Image unoptimized className="energy-product-image" src="/images/energy-solutions.jpg" alt="Markaz lithium batteries, solar energy and advanced power solutions" width={1536} height={1024} sizes="(max-width: 1000px) 100vw, 45vw"/>
    </section>

    <EnergyShowcase/>
    <SolarShowcase/>

    <section className="section values light">
      <div className="section-index">06 / ABOUT MARKAZ</div>
      <div className="section-heading"><div><p className="eyebrow">Built in Karachi. Expanded through capability.</p><h2>QUALITY IS BUILT<br/><em>INTO EVERY STAGE.</em></h2></div><p>Since 2014, Markaz has grown from a construction-focused organization into an integrated enterprise for infrastructure, energy and technology.</p></div>
      <div className="value-rows">{["Quality first","Customer commitment","Innovation","Integrity","Sustainability","Results-oriented"].map((v,i)=><div key={v}><span>0{i+1}</span><strong>{v}</strong><ArrowRight/></div>)}</div>
    </section>

    <section className="section insights dark">
      <div className="section-index">07 / INSIGHTS</div>
      <div className="section-heading"><div><p className="eyebrow">Knowledge behind the work</p><h2>FIELD NOTES.<br/><em>ENGINEERED THINKING.</em></h2></div><Link className="text-link light-link" href="/insights">All insights <ArrowUpRight/></Link></div>
      <div className="insight-list">{insights.map(item=><Link href="/insights" key={item.slug}><span>{item.number}</span><small>{item.category}</small><h3>{item.title}</h3><ArrowUpRight/></Link>)}</div>
    </section>

    <section className="section faq-section light">
      <div className="section-index">08 / FREQUENT QUESTIONS</div>
      <div className="faq-grid"><div><p className="eyebrow">Clear answers</p><h2>BEFORE WE<br/><em>BEGIN.</em></h2></div><FAQ/></div>
    </section>

    <section className="contact-banner">
      <div><p className="eyebrow">Your next project starts here</p><h2>HAVE A PROJECT<br/>IN MIND?</h2></div>
      <div><p>Talk to one team about construction, energy, technology—or a project that connects all three.</p><Link className="button button-light" href="/contact">Let&apos;s build what&apos;s next <ArrowUpRight/></Link></div>
    </section>
  </main>
}
