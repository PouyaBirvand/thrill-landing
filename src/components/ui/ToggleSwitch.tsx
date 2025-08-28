"use client"
import { useState } from "react"

interface AccurateToggleSwitchProps {
  onToggle?: (isOn: boolean) => void
}

export default function AccurateToggleSwitch({ onToggle }: AccurateToggleSwitchProps) {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    const newState = !isOn
    setIsOn(newState)
    onToggle?.(newState)
  }

  return (
    <div className="">
      <style jsx>{`
          .accurate-toggle {
            position: relative;
            width: 60px;
            height: 30px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
  
          .toggle-ring {
            position: absolute;
            inset: 0;
            border-radius: 15px;
            background: ${
              isOn
                ? "conic-gradient(from 0deg, #34d399, #6ee7b7, #a7f3d0, #6ee7b7, #34d399)"
                : "conic-gradient(from 0deg, #10b981, #34d399, #6ee7b7, #34d399, #10b981)"
            };
            padding: 2px;

          }
  
          .toggle-body {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 13px;
            background: ${
              isOn
                ? `linear-gradient(135deg, #10b981 0%, #10b981 50%, #10b981 100%)`
                : `linear-gradient(365deg, #10b981 20%, #10b981 50%, #10b981 100%)`
            };
            
            box-shadow: 
              inset 0 7px 4px rgba(0, 0, 0, 0.3),
              inset 0 0 200px rgba(255, 255, 255, 0.1),
              inset 2px -7px 4px rgba(0, 0, 0, 0.2),
              inset 0 0 2px rgba(0, 0, 0, 0.2);
          }
  
          .toggle-thumb {
            position: absolute;
            top: 3px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            left: ${isOn ? "calc(100% - 27px)" : "3px"};
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background-image: url('/thumb.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
  
          .accurate-toggle:hover .toggle-thumb {
            transform: scale(1.05);
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          }
  
          .accurate-toggle:active {
            transform: scale(0.97);
          }
        `}</style>

      <div>
        <div onClick={toggleSwitch} className="accurate-toggle">
          <div className="toggle-ring">
            <div className="toggle-body"></div>
          </div>
          <div className="toggle-thumb"></div>
        </div>
      </div>
    </div>
  )
}