import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <FontAwesomeIcon icon={faEarthAmericas} className="earth-americas" />
      <h1 className="navbar-title">my imaginary travel journal</h1>
    </div>
  );
}
