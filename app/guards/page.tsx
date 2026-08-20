import Link from "next/link";

const guards = [
  ["Hamza Ali","HA","Corporate security","4.9","127","1.8 km",["SIA licensed","First aid"]],
  ["Daniel Reed","DR","Event security","4.8","94","3.2 km",["Crowd control","Vetted"]],
  ["Aisha Malik","AM","Residential security","5.0","76","3.6 km",["CCTV","Concierge"]],
  ["Omar Khan","OK","Construction security","4.9","81","4.1 km",["Site patrol","First aid"]],
  ["Sofia Ahmed","SA","Retail security","4.8","112","4.8 km",["Loss prevention","Vetted"]],
  ["Marcus Cole","MC","Close protection","4.9","69","5.2 km",["Executive","Advanced first aid"]],
];

export default function GuardsPage(){
  return <main className="inner-page"><section className="page-hero compact"><span className="kicker">VERIFIED PROFESSIONALS</span><h1>Find the right guard<br/><em>for the shift.</em></h1><p>Review experience, credentials, availability and client ratings before you decide.</p></section><section className="directory"><aside className="filters"><div><b>Search</b><input placeholder="Name, skill or location"/></div><div><b>Service</b>{["Corporate","Events","Property","Retail","Personal"].map(x=><label key={x}><input type="checkbox"/>{x}</label>)}</div><div><b>Availability</b><label><input type="checkbox"/>Available now</label><label><input type="checkbox"/>Available today</label></div><button className="secondary">Reset filters</button></aside><div><div className="directory-top"><div><b>Available professionals</b><span>24 verified guards found</span></div><select><option>Recommended</option><option>Nearest first</option><option>Highest rated</option></select></div><div className="profile-grid">{guards.map((g,i)=><article className="profile-card" key={g[0] as string}><div className="profile-cover"><span className="avatar large">{g[1] as string}<i>✓</i></span><b className="online">● AVAILABLE</b></div><div className="profile-body"><h3>{g[0] as string}</h3><p>{g[2] as string}</p><div className="profile-meta"><span>★ {g[3] as string}</span><span>{g[4] as string} shifts</span><span>⌖ {g[5] as string}</span></div><div className="chips">{(g[6] as string[]).map(s=><span key={s}>{s}</span>)}</div><Link className="profile-link" href={i===0?"/guards/hamza-ali":"/request"}>{i===0?"View full profile":"Request this guard"} →</Link></div></article>)}</div></div></section></main>
}
