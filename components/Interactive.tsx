"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { divisions } from "@/lib/site-data"

export function DivisionExplorer() {
  const [active, setActive] = useState(9)
  const current = divisions[active]
  return (
    <div className="division-explorer">
      <div className="division-list">
        {divisions.map((item, index) => (
          <Link href={`/divisions/${item.slug}`} key={item.slug} className={index === active ? "active" : ""} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
            <span>DIV{item.number}</span><strong>{item.title}</strong><ArrowUpRight />
          </Link>
        ))}
      </div>
      <aside className="division-preview">
        <span className="big-number">{current.number}</span>
        <p className="eyebrow">Active capability</p>
        <h3>{current.title}</h3>
        <p>{current.short}</p>
        <ul>{current.details.map(detail => <li key={detail}><ArrowRight size={16}/>{detail}</li>)}</ul>
        <Link href={`/divisions/${current.slug}`}>Explore division <ArrowUpRight size={18}/></Link>
      </aside>
    </div>
  )
}

type FormKind = "general" | "battery"

export function ProjectForm({ kind = "general" }: { kind?: FormKind }) {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const fields = Array.from(form.entries()).map(([key, value]) => `${key}: ${value}`).join("\n")
    const title = kind === "battery" ? "Custom Battery Quote Request" : "Project Consultation Request"
    window.open(`https://wa.me/923343660833?text=${encodeURIComponent(`${title}\n\n${fields}`)}`, "_blank", "noopener,noreferrer")
    setSent(true)
  }
  return (
    <form className="project-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Full name *</span><input name="Full name" required placeholder="Your name" /></label>
        <label><span>Phone / WhatsApp *</span><input name="Phone" type="tel" required pattern="[+0-9 ()-]{7,}" placeholder="+92 3XX XXXXXXX" /></label>
        <label><span>Email address</span><input name="Email" type="email" placeholder="name@company.com" /></label>
        <label><span>Company</span><input name="Company" placeholder="Company name" /></label>
        {kind === "general" ? (
          <label className="full"><span>Target division *</span><select name="Division" required defaultValue=""><option value="" disabled>Select a capability</option>{divisions.map(d => <option key={d.slug}>{d.title}</option>)}<option>Multiple Divisions</option></select></label>
        ) : (<>
          <label><span>Nominal voltage *</span><input name="Nominal voltage" required placeholder="e.g. 48V / 51.2V" /></label>
          <label><span>Required capacity *</span><input name="Capacity" required placeholder="e.g. 100Ah" /></label>
          <label><span>Quantity *</span><input name="Quantity" type="number" min="1" required placeholder="1" /></label>
          <label><span>Inverter / application</span><input name="Application" placeholder="Deye, Growatt, ESS…" /></label>
        </>)}
        <label className="full"><span>{kind === "battery" ? "BMS, enclosure and size requirements" : "Project requirements"} *</span><textarea name="Requirements" required rows={5} placeholder="Tell us about the scope, location and timeline…" /></label>
      </div>
      <button className="button" type="submit">{kind === "battery" ? "Request technical quote" : "Submit project brief"} <ArrowUpRight size={18}/></button>
      <p className="form-note">{sent ? <><Check size={16}/> Your WhatsApp message is ready to send.</> : "Submitting opens a prepared WhatsApp enquiry to the Markaz team."}</p>
    </form>
  )
}

export function FAQ() {
  const items = [
    ["What services does Markaz Enterprises provide?", "Markaz operates 11 specialized divisions spanning construction, interiors, HVAC, security, web and mobile development, enterprise software, analytics, marketing, solar and lithium battery systems."],
    ["Can Markaz manage complete turnkey projects?", "Yes. Projects can be coordinated from discovery and planning through execution, quality assurance, handover and ongoing support."],
    ["Do you provide commercial and industrial solar systems?", "Yes. Markaz designs on-grid, off-grid and hybrid solar systems, with net-metering support, monitoring and maintenance."],
    ["Can you build custom lithium battery packs?", "Yes. Voltage, capacity, BMS communication, enclosure and inverter compatibility can be engineered around the application."],
    ["Do you work outside Karachi?", "Yes. Markaz lists Pakistan-wide execution, including Karachi, Lahore, Islamabad, Rawalpindi, Multan and Hyderabad."],
  ]
  return <div className="faq">{items.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
}
