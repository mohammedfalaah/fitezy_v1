import React from 'react'

const Header = () => {
  return (
    <>
 <header className="elementskit-header xs-header-transparent">
    <div className="xs-container">
      <div className="xs-navbar">
        <a className="xs-navbar-brand" href="index.html">
        <img style={{height:'8.5rem'}} src="assets/images/logo/fit_ezy.png" alt="navbar logo" />
        </a>
        <nav className="elementskit-navbar ml-auto">
          <button className="elementskit-menu-hamburger elementskit-menu-toggler">
            <span className="elementskit-menu-hamburger-icon" />
            <span className="elementskit-menu-hamburger-icon" />
            <span className="elementskit-menu-hamburger-icon" />
          </button>
          <div className="elementskit-menu-container elementskit-menu-offcanvas-elements">
            <ul className="elementskit-navbar-nav nav-alignment-dynamic">
              <li>
                <a style={{
                      color: location.pathname === '/terms-conditions'|| '/privacy-policy' ? 'black' : 'black'
                    }} href="#">
                  Home
                </a>
              
              </li>
              <li >
                <a style={{
                      color: location.pathname === '/terms-conditions' || '/privacy-policy' ? 'black' : 'black'
                    }} href="#about">
                  About
                </a>                                                                            
              </li>
              <li className="elementskit-dropdown-has">
                <a style={{
                      color: location.pathname === '/terms-conditions' || '/privacy-policy' ? 'black' : 'inherit'
                    }} href="services.html">
                  Services
                </a>            
              </li>
             
              <li>
                <a style={{
                      color: location.pathname === '/terms-conditions'|| '/privacy-policy' ? 'black' : 'inherit'
                    }} href="contact.html">Contact</a>
              </li>
            </ul>
            <div className="elementskit-nav-identity-panel">
              <h1 className="elementskit-site-title">
                <a className="elementskit-nav-logo" href="index.html">
                  <img src="assets/images/logo/logo-black.png" alt="navbar logo" />
                </a>
              </h1>
              <button className="elementskit-menu-close elementskit-menu-toggler" type="button">
                <i className="icon icon-cancel" />
              </button>
            </div>
          </div>
          <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler">
          </div>
        </nav>
        <ul className="xs-menu-tools">
          <li>
            <a href="#modal-popup-2" className="navsearch-button xs-modal-popup">
              <i className="icon icon-search" />
            </a>
          </li>
          <li>
            <a href="#" className="offset-side-bar xs-modal-popup">
              <i className="icon icon-cart" />
              <span className="xs-badge">0</span>
            </a>
          </li>
          <li>
            <a href="#" className="navSidebar-button">
              <i className="icon icon-menu" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header