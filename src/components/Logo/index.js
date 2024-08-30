import React from 'react'
import './index.css'

const Logo = () => {
  return (
    <div className="container">
      <div className="diamond">
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
        <div className="text-container">
          <h1>
            HTML<span className="and">&</span>CSS
          </h1>
          <p>design and build websites</p>
        </div>
      </div>
    </div>
  )
}

export default Logo
