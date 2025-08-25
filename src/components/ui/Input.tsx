'use client'
import { useState } from "react";

export default function AccurateToggleSwitch() {
    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
    return (
      <div>
        <style jsx>{`
          .accurate-toggle {
            position: relative;
            width: 84px;
            height: 42px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
  
          .toggle-ring {
            position: absolute;
            inset: 0;
            border-radius: 21px;
            background: ${isOn 
              ? 'conic-gradient(from 0deg, #34d399, #6ee7b7, #a7f3d0, #6ee7b7, #34d399)' 
              : 'conic-gradient(from 0deg, #10b981, #34d399, #6ee7b7, #34d399, #10b981)'
            };
            padding: 2px;
            box-shadow: 
              0 0 15px ${isOn ? 'rgba(52, 211, 153, 0.6)' : 'rgba(16, 185, 129, 0.4)'},
              0 4px 20px rgba(0, 0, 0, 0.2);
          }
  
          .toggle-body {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 19px;
            /* روشن‌تر کردن رنگ‌ها */
            background: ${isOn 
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
            top: 4px;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            left: ${isOn ? 'calc(100% - 38px)' : '4px'};
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            
            background: radial-gradient(ellipse at 30% 20%, #333333 0%, #1a1a1a 50%, #1A1A1A 100%);
            
            box-shadow: 
              0 3px 8px rgba(0, 0, 0, 0.6),
              inset 0 1px 2px rgba(0, 0, 0, 0.4),
              inset 0 -1px 1px rgba(255, 255, 255, 0.1);
          }
  
          .accurate-toggle:hover .toggle-ring {
            background: ${isOn 
              ? 'conic-gradient(from 0deg, #6ee7b7, #a7f3d0, #d1fae5, #a7f3d0, #6ee7b7)' 
              : 'conic-gradient(from 0deg, #34d399, #6ee7b7, #a7f3d0, #6ee7b7, #34d399)'
            };
            box-shadow: 
              0 0 20px ${isOn ? 'rgba(110, 231, 183, 0.7)' : 'rgba(52, 211, 153, 0.6)'},
              0 6px 25px rgba(0, 0, 0, 0.3);
          }
  
          .accurate-toggle:hover .toggle-thumb::before {
            background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.7) 80%, transparent 100%);
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.4);
          }
  
          .accurate-toggle:hover .toggle-thumb::after {
            background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.5) 80%, transparent 100%);
            box-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
          }
  
          .accurate-toggle:active {
            transform: scale(0.97);
          }
        `}</style>
        
        <div>
          <div 
            onClick={toggleSwitch}
            className="accurate-toggle"
          >
            <div className="toggle-ring">
              <div className="toggle-body"></div>
            </div>
            <div className="toggle-thumb"></div>
          </div>
          
          {/* <div className="text-center mt-8">
            <span className={`text-lg font-medium tracking-wider ${isOn ? 'text-emerald-300' : 'text-emerald-500'}`}>
              {isOn ? 'ON' : 'OFF'}
            </span>
          </div> */}
        </div>
      </div>
    );
  }