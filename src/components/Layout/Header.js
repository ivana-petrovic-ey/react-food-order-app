import React from "react";
import "./Header.css"

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <h1>Food Ordering App</h1>
          <button>
              <span className="cart-svg">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>cart</title><path d="M.07,256C.07,114.65,114.65.05,256,.05S511.94,114.66,511.93,256,397.34,511.95,256,511.95.05,397.35.07,256Z" fill="#01a601"/><polygon points="322.97 233.1 267.47 233.1 264.27 271.96 312.79 271.96 322.97 233.1" fill="#fff"/><polygon points="148.12 279.45 154.25 302.8 197.22 302.8 195.29 279.45 148.12 279.45" fill="#fff"/><polygon points="190.86 225.6 188.77 200.24 127.36 200.24 134.01 225.6 190.86 225.6" fill="#fff"/><polygon points="259.96 233.1 198.99 233.1 202.2 271.96 256.75 271.96 259.96 233.1" fill="#fff"/><polygon points="135.97 233.1 146.16 271.96 194.68 271.96 191.48 233.1 135.97 233.1" fill="#fff"/><polygon points="198.38 225.6 260.57 225.6 262.67 200.24 196.28 200.24 198.38 225.6" fill="#fff"/><path d="M343.17,164.16a12,12,0,0,0-2.78,2.09l-30.46,30.49a11.82,11.82,0,0,0-2.44,3.5H270.18l-2.09,25.36h56.85l4.3-16.37q12.14-12.17,24.3-24.34h20.23c14.49,0,14.49-22.48,0-22.48H349.29A10.83,10.83,0,0,0,343.17,164.16Z" fill="#fff"/><polygon points="261.72 302.8 304.71 302.8 310.82 279.45 263.65 279.45 261.72 302.8" fill="#fff"/><polygon points="254.21 302.8 256.14 279.45 202.82 279.45 204.75 302.8 254.21 302.8" fill="#fff"/><path d="M176.94,310a19.81,19.81,0,1,1-19.81,19.81A19.81,19.81,0,0,1,176.94,310Z" fill="#fff"/><path d="M282,310a19.81,19.81,0,1,1-19.81,19.81A19.81,19.81,0,0,1,282,310Z" fill="#fff"/></svg>
              </span>
              <span className="cart-text">Your Cart:</span>
              <span className="cart-number">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
