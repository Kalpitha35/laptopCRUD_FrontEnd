import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Smart Space</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
        <Link className='nav-link active' style={{textDecoration:'none'}} to={'/'}>HOME</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link active' style={{textDecoration:'none'}} to={'/add'}>ADD PRODUCTS</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link active' style={{textDecoration:'none'}} to={'/'}>VIEW PRODUCTS</Link>
        </li>
       
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit" fdprocessedid="sc832e">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Header