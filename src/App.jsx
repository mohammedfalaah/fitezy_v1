import Helmet from "helmet"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { BasePath, PrivacyPolicyPagePath, TermsConditionPagePath } from "./utils/Constants"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsConditionPage from "./pages/TermsConditionPage"


function App() {

  return (
    <>
<Routes>
  <Route path={BasePath} element={<HomePage />} />
  <Route path={PrivacyPolicyPagePath} element={<PrivacyPolicyPage />} />
  <Route path={TermsConditionPagePath} element={<TermsConditionPage />}/>
</Routes>


<Helmet>
<script data-cfasync="false" src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
<script src="assets/js/jquery-3.2.1.min.js"></script>
<script src="assets/js/Popper.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/owl.carousel.min.js"></script>
<script src="assets/js/jquery.ajaxchimp.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/plugins.js"></script>
<script src="assets/js/bmi.js"></script>
<script src="assets/js/comparison.js"></script>
<script src="assets/js/jquery.waypoints.min.js"></script>
<script src="assets/js/menu.js"></script>
<script src="assets/js/nav-tool.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3&amp;key=AIzaSyBOQMDDOsJA0uHTqXTDHUogDJfaTST7hNQ"></script>
<script src="assets/js/scrollax.js"></script>
<script src="assets/js/TweenMax.min.js"></script>
<script src="assets/js/parallaxie.js"></script>
<script src="assets/js/vivus.min.js"></script>
<script src="assets/js/main.js"></script> 
  
</Helmet>
    
    </>
  )
}

export default App
