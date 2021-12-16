import React from 'react'

export default function UserDashboard() {
    return (
        <>
            <div className="s-layout">

<div className="s-layout__sidebar">
  <a className="s-sidebar__trigger_dashboard" href="#0">
     <i className="fa fa-bars"></i>
  </a>

  <nav className="s-sidebar__nav">
     <ul>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-home"></i><em>Home</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
             <i className="fa fa-user"></i><em>My Profile</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-camera"></i><em>Camera</em>
           </a>
        </li>
        <li>
           <a className="s-sidebar__nav-link" href="#0">
              <i className="fa fa-camera"></i><em>Camera</em>
           </a>
        </li>
     </ul>
  </nav>
</div>


<main className="s-layout__content">
  <h1>Full View, Please!</h1>
</main>
</div>
        </>
    )
}
