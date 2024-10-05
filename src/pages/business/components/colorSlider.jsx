
import React from 'react'

export default function SliderComponent() {
  return (
    <div className="color-palette-container">
      <header className="palette-header">
        <div className="header-left">
          <div className="logo-circle"></div>
          <span className="platform-number">6</span>
          <span className="platform-label">Platform</span>
          <span className="panel-label">Panel No.1</span>
        </div>
        <div className="header-right">
          <div className="theme-toggle"></div>
          <div className="user-avatar"></div>
        </div>
      </header>

      <section className="idea-colors-section">
        <h2 className="section-title">Your Idea Colors</h2>
        <div className="brand-logos-container">
          <button className="nav-arrow nav-arrow-left">&lt;</button>
          <div className="brand-logos">
            {['FedEx', 'Monday', 'Pampers'].map((brand) => (
              <div key={brand} className="brand-logo">
                <div className="logo-placeholder"></div>
                <span className="brand-name">{brand}</span>
              </div>
            ))}
          </div>
          <button className="nav-arrow nav-arrow-right">&gt;</button>
        </div>
      </section>

      <section className="your-logo-section">
        <div className="logo-placeholder large">
          <span>Your Logo</span>
        </div>
      </section>

      <section className="color-combinations-section">
        <div className="color-combinations-container">
          <button className="nav-arrow nav-arrow-left">&lt;</button>
          <div className="color-combinations">
            {[1, 2, 3].map((i) => (
              <div key={i} className="color-combination">
                <span>Your Logo</span>
              </div>
            ))}
          </div>
          <button className="nav-arrow nav-arrow-right">&gt;</button>
        </div>
      </section>
    </div>
  )
}