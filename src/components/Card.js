import React from 'react';

function Card(props) {
    return (
        <div className="container">
            <img src={props.imageUrl} alt="" className="card--img" />
            <div className="data">
                <div className="info-row">
                    <img src="assets/spot.png" alt="" />
                    <h4>{props.location.toUpperCase()}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h5>
                    {props.startDate} - {props.endDate}
                </h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Card;
