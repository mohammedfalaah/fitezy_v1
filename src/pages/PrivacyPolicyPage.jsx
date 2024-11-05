import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <>
   <div> 
  <section className="xs-bg-cover" style={{backgroundImage: 'url(assets/images/banner/banner-testimonials.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="xs-banner-area">
            <h3 className="xs-banner-title"> PRIVACY <span>POLICY</span></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="xs-pt-xs xs-pb-sm">
    <div className="container">
      <div className="xs-bmi xs-bmi-light">
        <div className="row">
         
          <div className="col-lg-12 col-md-12">
          <div className=" mt-30 md-mb-40">
                      <h6 style={{fontSize:'14px'}}>
                         Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our app and website. By using FitEzy, you agree to the collection and use of your data in accordance with this policy.
                      </h6>
                    </div>

          
          </div>
        </div>
        <div className="row">
              <div className="col-lg-12 mt-40">
                <ul>
                  <li style={{ listStyle: "none", fontWeight: "bold",marginTop:'25px' }}>
                    Information we collect :
                  </li>
                  <br />
                  <li>
                  When you register with FitEzy as a gym owner or a member, we may collect information such as your name, contact information, email address, payment details, and other data necessary to create your account. <br />
                  Usage Data, We collect information on how you interact with our platform, including app usage, page views, clicks, and location-based data (if enabled). <br />
Device Information, FitEzy may collect data from your device, such as IP addresses, device type, operating system, and app settings to improve performance and troubleshoot issues.
                  </li>
                  <br />
                  <li
                    style={{
                      listStyle: "none",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    How we use your information :
                  </li>
                  <br />
                  To Provide Services We use your data to manage memberships, track credit usage, process payments, and facilitate cross-gym access.
To Improve Our Platform Data analytics help us understand usage patterns, improve app performance, and enhance features.
To Communicate FitEzy may send updates, notifications, promotions, or important service information via email or app notifications.
For Security We use your information to detect and prevent fraud, unauthorized access, and other potential security threats.
                
                  <br />
                  <li style={{ listStyle: "none", fontWeight: "bold" }}>
                    Security :
                  </li>
                  <br />
                  <li>
                  We prioritize your data security and use industry-standard measures to protect your information from unauthorized access, loss, or misuse. However, please note that no online transmission is fully secure, and we cannot guarantee complete security.
                  </li>
                  <br />
             
                  
                 
                </ul>
              </div>
            </div>
      </div>
    </div>
  </section>
  
</div>



    </>
  )
}

export default PrivacyPolicyPage