import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavInventory from '../inventory/NavInventory';
import NavVendor from '../vendormodule/NavVendor';
const Home = () => {
  return (
    <>
      
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <a class="navbar-brand" href="/">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQjWK_O2Me2jdlIhkJfHN0j3m_KMa2fXX-g&usqp=CAU" alt="" width="75" height="100" class="d-inline-block align-text-top"></img>
                    
     </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/navinventory">INVENTORY</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/navsales">SALES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/navvendor">VENDOR</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/displayitemgroups">ItemGroup Display</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addadjustments">ADD ADJUSTMENT</a>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Home