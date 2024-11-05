import React from 'react'

const Footer = () => {
  return (
    <>
     <footer className="footer-1">
    <div className="xs-footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget xs-mr-35">
              <div className="xs-footer-logo">
                <img src="assets/images/logo/logo-red.png" alt="logo" />
              </div>
              <p>We have heap of fun piece of equipmnt builds dow every inh your body the and From boty in builders for them to exicute.</p>
              <ul className="xs-footer-contact-info">
                <li>
                  <i className="icon icon-location" />
                  <p>GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022</p>
                </li>
                <li>
                  <i className="icon icon-phone" />
                  <p>
                    <a className="xs-phone-number" href="tel:+65-094-778-622">65 094 778 622</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h3 className="widget-title">PAGES</h3>
              <div className="media">
                <div className="media-body">
                  <ul className="list-unstyled">
                    <li><a href="#">About GymVast</a></li>
                    <li><a href="#">Our Trainers</a></li>
                    <li><a href="#">Our Shop</a></li>
                    <li><a href="#">Pricing Plans</a></li>
                    <li><a href="#">Our Services</a></li>
                  </ul>
                </div>
                <div className="media-body">
                  <ul className="list-unstyled">
                    <li><a href="#">Club Rules</a></li>
                    <li><a href="#">Privacy Policies</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget xs-footer-subscribe">
              <h3 className="widget-title">Newsletter</h3>
              <p>Subscribe to our Newsletter to be updated. We promise not to spam.</p>
              <form action="#" method="POST" className="xs-subscribe-form">
                <div className="form-group">
                  <input type="email" name="email" id="sub-input2" className="form-control" placeholder="Your email" />
                </div>
                <label htmlFor="sub-input2" />
                <div className="form-group">
                  <button type="submit">subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="xs-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p>Copyright © 2018 GymVast. All Rights Reserved</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-center text-md-right">
              <li><a href="#" className="icon icon-facebook" /></li>
              <li><a href="#" className="icon icon-twitter" /></li>
              <li><a href="#" className="icon icon-linkedin" /></li>
              <li><a href="#" className="icon icon-instagram" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>

    </>
  )
}

export default Footer