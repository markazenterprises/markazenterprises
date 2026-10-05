import { productPhotos } from "@/lib/product-photos"
import Image from "next/image"

const products = [
  ["ess-systems", "Wall-mount & rack ESS systems", "Energy storage for homes, businesses and industrial systems."],
  ["custom-battery-packs", "Custom LiFePO4 pack assembly", "Battery packs tailored to your voltage, capacity and enclosure requirements."],
  ["inverter-bms", "Smart inverter BMS integration", "CAN / RS485 communication between batteries and compatible inverters."],
  ["bms-calibration", "Active balancing & BMS calibration", "Battery management, cell balancing and system diagnostics."],
] as const

export function EnergyShowcase({stockPhotos=false}:{stockPhotos?:boolean}) {
  return <section className="section light energy-showcase">
    <div className="section-heading"><div><p className="eyebrow">Markaz energy solutions</p><h2>STORAGE. CONTROL.<br/><em>BUILT TOGETHER.</em></h2></div><p>Explore our battery systems, custom assembly and integration capabilities.</p></div>
    <div className="energy-showcase-grid">
      <figure className="energy-showcase-wide"><Image unoptimized src={stockPhotos?productPhotos.solar.src:"/images/energy-solutions.jpg"} alt={stockPhotos?"Solar panel installation":"Markaz solar and lithium battery product range"} width={1536} height={1024} sizes="(max-width: 680px) 100vw, 90vw"/><figcaption><h3>Solar & lithium energy solutions</h3><p>Generation, energy storage and system integration.</p></figcaption></figure>
      {products.map(([image,title,copy],i)=><figure key={image}><Image unoptimized src={stockPhotos?[productPhotos.cabinet,productPhotos.cells,productPhotos.wiring,productPhotos.controls][i].src:`/images/${image}.jpg`} alt={stockPhotos?["Electrical equipment cabinets","Rechargeable lithium-ion battery pack","Electrical system wiring","Electronic control circuitry"][i]:title} width={1536} height={1024} sizes="(max-width: 680px) 100vw, 45vw"/><figcaption><h3>{title}</h3><p>{copy}</p></figcaption></figure>)}
    </div>
    {stockPhotos&&<p className="photo-credits">Illustrative imagery. Photos by {Object.values(productPhotos).map((p,i)=><span key={p.href}>{i>0&&", "}<a href={p.href} target="_blank" rel="noreferrer">{p.credit}</a></span>)} on Unsplash.</p>}
  </section>
}

export function SolarShowcase() {
  return <section className="section light solar-showcase"><div className="section-heading"><div><p className="eyebrow">Solar energy systems</p><h2>FROM GENERATION<br/><em>TO INSTALLATION.</em></h2></div><p>Solar hardware and installation expertise for residential, commercial and industrial energy needs.</p></div><div className="solar-showcase-grid">{[["solar-panels-sky","Solar generation"],["solar-array","Solar panel arrays"],["solar-installation","Solar installation"],["inverter-installation","Inverter & battery integration"]].map(([image,title])=><figure key={image}><Image unoptimized src={`/images/${image}.jpg`} alt={title} width={800} height={600} sizes="(max-width: 680px) 100vw, 45vw"/><figcaption>{title}</figcaption></figure>)}</div></section>
}
