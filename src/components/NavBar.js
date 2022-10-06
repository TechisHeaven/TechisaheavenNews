import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=()=>{

    return (
        <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TechisheavenNews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item mx-2">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <div className="dropdown mx-2">
                <button className="btn btn-secondary dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu">
                <li className="nav-item">
                <Link className="dropdown-item" to="/">All</Link>
              </li>
                <li className="nav-item">
                <Link className="dropdown-item" to="/business">business</Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item" to="/entertainment">entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item" to="/health">health</Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item" to="/science">science</Link>
              </li>
              <li className="nav-item">
                <Link className="dropdown-item" to="/sports">sports</Link>
              </li>
              <li className="nav-item">
                <Link className=" dropdown-item" to="/technology">technology</Link>
              </li>
                </ul>
            </div>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default NavBar
