"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/guards", "Find guards"],
  ["/agencies", "For agencies"],
  ["/safety", "Safety"],
  ["/about", "About"],
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <nav className="site-nav">
      <Link className="brand" href="/"><span className="shield">◆</span><strong>HireGuard</strong></Link>
      <div className="navlinks">{links.map(([href,label]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}</div>
      <div className="navactions"><Link className="ghost" href="/contact">Contact</Link><Link className="primary small" href="/request">Hire a guard</Link></div>
    </nav>
  );
}
