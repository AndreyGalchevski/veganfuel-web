import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <footer className="blue z-depth-1">
        <div className="center">
          <a
            href="https://play.google.com/store/apps/details?id=andreygalchevski.veganfuel&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google-play" />
          </a>

          <a
            href="https://itunes.apple.com/us/app/veganfuel/id1275882059?mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-app-store-ios" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
