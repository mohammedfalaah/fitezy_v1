import React from 'react'

const HomePage = () => {
  return (
    <>
<div>
  <div className="zoom-anim-dialog mfp-hide modal-searchPanel" id="modal-popup-2">
    <div className="xs-search-panel">
      <form action="#" method="POST" className="xs-search-group">
        <input type="search" className="form-control" name="search" id="search" placeholder="Search" />
        <button type="submit" className="search-button"><i className="icon icon-search" /></button>
      </form>
    </div>
  </div>
  <div className="xs-sidebar-group cart-group">
    <div className="xs-overlay xs-bg-black" />
    <div className="xs-sidebar-widget">
      <div className="sidebar-widget-container">
        <div className="widget-heading media">
          <div className="media-body">
            <a href="#" className="close-side-widget">
              <i className="icon icon-cancel" />
            </a>
          </div>
        </div>
        <div className="xs-empty-content">
          <h3 className="widget-title">Shopping cart</h3>
          <h4 className="xs-title">No products in the cart.</h4>
          <p className="empty-cart-icon">
            <i className="icon icon-shopping-cart" />
          </p>
          <p className="xs-btn-wraper">
            <a className="btn btn-primary" href="#">Return To Shop</a>
          </p>
        </div>
      </div>
    </div>
  </div> 
  <div className="xs-sidebar-group info-group">
    <div className="xs-overlay xs-bg-black" />
    <div className="xs-sidebar-widget">
      <div className="sidebar-widget-container">
        <div className="widget-heading">
          <a href="#" className="close-side-widget">
            <i className="icon icon-cancel" />
          </a>
        </div>
        <div className="sidebar-textwidget">
          <div className="sidebar-logo-wraper">
            <a href="index.html">
              <img src="assets/images/logo/logo-black.png" alt="sidebar logo" draggable="false" />
            </a>
          </div>
          <div className="xs-sidbar-getintouch">
            <h6 className="mb-3">Get in Touch</h6>
            <ul className="sideabr-list-widget">
              <li> <i className="icon icon-location" /> 224 West 20th St, New York</li>
              <li><i className="icon icon-paper-plane" /> NY 10011, USA</li>
              <li> <i className="icon icon-phone-call" />+1 212-255-5511</li>
              <li> <i className="icon icon-email" /><a href="https://html.xpeedstudio.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3e575058517e464e5b5b5a4d4a4b5a5751105d5153">[email&nbsp;protected]</a></li>
            </ul>
          </div>
          <div className="xs-instra-feed">
            <p className="text-primary"><strong>@gemvast</strong></p>
            <ul>
              <li><img src="assets/images/instrafeed/1.jpg" alt /></li>
              <li><img src="assets/images/instrafeed/2.jpg" alt /></li>
              <li><img src="assets/images/instrafeed/3.jpg" alt /></li>
            </ul>
          </div>
          <div className="xs-sidebar-image">
            <img src="assets/images/muscle_man.png" alt="muscle man" />
          </div>
        </div>
      </div>
    </div>
  </div> 
  <section className="xs-light-bg position-relative" data-scrollax-parent="true" id="home">
    <div className="container xs-clips-wraper">
      <div className="xs-clips">
        <img src="assets/images/shape/banner-light-clips.png" alt="clip" />
      </div>
    </div>
    <div className="owl-carousel owl-theme xs-slider-light-owl">
    <div className="xs-slide-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="xs-light-slide2 xs-fadeInLeft">
                <h6 style={{fontSize:'5rem'}}
                 className="xs-banner-title xs-line"> Gym Access <span>  Anywhere</span></h6>
                <p>
                FitEzy is a unique,
                 credit-based gym management platform designed to bring flexibility
                  and convenience to both gym owners <br /> and members. 
                                    </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="xs-light-slide-img2">
                <div className="xs-water-mark xs-slideInDown">Body</div>
                <img className="xs-fadeInRight" src="assets/images/slider-light/slide-2.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <div className="xs-shape xs-banner-light-left" data-scrollax="properties: { translateY: '-250px' }" style={{backgroundImage: 'url(assets/images/shape/banner-light-left.png)'}} />
        <div className="xs-shape xs-banner-light-right" data-scrollax="properties: { translateY: '250px' }" style={{backgroundImage: 'url(assets/images/shape/banner-light-right.png)'}} />
      </div>
      {/* <div className="xs-slide-inner">
        <div className="container">
          <div className="banner-inner-wraper">
            <h2 className="xs-before-text" data-text="FITN">Fitn</h2>
            <div className="xs-light-slide-img3 xs-fadeInRight">
              <img src="assets/images/slider-light/slide-3.png" alt="shape" />
            </div>
            <h2 className="xs-after-text" data-text="ESS">ess</h2>
          </div>
        </div>
        <div className="xs-shape xs-banner-light-left" data-scrollax="properties: { translateY: '-250px' }" style={{backgroundImage: 'url(assets/images/shape/banner-light-left.png)'}} />
        <img src="assets/images/shape/banner-light-clips-right.png" className="banner_right_shape" data-scrollax="properties: { translateY: '250px' }" alt />
      </div> */}
     
      <div className="xs-slide-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="xs-light-slide1 xs-fadeInLeft">
                <h6 style={{fontSize:'4rem'}} className="xs-banner-title xs-line">FitEzy Made Easy and <span>Flexible</span></h6>
                <p>World is committed to making particiation in the harassment free experience for everyone regardless</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="xs-light-slide-img1 xs-fadeInRight">
                <img src="assets/images/slider-light/slide-1.png" alt="images" />
              </div>
            </div>
          </div>
        </div>
        <div className="xs-shape xs-banner-light-left" data-scrollax="properties: { translateY: '-250px' }" style={{backgroundImage: 'url(assets/images/shape/banner-light-left.png)'}} />
        <div className="xs-shape xs-banner-light-right" data-scrollax="properties: { translateY: '250px' }" style={{backgroundImage: 'url(assets/images/shape/banner-light-right.png)'}} />
      </div>
    </div>
  </section>
<section id='about' className="xs-section-padding-lg position-relative" data-scrollax-parent="true">
  <div className="container">
    <div className="xs-help xs-help-about">
      <div className="row">
        <div className="col-lg-6">
          <div className="xs-section-heading text-left">
            <h2>About 
              <span> Us</span>
            </h2>
          </div>
          <p>
          Welcome to FitEzy, a revolutionary gym management solution designed to empower gym owners and fitness enthusiasts alike. Our platform makes fitness more accessible and flexible, providing a seamless credit-based system that allows members to access multiple gyms with ease.
At FitEzy, we believe in simplifying the way gyms manage memberships and payments. Gym owners can register their gyms, define custom packages, and assign both general and individual credits to their members. Whether it's a general membership or a custom credit-based package, our system handles everything from payments to membership transfers automatically, ensuring a hassle-free experience for both gym owners and members.
                           
                           </p>
        </div>
        <div className="col-lg-6">
          <div className="xs-video-wraper">
            <img src="assets/images/about-us.jpg" alt />
            <div className="xs-video-shape" data-scrollax="properties: { translateY: '-150px' }" style={{backgroundImage: 'url(assets/images/shape/help-shape.png)'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="xs-water-mark xs-help-wm" data-scrollax="properties: { translateY: '-250px' }">GYM</div>
</section>


  <section className="xs-section-padding" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="xs-section-heading text-center">
            <h2>Why <span>Fitezy</span></h2>
            <p>
            Join the fitness revolution with FitEzy, where flexibility meets innovation, and gyms and fitness enthusiasts come together in a community of shared wellness.              </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="xs-about-us" onmouseover="new Vivus('servicesvg', {duration: 50});">
            <object id="servicesvg" type="image/svg+xml" data="assets/images/services/01.svg" />
            <h3>Cross-Gym Access</h3>
            <p>
            Members can use their credits at any gym registered with FitEzy, offering them ultimate flexibility.            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="xs-about-us" onmouseover="new Vivus('servicesvg2', {duration: 50});">
            <object id="servicesvg2" type="image/svg+xml" data="assets/images/services/02.svg" />
            <h3>Automated Payments</h3>
            <p>
            Payments are processed automatically, removing the administrative burden from gym owners.            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="xs-about-us" onmouseover="new Vivus('servicesvg3', {duration: 50});">
            <object id="servicesvg3" type="image/svg+xml" data="assets/images/services/03.svg" />
            <h3>Credit Flexibility</h3>
            <p>
            Gym members can enjoy a customized credit system, allowing them to access various packages and gyms with ease.            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="xs-about-us" onmouseover="new Vivus('servicesvg4', {duration: 50});">
            <object id="servicesvg4" type="image/svg+xml" data="assets/images/services/04.svg" />
            <h3 style={{textWrap:'nowrap'}}>Streamlined Management</h3>
            <p>
            FitEzy's intuitive dashboard helps gym owners manage memberships, credits, and finances all in one place.            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="xs-light-bg xs-section-padding xs-pb-sm" data-scrollax-parent="true" id="training">
    <div className="xs-team-wraper">
      <div className="xs-shape xs-team-shape" data-scrollax="properties: { translateY: '-100%' }" style={{backgroundImage: 'url(assets/images/shape/dot.png)'}} />
      <div className="xs-shape xs-team-right-shape" data-scrollax="properties: { translateY: '100%' }" style={{backgroundImage: 'url(assets/images/shape/memphis.png)'}} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="xs-section-heading text-center">
              <h2>Our <span>Vision</span></h2>
              <p>
              At FitEzy, we envision a world where fitness is accessible, flexible, and empowering for everyone. We aim to break down barriers within the fitness industry, creating a connected community where individuals can access diverse workout experiences with ease and flexibility. Our goal is to empower gym owners with innovative management tools while offering members a seamless, credit-based system that adapts to their lifestyle. <br />
              With FitEzy, we’re redefining what it means to stay fit—making it easy to explore, connect, and thrive in a flexible fitness community. We’re committed to building a future where fitness knows no limits, and everyone has the freedom to pursue wellness on their own terms.                </p>
            </div>
          </div>
        </div>
        <div className="xs-classes-light">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-1.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-dumble" />
                    </div>
                    <h3>GRIT STRENGTH</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-2.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-equipment" />
                    </div>
                    <h3>ZUMBA ATHLETIC</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-3.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-yoga" />
                    </div>
                    <h3>FUSION YOga</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-4.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-heart" />
                    </div>
                    <h3>Meditation</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-5.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-climbing" />
                    </div>
                    <h3>Climbing Induction</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="xs-service">
                <img src="assets/images/classes/classes-item-6.jpg" alt="case" />
                <div className="xs-overlay d-flex align-items-center">
                  <div className="xs-service-content">
                    <div className="xs-icon-wraper">
                      <i className="icon icon-punch" />
                    </div>
                    <h3>punch Boxing</h3>
                    <p>We have heap of fun piece of equi to build down every inh of your for body.</p>
                    <a href="#" className="btn btn-primary">
                      <i className="icon icon-arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
  {/* <section className="xs-section-padding-lg xs-bg-cover parallaxie" style={{backgroundImage: 'url(assets/images/help-light-img.jpg)'}}>
    <div className="container">
      <div className="xs-help xs-help-light">
        <div className="row">
          <div className="col-lg-6">
            <div className="xs-section-heading">
              <h2>HELPING YOU to GO <br />
                <span>Since 1971</span>
              </h2>
            </div>
            <p>World is committed to making participation in the event harass ment free on experience for everyone, regardless of leve of expenc gender by identity and expression oriention disability for personal.</p>
            <a href="#" className="btn btn-primary">Join Classes <span className="icon icon-plus" /></a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <section className="xs-section-padding" data-scrollax-parent="true">
    <div className="xs-team-wraper">
      <div className="xs-shape" data-scrollax="properties: { translateY: '-250px' }" style={{backgroundImage: 'url(assets/images/shape/dot.png)'}} />
      <div className="xs-shape xs-team-right-shape" data-scrollax="properties: { translateY: '250px' }" style={{backgroundImage: 'url(assets/images/shape/memphis.png)'}} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="xs-section-heading text-center">
              <h2>Our <span>Trainers</span></h2>
              <p>World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="xs-team">
              <div className="xs-team-thumb">
                <img src="assets/images/team/team-1.jpg" alt="Jhon Statham" />
                <div className="xs-team-overlay d-flex align-items-center">
                  <ul className="list-unstyled xs-team-share">
                    <li>
                      <a href="#"><i className="icon icon-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-linkedin" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs-team-content">
                <h3>
                  <a href="trainer-details.html">Jhon Statham</a>
                </h3>
                <p>Yoga Trainer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="xs-team">
              <div className="xs-team-thumb">
                <img src="assets/images/team/team-2.jpg" alt="David William" />
                <div className="xs-team-overlay d-flex align-items-center">
                  <ul className="list-unstyled xs-team-share">
                    <li>
                      <a href="#"><i className="icon icon-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-linkedin" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs-team-content">
                <h3>
                  <a href="trainer-details.html">David William</a>
                </h3>
                <p>Yoga Trainer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="xs-team">
              <div className="xs-team-thumb">
                <img src="assets/images/team/team-3.jpg" alt="Robert Dany" />
                <div className="xs-team-overlay d-flex align-items-center">
                  <ul className="list-unstyled xs-team-share">
                    <li>
                      <a href="#"><i className="icon icon-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-linkedin" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs-team-content">
                <h3>
                  <a href="trainer-details.html">Robert Dany</a>
                </h3>
                <p>Yoga Trainer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="xs-team">
              <div className="xs-team-thumb">
                <img src="assets/images/team/team-4.jpg" alt="Ana Mariea" />
                <div className="xs-team-overlay d-flex align-items-center">
                  <ul className="list-unstyled xs-team-share">
                    <li>
                      <a href="#"><i className="icon icon-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-linkedin" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="icon icon-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="xs-team-content">
                <h3>
                  <a href="trainer-details.html">Ana Mariea</a>
                </h3>
                <p>Yoga Trainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <section className="xs-pt-50 xs-pb-sm parallaxie" style={{backgroundImage: 'url(assets/images/bmi-bg.png)'}}>
    <div className="container">
      <div className="xs-bmi">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="xs-colummn-heading2">
              <h2>BMI <span>Chart</span></h2>
            </div>
            <div className="table-responsive xs-bmi-table">
              <table className="table table-bordered">
                <caption>Body Metabolic Rate / energy expenditure per unit time</caption>
                <thead>
                  <tr>
                    <th scope="col">BMI</th>
                    <th scope="col">WEIGHT STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Below 18.5</td>
                    <td>Underweight</td>
                  </tr>
                  <tr>
                    <td>18.5 - 24.9</td>
                    <td>Healthy</td>
                  </tr>
                  <tr>
                    <td>25.0 - 29.9</td>
                    <td>Overweight</td>
                  </tr>
                  <tr>
                    <td>30 and Above</td>
                    <td>Obese</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="xs-colummn-heading2">
              <h2>Calculate <span>Your BMI</span></h2>
              <p>World is committed to making participation in the event harass ment free on experience for
                everyone, regardless of leve of expenc</p>
            </div>
            <form action="#" className="xs-form xs-form-dark">
              <div className="row">
                <div className="col-md-6">
                  <div id="heightWrap" className="form-group xs-form-anim">
                    <label className="input-label" htmlFor="xs-height">Height / cm</label>
                    <input type="number" min={1} max={500} id="xs-height" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="weightWrap" className="form-group xs-form-anim">
                    <label className="input-label" htmlFor="xs-weight">Weight / kg</label>
                    <input type="number" min={1} max={500} id="xs-weight" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group xs-form-anim">
                    <label className="input-label" htmlFor="xs-age">Age</label>
                    <input type="number" min={1} max={200} id="xs-age" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 align-self-end">
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadio1" name="sex" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio1">Male</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadio2" name="sex" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio2">Female</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadio3" name="sex" className="custom-control-input" />
                    <label className="custom-control-label" htmlFor="customRadio3">Other</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group xs-mt-20">
                    <button type="submit" id="calculate" className="btn btn-primary">Calculate</button>
                  </div>
                  <div id="xs-bmi-info" className="clearfix">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section className="xs-section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="xs-section-heading text-center">
            <h2>Fitness <span>Shop</span></h2>
            <p>World is committed to making participation in the event a harassment free experience for everyone, regardless of level of experience.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="xs-shop">
            <div className="xs-shop-thumb">
              <img src="assets/images/shop/shop-1.png" alt="shop" />
            </div>
            <div className="xs-shop-inner">
              <a href="#" className="btn btn-primary">Buy Now</a>
              <div className="xs-badge-wraper">
                <span className="xs-price-badge">$75</span>
              </div>
              <h3><a href="#">Multi Vitamins</a></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="xs-shop">
            <div className="xs-shop-thumb">
              <img src="assets/images/shop/shop-2.png" alt="shop" />
            </div>
            <div className="xs-shop-inner">
              <a href="#" className="btn btn-primary">Buy Now</a>
              <div className="xs-badge-wraper">
                <span className="xs-price-badge">$75</span>
              </div>
              <h3><a href="#">Protien ATHLETIC</a></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="xs-shop">
            <div className="xs-shop-thumb">
              <img src="assets/images/shop/shop-3.png" alt="shop" />
            </div>
            <div className="xs-shop-inner">
              <a href="#" className="btn btn-primary">Buy Now</a>
              <div className="xs-badge-wraper">
                <span className="xs-price-badge">$75</span>
              </div>
              <h3><a href="#">Suppolement Caps</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* <section className="position-relative xs-section-padding xs-bg-cover parallaxie" style={{backgroundImage: 'url(assets/images/testimonial/testimonial_img.jpg)'}} data-scrollax-parent="true">
    <div className="xs-testimonial-wraper">
      <div className="xs-shape xs-testimonial-shape" style={{backgroundImage: 'url(assets/images/shape/dot-2.png)'}} data-scrollax="properties: { translateY: '250px' }" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="xs-section-heading text-center">
            <h2>Success <span>Stories</span></h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="owl-carousel owl-theme xs-testimonial-owl">
            <div className="item">
              <i className="icon icon-quote" />
              <p>World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance</p>
              <div className="xs-testimonial-profile clearfix">
                <div className="xs-profile-thumb">
                  <img src="assets/images/testimonial/testimonial-profile-2.png" className="rounded-circle" alt="testimonial" />
                </div>
                <div className="xs-profile-info">
                  <h3>David William</h3>
                  <p>Yoga Trainer</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="icon icon-quote" />
              <p>World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance</p>
              <div className="xs-testimonial-profile clearfix">
                <div className="xs-profile-thumb">
                  <img src="assets/images/testimonial/testimonial-profile-3.png" className="rounded-circle" alt="testimonial" />
                </div>
                <div className="xs-profile-info">
                  <h3>William Mill</h3>
                  <p>Body Building Trainer</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="icon icon-quote" />
              <p>World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance</p>
              <div className="xs-testimonial-profile clearfix">
                <div className="xs-profile-thumb">
                  <img src="assets/images/testimonial/testimonial-profile-1.png" className="rounded-circle" alt="testimonial" />
                </div>
                <div className="xs-profile-info">
                  <h3>Stive Mark</h3>
                  <p>Yoga Trainer</p>
                </div>
              </div>
            </div>
            <div className="item">
              <i className="icon icon-quote" />
              <p>World is committed to making participa in the event that rassment free experience for every, regardless level of experienc, gender identity.and expression orientation, disability by the personal appearance</p>
              <div className="xs-testimonial-profile clearfix">
                <div className="xs-profile-thumb">
                  <img src="assets/images/testimonial/testimonial-profile-2.png" className="rounded-circle" alt="testimonial" />
                </div>
                <div className="xs-profile-info">
                  <h3>David William</h3>
                  <p>Yoga Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <div className="xs-purple-bg xs-section-padding-xs">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="owl-carousel owl-theme xs-brand-owl">
            <div className="item">
              <img src="assets/images/brand/brand1.png" alt="brand" />
            </div>
            <div className="item">
              <img src="assets/images/brand/brand2.png" alt="brand" />
            </div>
            <div className="item">
              <img src="assets/images/brand/brand3.png" alt="brand" />
            </div>
            <div className="item">
              <img src="assets/images/brand/brand4.png" alt="brand" />
            </div>
            <div className="item">
              <img src="assets/images/brand/brand5.png" alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
    </>
  )
}

export default HomePage