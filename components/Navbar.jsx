import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
        <Link className="navbar-brand mr-3 font-weight-bold" href="/">FilipJerga</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">
              <Link className="nav-link" href="/portofilo">Portfolio</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" href="/fourm/categories">Fourm</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" href="/cv">Cv</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link" href="#">Ask me</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link className="nav-link" href="/register">Sign Up</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link btn btn-success bg-green-2 bright" href="/login">Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar