import React from 'react';

const AccessibilityHelpCenter = () => {
  return (
    <div className="accessibility-help-center">
      <h1>Accessibility Help Center</h1>
      <div className="help-center-content">
        <section className="accessibility-section">
          <h2>Accessibility Features</h2>
          <p>Our job portal is designed to be accessible to all users. Here are some of the features we offer:</p>
          <ul>
            <li>Screen reader compatibility</li>
            <li>Keyboard navigation</li>
            <li>Text resizing options</li>
            <li>Color contrast adjustments</li>
            <li>Alternative text for images</li>
          </ul>
        </section>
        
        <section className="accessibility-section">
          <h2>Accessibility Settings</h2>
          <p>Customize your experience with these accessibility options:</p>
          <div className="settings-controls">
            <div className="setting">
              <label htmlFor="fontSize">Text Size:</label>
              <select id="fontSize" name="fontSize">
                <option value="small">Small</option>
                <option value="medium" selected>Medium</option>
                <option value="large">Large</option>
                <option value="x-large">Extra Large</option>
              </select>
            </div>
            <div className="setting">
              <label htmlFor="contrast">Color Contrast:</label>
              <select id="contrast" name="contrast">
                <option value="standard" selected>Standard</option>
                <option value="high">High Contrast</option>
              </select>
            </div>
          </div>
        </section>
        
        <section className="accessibility-section">
          <h2>Need Additional Help?</h2>
          <p>Contact our support team for assistance with accessibility features:</p>
          <button className="contact-btn">Contact Support</button>
        </section>
      </div>
    </div>
  );
};

export default AccessibilityHelpCenter;
