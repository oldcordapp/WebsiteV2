import { ReactComponent as Hurple } from "../assets/hurple.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-navigation">
          <div>
            <Hurple className="footer-logo" />
          </div>
          <div className="footer-navigation-section">
            <span className="footer-navigation-header">Oldcord-related</span>
            <span className="footer-navigation-link">Download</span>
            <span className="footer-navigation-link">Branding Guidelines</span>
          </div>
          <div className="footer-navigation-section">
            <span className="footer-navigation-header">Advanced users</span>
            <span className="footer-navigation-link">Bot Portal</span>
            <span className="footer-navigation-link">API Documentation</span>
          </div>
          <div className="footer-navigation-section">
            <span className="footer-navigation-header">Resources</span>
            <span className="footer-navigation-link">Terms</span>
            <span className="footer-navigation-link">Privacy</span>
            <span className="footer-navigation-link">Instance Guidelines</span>
            <span className="footer-navigation-link">Instance Status</span>
          </div>
          <div className="footer-navigation-section">
            <span className="footer-navigation-header">More</span>
            <span className="footer-navigation-link">
              Reimplementaion progress
            </span>
          </div>
        </div>
        <hr />
        <div className="upsell">
          <div className="upsell-text">
            <span className="upsell-text-title">What are you waiting for?</span>
            <span className="upsell-text-subtitle">Use Oldcord now!</span>
          </div>
          <span className="button button-hurple">Get Started</span>
        </div>
        <span className="footer-notice">
          Oldcord is an old Discord revival project and is not affiliated or
          endorsed by Discord, Inc. Do not login with your Discord account. This
          website is made from scratch and does not use any code from Discord in any way.
        </span>
      </div>
    </div>
  );
};

export default Footer;
