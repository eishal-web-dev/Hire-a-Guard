import Link from "next/link";

export default function SiteFooter() {
  return <footer className="mega-footer"><div className="footer-main"><div><Link className="brand" href="/"><span className="shield">◆</span><strong>HireGuard</strong></Link><p>Verified people. Clear operations.<br/>Security made simpler.</p></div><div><b>Platform</b><Link href="/guards">Find guards</Link><Link href="/request">Create request</Link><Link href="/agencies">Agency platform</Link></div><div><b>Trust</b><Link href="/safety">Verification</Link><Link href="/safety">Safety standards</Link><Link href="/about">Our mission</Link></div><div><b>Company</b><Link href="/about">About us</Link><Link href="/contact">Contact</Link><a href="mailto:hello@ashesstack.com">Ashes Stack</a></div></div><div className="footer-bottom"><span>© 2026 HireGuard · An Ashes Stack product</span><span>Demo experience · No real bookings processed</span></div></footer>;
}
