import React from "react";
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
                <text className="footer-navigation-header">Oldcord-related</text>
                <text className="footer-navigation-link">Download</text>
                <text className="footer-navigation-link">Branding Guidelines</text>
            </div>
            <div className="footer-navigation-section">
                <text className="footer-navigation-header">Advanced users</text>
                <text className="footer-navigation-link">Bot Portal</text>
                <text className="footer-navigation-link">API Documentation</text>
            </div>
            <div className="footer-navigation-section">
                <text className="footer-navigation-header">Resources</text>
                <text className="footer-navigation-link">Terms</text>
                <text className="footer-navigation-link">Privacy</text>
                <text className="footer-navigation-link">Instance Guidelines</text>
                <text className="footer-navigation-link">Instance Status</text>
            </div>
            <div className="footer-navigation-section">
                <text className="footer-navigation-header">More</text>
                <text className="footer-navigation-link">Reimplementaion progress</text>
            </div>
        </div>
        <hr />
        <div className="upsell">
            <div className="upsell-text">
                <text className="upsell-text-title">What are you waiting for?</text>
                <text className="upsell-text-subtitle">Use Oldcord now!</text>
            </div>
            <text className="button button-hurple">Get Started</text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
