import React from 'react';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function NavPublic() {
  return (
    <StickyHeader
      header={
        <nav class="navbar bg-white navbar-expand-lg bg-purple py-2 w-100 fixed-nav shadow-sm">
          <a  class="navbar-brand" href="#">
            <img
              src="/assets/logo.png"
              height="36px"
              width="36px"
              className="img-fluid img-logo"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav w-100 d-flex justify-content-around">
              <a style={{ textDecoration: 'none' }} href="#section1">
                <h5>Home</h5>
              </a>
              <a style={{ textDecoration: 'none' }} href="#section2">
                <h5>About Me</h5>
              </a>
              <a style={{ textDecoration: 'none' }} href="#section3">
                <h5>My Work</h5>
              </a>
              <a style={{ textDecoration: 'none' }} href="#section4">
                <h5>Contact Us</h5>
              </a>
            </div>
          </div>
        </nav>
      }
    ></StickyHeader>
  );
}

export default NavPublic;
