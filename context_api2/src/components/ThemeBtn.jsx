import React from 'react';
import './ThemeBtn.css';

function ThemeBtn() {
    return (
        <label className="theme-toggle">
            <input type="checkbox" className="sr-only" />
            <div className="toggle-switch">
                <div className="toggle-knob"></div>
            </div>
            <span className="toggle-label">Toggle Theme</span>
        </label>
    );
}

export default ThemeBtn;

