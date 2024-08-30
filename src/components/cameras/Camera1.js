import React from 'react';

function Camera1() {
  const esp32Ip = process.env.REACT_APP_CAMERA_1_URL;

  return (
      <div>
          <img
              src={`${esp32Ip}`}
              alt="ESP32-CAM Stream"
              style={{width: '100%', height: 'auto'}}
          />
      </div>
)
    ;
}

export default Camera1;