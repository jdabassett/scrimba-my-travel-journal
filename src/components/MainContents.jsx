import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function MainContents() {
  return (
    <div className="main-contents-container">
          < FontAwesomeIcon icon={faLocationDot} className="main-pin"/>
    </div>
  
  );
}