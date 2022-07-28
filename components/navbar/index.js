import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link href="/ws"><a className="nav-link">WS</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/wh"><a className="nav-link">WH</a></Link>
        </li>
        <li className="nav-item">
        <Link href="/sj"><a className="nav-link">SJ (In Progress)</a></Link>
        </li>
        <li className="nav-item active">
        <Link href="/clientContent"><a className="nav-link">ClientContent (In Progress)</a></Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}