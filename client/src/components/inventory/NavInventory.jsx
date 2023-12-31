import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const NavInventory = () => {
  return (
    <>
      
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/additems">Add Item</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/displayitems">Item Display</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/additemgroups">ADD ITEM GROUP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/displayitemgroups">ItemGroup Display</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/addadjustments">ADD ADJUSTMENT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/displayadjustments">DISPLAY ADJUSTMENT</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default NavInventory