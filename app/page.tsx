"use client";

import { useState } from "react";

const guards = [
  { name: "Hamza Ali", initials: "HA", role: "Corporate Security", rating: "4.9", jobs: 127, distance: "1.8 km", status: "Available", skills: ["SIA Licensed", "First Aid"] },
  { name: "Daniel Reed", initials: "DR", role: "Event Security", rating: "4.8", jobs: 94, distance: "3.2 km", status: "Available", skills: ["Crowd Control", "Vetted"] },
  { name: "Omar Khan", initials: "OK", role: "Residential Security", rating: "4.9", jobs: 81, distance: "4.1 km", status: "On shift", skills: ["CCTV", "First Aid"] },
];

export default function Home() {
  const [screen, setScreen] = useState<"home" | "request" | "guards">("home");
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const toast = (message: string) => { setNotice(message); setTimeout(() => setNotice(""), 2800); };

  return (
    <main className="site-shell">
      {notice && <div className="toast">✓ {notice}</div>}

      {screen === "home" && <>
        <section className="hero">
          <div className="eyebrow"><i /> VERIFIED SECURITY, ON DEMAND</div>
          <h1>Professional protection.<br/><span>Right when you need it.</span></h1>
          <p>Book licensed, vetted security professionals for your business, event, property or personal protection—in minutes.</p>
          <div className="heroactions"><button className="primary" onClick={() => setScreen("request")}>Find a guard <b>→</b></button><button className="secondary" onClick={() => toast("Guard registration preview opened")}>Join as a guard</button></div>
          <div className="trust"><span>✓ ID & licence verified</span><span>✓ Background checked</span><span>✓ Rated by clients</span></div>
          <div className="visual">
            <div className="grid-floor" />
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="radar r1"/><div className="radar r2"/><div className="radar r3"/>
            <div className="scanline" />
            <div className="guardmark photo-guard"><img src="/assets/guard-hero-transparent.webp" alt="Verified professional security guard" /></div>
            <div className="data-node node-one">01</div><div className="data-node node-two">02</div><div className="data-node node-three">03</div>
            <div className="floating verified"><span>✓</span><div><b>Identity verified</b><small>Documents approved</small></div></div>
            <div className="floating nearby"><span>●</span><div><b>12 guards nearby</b><small>Ready within 15 minutes</small></div></div>
          </div>
        </section>
        <section className="stats"><div><b>2,400+</b><span>Verified guards</span></div><div><b>18,000+</b><span>Completed shifts</span></div><div><b>4.9/5</b><span>Average rating</span></div><div><b>&lt; 15 min</b><span>Average response</span></div></section>
        <section className="how"><div className="sectionhead"><span>HOW IT WORKS</span><h2>Security in three simple steps</h2></div><div className="steps"><article><div className="card-glow"/><em>01</em><div className="icon">⌖</div><h3>Tell us what you need</h3><p>Choose your location, date, time and type of security required.</p><b className="card-arrow">↗</b></article><article><div className="card-glow"/><em>02</em><div className="icon">◎</div><h3>Review matched guards</h3><p>Compare verified profiles, experience, distance and client ratings.</p><b className="card-arrow">↗</b></article><article><div className="card-glow"/><em>03</em><div className="icon">✓</div><h3>Confirm your guard</h3><p>Agree on the shift, hire securely and stay connected throughout.</p><b className="card-arrow">↗</b></article></div></section>
        <section className="services">
          <div className="sectionhead left"><span>BUILT FOR EVERY SITUATION</span><h2>The right protection for every place.</h2><p>From a single four-hour shift to ongoing site coverage, book the exact level of support you need.</p></div>
          <div className="service-grid">
            <article><i>01</i><div className="service-icon">▦</div><h3>Corporate & retail</h3><p>Professional front-of-house, access control and loss-prevention teams.</p><button onClick={() => setScreen("request")}>Book corporate security →</button></article>
            <article><i>02</i><div className="service-icon">◉</div><h3>Events & venues</h3><p>Guest screening, crowd management and calm on-site response.</p><button onClick={() => setScreen("request")}>Secure an event →</button></article>
            <article><i>03</i><div className="service-icon">⌂</div><h3>Property & construction</h3><p>Visible deterrence, patrols and monitored protection around the clock.</p><button onClick={() => setScreen("request")}>Protect a property →</button></article>
            <article><i>04</i><div className="service-icon">◆</div><h3>Personal protection</h3><p>Discreet, experienced professionals for travel and close protection.</p><button onClick={() => setScreen("request")}>Request protection →</button></article>
          </div>
        </section>
        <section className="verification">
          <div className="verify-visual">
            <div className="id-card"><div className="id-top"><span className="mini-avatar">HA</span><div><b>Hamza Ali</b><small>Security professional</small></div><em>✓</em></div><div className="id-lines"><span/><span/><span/></div><div className="id-foot"><b>IDENTITY VERIFIED</b><small>Updated today</small></div></div>
            <div className="verify-ring"><span>✓</span><b>6-step</b><small>verification</small></div>
          </div>
          <div className="verify-copy"><span className="kicker">TRUST IS BUILT IN</span><h2>Every guard is checked before they appear.</h2><p>Our layered verification process helps agencies and clients make confident decisions without slowing down urgent bookings.</p><ul><li><span>✓</span><div><b>Government ID verification</b><small>Identity documents and live face checks.</small></div></li><li><span>✓</span><div><b>Licence and qualification review</b><small>Security credentials checked for validity.</small></div></li><li><span>✓</span><div><b>Human approval and ongoing ratings</b><small>Profiles reviewed before activation and after every shift.</small></div></li></ul></div>
        </section>
        <section className="agency">
          <div><span>FOR SECURITY AGENCIES</span><h2>Run every guard, shift and client from one command centre.</h2><p>Replace spreadsheets and scattered messages with a clear workflow for onboarding, verification, availability and assignment.</p><div className="agency-pills"><b>Guard database</b><b>Shift dispatch</b><b>Client requests</b><b>Reviews & reports</b></div><button className="primary" onClick={() => toast("Agency demonstration requested")}>Request agency demo →</button></div>
          <div className="dashboard-card"><div className="dash-top"><b>Live operations</b><span>● All systems online</span></div><div className="dash-stat"><span><b>28</b><small>Active guards</small></span><span><b>12</b><small>Live shifts</small></span><span><b>04</b><small>New requests</small></span></div><div className="shift-row"><i>HA</i><div><b>City Centre · Corporate</b><small>18:00–02:00 · On site</small></div><em>LIVE</em></div><div className="shift-row"><i>DR</i><div><b>Riverside Hall · Event</b><small>19:30–00:30 · En route</small></div><em>12 MIN</em></div></div>
        </section>
        <section className="final-cta"><div className="cta-orbit one"/><div className="cta-orbit two"/><span>SECURITY WITHOUT THE WAIT</span><h2>Protection is only a few clicks away.</h2><p>Tell us what you need and meet verified professionals ready to take the shift.</p><div><button className="primary" onClick={() => setScreen("request")}>Find a guard now →</button><button className="dark-secondary" onClick={() => toast("Agency callback requested")}>Talk to our team</button></div></section>
      </>}

      {screen === "request" && <section className="appscreen"><button className="back" onClick={() => setScreen("home")}>← Back</button><div className="formcard"><span className="kicker">NEW SECURITY REQUEST</span><h2>What do you need protected?</h2><p>Enter the shift details and we’ll match you with nearby verified guards.</p><div className="grid"><label>Service type<select><option>Corporate security</option><option>Event security</option><option>Residential security</option><option>Personal protection</option></select></label><label>Location<input defaultValue="Central London" /></label><label>Date<input type="date" defaultValue="2026-08-22" /></label><label>Start time<input type="time" defaultValue="18:00" /></label><label>Duration<select><option>4 hours</option><option>8 hours</option><option>12 hours</option></select></label><label>Guards needed<select><option>1 guard</option><option>2 guards</option><option>3 guards</option></select></label></div><label>Additional details<textarea placeholder="Access instructions, dress code, responsibilities…" /></label><button className="primary submit" onClick={() => { setScreen("guards"); toast("3 verified guards matched nearby"); }}>Find available guards →</button></div></section>}

      {screen === "guards" && <section className="appscreen"><button className="back" onClick={() => setScreen("home")}>← Back to home</button><div className="resultshead"><div><span className="kicker">LIVE MATCHES</span><h2>Verified guards near you</h2><p>Available for your selected location and shift.</p></div><button className="secondary" onClick={() => setScreen("request")}>Edit request</button></div><div className="guardlist">{guards.map((g) => <article className={selected === g.name ? "guardcard selected" : "guardcard"} key={g.name}><div className="avatar">{g.initials}<i>✓</i></div><div className="guardinfo"><div className="titleline"><h3>{g.name}</h3><span className={g.status === "Available" ? "available" : "busy"}>● {g.status}</span></div><p>{g.role}</p><div className="meta"><span>★ {g.rating}</span><span>{g.jobs} completed jobs</span><span>⌖ {g.distance} away</span></div><div className="chips">{g.skills.map(s => <span key={s}>{s}</span>)}</div></div><button className="primary hire" onClick={() => { setSelected(g.name); toast(`${g.name} selected — agency notified`); }}>Select guard</button></article>)}</div></section>}

    </main>
  );
}
