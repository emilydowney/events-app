import React from "react";
import './WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="login">
          <h2>Welcome to Event Finder</h2>
          <h5>Log in to see upcoming events around the<br /> world for full-stack developers.</h5>
          <div className="button_cont" align="center">
            <div class="google-btn">
              <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
              </div>
              <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="login-btn-text" >
                <b>Sign in with google</b>
              </button>
            </div>
          </div>
          <a href="https://emilydowney.github.io/events-app/privacy.html" rel="nofollow noopener">Privacy policy</a>
          <a href="https://www.vecteezy.com/free-vector/location">Location Vectors by Vecteezy</a>
        </div>
      </div>
    )
    : null
}
export default WelcomeScreen;