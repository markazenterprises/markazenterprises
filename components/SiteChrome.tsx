"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { contact } from "@/lib/site-data"

const nav = [
  ["About", "/about"],
  ["Divisions", "/divisions"],
  ["Projects", "/projects"],
  ["Products", "/products"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
]

export function MarkazLogo() {
  return (
    <Link className="brand-lockup" href="/" aria-label="Markaz Enterprises home">
      <img className="brand-logo-icon" src="/logo.svg" alt="" aria-hidden="true" />
      <span><strong>MARKAZ</strong><small>ENTERPRISES</small></span>
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 24)
    handle()
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = "" } }, [open])

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <MarkazLogo />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="button button-small desktop-cta" href="/contact">Start a project <ArrowUpRight size={16} /></Link>
      <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-top"><MarkazLogo /><button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight /></Link>)}
        </nav>
        <div className="mobile-menu-contact"><a href="tel:+923343660833">{contact.phone1}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>Karachi · Pakistan-wide</p></div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-lead">
        <p className="eyebrow">Start the conversation</p>
        <h2>ONE ENTERPRISE.<br/><em>BUILT FOR WHAT&apos;S NEXT.</em></h2>
        <Link className="circle-link" href="/contact" aria-label="Start a project"><ArrowUpRight /></Link>
      </div>
      <div className="footer-grid">
        <div><MarkazLogo /><p>Integrated construction, energy, technology and infrastructure solutions across Pakistan.</p></div>
        <div><span className="footer-label">Explore</span>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
        <div><span className="footer-label">Contact</span><a href="tel:+923343660833">{contact.phone1}</a><a href="tel:+923412899849">{contact.phone2}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        <div><span className="footer-label">Head office</span><address>{contact.address}</address><p>Mon–Sat · 9:00 AM–6:00 PM PKT</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Markaz Enterprises</span><span>Karachi · Lahore · Islamabad · Rawalpindi · Multan · Hyderabad</span></div>
    </footer>
  )
}
