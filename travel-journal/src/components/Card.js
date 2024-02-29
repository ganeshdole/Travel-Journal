import React from "react";
import "./Card.css";
export default function card(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.place;

  return (
    <div className="place-card">
      <img className="place-image" src={imageUrl} alt={title} />
      <p className="Place-location">
        📍{location}{" "}
        <a className="place-googlemap" href={googleMapsUrl}>
          View on Google map
        </a>
      </p>
      <h2 className="place-title">{title}</h2>
      <p className="place-date">
        {startDate} - {endDate}
      </p>
      <p className="place-about">{description}</p>
    </div>
  );
}
