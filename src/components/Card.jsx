import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

// id:1,
// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: 
// startDate: "01 Jan, 2025",
// endDate: "02 Jan, 2025",
// description: 
// imageUrl: 

export default function Card(props) {
  return (
    <div className="main-contents-container">
          <img className="card-img" src={props.item.imageUrl} alt={`{props.item.imageUrl}+"did not load"`} width="200px"/>
        

          <div className="card-location-container">

            <div className="card-icon-location">
              < FontAwesomeIcon icon={faLocationDot} className="main-pin"/>
              <h2 className="card-icon-title">{props.item.location}</h2>
              <a className="card-map" href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>

            <h2 className="card-title">{props.item.title}</h2>
            <h3 className="card-dates">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
            <p className="card-paragraph">{props.item.description}</p>
          </div>
    </div>
  
  );
}