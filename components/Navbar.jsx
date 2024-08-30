import { GET_AUTH_USER } from '@/apollo/queries'
import { useQuery } from '@apollo/client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
  
  const session = useSession();
    console.log("ss ",session)
  const clearToken = ()=>{
    // localStorage.removeItem("token");
  }
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
           {!session?.data?.user ?
            <>
              <li className="nav-item mr-3">
              <Link className="nav-link" href="/register">Sign Up</Link>
            </li>
            <li className="nav-item mr-3">
              <Link className="nav-link btn btn-success bg-green-2 bright" href="/login">Sign In</Link>
            </li>
            </>
            :<>
              <span className='nav-link mr-4'>{session?.data?.user?.name}</span>
              <Link href="/login" onClick={()=>signOut()} className='nav-link btn btn-danger'>Sign Out</Link>
            </>}
          </ul>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar